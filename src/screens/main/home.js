import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Search from '../../components/search/search';

export default ((props) =>  {
  return (
    <main>
      <Container fixed>
      <Typography variant="h4">Bem vindo ao Lista Rango</Typography>
      <Search/>
      </Container>
    </main>
  );
});
