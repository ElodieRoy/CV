import {
  Controller,
  Get,
  Response,
  Route,
  SuccessResponse,
  Tags
} from 'tsoa';

@Route('download')
export class DownloadController extends Controller {
  constructor() {
    super();
  }

  /**
  * @summary: Get pdf cv
  */
  @Get()
  @Tags('Download')
  @SuccessResponse('200', 'CV downloaded')
  @Response('500', 'Internal server error')
  async getCV(): Promise<void> {
    try {
      console.log("test CV")
      // let data = await getData();
      // let body = await generateXML(data);
      // return xml(body);
    } catch (error) {
      console.error(error);
      throw new Error('An error occured while downloding');
    }
  }
}