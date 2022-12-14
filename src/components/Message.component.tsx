import { Card, Grid, IconButton, Link, PaperProps, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import ContactService from "../services/Contact.service";

interface ActionListProps extends PaperProps {
  messageId: number;
  user: { userId: number; username: string };
  date: number;
  message: string;
  handleRemove: (messageId: number) => void;
}

function MessageComponent(props: ActionListProps) {
  const { messageId, handleRemove, user, date: _date, message, elevation = 12, ...rest } = props;
  const date = new Date(_date);

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card {...rest} elevation={elevation}>
        <Grid container p={2}>
          <Grid item xs={11}>
            <Typography variant="h6" fontSize={18}>
              From: <Link href={`/users/${user.userId}`}>{user.username}</Link>
            </Typography>
          </Grid>
          <Grid item xs={1} textAlign="right">
            <IconButton onClick={() => handleRemove(messageId)}>
                <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" fontSize={18}>
              Date: {date.getFullYear()}-{date.getMonth() + 1 < 10 && "0"}
              {date.getMonth() + 1}-{date.getDate() < 10 && "0"}{date.getDate()}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Typography variant="body1" fontSize={14}>
              {message}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
}

export default MessageComponent;
