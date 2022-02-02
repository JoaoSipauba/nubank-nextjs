import { Container, Option, OptionDivider, OptionIdentity, OptionText } from "./styles";
import { RiQuestionLine } from 'react-icons/ri'
import { FiChevronRight, FiUser, FiSliders } from 'react-icons/fi'
import Image from "next/image";

export function OptionsList(){
    return(
        <Container>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-question.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Me ajuda</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-user.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Meus dados</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-slider.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Configurar app</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-shield.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Segurança</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-pix.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Configurar chaves pix</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-bag.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Pedir conta PJ</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-belt.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Notificações</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-engine.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Configurar conta</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-card.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Configurar cartão</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
            <Option>
                <OptionIdentity>
                    <Image src="/icons/uil-file.svg" alt="Logo" width={24} height={24} />
                    <OptionText>Sobre</OptionText>
                </OptionIdentity>
                <FiChevronRight size={24}/>
            </Option>
            <OptionDivider/>
        </Container>
    )
}
