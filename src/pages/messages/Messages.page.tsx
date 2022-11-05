import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MessageComponent from "../../components/Message.component";
import { ContactModel } from "../../models/Contact.model";
import ContactService from "../../services/Contact.service";
import { LottieLoading } from "../../_stories/Advella/components/Loading.stories";

function MessagesPage() {
  const [cookie,,] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(true);

  const [messages, setMessages] = useState<ContactModel[]>([]);

  useEffect(() => {
    const contactService: ContactService = new ContactService();

    contactService.getAllMessages(cookie.token).then(res => {
      setMessages(res);
      setIsLoading(false);
    });

    contactService.setAllMessagesAsRead(cookie.token);
  },[]);

  const handleRemove = (messageId: number) => {
    const contactService: ContactService = new ContactService();

    contactService.removeMessage(messageId, cookie.token).then(() => {
      contactService.getAllMessages(cookie.token).then(res => {
        setMessages(res)
      });
    })
  }

  if(isLoading)
    return <LottieLoading open={isLoading} />

  return (
    <Grid container spacing={2}>
      {messages.map(m => <Grid key={m.contactId} item md={6} lg={4}>
        <MessageComponent
          messageId={m.contactId}
          user={{
            userId: m.contactUser.userId,
            username: m.contactUser.username,
          }}
          date={m.messageDateTime}
          message={m.content}
          handleRemove={handleRemove}
        />
      </Grid>
      )}
    </Grid>
  );
}

export default MessagesPage;
