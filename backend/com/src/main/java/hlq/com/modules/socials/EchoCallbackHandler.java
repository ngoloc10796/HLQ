package hlq.com.modules.socials;

import static java.lang.String.format;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import com.github.marsbits.restfbmessenger.Messenger;
import com.github.marsbits.restfbmessenger.webhook.AbstractCallbackHandler;
import com.restfb.types.send.IdMessageRecipient;
import com.restfb.types.send.MediaAttachment;
import com.restfb.types.webhook.messaging.CoordinatesItem;
import com.restfb.types.webhook.messaging.MessageItem;
import com.restfb.types.webhook.messaging.MessagingAttachment;
import com.restfb.types.webhook.messaging.MessagingItem;
import org.springframework.stereotype.Component;

/**
 * The Echo {@code CallbackHandler}.
 *
 * @author Marcel Overdijk
 */
@Component
public class EchoCallbackHandler extends AbstractCallbackHandler {

    private static final Logger logger = Logger.getLogger(EchoCallbackHandler.class.getName());

    @Override
    public void onMessage(Messenger messenger, MessagingItem messaging) {

        String senderId = messaging.getSender().getId();
        MessageItem message = messaging.getMessage();

        logger.fine(format("Message received from %s: %s", senderId, message.getText()));

        IdMessageRecipient recipient = new IdMessageRecipient(senderId);

        messenger.send().markSeen(recipient);
        messenger.send().typingOn(recipient);

        sleep(TimeUnit.SECONDS, 1);

        if (message.getText() != null) {
            // Echo the received text message
            messenger.send().textMessage(recipient, format("Echo: %s", message.getText()));
        } else {
            if (message.getAttachments() != null) {
                for (MessagingAttachment attachment : message.getAttachments()) {
                    String type = attachment.getType();
                    if ("location".equals(type)) {
                        // Echo the received location as text message(s)
                        CoordinatesItem coordinates = attachment.getPayload().getCoordinates();
                        Double lat = coordinates.getLat();
                        Double longVal = coordinates.getLongVal();
                        messenger.send().textMessage(recipient, format("Lat: %s", lat));
                        messenger.send().textMessage(recipient, format("Long: %s", longVal));
                    } else {
                        // Echo the attachment
                        String url = attachment.getPayload().getUrl();
                        messenger.send().attachment(recipient,
                                MediaAttachment.Type.valueOf(type.toUpperCase()), url);
                    }
                }
            }
        }

        messenger.send().typingOff(recipient);
    }

    private void sleep(TimeUnit timeUnit, long duration) {
        try {
            timeUnit.sleep(duration);
        } catch (InterruptedException ignore) {
        }
    }
}