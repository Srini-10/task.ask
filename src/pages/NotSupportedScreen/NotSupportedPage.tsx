import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./IllustrationNSP.tsx";
import classes from "./NotSupportedScreen.module.css";
import "./NotSupportedScreen.css";
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
            <div className="NSP_Contents mt-[210px] absolute">
              <Title className={classes.title} id="NSP-title">
                Ooops...!
              </Title>
              <Text
                c="dimmed"
                size="lg"
                ta="center"
                className={classes.description}
                id="NSP-description"
              >
                This website is not supported on your device. Please try
                accessing it from a different device or check for compatibility
                updates.
              </Text>
              <Group justify="center">
                <Button size="md" color="#238be6" className="bg-emerald-400">
                  Try again
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
