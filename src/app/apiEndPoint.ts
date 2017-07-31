import { environment } from '../environments/environment';

export const ApiEndPoint = {
   indentApiUrl:environment.apiBaseEndPoint+'/indent'
   ,openIndentApiUrl:environment.apiBaseEndPoint+'/indent'+'/openindent'
   ,selectedIndentApiUrl:environment.apiBaseEndPoint+'/indent'+'/getindent?{id}'
};