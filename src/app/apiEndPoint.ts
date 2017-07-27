import { environment } from '../environments/environment';

export const ApiEndPoint = {
   indentApiUrl:environment.apiBaseEndPoint+'/indent'
   ,indentApiUrlByStatus:environment.apiBaseEndPoint+'/indent'+'/bystatus'
   ,indentTableApiUrl:environment.apiBaseEndPoint+'/indenttable'
};