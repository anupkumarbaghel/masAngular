import { environment } from '../environments/environment';

export const ApiEndPoint = {
   indentApiUrl:environment.apiBaseEndPoint+'/indent'
   ,openIndentApiUrl:environment.apiBaseEndPoint+'/indent'+'/openindent'
   ,draftOpenApiUrl:environment.apiBaseEndPoint+'/indent'+'/draftopen'
  
};