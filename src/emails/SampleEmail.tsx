import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  interface AirbnbReviewEmailProps {
    authorName?: string;
    authorEmail?: string;
    reviewText?: string;
  }
  
  export const SampleEmail = ({
    authorName,
    authorEmail,
    reviewText,
  }: AirbnbReviewEmailProps) => {
    const previewText = `Lee el mensaje de ${authorName}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
  
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_k6g_ju7hvTkj628kgaAFjDCY4AmXb11rKzRMfqtxOw&s"
                width="70"
                height="70"
                alt="Trk Logo"
              />
            </Section>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>{authorName}, quiere contactarse con nosotros 👋</Text>
                <Text style={review}>{reviewText}</Text>
                <Text style={paragraph}>
                  Ahora que hemos recibido el mensaje de {authorName}, podemos ponernos en contacto y empezar con las cotizaciones de publicidad.
                </Text>
                <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                  Email de {authorName} : {authorEmail}
                </Text>
  
                <Button style={button} href={`mailto:${authorEmail}`}>
                  Contestar Mensaje!
                </Button>
              </Row>
            </Section>
  
            <Hr style={hr} />
  
            <Section>
              <Row>
                <Text style={footer}>
                &copy; 2024 TRK PUBLICIDAD. Todos los derechos reservados.
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default SampleEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
  };
  
  const userImage = {
    margin: "0 auto",
    marginBottom: "16px",
    borderRadius: "50%",
  };
  
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };
  
  const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
  };
  
  const button = {
    backgroundColor: "#f7ed2e",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
  };
  
  const link = {
    ...paragraph,
    color: "#ff5a5f",
    display: "block",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#9ca299",
    textDecoration: "underline",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#9ca299",
    fontSize: "14px",
    marginBottom: "10px",
  };
  