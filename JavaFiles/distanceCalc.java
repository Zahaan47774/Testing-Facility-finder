public class distanceCalc {

  private static double distance(double lat1, double lon1, double lat2, double lon2) {
    double theta = lon1 - lon2;
    double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2))
            + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515;
    return (dist);
  }

  private static double deg2rad(double deg) {
    return (deg * Math.PI / 180.0);
  }

  private static double rad2deg(double rad) {
    return (rad * 180.0 / Math.PI);
  }

  public static double shortestDistance(double lat1, double lon1) {
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

  public static void main(String[] args) {
    
    System.out.print(distance(43.0716,-89.4003,43.078331,-89.429970));
  }

}