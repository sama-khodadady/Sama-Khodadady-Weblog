import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import Comments from "../comment/Comments";
import { useQuery } from "@apollo/client";
import CommentForm from "../comment/CommentForm";
import { GET_BLOG_INFO } from "../../graphql/quries";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  // console.log({ loading, data, error });

  if (loading) return <Loader />;
  if (error) return toast.error("مشکلی پیش آمده است لطفا دوباره تلاش کنید!");

  const {
    post: { author, content, title, coverPhoto, slug: postSlug },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={postSlug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
