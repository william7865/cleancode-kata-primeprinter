public class Exercise3 {
    /**
     *
     * @param amount price
     * @param type Account status (NotRegistered = 1, SimpleCustomer = 2, ValuableCustomer = 3, MostValuableCustomer = 4)
     * @param years Time in years that the client is our customer
     * @return THE PRICE
     */
    public double calculate(double amount, int type, int years)
    {
        double result = 0;
        double disc = (years > 5) ? (double) 5 / 100 : (double)years / 100;

        // NotRegistered
        if (type == 1)
        {
            result = amount;
        }
        switch (type) {
            case 2:
                result -= 0.1 * amount;
                break;
            case 3:
                result *= 0.7 * amount;
                break;
            case 4:
                result -= 0.5 * amount;
                break;
        }
        return result;
    }

}