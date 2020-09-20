function distance(lat1, lon1, lat2, lon2) {
  var theta = lon1 - lon2;
  var dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2))
          + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
  dist = Math.acos(dist);
  dist = rad2deg(dist);
  dist = dist * 60 * 1.1515;
  return dist;
}

function deg2rad(deg) {
  return (deg * Math.PI / 180.0);
}

function rad2deg(rad) {
  return (rad * 180.0 / Math.PI);
}

function shortestDistance(lat1, lon1) {
  ArrayList<String> centerData = new ArrayList<String>();
  centerData = InputArrayList.createArrayList("Data Hackathon.txt");
  double[] arr = new double[9];
  for (String testingCenter : centerData) {
    String[] center = testingCenter.split(",");
    int i = 0;
    arr[i] = distance(Double.parseDouble(center[4]), Double.parseDouble(center[5]), lat1,
            lon1);
    i++;
  }
  Arrays.sort(arr);
  return arr[0];
}
