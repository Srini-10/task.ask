import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./IllustrationNEP.tsx";
import classes from "./NetworkErrorPage.module.css";
import "./NetworkErrorPage.css";
import React from "react";

function NotSupportedPage() {
  return (
    <div className="NSP max-w-[90%] mx-auto mt-[140px]">
      <Container className={classes.root}>
        <div className={classes.inner}>
          <div className="">
            <Illustration className={classes.image} />
          </div>
          <div className={classes.content}>
            <div className="NSP_Contents mt-[210px] mx-auto w-full px-auto absolute">
              <Title className={classes.title} id="NSP-title">
                Network Error!
              </Title>
              <Text
                c="dimmed"
                size="lg"
                ta="center"
                className={classes.description}
                id="NSP-description"
              >
                There was a problem connecting to the network. Please try
                refreshing the page.
              </Text>
              <Group justify="center">
                <Button
                  size="md"
                  color="#238be6"
                  className="bg-emerald-400"
                  onClick={() => window.location.reload()}
                >
                  Reload
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NotSupportedPage;
