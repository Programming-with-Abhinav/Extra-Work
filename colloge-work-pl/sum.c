#include <stdio.h>

int main()
{
    char operator;
    double a, b, result;
    printf("Enter Value (a and b):");
    scanf("%lf %lf", &a, &b);
    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    switch (operator)
    {
    case '+':
        result = a + b;
        printf("Result: %.2lf + %.2lf = %.2lf\n", a, b, result);
        break;
    case '-':
        result = a - b;
        printf("Result: %.2lf + %.2lf = %.2lf\n", a, b, result);
        break;
    case '*':
        result = a * b;
        printf("Result: %.2lf + %.2lf = %.2lf\n", a, b, result);
        break;
        if (b != 0)
        {
            result = a / b;
            printf("Result: %.2lf + %.2lf\n", a, b, result);
        }
        else
        {
            printf("Error: Division by zero is not allowed!\n");
        }
    default:
        printf("Error: '%c' is an invalid operator.\n", operator);
    }
    return 0;
}