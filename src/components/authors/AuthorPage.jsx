import toast from "react-hot-toast";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/quries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log({ loading, data, error });
  if (loading) return <Loader />;
  if (error) return toast.error("مشکلی پیش آمده است لطفا دوباره تلاش کنید!");

  const {
    author: { name, field, avatar, post, description },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar?.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" mt={4} fontWeight={700}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description?.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {post?.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
