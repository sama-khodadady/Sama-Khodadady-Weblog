import toast from "react-hot-toast";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/quries";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  // console.log({ loading, data, error });

  if (loading) return <Loader />;
  if (error) return toast.error("مشکلی پیش آمده است لطفا دوباره تلاش کنید!");

  return (
    <Grid container spacing={2}>
      {data?.posts?.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
