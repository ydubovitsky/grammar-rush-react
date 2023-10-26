import EmailIconAtomicComponent from '../../atomic-components/email-icon/email-icon.atomic-component';
import GithubIconAtomicComponent from '../../atomic-components/github-icon/github-icon.atomic-component';
import SkypeIconAtomicComponent from '../../atomic-components/skype-icon/skype-icon.atomic-component';
import TgIconAtomicComponent from '../../atomic-components/tg-icon/tg-icon.atomic-component';
import TwitterIconAtomicComponent from '../../atomic-components/twitter-icon/twitter-icon.atomic-component';

type SocialIconsListComponentProps = {
  iconSize?: number | string
}

const SocialIconsListComponent : React.FC<SocialIconsListComponentProps> = ({ iconSize }) : JSX.Element=> {
  return (
    <>
      <TwitterIconAtomicComponent size={iconSize} />
      <SkypeIconAtomicComponent size={iconSize} />
      <TgIconAtomicComponent size={iconSize} />
      <EmailIconAtomicComponent size={iconSize} />
      <GithubIconAtomicComponent size={iconSize} />
    </>
  )
}

export default SocialIconsListComponent;