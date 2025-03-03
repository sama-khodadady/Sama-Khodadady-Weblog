import React from "react";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/quries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  // console.log({ loading, data, error });

  if (loading) return <Loader />;
  if (error) return toast.error("مشکلی پیش آمده است لطفا دوباره تلاش کنید!");

  const { authors } = data;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
