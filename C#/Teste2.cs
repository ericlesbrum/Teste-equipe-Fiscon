using System;

class Program
{
    public static void Main(string[] args)
        Operacao(true);
    }
    static void Operacao(bool mod = false)
    {
        int soma = 0;

        for (int index = 101; index < 200; index += 2)
        {
            soma += index;
            if (mod)
                Console.WriteLine($"Resto da divisão de {index}%{2}= {index % 2}");
        }
        Console.WriteLine("A soma dos números ímpares entre 100 e 200 é: " + soma);
    }
}