class Tools {
  static ParseDate = function (stringDate) {
    if (stringDate && stringDate.length > 0) {
      var date = new Date(stringDate);

      var day = date.getDate().toString().padStart(2, "0");
      var month = (date.getMonth() + 1).toString().padStart(2, "0");
      var year = date.getFullYear().toString().padStart(2, "0");
      var hour = date.getHours().toString().padStart(2, "0");
      var minute = date.getMinutes().toString().padStart(2, "0");

      return year + "/" + month + "/" + day + " " + hour + ":" + minute;
    } else {
      return null;
    }
  };
}

export default Tools;
