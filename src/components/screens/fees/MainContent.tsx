"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"

export default function FeesPage() {
  const t = useTranslations("fees")
  const tableData = t.raw("tableData")
  const tableHeaders = t.raw("tableHeaders")

  return (
    <div className="container-md my-12">
      <Card className="shadow-none rounded-md mb-3">
        <CardContent className="space-y-4 ">
          <p>{t("description.paragraph1")}</p>
          <p>{t("description.paragraph2")}</p>
          <ul className="list-disc list-inside pl-4">
            {t.raw("description.paymentMethods").map((method: string, i: number) => (
              <li key={i}>{method}</li>
            ))}
          </ul>
          <p>{t("description.paragraph3")}</p>
          <p>{t("description.paragraph4")}</p>
        </CardContent>
      </Card>

      <div className="overflow-auto rounded-md border ">
      <h2 className="text-2xl font-bold p-5">{t("title")}</h2>

        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              {tableHeaders.map((header: string, i: number) => (
                <th key={i} className="px-4 py-2 font-semibold text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, i: number) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{row.service || ""}</td>
                <td className="px-4 py-2">{row.currency}</td>
                <td className="px-4 py-2">{row.fees}</td>
                <td className="px-4 py-2">{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
