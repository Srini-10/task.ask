import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./IllustrationEP.tsx";
import classes from "./ErrorPage.module.css";
import "./ErrorPage.css";
import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="Error_Page mt-[200px]">
      <Container className={classes.root}>
        <div className={classes.inner}>
          <div className="">
            <Illustration className={classes.image} />
          </div>
          <div className={classes.content}>
            <div className="Error_Page_Contents mt-[200px] absolute">
              <Title className={classes.title} id="error-page-title">
                Nothing to see here
              </Title>
              <Text
                c="dimmed"
                size="lg"
                ta="center"
                className={classes.description}
                id="error-page-description"
              >
                Page you are trying to open does not exist. You may have
                mistyped the address, or the page has been moved to another URL.
                If you think this is an error contact support.
              </Text>
              <Group justify="center">
                <Link to="/">
                  <Button size="md" color="#238be6" className="bg-emerald-400">
                    Back to Home Page
                  </Button>
                </Link>
              </Group>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ErrorPage;
