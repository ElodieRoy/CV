import { Body, Controller, Post, Route, SuccessResponse, Tags } from 'tsoa';
import { ContactInputDTO } from './contact.dto';
import { sentEmail } from './contact.service';

@Route('contact')
export class ContactController extends Controller {
  constructor() {
    super();
  }

  /**
   * @summary: Send an email from contact form
   */
  @Post()
  @Tags('Contact')
  @SuccessResponse('200', 'Email sent')
  async sendEmail(@Body() requestBody: ContactInputDTO): Promise<void> {
    const result = ContactInputDTO.safeParse(requestBody);

    if (!result.success) {
      this.setStatus(400);
      const zodErrorMessage = result.error.errors[0].message;
      throw new Error(zodErrorMessage);
    }

    try {
      sentEmail(result.data);
    } catch (error) {
      console.error(error);
      throw new Error('An error occured while sending the email');
    }

  }
}
