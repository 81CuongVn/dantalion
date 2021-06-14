import { Personality, toCC } from '@kurone-kito/dantalion-core';
import type { VFC } from 'react';
import { useTranslation } from 'react-i18next';
import PersonalityFileId from '../molecules/PersonalityFileId';

/** Type definition of the required attributes. */
export interface Props {
  /** The details for Personality. */
  readonly personality: Personality;
}

/** The personality file component */
const Component: VFC<Props> = ({ personality }) => {
  const { t } = useTranslation();
  return (
    <PersonalityFileId caption={t('web.result.profile')}>
      {toCC(personality)}
    </PersonalityFileId>
  );
};
Component.displayName = 'PersonalityFileId';

export default Component;