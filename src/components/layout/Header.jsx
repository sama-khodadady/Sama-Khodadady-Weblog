import BookIcon from "@mui/icons-material/Book";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <header>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              وبلاگ
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
