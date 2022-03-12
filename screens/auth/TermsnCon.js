import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Feather, AntDesign } from 'react-native-vector-icons';

import TextButton from '../../components/auth/TextButton';
import { COLORS, SIZES } from '../../assets/colors/theme';

const TermsnCon = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <TouchableOpacity style= {styles.backIcon} onPress= {() => navigation.goBack()}>
                    <Feather name='arrow-left' size={30} color={COLORS.darkGray} />
            </TouchableOpacity>
            <View style = {styles.textWrappper}>
            <Text style= {styles.MainHeader}>Terms & Conditions</Text>
            <ScrollView style = {{
                height: 510,
            }}>
            <Text style= {styles.subHEadings}>General Terms</Text>
            <Text style= {styles.subtext}>By accessing Dives Mv, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire application and any email or other type of communication between you and Dives Mv.</Text>
            <Text style= {styles.subtext}>Under no circumstances shall Dives Mv team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Dives Mv team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</Text>
            <Text style= {styles.subtext}>Dives Mv will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.</Text>
            
            <Text style= {styles.subHEadings}>License</Text>
            <Text style= {styles.subtext}>Dives Mv grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app strictly in accordance with the terms of this Agreement.</Text>
            <Text style= {styles.subtext}>These Terms & Conditions are a contract between you and Dives Mv (referred to in these Terms & Conditions as "Dives Mv", "us", "we" or "our"), the provider of the Dives Mv app and the services accessible from the Dives Mv app (which are collectively referred to in these Terms & Conditions as the "Dives Mv Service").</Text>
            <Text style= {styles.subtext}>You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the Dives Mv Service. In these Terms & Conditions, "you" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.</Text>

            <Text style= {styles.subHEadings}>Definitions and key terms</Text>
                <Text style= {styles.subtext}>To help explain things as clearly as possible in this Terms &amp; Conditions, every time any of these terms are referenced, are strictly defined as:</Text>
            <View style={{paddingTop: 10,}}>
                <Text style= {styles.subtext}>  -Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Water Solutions Pvt Ltd , 4th floor, M.Niyadhurumaage,  Alimas Magu  Male’ 20138, Maldives that is responsible for your information under this Terms &amp; Conditions.</Text>
                <Text style= {styles.subtext}>  -Country: where Dives Mv  or the owners/founders of Dives Mv  are based, in this case is MV</Text>
                <Text style= {styles.subtext}>  -Device:&nbsp;any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Dives Mv  and use the services.</Text>
                <Text style= {styles.subtext}>  -Service: refers to the service provided by Dives Mv  as described in the relative terms (if available) and on this platform.</Text>
                <Text style= {styles.subtext}>  -Third-party service:&nbsp;refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</Text>
                <Text style= {styles.subtext}>  -You: a person or entity that is registered with Dives Mv  to use the Services.</Text>
            </View>

            <Text style= {styles.subHEadings}>Restrictions</Text>
                <Text style= {styles.subtext}>You agree not to, and you will not permit others to:</Text>
            <View style={{paddingTop: 10,}}>
                <Text style= {styles.subtext}>  -License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the app or make the platform available to any third party.</Text>
                <Text style= {styles.subtext}>  -Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the app.</Text>
                <Text style= {styles.subtext}>  -Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Dives Mv or its affiliates, partners, suppliers or the licensors of the app.</Text>
            </View>

            <Text style= {styles.subHEadings}>Your Suggestions</Text>
            <Text style= {styles.subtext}>Any feedback, comments, ideas, improvements or suggestions (collectively, "Suggestions") provided by you to Dives Mv with respect to the app shall remain the sole and exclusive property of Dives Mv.</Text>
            <Text style= {styles.subtext}>Dives Mv shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.</Text>
            <Text style= {styles.subHEadings}>Your Consent</Text>
            <Text style= {styles.subtext}>We've updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our app, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.</Text>
            
            <Text style= {styles.subHEadings}>Links to Other Apps and Websites</Text>
            <Text style= {styles.subtext}>This Terms & Conditions applies only to the Services. The Services may contain links to other apps or websites not operated or controlled by Dives Mv. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Terms & Conditions are no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that app/websites own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.</Text>
            
            <Text style= {styles.subHEadings}>Changes To Our Terms & Conditions</Text>
            <Text style= {styles.subtext}>You acknowledge and agree that Dives Mv may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at Dives Mvs sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform Dives Mv when you stop using the Service. You acknowledge and agree that if Dives Mv disables access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account.</Text>
            <Text style = {styles.subtext}>If we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below.</Text>
            
            <Text style= {styles.subHEadings}>Modifications to our app</Text>
            <Text style = {styles.subtext}>Dives Mv reserves the right to modify, suspend or discontinue, temporarily or permanently, the app or any service to which it connects, with or without notice and without liability to you.</Text>
            
            <Text style= {styles.subHEadings}>Updates to Our app</Text>
            <Text style = {styles.subtext}>Dives Mv may from time to time provide enhancements or improvements to the features/ functionality of the app, which may include patches, bug fixes, updates, upgrades and other modifications ("Updates").</Text>
            <Text style = {styles.subtext}>Updates may modify or delete certain features and/or functionalities of the app. You agree that Dives Mv has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the app to you.</Text>
            <Text style = {styles.subtext}>You further agree that all Updates will be (i) deemed to constitute an integral part of the app, and (ii) subject to the terms and conditions of this Agreement.</Text>
                        
            
            <Text style= {styles.subHEadings}>Third-Party Services</Text>
            <Text style = {styles.subtext}>We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services ("Third- Party Services").</Text>
            <Text style = {styles.subtext}>You acknowledge and agree that Dives Mv shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. Dives Mv does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.</Text>
            <Text style = {styles.subtext}>Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions.</Text>
            
            <Text style= {styles.subHEadings}>Term and Termination</Text>
            <Text style = {styles.subtext}>This Agreement shall remain in effect until terminated by you or Dives Mv.</Text>
            <Text style = {styles.subtext}>Dives Mv may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</Text>
            <Text style = {styles.subtext}>This Agreement will terminate immediately, without prior notice from Dives Mv, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the app and all copies thereof from your computer.</Text>
            <Text style = {styles.subtext}>Upon termination of this Agreement, you shall cease all use of the app and delete all copies of the app from your computer.
                Termination of this Agreement will not limit any of Dives Mv's rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.
            </Text>

            <Text style= {styles.subHEadings}>Updates to Our Terms</Text>
            <Text style = {styles.subtext}>We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.</Text>

            <Text style= {styles.subHEadings}>Copyright Infringement Notice</Text>
            <Text style = {styles.subtext}>If you are a copyright owner or such owner’s agent and believe any material on our app constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.</Text>
            <Text style= {styles.subHEadings}>Indemnification</Text>
            <Text style = {styles.subtext}>You agree to indemnify and hold Dives Mv and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the app; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.</Text>
            <Text style= {styles.subHEadings}>Intellectual Property</Text>
            <Text style = {styles.subtext}>The app and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by Dives Mv, its licensors or other providers of such material and are protected by Maldives and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of Dives Mv, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.</Text>
            
            <Text style= {styles.subHEadings}>Submissions and Privacy</Text>
            <Text style = {styles.subtext}>In the event that you submit or post any ideas, creative suggestions, designs, photographs, information, advertisements, data or proposals, including ideas for new or improved products, services, features, technologies or promotions, you expressly agree that such submissions will automatically be treated as non-confidential and non-proprietary and will become the sole property of Dives Mv without any compensation or credit to you whatsoever. Dives Mv and its affiliates shall have no obligations with respect to such submissions or posts and may use the ideas contained in such submissions or posts for any purposes in any medium in perpetuity, including, but not limited to, developing, manufacturing, and marketing products and services using such ideas.</Text>
            
            <Text style= {styles.subHEadings}>Disclaimer</Text>
            <Text style = {styles.subtext}>Dives Mv is not responsible for any content, code or any other imprecision.</Text>
            <Text style = {styles.subtext}>Dives Mv does not provide warranties or guarantees.</Text>
            <Text style = {styles.subtext}>In no event shall Dives Mv be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Dives Mv reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</Text>
            <Text style = {styles.subtext}>The Dives Mv Service and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. Dives Mv is a distributor and not a publisher of the content supplied by third parties; as such, Dives Mv exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via the Dives Mv Service. Without limiting the foregoing, Dives Mv specifically disclaims all warranties and representations in any content transmitted on or in connection with the Dives Mv Service or on sites that may appear as links on the Dives Mv Service, or in the products provided as a part of, or otherwise in connection with, the Dives Mv Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by Dives Mv or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, Dives Mv does not warrant that the Dives Mv Service will be uninterrupted, uncorrupted, timely, or error-free.</Text>
            <Text style= {styles.subHEadings}>Contact US</Text>
            <Text style = {styles.subtext}>Don't hesitate to contact us if you have any questions. </Text>
            <Text style = {styles.subtext}> -Via Email:  support.divesmv@water-solutions.biz</Text>
            <Text style = {styles.subtext}>Updated at: 2022-03-09</Text>
           
            </ScrollView>
            </View>
            <View>

            <TextButton 
                label = "Agree"
                buttonContainerStyle ={{
                    height: 50, 
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.darkpink1,
                }}
                onPress={() => navigation.goBack()} 
                />
            <View style ={{
                    marginTop: 10,
                    alignItems: 'center',
                }}>
                    <Text style = {{
                        color: COLORS.darkGray,
                        fontFamily: 'PoppinsRegular',
                        fontSize: 14,

                    }}>
                        By Signing up you agree to our
                    </Text>
                    <TextButton
                    label ="Terms and Conditions"
                    buttonContainerStyle={{
                        backgroundColor: null,

                    }}
                    labelStyle={{
                        color: COLORS.darkpink1,
                        fontFamily: 'PoppinsRegular',
                        fontSize: 14,
                    }}
                    onPress={() => navigation.navigate("TermsandCond")} />

                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
    },
    MainHeader: {
        fontFamily: 'OpenSansBold',
        fontSize: 18, 
        margin: 10,
        color: COLORS.black,
    },
    subHEadings: {
        fontFamily: 'LatoBold',
        fontSize: 16, 
        paddingVertical: 3,
        color: COLORS.black,
        paddingTop: 6,
    },
    subtext: {
        fontFamily: 'LatoRegular',
        fontSize: 14.5, 
        textAlign: 'justify',
        color: COLORS.darkGray
    },
    backIcon: {
        backgroundColor: COLORS.lightGray1,
        width: 35,
        marginTop:45,
        marginLeft: 5,
        borderRadius: 999,
    },
    textWrappper: {
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 2,
    },
})

export default TermsnCon;
