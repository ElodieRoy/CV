import {
  Body,
  Controller,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { InvalidInputError } from '../error-handler';
import { ContactInputDTO, contactInputDTO } from './contact.dto';
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
  @SuccessResponse(200, 'Email sent')
  @Response(400, 'Invalid input')
  @Response(500, 'Internal server error')
  async sendEmail(@Body() requestBody: ContactInputDTO): Promise<void> {
    const result = contactInputDTO.safeParse(requestBody);

    if (!result.success) {
      const zodErrorMessage = result.error.errors[0].message;
      throw new InvalidInputError(zodErrorMessage);
    }

    try {
      await sentEmail(result.data);
    } catch (error) {
      console.error(error);
      throw new Error('An error occured while sending the email');
    }
  }
}
