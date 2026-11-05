
"use client";

import { useMemo, useState } from "react";
import {
  Printer,
  Search,
  ArrowUpDown,
} from "lucide-react";

import Navbar from "../../component/sidebar/page";
import Topbar from "../../component/navbar/page";

const initialRows = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  code: "P0115000002679",
  branch: "P0000",
  count: 319,
  date: "05/10/2026",
}));

export default function PrintingRequestPage() {
  const [rows] = useState(initialRows);
  const [selected, setSelected] = useState([]);
  const [branch, setBranch] = useState("all");
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredRows = useMemo(() => {
    return rows
      .filter(
        (row) => branch === "all" || row.branch === branch
      )
      .filter((row) =>
        row.code.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sortAsc ? a.id - b.id : b.id - a.id
      );
  }, [rows, branch, search, sortAsc]);

  const allSelected =
    filteredRows.length > 0 &&
    filteredRows.every((row) => selected.includes(row.id));

  function toggleAll() {
    setSelected((current) =>
      allSelected
        ? current.filter(
            (id) => !filteredRows.some((row) => row.id === id)
          )
        : [
            ...new Set([
              ...current,
              ...filteredRows.map((row) => row.id),
            ]),
          ]
    );
  }

  function toggleRow(id) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    

        <div className="mx-auto w-full max-w-[1500px] space-y-card p-layout">

          {/* Page Header */}
          <header className="rounded-card bg-linear-to-r from-primary to-secondary p-card text-white shadow-card">

            <h1 className="text-heading font-medium">
              ส่วนของการพิมพ์ป้ายราคาของ สห ลอว์สัน
            </h1>

            <p className="mt-1 text-label">
              ป้ายรายการทั้งหมดที่เข้าสู่ระบบ ณ วันนี้ตามสาขาที่เลือก
            </p>

            <p className="mt-1 text-label text-warning-light">
              *** การจัดลำดับ Tier list เป็นข้อมูลล่าสุดของเดือน
              05/2026 (ข้อมูลที่แสดงยังไม่เป็นทางการ)
            </p>

          </header>

          {/* Section Title */}
          <div className="flex flex-wrap items-center justify-between gap-3">

            <h2 className="text-subheading font-medium">
              รายการคำร้องขอทั้งหมด
            </h2>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="rounded-input border border-slate-200 bg-white px-3 py-2 text-label shadow-card outline-none focus:border-secondary"
            >
              <option value="all">เลือกสาขา</option>
              <option value="P0000">
                P0000 - ร้านแรกทดลอง
              </option>
            </select>

          </div>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 gap-card sm:grid-cols-3">

            <article className="rounded-card bg-white p-card shadow-card">
              <span className="text-caption text-primary">
                รวมสาขา
              </span>

              <p className="text-subheading font-bold text-primary">
                269 <small className="text-caption font-normal">สาขา</small>
              </p>
            </article>

            <article className="rounded-card bg-white p-card shadow-card">
              <span className="text-caption text-primary">
                รวมรายการ
              </span>

              <p className="text-subheading font-bold text-primary">
                25066 <small className="text-caption font-normal">รายการ</small>
              </p>
            </article>

            <article className="rounded-card bg-white p-card shadow-card">
              <span className="text-caption text-primary">
                รวมป้ายทั้งหมด
              </span>

              <p className="text-subheading font-bold text-primary">
                570664 <small className="text-caption font-normal">ป้าย</small>
              </p>
            </article>

          </section>

          {/* Data Table */}
          <section className="overflow-hidden rounded-card bg-white shadow-card">

            {/* Toolbar */}
            <div className="flex flex-wrap items-end justify-between gap-3 p-card">

              <label className="flex w-full max-w-sm flex-col gap-1 text-caption text-gray">

                ค้นหาเลขที่เอกสาร

                <div className="flex items-center gap-2 rounded-input border border-slate-200 px-3 focus-within:border-secondary">
                  <Search size={17} className="shrink-0 text-primary" />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ค้นหารหัสเอกสาร..."
                    className="w-full py-2 text-body text-black outline-none"
                  />
                </div>

              </label>

              <span className="text-caption text-gray">
                เลือกแล้ว {selected.length} รายการ
              </span>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full min-w-[600px] border-collapse">

                <thead className="bg-primary text-white">

                  <tr className="text-left text-caption">

                    <th className="w-12 px-3 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={toggleAll}
                        aria-label="เลือกทั้งหมด"
                        className="accent-secondary"
                      />
                    </th>

                    <th className="px-3 py-3">
                      <button
                        onClick={() => setSortAsc((value) => !value)}
                        className="inline-flex items-center gap-2"
                      >
                        เลขที่เอกสาร
                        <ArrowUpDown size={14} />
                      </button>
                    </th>

                    <th className="px-3 py-3 text-center">
                      <button
                        onClick={() => setSortAsc((value) => !value)}
                        className="inline-flex items-center gap-2"
                      >
                        จำนวนป้าย / วันที่
                        <ArrowUpDown size={14} />
                      </button>
                    </th>

                    <th className="px-3 py-3 text-center">
                      พิมพ์ใบรายการ
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredRows.map((row) => (

                    <tr
                      key={row.id}
                      className="border-b border-slate-100 text-caption transition hover:bg-blue-50"
                    >

                      <td className="px-3 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={selected.includes(row.id)}
                          onChange={() => toggleRow(row.id)}
                          aria-label={`เลือกรายการ ${row.code}`}
                          className="accent-secondary"
                        />
                      </td>

                      <td className="px-3 py-2 font-bold">
                        {row.code}
                      </td>

                      <td className="px-3 py-2 text-center">
                        <strong className="mr-3">{row.count}</strong>
                        <span>{row.date}</span>
                      </td>

                      <td className="px-3 py-2 text-center">
                        <button
                          title={`พิมพ์ ${row.code}`}
                          aria-label={`พิมพ์ ${row.code}`}
                          onClick={() => window.print()}
                          className="rounded-button p-1 text-primary transition hover:bg-blue-100 hover:text-secondary"
                        >
                          <Printer size={18} strokeWidth={1.8} />
                        </button>
                      </td>

                    </tr>

                  ))}

                  {filteredRows.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="p-8 text-center text-label text-gray"
                      >
                        ไม่พบรายการที่ค้นหา
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

            {/* Table Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-card">

              <span className="text-caption text-gray">
                แสดง {filteredRows.length} จาก {rows.length} รายการ
              </span>

              <button
                disabled={selected.length === 0}
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-button bg-primary px-4 py-2.5 text-label font-semibold text-white shadow-card transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Printer size={17} />
                พิมพ์รายการที่เลือก ({selected.length})
              </button>

            </div>

          </section>

          {/* Company Footer */}
          <footer className="rounded-panel border border-slate-200 bg-white p-card shadow-card">

            <div className="space-y-0.5 text-body leading-relaxed text-black">

              <p>
                <strong>บริษัท สห ลอว์สัน จำกัด</strong>{" "}
                2170 ชั้นที่ 3 อาคารกรุงเทพ ทาวเวอร์
                ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ
                เขตห้วยขวาง กรุงเทพมหานคร 10310
              </p>

              <p>โทร. 0-2308-0703</p>

              <p>โทรสาร 0-2308-0701-2</p>

              <p>
                Email: info@sahalawson.co.th
              </p>

            </div>

          </footer>

        </div>
      
  );
}
