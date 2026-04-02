export const ERROR_MESSAGES: { [key: string]: (args?: any) => string } = {
  required: () => 'Este campo é obrigatório.',
  minlength: (params) => `O tamanho mínimo é de ${params.requiredLength} caracteres.`,
  maxlength: (params) => `O tamanho máximo é de ${params.requiredLength} caracteres.`,
}
