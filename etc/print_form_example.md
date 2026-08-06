# 인쇄폼 예제

## html
```html
<div class="print01">
	<table style="width: 100%;border-top: 2px solid #000;border-bottom: 2px solid #222;line-height: 1.5;">
		<tr><td style="padding-top: 2px;border-top: 1px solid #000;"></td></tr>
		<tr>
			<td rowspan="2" style="padding: 10px; border:1px solid #000;border-left: 0;">
				<div class="logo_wrap" style="width: 156px;  margin: 0 auto; ">
					<img src="/assets/images/main/main_logo01_pc.png" alt="" style="display: block;width: 100%; height: 100%;">
				</div>
			</td>
			<td style="font-size: 22px; color: #000;padding: 12px 5px;font-weight: 600;text-align: center;border:1px solid #000; background: #eee;">유정글로벌학교 2학기 특기적성 통신</td>
			<td rowspan="2" style="text-align: center;padding: 12px 5px;font-size: 15px; color: #000;font-weight: 500;border:1px solid #000;border-right: 0;">
				<p>대표전화 031)543-3005</p>
				<p>www.yujungschool.or.kr</p>
			</td>
		</tr>
		<tr>
			<td style="font-size: 15px; color: #000; font-weight: 600;padding: 12px 5px;text-align: center;border:1px solid #000; background: #eee;">방과후 특성화(특기) 과정 수업료 내역 안내</td>
		</tr>
		<tr><td style="padding-top: 2px;border-top: 1px solid #000;"></td></tr>
	</table>
	
	<div class="txt01" style="margin: 30px 0;">
		<p style="font-size: 15px; color: #000; line-height: 1.7; font-weight: 500; text-align: justify;word-break: keep-all;">안녕하십니까? 유난히도 무더웠던 올여름 댁내 모두 평안하셨는지요 <br>
		본교는 자녀들의 특기 및 소질을 계발하고 사교육비 절감을 위해 방과후 (특기) 교육과정을 운영하고
		있습니다. 신청하신 자녀의 방과후 특성화(특기) 수강 신청 내역을 확인하시고 신청 과목 수업료를 안내드리오니 기간 내 납부해 주시기 바랍니다.
		</p>
	</div><!-- txt01 -->
	
	<div class="txt02" style="text-align: center;margin-bottom: 10px;">
		<p style="font-size: 20px; color: #000; font-weight: 600;">1학년 장미반 <i style="display: inline-block; width: 20px;"></i> 이름 : 강 건</p>
	</div><!-- txt02 -->
	
	<table style="width: 100%;line-height: 1.5;table-layout: fixed; margin-bottom: 4px;">
		<tr>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">시간</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">월,수</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">화,목</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">금</th>
		</tr>
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 <br>
				(2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				축구 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				독서논술 1 
			</td>
		</tr>			
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				2교시 <br>
				(3:50 - 4:40)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				골프 2
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				생명과학 2
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				드론항공과학 2 
			</td>
		</tr>			
	</table>
	
	<table style="width: 100%;line-height: 1.5;margin-bottom: 4px;">
		<tr>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">특기과목</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">특기요일</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">시&nbsp&nbsp간</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">수업료(원)</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">산출기초</th>
		</tr>
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>		
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>		
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>		
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>		
		<tr>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				Speak easy (1) - a
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월수 1
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				1교시 (2:40 - 3:30)
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				375,000 
			</td>
			<td style="padding: 3px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:center;">
				월 75,000원 x 5개월 <br>
				(1학기분)
			</td>
		</tr>		
		<tr>
			<td colspan="3" style="padding: 10px 3px; font-size: 14px; color: #000; background: #eee; font-weight: 600;border:1px solid #000;text-align:center;">합계</td>
			<td colspan="2" style="padding: 10px 3px; font-size: 14px; color: #000; background: #eee; font-weight: 600;border:1px solid #000;text-align:center;">2,505,000원</td>
		</tr>
	</table>
	
	<table style="width: 100%;line-height: 1.5;margin-bottom: 30px;">
		<tr>
			<th colspan="2" style="width: 260px;padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">납기일</th>
			<td style="padding: 8px 10px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:left;">2024년 8월30일(금)</td>
		</tr>
		<tr>
			<th rowspan="2" style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">납부<br>방법</th>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">무통장납부</th>
			<td style="padding: 8px 10px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:left;">우리은행 1005-880-249249 유정학교</td>
		</tr>
		<tr>
			<th style="padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">신용카드납부</th>
			<td style="padding: 8px 10px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:justify;word-break:keep-all; ">
				<p style="margin-bottom: 5px;">카드로 결제를 원하시는 학부모님들께서는 학생 편으로 카드를 보내주시면 결제 완료 후 카드와 영수증을 학생 편으로 다시 보내드리겠습니다. </p>
				<p>※ 방과후 특성화 과목 중 교재(교구), 재료비가 필요한 경우 강사가 별도로 청구할 수 있습니다.</p>
			</td>
		</tr>
		<tr>
			<th colspan="2" style="width: 260px;padding: 5px;background: #eee; font-size: 14px; color: #000; font-weight: 600;border:1px solid #000;text-align:center;">기타 안내</th>
			<td style="padding: 8px 10px; font-size: 14px; color: #000; font-weight: 500;border:1px solid #000;text-align:left;">
				무통장 입금시에는 반드시 <학년, 반 및 학생이름>으로 입금해주세요. <br>
				<예. 1백합 김유정>
			</td>
		</tr>
	</table>
	
	<div class="txt03" >
		<p style="font-size: 16px; color: #000; font-weight: 600;line-height: 1.2;text-align: center; margin-bottom:7px;">2024. 08. 16</p>
		<strong style="display: block;font-size: 28px; color: #000; font-weight: 700;line-height: 1.2;text-align: center;">유&nbsp정&nbsp글&nbsp로&nbsp벌&nbsp학&nbsp교&nbsp장</strong>	
	</div><!-- txt03 -->
</div><!-- print01 -->

```
## css
```css
@page2 {/* size: A4; */size:210mm 297mm; margin: 0;}
* {
  -webkit-print-color-adjust: exact !important;   /* Chrome, Safari 6 – 15.3, Edge */
  color-adjust: exact !important;                 /* Firefox 48 – 96 */
  print-color-adjust: exact !important;           /* Firefox 97+, Safari 15.4+ */
}
@media print {
.print01{margin:0; border: initial; border-radius: initial; width: initial; min-height: initial; box-shadow: initial; background: initial; page-break-after: always;}
body{margin: 0;padding: 0;height: auto;margin-top: 0;}
}

.print01 {width: 210mm; min-height: 297mm; padding: 0mm; margin: 6mm auto; }
.print01 table tr th,
.print01 table tr td{line-height: 1.5;}
```
