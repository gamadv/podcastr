import { useContext } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link';


import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { convertDurationToTimeString } from '../utils';

import api from '../service/api';

import styles from './home.module.scss';
import { PlayerContext } from '../context/PlayerContext';

interface IEpisode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}
interface IHomeProps {
  latestEpisodes: IEpisode[];
  allEpisodes: IEpisode[];
}

export default function Home({ latestEpisodes, allEpisodes }: IHomeProps) {
  const { playList } = useContext(PlayerContext);

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map((item, index) => {
            return (
              <li key={item.id}>
                <Image
                  width={192}
                  height={192}
                  src={item.thumbnail}
                  alt={item.title}
                  objectFit="cover"
                />

                <div className={styles.episodeDetails}>
                  <Link href={`/episode/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                  <p>{item.members}</p>
                  <span>{item.publishedAt}</span>
                  <span>{item.durationAsString}</span>
                </div>

                <button type="button" onClick={() => playList(episodeList, index)}>
                  <img src="/play-green.svg" alt="Play episode" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Todos os episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={item.thumbnail}
                      alt={item.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episode/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </td>
                  <td>{item.members}</td>
                  <td style={{ width: 100 }}>{item.publishedAt}</td>
                  <td>{item.durationAsString}</td>
                  <td>
                    <button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                      <img src="/play-green.svg" alt="Play Podcast" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  });

  const parseEpisodes = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      members: item.members,
      publishedAt: format(parseISO(item.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
      duration: Number(item.file.duration),
      durationAsString: convertDurationToTimeString(Number(item.file.duration)),
      url: item.file.url,
    };
  });

  const latestEpisodes = parseEpisodes.slice(0, 2);
  const allEpisodes = parseEpisodes.slice(2, parseEpisodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};
