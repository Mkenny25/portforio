import { 
  SiGithub,
  SiTwitter 
} from 'react-icons/si';

const Snslink = () => {
  return (
    <>
    <div>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer" >
        <SiGithub size={30} color={'#181717'} />
      </a>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
        <SiTwitter size={30} color={'#1DA1F2'} />
      </a>
    </div>
    </>
  );
};
export default Snslink;