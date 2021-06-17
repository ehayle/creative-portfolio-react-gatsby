import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import Services from "../sections/others/Services";

const ServicesPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box pt={4}>
          <Services />
        </Box>
      </PageWrapper>
    </>
  );
};

export default ServicesPage;
