"use client";
import react from "react";

const TermOfUse = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-2xl">
      <div className="w-full term">
        <Terms />
      </div>
      <UseOfWebsite />
      <UnderstandAndAgree />
      <Information />
      <UnderstandAndAgreeNotTo />
      <Disclamer />
    </div>
  );
};

export default TermOfUse;

const Terms = () => {
  return (
    <div className="relative flex flex-col w-full justify-center gap-5 items-center h-screen text-white text-2xl">
      <div className="text-center font-bold font-head text-7xl">
        Terms of use
      </div>
      <div className="text-center text-[16px] md:text-lg font-body w-full px-10 md:max-w-[1300px]">
        By accessing this Website, www.fuworx.com (the “Website”) owned by
        Fuworx Innovations Private Limited (“Fuworx, “We”, “Us”, “Our”), the
        User ( “You or “Your”) agrees to be bound by these Website “Terms and
        Conditions of Use”, which also includes our “Privacy Policy” and all
        applicable laws and regulations. You further agree to be responsible for
        complying with any applicable local laws. We advise you to read the
        Website Terms and Conditions of Use, Privacy Policy\r before accessing
        or using the Website. If you do not agree with any of the Terms and
        Conditions of Use, you are prohibited from using or accessing this
        Website.
      </div>

      {/* WAVE AT BOTTOM */}
      <div className="absolute bottom-[-1px] left-0 w-full h-11 bg-white mask-[url(../public/Updated/Wave.svg)] mask-repeat" />
    </div>
  );
};

const UseOfWebsite = () => {
  return (
    <div className="flex flex-col w-full bg-white gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto text-black text-2xl">
      <div className="font-bold font-head text-5xl">Use of the Website</div>
      <div className="text-wrap text-lg font-body md:max-w-[1300px]">
        Subject to the website Terms and Conditions of Use, Fuworx grants to the
        user a non- exclusive, non- transferable, limited license to access the
        website and the materials therein. You agree that you shall use and
        access this Website according to the Terms and Conditions of Use . You
        understand and agree that Fuworx reserves all rights to immediately
        block, restrict, deny or terminate your access to this Website, without
        prior notice and without assigning any reason, if in
        Fuworx&apos;sreasonable opinion such access would be a breach or
        threatened breach of these Terms and Conditions of Use and/or applicable
        law and/or other guidelines provided on this Website. The provisions in
        the Terms and Conditions of Use regarding disclaimer of warranty,
        accuracy of information and indemnification shall survive such
        termination. You further understand and agree that the blocking or
        denial or termination of access shall be made in Fuworx&apos;s sole
        discretion and that Fuworx shall not be liable to you nor to any
        third-party for any loss or injury whatsoever, caused by blocking/denial
        of your access to this Website. By accepting these terms, you agree not
        to use in any manner the manual or automated software, devices,
        techniques or other processes/procedures to “crawl” or “spider” any web
        pages contained in the Website.
      </div>
    </div>
  );
};

const UnderstandAndAgree = () => {
  return (
    <div className="flex flex-col w-full gap-5 md:py-10 px-10 py-10 md:px-20 h-auto text-white text-2xl">
      <div className="text-left font-bold mt-16 font-head text-5xl">
        You also understand and agree not to
      </div>
      <ul className="text-wrap flex flex-col gap-4 text-lg w-full text-left font-body">
        <li>
          Modify, merge, alter or copy or assist the modification or copying of
          the materials or contents available on our Website or web pages,
          without prior written permission of Fuworx.
        </li>
        <li>
          Use the materials or contents for any commercial purpose, or for any
          public display (commercial or non-commercial).
        </li>
        <li>
          Attempt to decompile or reverse engineer, disassemble any software
          contained on Website.
        </li>
        <li>
          Create derivatives of the Website or any part of it or of any software
          used or embedded in the Website which is used for the functioning of
          the website for the purposes of transmission, resale or reproduction
          of the Website or any part of it in any form whatsoever.
        </li>
        <li>
          Remove any copyright or other proprietary notations from the materials
          or transfer the materials to another person or “mirror” the materials,
          features, appearance of this Website on any other server in whatsoever
          form.
        </li>
        <li>
          Undertake any activity or allow anyone to undertake any activity that
          may hinder or obstruct or interfere or interrupt with the
          working/functioning of the Website or may impose an
          inappropriate/unwanted load on our infrastructure hosting this
          website. Any violation of the foregoing shall vest in Fuworx the right
          to initiate appropriate legal action against you as per the provisions
          of applicable laws in force in India and to obtain such remedies as
          may be available to Fuworx under the applicable laws.
        </li>
      </ul>
      <div className="font-body font-semibold text-lg bg-[#002366]/60 rounded-2xl px-10 py-5">
        Any violation of the foregoing shall vest in Fuworx the right to
        initiate appropriate legal action against you as per the provisions of
        applicable laws in force in India and to obtain such remedies as may be
        available to Fuworx under the applicable laws.
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <div className="flex flex-col w-full gap-5 md:py-10 bg-white px-10 py-10 md:px-20 h-auto text-black text-2xl">
      <div className="font-bold font-head text-5xl py-10 md:py-3">
        Information or posting of content
      </div>
      <div className="text-wrap text-lg flex flex-col gap-2 items-start text-[#0a1f44] font-body w-full">
        <div>
          Our Website may contain certain forms in which you may be required to
          fill in certain information such as name, contact number, email
          address, etc. We maintain complete privacy with respect to the
          information shared with us.
        </div>
        <div>
          To understand how we secure the privacy of information of our users,
          please read our Privacy Policy. During the course of using this
          Website, users may provide information which may be visible to certain
          other users.
        </div>
        <div>
          You understand and agree that posting or uploading comments, materials
          and content on the Website including without limitation feedback and
          other communications irrespective of their nature shall be deemed to
          be non-confidential and you hereby grant us a royalty-free,
          non-exclusive, perpetual, irrevocable transferable license (with the
          right to sublicense) to use, copy, publicly perform, publicly display,
          reformat, translate, excerpt (in whole or in part) and distribute such
          content for any purpose, commercial, advertising, or otherwise, on or
          in connection with this Website or the promotion thereof, to prepare
          derivative works of, or incorporate into other works, such content,
          and to grant and authorize sub-licenses of the foregoing.
          Additionally, you understand and agree that Fuworx retains the right
          to excerpt, translate or reformat any materials submitted by you. You
          understand and agree that Fuworx is free to depict, distribute and
          publicly display such materials, communications and feedback without
          any kind of limitation or obligation including without limitation the
          details of the user.
        </div>{" "}
        <div>
          By accepting these terms, you agree that Fuworx shall have the right
          to use any concepts, ideas, know-how or techniques contained in such
          materials or communications or feedback for any purpose. You further
          agree to hold Fuworx, its directors, agents, officers, employees,
          affiliates, partners, successors, assigns and representatives
          indemnified against all or any claim(s) of copyright infringement or
          defamation, obscenity and/or the violation of other applicable laws.
          You agree that any uploading or sharing any on our Website is at your
          own risk and you understand and agree that all information including
          but not limited to content, text, photograph or video which is
          publicly posted or uploaded or shared or privately transmitted through
          this Website is the sole responsibility of the person from whom such
          content originated and that Fuworx shall not be liable for any errors
          or omissions in any content.
        </div>
        <div>
          By uploading or sharing any content on our Website, you warrant and
          represent to us that you have the right to do so. We do not warrant
          the authenticity or correctness of any data provided by the users
          about themselves. You further grant us the right to use the content
          uploaded by you in any manner whatsoever and agree to hold Fuworx, its
          directors, agents, officers, employees, affiliates, partners,
          successors, assigns and representatives indemnified against all or any
          claim(s) of copyright infringement or defamation, obscenity and/or the
          violation of other applicable laws. In any event, we completely
          reserve the discretion to determine the nature of the content uploaded
          by the user on the website, to screen, filter and/or monitor
          information provided by you and to edit, refuse to distribute and/or
          to remove the same immediately without prior notice without prejudice
          to any of the rights under law to invoke appropriate legal action
          against you, if we reasonably believe at any point of time that the
          content may be subjected to any claims of infringement of intellectual
          property rights or privacy or rights of any third- party, defamation
          or obscenity or the violation of any applicable local laws
        </div>
      </div>
    </div>
  );
};

const UnderstandAndAgreeNotTo = () => {
  return (
    <div className="flex flex-col w-full gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto text-white text-2xl">
      <div className="font-bold font-head text-5xl">
        You understand and agree not to use this website to:
      </div>
      <ul className="text-wrap flex flex-col gap-4 text-lg w-full text-left font-body">
        <li>
          <span className="font-semibold"> (a) </span> Upload, post, e-mail,
          transmit or otherwise make available any content- (a) which is
          unlawful, obscene, defamatory, discriminatory, libelous, abusive,
          harassing or threatening or otherwise objectionable;(b) that infringes
          upon any patents, trademarks, trade secrets, copyrights or other
          proprietary rights;(c) threatens the unity, integrity, defence,
          security or sovereignty of India, friendly relations with foreign
          states, or public order or causes incitement to the commission of any
          cognizable offence or prevents investigation of any offence or is
          insulting any other nation; (d) that contains software viruses or any
          other computer code, files or programs designed to interrupt, destroy
          or limit the functionality of any computer software or hardware or
          telecommunications equipment; (e) belongs to another person and to
          which you do not have any right to; or post any unsolicited or
          unauthorized advertising or business promotional materials, junk
          mails, spam, chain letters;
        </li>
        <li>
          <span className="font-semibold"> (b) </span> Undertake any illegal
          activity, including but not limited to violation of or conspiring to
          violate applicable laws; commit fraud, cheat or falsely state,
          impersonate or misrepresent your identity in any manner whatsoever
        </li>
      </ul>
    </div>
  );
};

const Disclamer = () => {
  return (
    <div className="bg-white text-[#002366] w-full flex flex-col gap-5 px-10 py-5 md:py-20 md:px-20 items-left h-auto">
      <div>
        <div className="font-bold text-black font-head text-5xl py-10 md:py-3">
          Disclaimer of the warranty
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          The information, content, materials on the website are provided on an
          “as is” and “as available” basis. Fuworx makes no representations or
          warranties of any kind, expressed or implied, about the suitability,
          reliability, availability, timeliness, quality, continuity,
          performance, lack of viruses or other harmful components and accuracy
          of the information, software, services and related graphics contained
          within the website for any purpose. To the fullest extent permissible
          by applicable law, Fuworx hereby disclaims and negates all other
          warranties, including without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights. Further, Fuworx does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this website. Fuworx shall not be liable for
          any claims for any loss or damage caused to the user device, operating
          system or software due to virus or worm attacks during the use or
          access of the website while downloading any materials.
        </div>
      </div>
      <div>
        <div className="font-bold text-black font-head text-5xl py-10 md:py-3">
          Limitation of liability
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          In no event shall Fuworx or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on Fuworx’s website, even if Fuworx or its
          authorized representative has been notified orally or in writing of
          the possibility of such damage. Because some jurisdictions do not
          allow limitations on implied warranties, or limitations of liability
          for consequential or incidental damages, these limitations may not
          apply to you.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-black text-5xl py-10 md:py-3">
          Revisions and errata
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          The materials appearing on the website may contain technical,
          typographical, or photographic errors. Fuworx does not warrant that
          any of the materials on its website are accurate, complete, or
          current. Fuworx may make changes to the materials contained on its
          website at any time without notice. Fuworx does not, however, make any
          commitment to update the materials to suit the purposes of any person.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-black text-5xl py-10 md:py-3">
          Links to third-party websites
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          Fuworx does not endorse the content of any/all of the third party
          websites linked to its Website, neither takes any responsibility and
          is not responsible for the contents of any such linked website. The
          inclusion of any link does not imply endorsement by Fuworx of the
          website. Use of any such linked website is at the user’s own risk.
          Fuworx makes no representation that such websites shall be error-free,
          not infected with viruses, or bugs, etc., which may seriously impair
          or cause irreparable damage to your device, operating system, or
          software. We do not monitor or review the content of third party’s
          websites which are linked to this Website. Opinions expressed or
          materials appearing on such websites are not necessarily shared or
          endorsed by us and Fuworx should not be regarded as the publisher of
          such opinions or material. Please be aware that we are not responsible
          for the privacy practices, or content, of these sites. We encourage
          our users to be aware when they leave our Website to read the privacy
          statements of these websites before using them. You understand and
          acknowledge that it is your responsibility to evaluate the security
          and trustworthiness of any other website connected to our website or
          accessed through this website before disclosing any personal
          information to them. Fuworx does not accept any responsibility for any
          loss or damage in whatever manner, howsoever caused, resulting from
          your disclosure to third parties of your personal information. In no
          event, Fuworx shall be liable for claims of any loss or injury by the
          user due to the use of the third-party websites. This Website may
          contain links on which you can share information relating to Fuworx or
          carry out platform discussions on various social networking websites
          like Facebook, Twitter, etc. You agree that the use and access of such
          third-party social networking websites is at your own risk and Fuworx
          shall not be responsible for any loss, injury or damage whatsoever
          caused to you by the use and access of the third-party social
          networking sites.
        </div>
      </div>
      <div>
        <div className="font-bold text-black font-head text-5xl py-10 md:py-3">
          Log files
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          We use IP addresses to analyze trends, administer the website, track
          user’s movement, and gather broad demographic information for
          aggregate use. IP addresses are not linked to personally identifiable
          information. Additionally, for systems administration, detecting usage
          patterns and troubleshooting purposes, our web servers automatically
          log standard access information including browser type, access
          times/open mail, URL requested, and referral URL. This information is
          not shared with third parties and is used only within Fuworx on a
          need-to- know basis. Any individually identifiable information related
          to this data will never be used in any way different to that stated
          above without your explicit permission.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl text-black py-10 md:py-3">
          Cookies
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          Like most other interactive websites Fuworx uses cookies to retrieve
          user details for each visit. Cookies are used in some areas of our
          website to enable the functionality of the specific area and ease of
          use for the users visiting or accessing our website.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl text-black py-10 md:py-3">
          Intellectual property
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          All material, content, software, text, images, graphics, video and
          audio presentations on this website is the exclusive property of
          Fuworx. Except as indicated otherwise, you may view, copy, download
          and print the material and information available on the website for
          personal, non-commercial and legitimate purposes only and that every
          time you share or make use of the information, material or content
          from this website, you shall acknowledge the contribution of Fuworx.
          No material from this Website may be copied, modified, reproduced,
          republished, uploaded, transmitted, posted or distributed in any form
          without prior written permission from Fuworx. You agree and
          acknowledge that any unauthorized use of the materials appearing on
          this website may constitute the violation of rights of Fuworx under
          copyright, trademark and other Intellectual Property laws and that you
          shall be solely liable for the violation of such Intellectual Property
          laws due to such unauthorized use. Any infringement of copyright or
          intellectual property rights shall entitle Fuworx to institute
          appropriate legal action- whether civil or criminal against such
          infringement.
        </div>
      </div>
      <div>
        <div className="font-bold text-black font-head text-5xl py-10 md:py-3">
          Force majeure
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          Fuworx shall not be liable to you for any failure to perform any
          obligation under these terms which is due to an event beyond the
          control of Fuworx including but not limited to any Act of God,
          terrorism, war, political insurgence, insurrection, riot, civil
          unrest, act of civil or military authority, uprising, earthquakes,
          floods or any other natural or man-made eventuality, disruption or
          unavailability of communication facilities, failure of internet, cyber
          attack, vandalism and for any other reasons outside of our control,
          which could not have been reasonably foreseen by Fuworx. Fuworx claims
          no responsibility for any error, omission, interruption, deletion,
          defect, delay in operation or inaccuracies in transmission,
          destruction, alteration of, or unauthorized access to content, or loss
          or destruction of content whether or not arising during the operation
          or transmission as a result of server functions, virus, worms or other
          causes outside its control.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl text-black py-10 md:py-3">
          Indemnification
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          By accepting these Website Terms and Conditions of Use , you agree to
          indemnify and hold harmless Fuworx and its partners, subsidiaries,
          affiliates, directors, agents, and employees, representatives,
          successors, and assigns from any and all claims, liability, damages
          (direct, indirect, incidental, special, consequential or exemplary)
          and/or costs (including but not limited to legal fees), arising
          against Fuworx, from your use or access of this website or out of your
          breach of the Terms and Conditions of Use and the Disclaimer, or your
          violation of any law, rules or regulations. Under no circumstances,
          the remedy of Fuworx to be indemnified be construed as limiting the
          right(s) of Fuworx to invoke such rights as are/may be available to
          Fuworx under the laws in force.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-5xl text-black py-10 md:py-3">
          Waiver
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          A mere failure by Fuworx to exercise a legal right or remedy provided
          by these Terms and Conditions of Use shall not be constitute a waiver
          of Fuworx’s right.
        </div>
      </div>
      <div>
        <div className="font-bold font-head text-black text-5xl py-10 md:py-3">
          Severability
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          If any part or provision in these Terms and Conditions of Use is found
          to be unenforceable or invalid, such part shall not affect the rest of
          the parts of these Terms and Conditions of Use and the Disclaimer, and
          it shall be construed as if such invalid portion did not exist
          therein.
        </div>
      </div>
      <div>
        <div className="font-bold  text-black font-head text-5xl py-10 md:py-3">
          Website Terms and Conditions of Use modifications
        </div>
        <div className="text-wrap text-lg font-body md:max-w-[1300px]">
          <div>
            Fuworx may revise these Terms and Conditions of Use for its Website
            at any time without notice. By using this Website you agree to be
            bound by the current version of the Website Terms and Conditions of
            Use and every time you use or access the Website, you agree to be
            bound by the amended or modified Terms and Conditions of Use.
          </div>
        </div>
        <div>
          <div className="font-bold text-black font-head text-5xl py-10 md:py-3">
            Contact information
          </div>
          <div className="text-wrap text-lg font-body md:max-w-[1300px]">
            If you have any questions, or comments about our Terms and
            Conditions of Use or Privacy Policy or would like to raise any
            complaints/grievances, you can contact us via{" "}
            <span>info@fuworx.com</span>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
