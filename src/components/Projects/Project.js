import { Tabs, Container, Text, createStyles, Center, Card, Image, Anchor } from "@mantine/core";
import { other, personal, team } from "./data";

import "./style.css"

const useStyle = createStyles((theme) => ({
  highlight: {
    color: "rgba(122, 209, 221, 1)",
    borderRadius: theme.radius.sm,
    padding: "0px 15px",
    fontSize: 44,
    fontWeight: 500,
    marginTop: "3em",
  },

}));


export function Project() {
  const {classes} = useStyle()

  return (
    <div>
      <Container mb={30} id="pro" size="lg">
        <Center>
          <Text mb={20} className={classes.highlight}>
            Project
          </Text>
        </Center>
        <Tabs color="cyan" variant="pills" radius="md" defaultValue="client">
          <Tabs.List position="center" grow="true">
            <Tabs.Tab value="personal">Personal Project</Tabs.Tab>
            <Tabs.Tab value="client">Clients Project</Tabs.Tab>
            <Tabs.Tab value="team">Team Project</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="personal" pt="xs">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {personal.map((data) => (
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section
                    style={{ cursor: "pointer" }}
                    className="container"
                  >
                    <Anchor href={data.link} target="_blank">
                    <Image
                      src={data.src}
                      className="image"
                      height={200}
                      alt="Norway"
                    />
                    <div className="middle">
                      <Text className="text">{data.desc}</Text>
                    </div>
                    </Anchor>
                  </Card.Section>
                </Card>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="team" pt="xs">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {team.map((data) => (
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section
                    style={{ cursor: "pointer" }}
                    className="container"
                  >
                    <Anchor href={data.link} target="_blank">

                    <Image
                      src={data.src}
                      className="image"
                      height={200}
                      alt="Norway"
                    />
                    <div className="middle">
                      <Text className="text">{data.desc}</Text>
                    </div>
                    </Anchor>
                  </Card.Section>
                </Card>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="client" pt="xs">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {other.map((data) => (
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section
                    style={{ cursor: "pointer" }}
                    className="container"
                  >
                    <Anchor href={data.link} target="_blank">
                      <Image
                        src={data.src}
                        className="image"
                        height={200}
                        alt="Norway"
                      />
                      <div className="middle">
                        <Text className="text">{data.desc}</Text>
                      </div>
                    </Anchor>
                  </Card.Section>
                </Card>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
};