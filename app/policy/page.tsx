const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-2xl">
      <div className="w-full policy">
        <Policy />
      </div>
      <Information />
      <DateSecurity />
      <Sharing />
      <Reviewing />
    </div>
  );
};

const Policy = () => {
  return (
    <div className="relative flex flex-col w-full justify-center gap-5 items-center h-screen text-white text-2xl">
      <div className="text-center font-bold font-head text-7xl">
        Privacy Policy
      </div>
      <div className="text-center text-[16px] md:text-lg font-body w-full px-10 md:max-w-[1300px]">
        Fuworx Innovations Privated Limited has created this Privacy Policy in
        order to demonstrate its commitment in respecting the privacy of its
        user(s) and protecting your personal information received during the use
        or access of our website. We have developed this Privacy Policy for you
        to understand how we collect, communicate and disclose and make use of
        personal information provided by you.
      </div>

      {/* WAVE AT BOTTOM */}
      <div className="absolute bottom-[-1px] left-0 w-full h-11 bg-white mask-[url(../public/Updated/Wave.svg)] mask-repeat" />
    </div>
  );
};

const Information = () => {
  return (
    <div className="flex flex-col w-full bg-white gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto text-black text-2xl">
      <div className="font-bold font-head text-5xl">
        Collection and the purpose for which information may be collected
      </div>
      <div className="text-wrap text-lg font-body md:max-w-[1300px]">
        We collect personal information by lawful and fair means and, wherever
        appropriate, with the knowledge or consent of the provider of such data
        or information. <br></br>
        We collect and use your personal information solely with the objective
        of fulfilling the purpose(s) specified by us and for other compatible
        purposes only.<br></br>
        Before or at the time of collecting personal information, we will
        identify the purposes for which information is being collected.<br></br>
        You can visit or access our website without telling us who you are and
        without revealing any information on the same. However, there are times
        when we would require information from you. Our website may require you
        to give us your contact information like your name, email address,
        present job details, phone number, mobile number, present company, job
        title or other information, while filling in certain forms. We expect
        that the personal data or information which you provide shall be
        relevant to the purpose(s) for which it is/was provided, and, to the
        extent necessary for that/those purpose(s), shall be accurate, complete,
        and up- to-date. We assure you that we use the information from the
        forms filled in by you only to send you the relevant communication as
        required by the nature of that form or for the purpose(s) for which it
        was provided. For, example, if you fill in your contact details on our
        job seekers form, we may use your information to contact you for current
        and prospective job opportunities, recruitment updates etc.<br></br>
        If at any point of time, it comes to our knowledge or we have reasonable
        grounds to believe that the data or the information you have provided is
        inaccurate or false or unsuitable for the purpose for which it was
        intended, we reserve our right not to use the information provided by
        you for the purpose(s) which was intended to be fulfilled by the use of
        such information. When you access our website, information like your
        internet address, browser type etc. is automatically collected by our
        servers and is placed in our Internet access logs. We also make use of
        cookies to intensify your browsing experience. If you have disabled
        cookies in your browser, the functionality of the website may be
        affected and therefore, we advise that you enable cookies in your
        browser. When you browse through our website, we analyze the information
        collected by our servers to identify ways to improve our website and
        make the information already available on our website more effective. We
        may also use your information to send you e-mailers to announce the
        launch of our new services, invitations to our events and other
        informative e-mails etc. You may opt-out of receiving future mailings by
        choosing the unsubscribe option in the e-mail anytime.<br></br>
        If you do not wish to provide your information through the relevant
        form(s) on the website, you may not fill in the relevant form(s). If you
        wish that we should not collect any personal information, You may write
        to us and in the event you do so, we reserve the discretion to permit
        access to our website with such restrictions as the case may be or to
        continue to allow you to use or access the website.
      </div>
    </div>
  );
};

const DateSecurity = () => {
  return (
    <div className="flex flex-col w-full gap-5 md:py-10 px-10 py-10 md:px-20 h-auto text-white text-2xl">
      <div className="text-left font-bold mt-16 font-head text-5xl">
        Data security and retention
      </div>
      <div className="text-wrap flex flex-col gap-4 text-lg w-full text-left font-body">
        We protect your personal information by reasonable security safeguards
        against loss or theft, as well as unauthorized access, disclosure,
        copying, use or modification. However, we do not guarantee nor assume
        any liability for the security and integrity of any data or information
        transmitted by you over the internet, including any data or information
        transmitted via any server designated as “secure”. You should not have
        an expectation of privacy in any content, including accounts of files
        transmitted to our website through the internet. We claim no
        responsibility for any loss or damage caused to you during the
        transmission of any data or information. We retain your personal
        information so long as is necessary for the intended purpose(s) for
        which the form(s) was filled in or for the fulfillment of the purpose(s)
        as set out in this policy and no further.
      </div>{" "}
    </div>
  );
};

const Sharing = () => {
  return (
    <div className="flex flex-col w-full bg-white gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto text-black text-2xl">
      <div className="font-bold font-head text-5xl">
        Third party information sharing
      </div>
      <div className="text-wrap text-lg font-body md:max-w-[1300px]">
        This website may contain links to other sites which are not operated or
        controlled by us. Our Privacy Policy and procedures based herein apply
        to our website and we do not claim any responsibility for the privacy
        practices or the content(s) of any such external third party site(s). If
        you wish to understand how your privacy is protected by such third party
        sites, you may refer to their respective privacy policies/privacy
        statements, data collection and distribution policies.<br></br>
        In particular, we may provide social media features on our website which
        may enable you to share our information with your social networks and to
        interact with us on various social media sites like, Twitter, Facebook
        etc. and the use of these features may lead to the collection or sharing
        of information about you. We advise you to review the privacy
        policies/statements and the privacy settings of such social networking
        websites so that you are aware of what personal information you are
        sharing by the use of such links and features.<br></br>
        Regarding sharing your data with third parties, we may transfer the
        information we collect from You to our affiliate(s), agents, partners,
        contractors etc., internationally throughout Fuworx worldwide
        organization. We take utmost care to protect the loss, misuse and
        alteration of information under our control. We may even ask for your
        prior permission for the transfer of such data or information whenever
        required and if you deny us the permission, we shall not share your data
        with any third party.<br></br>
        In any case, the data resides behind a firewall and the access is
        restricted to our authorized personnel. In any event, we assure you that
        we do not trade with any individual’s information and the access to your
        data is provided only to our employees and trusted partners or suppliers
        or affiliates who are bound with us under an obligation of
        confidentiality and non- disclosure. We may be however compelled to
        disclose the personal information in the event of a legal proceeding,
        court process, investigation or any such other legal process where we
        are bound to do so by applicable laws or where we have to establish or
        protect our legal rights, intellectual property or where the disclosure
        is required to prevent or take action against any illegal activity/’ies,
        including but not limited to suspected or apprehended fraud, or where
        there is an apprehension of any situation(s) involving potential threats
        to the physical safety of any person, property etc.<br></br>
        No mobile information will be shared with third parties/affiliates for
        marketing/promotional purposes. All other categories exclude text
        messaging originator opt-in data and consent; this information will not
        be shared with any third parties.
      </div>
    </div>
  );
};

const Reviewing = () => {
  return (
    <div className="text-white  w-full flex flex-col gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto">
      <div>
        <div className="font-bold font-head text-5xl py-10 md:py-3">
          Accessing, reviewing and/or correction of information
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          At your request, we shall allow you to review and to correct any
          inaccuracies or amend any deficient data/information, which you have
          shared with us. However, we do not take responsibility for the
          authenticity of the information or data shared by you, nor we make any
          warranty/ies or representation(s) that the information you provide is
          correct, accurate and shall be suitable for the purpose(s) for which
          it is/was provided
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl py-10 md:py-3">
          Anti-spam check
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          All emails sent to us are subject to spam check. If we suspect that
          such emails are spam or fraudulent, we reserve our right to reject
          such emails and initiate such action against the sender which may
          include but may not be limited to reporting the same to the statutory
          authorities for necessary action.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl py-10 md:py-3">
          Changes to this policy
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          We are committed to conducting our business in accordance with the
          principles outlined in the website Terms and Conditions of use and the
          Privacy Policy in order to ensure that the confidentiality of personal
          information is protected and maintained. We make readily available to
          all our users information about our policies and practices relating to
          the management of personal information and therefore we update our
          Privacy Policy often and it is your responsibility to ensure that you
          keep checking our Privacy Policy for any changes or alterations.
          Please be aware that all revisions and amendments to the Privacy
          Policy shall apply retrospectively.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
