import { Grid } from "@mui/material";
import MessageComponent from "../../components/Message.component";

function MessagesPage() {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={1}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={2}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={3}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={4}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={5}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
      <Grid item md={6} lg={4}>
        <MessageComponent
          messageId={6}
          user={{
            userId: 1,
            username: "Seymore",
          }}
          date={Date.now()}
          message="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
    </Grid>
  );
}

export default MessagesPage;
