import * as ui from '@/actionCreators/ui'
import { UNKNOWN_ERROR } from '@/constants/ui'

export const handleResponse = (error, response, body, dispatch, cb) => {
  dispatch(ui.hideLoader());
  if (error || !response) {
    dispatch(ui.showSnackbar(UNKNOWN_ERROR));
  }
  else if (response.statusCode === 200) {
    try {
      cb();
    } catch (e) {
      ui.showSnackbar(UNKNOWN_ERROR);
    }
  }
  else {
    try {
      body = JSON.parse(body)
      if(!body.display_message) throw new Error("No display message");
      ui.showSnackbar(body.display_message);
    } catch (e) {
      ui.showSnackbar(UNKNOWN_ERROR);
    }
  }
}