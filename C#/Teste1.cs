using System;

class Program
{
    public static void Main(string[] args)
    {
        int resultadoSoma = Operacao(2, 3);
        Console.WriteLine("Resultado soma: " + resultadoSoma);
        int resultadoMultiplicacao = Operacao(2, 3, out resultadoSoma);
        Console.WriteLine("Resultado soma: " + resultadoSoma + ", Resultado Mutiplicação: " + resultadoMultiplicacao);
    }
    public static int Operacao(int a, int b)
    {
        return a + b;
    }
    public static int Operacao(int a, int b, out int soma)
    {
        soma = a + b;
        return a * b;
    }
}