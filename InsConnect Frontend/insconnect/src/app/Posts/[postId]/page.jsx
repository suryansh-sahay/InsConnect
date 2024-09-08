import { useRouter } from 'next/navigation';
import Post from '../../components/Post';
import axios from 'axios';

const PostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return <Post post={post} />;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const postId = params.postId;

  const apiUrl = `http://localhost:4000/post/${postId}`;

  try {
    const response = await axios.get(apiUrl);
    const post = response.data;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);

    return {
      notFound: true,
    };
  }
}

export default PostPage;