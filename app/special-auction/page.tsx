export const dynamic = 'force-dynamic';

import { PageHeader } from "@/components/PageHeader";
import { Star, Gavel, Sparkles, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SpecialAuction() {
  const specialTiers = [
    {
      title: "Marquee Round",
      badge: "Tier 1",
      description: "Priority bidding round for tournament star captains and marquee all-rounders.",
      status: "Scheduled",
      multiplier: "3x Base Cap",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Wildcard Draft",
      badge: "Tier 2",
      description: "Late entry talents and surprise picks available under blind auction rules.",
      status: "Upcoming",
      multiplier: "1.5x Base Cap",
      icon: <Sparkles className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Roster Protection",
      badge: "Tier 3",
      description: "Houses utilize retention cards to shield homegrown players before open bidding.",
      status: "Active",
      multiplier: "Fixed Retainer",
      icon: <Shield className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      <PageHeader title="Special Auction & Marquee Draft" />
      <div className="p-6 space-y-8 flex-1 overflow-y-auto">
        
        {/* Banner Card */}
        <div className="bg-card border border-border/60 p-8 clip-angled relative shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-primary to-accent"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30 text-xs font-bold uppercase tracking-widest clip-angled">
                  VIP Bidding Room
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" /> High Stakes Stage
                </span>
              </div>
              <h2 className="text-3xl font-display font-black uppercase tracking-wider text-foreground">
                Hostel Premier League Special Draft
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                Exclusive bidding module for marquee players, team retentions, and rapid wildcard acquisitions. Monitor house purses and strategic advantages before the standard block rounds.
              </p>
            </div>
            <Link
              href="/auction"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest text-sm clip-angled flex items-center gap-2 transition-transform hover:scale-105 shrink-0 shadow-sm"
            >
              <Gavel className="w-4 h-4" /> Go To Live Auction <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Special Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialTiers.map((tier) => (
            <div key={tier.title} className="bg-card border border-border/60 p-6 clip-angled relative flex flex-col justify-between group hover:border-primary/50 transition-all shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-muted rounded-md">{tier.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 clip-angled">
                    {tier.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide text-foreground">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">Valuation Cap</span>
                  <span className="text-sm font-display font-bold text-primary">{tier.multiplier}</span>
                </div>
                <span className="text-xs font-semibold uppercase px-2.5 py-1 bg-muted text-foreground border border-border/50">
                  {tier.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Rules Quick Reference */}
        <div className="bg-card border border-border/60 p-6 clip-angled shadow-sm">
          <h3 className="text-lg font-display font-bold uppercase tracking-wider text-foreground mb-4">
            Special Auction Regulations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-background border border-border/50 clip-angled">
              <span className="font-bold uppercase text-primary block mb-1">1. Purse Constraints</span>
              <p className="text-muted-foreground">Each house must maintain a minimum buffer of ₹2,000 for standard group rounds after special auction allocations.</p>
            </div>
            <div className="p-4 bg-background border border-border/50 clip-angled">
              <span className="font-bold uppercase text-primary block mb-1">2. Overlap Handling</span>
              <p className="text-muted-foreground">Any player acquired through the special marquee draft will automatically lock overlapping sports groups.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
