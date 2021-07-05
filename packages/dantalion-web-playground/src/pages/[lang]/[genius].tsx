import { Genius, types } from '@kurone-kito/dantalion-core';
import { locales } from '@kurone-kito/dantalion-i18n';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Template } from '../../components/templates/Template';
import type { PageProps } from '../_app';

/** Type definition of the required attributes. */
export type Query = {
  /** Specifies the genius type. */
  readonly genius?: Genius;
  /** Specifies the language of this page. */
  readonly lang?: string;
};

/** The index page component */
const Page: NextPage<PageProps> = ({ genius }) =>
  useRouter().isFallback ? <>Loading...</> : <Template inner={genius} />;
Page.displayName = '[lang]';

/**
 * Determine the attributes to assign to each path.
 * @param context The context.
 */
export const getStaticProps: GetStaticProps<PageProps, Query> = async ({
  params,
}) => ({ props: params ?? {} });

/** Determine the path to pre-render based on the data. */
export const getStaticPaths: GetStaticPaths<Query> = async () => ({
  fallback: false,
  paths: Object.keys(locales).flatMap((lang) =>
    types.genius.map((genius) => ({ params: { genius, lang } }))
  ),
});

export default Page;
