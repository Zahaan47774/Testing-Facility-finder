import java.util.ArrayList;

public class StringHandling {
  public static void main(String[] args) {
    ArrayList<TestingCenter> testingCenters = new ArrayList<TestingCenter>();
    ArrayList<TestingCenter> hospitals = new ArrayList<TestingCenter>();
    ArrayList<String> centerData = new ArrayList<String>();
    centerData = InputArrayList.createArrayList("Data Hackathon.txt");
    for (String testingCenter : centerData) {
      String[] center = testingCenter.split(",");
      TestingCenter testCenter = new TestingCenter(center[0], center[1], center[2], center[3], center[4], center[5]);
      if(center[0].equals("Hospital")) {
        hospitals.add(testCenter);
      } else {
        testingCenters.add(testCenter);
      }
    }
    for (TestingCenter center : testingCenters) {
      System.out.println(center);
    }
  }
}
