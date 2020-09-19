public class TestingCenter {
  private String typeOfCenter;
  private String nameOfCenter;
  private String address;
  private String phoneNum;
  private String latitude;
  private String longitude;

  public TestingCenter(String typeOfCenter, String nameOfCenter, String address, String latitude, String longitude,
      String phoneNum) {
    this.typeOfCenter = typeOfCenter;
    this.nameOfCenter = nameOfCenter;
    this.address = address;
    this.phoneNum = phoneNum;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  @Override
  public String toString() {
    return "Person [name=" + nameOfCenter + ", address=" + address + ", phoneNumber=" + phoneNum
        + ", latitude=" + latitude + ", longitude=" + longitude + "]";
  }

  public String getNameOfCenter() {
    return nameOfCenter;
  }

  public void setNameOfCenter(String nameOfCenter) {
    this.nameOfCenter = nameOfCenter;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhoneNum() {
    return phoneNum;
  }

  public void setPhoneNum(String phoneNum) {
    this.phoneNum = phoneNum;
  }

  public String getPhoneNumber() {
    return phoneNum;
  }

  public String getLongitude() {
    return longitude;
  }

  public void setLongitude(String longitude) {
    this.longitude = longitude;
  }

  public String getLatitude() {
    return latitude;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }

}
