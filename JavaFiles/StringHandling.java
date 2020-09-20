import java.io.File;
import java.util.ArrayList;

public class StringHandling {
  public static void main(String[] args) {
    File file = new File("Data Hackathon.txt");
    ArrayList<TestingCenter> testingCenters = new ArrayList<TestingCenter>();
    ArrayList<String> centerData = new ArrayList<String>();
    centerData = InputArrayList.createArrayList(file);
    for (String testingCenter : centerData) {
      String[] center = testingCenter.split(",");
      TestingCenter testCenter = new TestingCenter(center[0], center[1], center[2], center[3], center[4]);
      testingCenters.add(testCenter);
    }
    for (String center : centerData) {
      System.out.println(centerData);
    }
    System.out.println(testingCenters);
  }
}
