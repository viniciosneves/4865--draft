import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    globals: true,
    coverage: {
      // Provider: define qual mecanismo usar para coletar dados de cobertura
      // Opções disponíveis:
      // - 'v8': Usa o mecanismo V8 do Node.js (mais rápido e recomendado, padrão do Vitest)
      // - 'istanbul': Usa o Istanbul (alternativa mais antiga, pode ser útil para compatibilidade)
      // Requer instalar @vitest/coverage-v8 ou @vitest/coverage-istanbul respectivamente
      provider: 'v8',
      // Reporter: define os formatos de saída dos relatórios de cobertura
      // Opções disponíveis:
      // - 'text': Exibe resumo no terminal (útil para CI/CD e verificação rápida)
      // - 'json': Gera arquivo coverage/coverage-summary.json com dados estruturados (útil para ferramentas automatizadas)
      // - 'html': Gera relatório HTML navegável em coverage/index.html (útil para análise visual detalhada)
      // - 'lcov': Gera arquivo coverage/lcov.info (padrão para serviços como Codecov, Coveralls)
      // - 'text-summary': Resumo breve no terminal
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/', // Exclui dependências instaladas (não faz sentido medir cobertura de código de terceiros)
        'src/tests/', // Exclui arquivos de teste e utilitários de teste (não devem ser testados)
        '**/*.config.js', // Exclui arquivos de configuração JavaScript (vite.config.js, eslint.config.js, etc.)
        '**/*.config.ts', // Exclui arquivos de configuração TypeScript
        '**/*.test.{js,jsx,ts,tsx}', // Exclui todos os arquivos de teste unitários (independente da extensão)
        '**/*.cy.{js,jsx,ts,tsx}', // Exclui arquivos de teste end-to-end do Cypress
        'cypress/', // Exclui toda a pasta do Cypress (testes e2e)
        'coverage/', // Exclui a pasta de relatórios de cobertura gerados anteriormente
      ],
      thresholds: {
        statements: 93, // Mínimo de 93% de statements executados (cada linha de código executável)
        branches: 80, // Mínimo de 80% de branches cobertas (condicionais if/else, ternários, etc.)
        functions: 100, // Mínimo de 100% de funções executadas (todas as funções devem ser testadas)
        lines: 95, // Mínimo de 95% de linhas de código executadas
      },
    },
  },
});
