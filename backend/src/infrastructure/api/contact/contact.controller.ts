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
import { ContactInputDTO } from './contact.dto';

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
  @Response('400', 'Invalid input')
  @Response('500', 'Internal server error')
  async sendEmail(@Body() requestBody: ContactInputDTO): Promise<void> {
    const result = ContactInputDTO.safeParse(requestBody);

    if (!result.success) {
      const zodErrorMessage = result.error.errors[0].message;
      throw new InvalidInputError(zodErrorMessage);
    }

    throw new Error('An error occured while sending the email');
    // try {
    //   sentEmail(result.data);
    // } catch (error) {
    //   throw new Error('An error occured while sending the email');
    // }
  }
}
