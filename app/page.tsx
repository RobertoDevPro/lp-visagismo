"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Clock, Shield, Sparkles, Gift, Zap, Crown, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function VisagismoLanding() {
  const checkoutUrl = "https://pay.kiwify.com.br/pNoMNpB"

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F5F2] to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.png"
            alt="Formação Visagista - Aliny Cruz"
            fill
            className="object-cover object-center hidden sm:block"
            priority
          />
          <Image
            src="/images/heromobile.png"
            alt="Formação Visagista - Aliny Cruz"
            fill
            className="object-cover object-center sm:hidden"
            priority
          />
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-10 animate-fade-in"></div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            O Poder do <span className="text-[#D6BFAF]">Visagismo</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            O curso que transforma maquiadoras comuns em profissionais valorizadas, desejadas e bem pagas em poucas
            semanas.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#5C5048] hover:bg-[#5C5048]/90 text-white px-4 sm:px-6 lg:px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[56px] text-center break-words"
            >
              <Link href={checkoutUrl}>QUERO APRENDER VISAGISMO!</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm px-4">
            <div className="flex items-center justify-center gap-2 bg-[#90857D]/20 px-3 sm:px-4 py-2 rounded-full border border-[#90857D]/30 backdrop-blur-sm">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#D6BFAF] flex-shrink-0" />
              <span className="text-[#EADCD2] font-semibold">Centenas de alunas transformadas</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#90857D]/20 px-3 sm:px-4 py-2 rounded-full border border-[#90857D]/30 backdrop-blur-sm">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D6BFAF] flex-shrink-0" />
              <span className="text-[#EADCD2] font-semibold">Acesso por 1 ano</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#90857D]/20 px-3 sm:px-4 py-2 rounded-full border border-[#90857D]/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#D6BFAF] flex-shrink-0" />
              <span className="text-[#EADCD2] font-semibold">Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
              Você sabe fazer uma maquiagem linda... mas por que ainda não se sente reconhecida como merece?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-[#F7F5F2] to-[#EADCD2] border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#D6BFAF] to-[#90857D] rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#90857D] to-[#5C5048] text-white p-3 sm:p-4 rounded-2xl mb-4 sm:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#5C5048] group-hover:text-[#90857D] transition-colors duration-300">
                    Falta de Reconhecimento
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Já entregou seu melhor, mas sentiu que a cliente não valorizou seu trabalho?
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#90857D] to-[#5C5048] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-[#F7F5F2] to-[#EADCD2] border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#D6BFAF] to-[#90857D] rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#90857D] to-[#5C5048] text-white p-3 sm:p-4 rounded-2xl mb-4 sm:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#5C5048] group-hover:text-[#90857D] transition-colors duration-300">
                    Medo de Precificar
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Já travou ao passar o valor do atendimento, com medo de ouvir "nossa, tá caro"?
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#90857D] to-[#5C5048] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-[#F7F5F2] to-[#EADCD2] border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#D6BFAF] to-[#90857D] rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="bg-gradient-to-r from-[#90857D] to-[#5C5048] text-white p-3 sm:p-4 rounded-2xl mb-4 sm:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#5C5048] group-hover:text-[#90857D] transition-colors duration-300">
                    Insegurança Técnica
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Não consegue fazer uma leitura das características para criar uma maquiagem que realmente valorize?
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#90857D] to-[#5C5048] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#F7F5F2] to-[#EADCD2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
                Eu já fui essa maquiadora.
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                Fazia maquiagem de forma copia e cola, aceitava maquiar as clientes com fotos de referência de outros
                profissionais por não ter conhecimento do visagismo e não ter segurança em direcionar a técnica certa.
                Comprava os melhores produtos, estudava técnicas novas…
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                Mas ainda assim, não conseguia me destacar. Era escolhida pelo preço. Sentia que precisava "agradar" o
                tempo todo. E mesmo assim o reconhecimento não vinha.
              </p>

              <div className="bg-[#EADCD2] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#5C5048] mb-3 sm:mb-4">
                  Minha virada de chave foi o visagismo.
                </h3>
                <p className="text-sm sm:text-base text-[#5C5048] leading-relaxed">
                  Foi com o visagismo que eu aprendi a me posicionar como uma profissional única. Parei de vender
                  maquiagem e passei a vender transformação.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Me tornei referência na minha cidade</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Consolidei uma agenda valorizada e disputada
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Comecei a atrair clientes que não vêm pelo preço
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Posicionei meu trabalho no digital com autoridade
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12 px-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#5C5048] hover:bg-[#5C5048]/90 text-white px-4 sm:px-6 lg:px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full min-h-[56px] text-center break-words"
              >
                <Link href={checkoutUrl}>QUERO APRENDER MAIS SOBRE VISAGISMO!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
                📚 O que você vai aprender com O Poder do Visagismo
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                Esse curso foi criado para maquiadoras que estão prontas para dar o próximo passo na carreira, sair do
                raso e se tornarem profissionais lembradas, valorizadas e bem pagas em poucas semanas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-gradient-to-r from-[#F7F5F2] to-[#EADCD2] rounded-xl p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#5C5048] flex items-center gap-3">
                      🎨 VISAGISMO NA PRÁTICA
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Como identificar e analisar as características únicas de cada cliente
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Temperamento, contraste pessoal e harmonia</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Os diferentes tipos de côncavo e formatos de olhos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Como aplicar essas análises para criar maquiagens que comunicam essência
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#F7F5F2] to-[#EADCD2] rounded-xl p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#5C5048] flex items-center gap-3">
                      💍 ATENDIMENTOS LUCRATIVOS
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Como vender mais para formandas e noivas através da análise visagista
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Como criar o branding da cliente para que ela se veja como protagonista
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Como transformar seu atendimento em algo memorável (e bem pago)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative order-first lg:order-last">
                <Image
                  src="/images/makeup-work.jpeg"
                  alt="Trabalhos de maquiagem profissional"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#5C5048] text-white p-3 sm:p-4 rounded-xl shadow-xl">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#5C5048] to-[#90857D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EADCD2] to-[#D6BFAF] px-4">
                Conheça Sua Mentora: Aliny Cruz
              </h2>
              <p className="text-lg sm:text-xl text-[#EADCD2] px-4">
                A Especialista Que Vai Levar Sua Carreira Ao Próximo Nível
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="bg-gradient-to-br from-[#D6BFAF] to-[#EADCD2] rounded-3xl p-1">
                  <div className="bg-white rounded-3xl p-6 sm:p-8">
                    <Image
                      src="/images/aliny-cruz.png"
                      alt="Aliny Cruz - Especialista em Visagismo"
                      width={400}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#D6BFAF] text-[#5C5048] p-3 sm:p-4 rounded-full shadow-xl">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                </div>
              </div>

              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <Badge className="bg-[#D6BFAF] text-[#5C5048] px-3 sm:px-4 py-2 text-sm mb-4">
                      8 anos de experiência
                    </Badge>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Por trás de O Poder do Visagismo está Aliny Cruz, uma profissional com 8 anos de experiência
                    dedicada à arte de transformar olhares e carreiras.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Aliny não só elevou seu próprio faturamento e se tornou referência no nicho de noivas e formandas
                    através do visagismo, seu carro-chefe, como já ajudou centenas de maquiadoras a se destacarem e
                    cobrarem o valor que realmente merecem.
                  </p>

                  <div className="bg-[#D6BFAF]/20 rounded-xl p-4 sm:p-6 border-l-4 border-[#EADCD2] mb-6 sm:mb-8">
                    <p className="text-lg sm:text-xl font-semibold">
                      Ela é a prova viva de que o visagismo é o caminho para você se diferenciar, atrair clientes
                      premium e ter o reconhecimento que sempre buscou.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-[#EADCD2]">500+</div>
                      <div className="text-xs sm:text-sm text-gray-300">Alunas transformadas</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-[#EADCD2]">8 anos</div>
                      <div className="text-xs sm:text-sm text-gray-300">De experiência</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
              💬 Esse curso é para você, maquiadora que…
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Está cansada de ser vista como 'só mais uma'",
                "Sabe maquiar bem, mas ainda não é reconhecida como gostaria",
                "Tem medo de aumentar o valor do seu serviço",
                "Sente que ainda não sabe se posicionar no Instagram",
                "Deseja viver da maquiagem com liberdade, agenda cheia e cliente ideal",
              ].map((item, index) => (
                <Card key={index} className="p-4 sm:p-6 border-l-4 border-[#90857D] hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#90857D] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-[#F7F5F2] to-[#EADCD2] rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#5C5048]">
                  ✨ O Poder do Visagismo é mais que um curso.
                </h3>
                <p className="text-base sm:text-lg text-gray-700">
                  É o mapa que faltava entre a maquiadora que você é hoje e a profissional respeitada que você sonha
                  ser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F7F5F2] via-[#EADCD2] to-[#D6BFAF]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-[#5C5048] text-white px-4 sm:px-6 py-2 text-base sm:text-lg mb-4 sm:mb-6 rounded-full">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Depoimentos Reais
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#5C5048] px-4">
                O Que Nossas Alunas Dizem
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Veja como o curso transformou a carreira de centenas de maquiadoras em todo o Brasil
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { src: "/images/testimonial-1.jpeg", alt: "Depoimento 1", name: "Aluna do Curso" },
                { src: "/images/testimonial-2.jpeg", alt: "Depoimento 2", name: "Maquiadora Profissional" },
                { src: "/images/testimonial-3.jpeg", alt: "Depoimento 3", name: "Ex-aluna Satisfeita" },
                { src: "/images/testimonial-4.jpeg", alt: "Depoimento 4", name: "Visagista Certificada" },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-0 relative">
                    <div className="relative">
                      <Image
                        src={testimonial.src || "/placeholder.svg"}
                        alt={testimonial.alt}
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#5C5048] text-white p-2 rounded-full shadow-lg">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-[#F7F5F2] to-[#EADCD2]">
                      <div className="flex items-center gap-1 sm:gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">{testimonial.name}</p>
                      <p className="text-xs text-[#90857D] font-semibold mt-1">Transformação Comprovada ✨</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#D6BFAF] mb-6 sm:mb-8">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#5C5048] mb-2">Mais de 500 alunas satisfeitas</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                  Junte-se às centenas de maquiadoras que já transformaram suas carreiras com o visagismo
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#5C5048] hover:bg-[#5C5048]/90 text-white px-4 sm:px-6 lg:px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full min-h-[56px] text-center break-words"
                >
                  <Link href={checkoutUrl}>QUERO ELEVAR MEU NÍVEL PROFISSIONAL!</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Showcase Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F7F5F2] to-[#EADCD2]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
                ✨ Transformações Reais
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Veja o poder do visagismo em ação através dos trabalhos da Aliny Cruz
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/make.JPG"
                  alt="Trabalho de maquiagem visagista - Aliny Cruz"
                  width={600}
                  height={800}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[#5C5048] text-white p-3 sm:p-4 rounded-full shadow-xl">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#5C5048]">
                    🎨 Visagismo na Prática
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    Cada maquiagem é única e personalizada. O visagismo permite que você analise as características 
                    individuais da cliente e crie uma transformação que valorize sua essência natural.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Análise personalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Técnicas avançadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Resultados únicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Valorização profissional</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-[#5C5048] hover:bg-[#5C5048]/90 text-white px-4 sm:px-6 lg:px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full min-h-[56px] text-center break-words"
                  >
                    <Link href={checkoutUrl}>QUERO APRENDER ESSAS TÉCNICAS!</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Offer Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#5C5048] via-[#90857D] to-[#D6BFAF] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#EADCD2] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#D6BFAF] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-48 sm:h-60 bg-[#F7F5F2] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold mb-4 sm:mb-6 rounded-full animate-pulse">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                OFERTA ESPECIAL - TEMPO LIMITADO
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
                Não perca mais tempo e começe a ser{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EADCD2] to-[#F7F5F2]">
                  VALORIZADA
                </span>{" "}
                no mercado!
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#EADCD2] max-w-3xl mx-auto px-4">
                Você está a um passo de transformar sua carreira. Garante sua vaga HOJE e receba um pacote completo de
                ferramentas!
              </p>
            </div>

            {/* Main Offer Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Left side - Course content */}
                <div>
                  <div className="bg-gradient-to-r from-[#90857D] to-[#5C5048] rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                      <Crown className="w-6 h-6 sm:w-8 sm:h-8" />O PODER DO VISAGISMO
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Visagismo na Prática Completo</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Atendimentos Lucrativos</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Acesso por 1 ano completo</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Suporte direto com a Aliny</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#D6BFAF] to-[#90857D] rounded-2xl p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                      <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
                      BÔNUS EXCLUSIVO
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg">
                      <strong>Marketing Estratégico Para Maquiadoras</strong> - Aprenda a se posicionar no digital e
                      atrair clientes premium!
                    </p>
                  </div>
                </div>

                {/* Right side - Pricing */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#D6BFAF] to-[#EADCD2] rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="mb-4 sm:mb-6">
                      <div className="text-base sm:text-lg text-[#5C5048]/70 line-through mb-2">De R$ 447,00</div>
                      <div className="text-4xl sm:text-6xl font-bold mb-2 text-[#5C5048]">12x</div>
                      <div className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#5C5048]">R$ 10,03</div>
                      <div className="text-lg sm:text-2xl font-semibold bg-[#5C5048]/20 rounded-full px-4 sm:px-6 py-2 inline-block text-[#5C5048]">
                        ou R$ 97,00 à vista
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#5C5048] text-white hover:bg-[#5C5048]/90 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-sm sm:text-lg lg:text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4 min-h-[56px] text-center break-words"
                    >
                      <Link href={checkoutUrl}>GARANTIR MINHA VAGA AGORA</Link>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#5C5048]">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Garantia de 7 dias • Pagamento 100% seguro</span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 bg-yellow-500/20 rounded-xl p-3 sm:p-4 border border-yellow-400/30">
                    <p className="text-sm sm:text-base text-yellow-300 font-semibold flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      Oferta promocional por tempo limitado!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-base sm:text-lg mb-2">Acesso Imediato</h4>
                <p className="text-sm sm:text-base text-[#EADCD2]">Comece hoje mesmo sua transformação</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-base sm:text-lg mb-2">Risco Zero</h4>
                <p className="text-sm sm:text-base text-[#EADCD2]">7 dias de garantia incondicional</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-[#EADCD2] mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-base sm:text-lg mb-2">Suporte Total</h4>
                <p className="text-sm sm:text-base text-[#EADCD2]">Acompanhamento direto da Aliny</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold mb-4 sm:mb-6 rounded-full">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Garantia Total
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-green-600 to-emerald-600 px-4">
                SEU RISCO É ZERO!
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-6 sm:mb-8 px-4">
                GARANTIA INCONDICIONAL DE 7 DIAS
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left side - Guarantee details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-green-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-20"></div>

                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 sm:p-4 rounded-2xl mb-4 sm:mb-6 inline-block">
                    <Shield className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Como funciona nossa garantia:
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">7 dias para testar</h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          Acesse todo o conteúdo e veja se é realmente para você
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">Reembolso total</h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          100% do seu investimento de volta, sem perguntas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">Processo simples</h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          Basta enviar um e-mail e processamos seu reembolso
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Trust elements */}
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-green-200 mb-4 sm:mb-6">
                    <div className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-3 sm:mb-4">
                      7 DIAS
                    </div>
                    <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Para você testar sem riscos</p>
                    <p className="text-sm sm:text-base text-gray-600 px-4">
                      Confiamos tanto na qualidade do nosso curso que oferecemos essa garantia única no mercado
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Por que oferecemos essa garantia?</h3>
                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Porque sabemos que o curso realmente funciona. Mais de 500 alunas já transformaram suas carreiras
                    com nosso método.
                  </p>
                  <div className="flex justify-center items-center gap-1 sm:gap-2 text-green-200">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <span className="ml-2 font-semibold text-sm sm:text-base">Avaliação 5 estrelas</span>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 lg:px-10 py-4 text-sm sm:text-base lg:text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[56px] text-center break-words"
                  >
                    <Link href={checkoutUrl}>GARANTIR MINHA VAGA SEM RISCOS!</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F7F5F2] via-[#EADCD2] to-[#D6BFAF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-gradient-to-r from-[#5C5048] to-[#90857D] text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold mb-4 sm:mb-6 rounded-full">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Tire suas dúvidas
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5C5048] via-[#90857D] to-[#D6BFAF] px-4">
                Perguntas Frequentes
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Esclarecemos as principais dúvidas sobre o curso para você tomar a melhor decisão
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  question: "Já sou maquiadora experiente. Esse curso é para mim ou é para iniciantes?",
                  answer:
                    "Sim, O Poder do Visagismo foi desenvolvido para maquiadoras que já atuam e desejam aprimorar suas técnicas, diferenciando-se no mercado. Se você busca sair do 'mais do mesmo', atrair clientes de alto valor (como noivas e formandas) e cobrar mais pelo seu serviço, este curso é o divisor de águas que faltava na sua carreira.",
                  icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                },
                {
                  question:
                    "O visagismo parece muito técnico e complicado. Vou conseguir aplicar isso no meu dia a dia?",
                  answer:
                    "Absolutamente! A Aliny Cruz descomplica o visagismo, transformando conceitos complexos em aplicações práticas e didáticas para o seu trabalho com maquiagem. Você aprenderá a analisar e personalizar de forma intuitiva, para que cada atendimento seja único e valorizado.",
                  icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
                },

                {
                  question: "Quanto tempo preciso dedicar para ver os resultados e como funciona o acesso online?",
                  answer:
                    "O curso é 100% online, com aulas gravadas que você pode assistir no seu ritmo, de qualquer lugar. O acesso é de 1 ano, permitindo que você revise o conteúdo sempre que precisar. O importante é aplicar as técnicas gradualmente em seus atendimentos para começar a ver a transformação no seu portfólio e faturamento.",
                  icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-l-4 border-[#90857D] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="bg-gradient-to-r from-[#90857D] to-[#5C5048] text-white p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {faq.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#5C5048] group-hover:text-[#90857D] transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#90857D] to-[#5C5048] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#D6BFAF]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#5C5048] mb-3 sm:mb-4">Ainda tem dúvidas?</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                  Nossa equipe está pronta para te ajudar! Entre em contato conosco.
                </p>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-gradient-to-r from-[#5C5048] to-[#90857D] hover:from-[#5C5048]/90 hover:to-[#90857D]/90 text-white px-4 sm:px-6 lg:px-8 py-3 text-sm sm:text-base font-semibold rounded-full min-h-[48px] text-center break-words"
                >
                  <Link href={checkoutUrl}>ESCLARECER DÚVIDAS E GARANTIR VAGA</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#5C5048] to-[#90857D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-4">
              👉 Garanta agora seu acesso e comece hoje mesmo sua jornada como maquiadora visagista!
            </h2>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-[#5C5048] hover:bg-gray-100 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 text-sm sm:text-lg lg:text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6 sm:mb-8 min-h-[56px] text-center break-words"
            >
              <Link href={checkoutUrl}>QUERO TRANSFORMAR MINHA CARREIRA!</Link>
            </Button>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-90">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span>Satisfação garantida</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C5048] text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">O Poder do Visagismo</h3>
          <p className="text-sm sm:text-base text-[#EADCD2] mb-4 sm:mb-6">
            Transformando maquiadoras em profissionais valorizadas
          </p>
          <p className="text-xs sm:text-sm text-[#D6BFAF]">© 2024 Aliny Cruz. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  )
}
