// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/java
class Kata {
    public static String multiTable(int num) {
        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= 10; i++) {
            int result = i * num;
            sb.append(i + " * " + num + " = " + result + "\n");
        }
        return sb.toString().trim();
    }
}