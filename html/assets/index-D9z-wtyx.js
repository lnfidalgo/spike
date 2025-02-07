var n_ = Object.defineProperty;
var r_ = (e, t, r) =>
	t in e
		? n_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
		: (e[t] = r);
var ds = (e, t, r) => r_(e, typeof t != 'symbol' ? t + '' : t, r);
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
	new MutationObserver((s) => {
		for (const u of s)
			if (u.type === 'childList')
				for (const f of u.addedNodes)
					f.tagName === 'LINK' && f.rel === 'modulepreload' && o(f);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(s) {
		const u = {};
		return (
			s.integrity && (u.integrity = s.integrity),
			s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
			s.crossOrigin === 'use-credentials'
				? (u.credentials = 'include')
				: s.crossOrigin === 'anonymous'
					? (u.credentials = 'omit')
					: (u.credentials = 'same-origin'),
			u
		);
	}
	function o(s) {
		if (s.ep) return;
		s.ep = !0;
		const u = r(s);
		fetch(s.href, u);
	}
})();
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function mh(e) {
	const t = Object.create(null);
	for (const r of e.split(',')) t[r] = 1;
	return (r) => r in t;
}
const mt = {},
	bs = [],
	qr = () => {},
	i_ = () => !1,
	mc = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	vh = (e) => e.startsWith('onUpdate:'),
	en = Object.assign,
	yh = (e, t) => {
		const r = e.indexOf(t);
		r > -1 && e.splice(r, 1);
	},
	o_ = Object.prototype.hasOwnProperty,
	wt = (e, t) => o_.call(e, t),
	Fe = Array.isArray,
	ws = (e) => pa(e) === '[object Map]',
	vc = (e) => pa(e) === '[object Set]',
	pm = (e) => pa(e) === '[object Date]',
	je = (e) => typeof e == 'function',
	Rt = (e) => typeof e == 'string',
	Tr = (e) => typeof e == 'symbol',
	St = (e) => e !== null && typeof e == 'object',
	Iy = (e) => (St(e) || je(e)) && je(e.then) && je(e.catch),
	Fy = Object.prototype.toString,
	pa = (e) => Fy.call(e),
	s_ = (e) => pa(e).slice(8, -1),
	Hy = (e) => pa(e) === '[object Object]',
	bh = (e) =>
		Rt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	Nl = mh(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
	),
	yc = (e) => {
		const t = Object.create(null);
		return (r) => t[r] || (t[r] = e(r));
	},
	l_ = /-(\w)/g,
	er = yc((e) => e.replace(l_, (t, r) => (r ? r.toUpperCase() : ''))),
	a_ = /\B([A-Z])/g,
	yi = yc((e) => e.replace(a_, '-$1').toLowerCase()),
	bc = yc((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	Cu = yc((e) => (e ? `on${bc(e)}` : '')),
	qn = (e, t) => !Object.is(e, t),
	Eu = (e, ...t) => {
		for (let r = 0; r < e.length; r++) e[r](...t);
	},
	qy = (e, t, r, o = !1) => {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			writable: o,
			value: r,
		});
	},
	wd = (e) => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	By = (e) => {
		const t = Rt(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let gm;
const wc = () =>
	gm ||
	(gm =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
				? self
				: typeof window < 'u'
					? window
					: typeof global < 'u'
						? global
						: {});
function Qt(e) {
	if (Fe(e)) {
		const t = {};
		for (let r = 0; r < e.length; r++) {
			const o = e[r],
				s = Rt(o) ? d_(o) : Qt(o);
			if (s) for (const u in s) t[u] = s[u];
		}
		return t;
	} else if (Rt(e) || St(e)) return e;
}
const u_ = /;(?![^(]*\))/g,
	c_ = /:([^]+)/,
	f_ = /\/\*[^]*?\*\//g;
function d_(e) {
	const t = {};
	return (
		e
			.replace(f_, '')
			.split(u_)
			.forEach((r) => {
				if (r) {
					const o = r.split(c_);
					o.length > 1 && (t[o[0].trim()] = o[1].trim());
				}
			}),
		t
	);
}
function it(e) {
	let t = '';
	if (Rt(e)) t = e;
	else if (Fe(e))
		for (let r = 0; r < e.length; r++) {
			const o = it(e[r]);
			o && (t += o + ' ');
		}
	else if (St(e)) for (const r in e) e[r] && (t += r + ' ');
	return t.trim();
}
function h_(e) {
	if (!e) return null;
	let { class: t, style: r } = e;
	return t && !Rt(t) && (e.class = it(t)), r && (e.style = Qt(r)), e;
}
const p_ =
		'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	g_ = mh(p_);
function Wy(e) {
	return !!e || e === '';
}
function m_(e, t) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let o = 0; r && o < e.length; o++) r = xc(e[o], t[o]);
	return r;
}
function xc(e, t) {
	if (e === t) return !0;
	let r = pm(e),
		o = pm(t);
	if (r || o) return r && o ? e.getTime() === t.getTime() : !1;
	if (((r = Tr(e)), (o = Tr(t)), r || o)) return e === t;
	if (((r = Fe(e)), (o = Fe(t)), r || o)) return r && o ? m_(e, t) : !1;
	if (((r = St(e)), (o = St(t)), r || o)) {
		if (!r || !o) return !1;
		const s = Object.keys(e).length,
			u = Object.keys(t).length;
		if (s !== u) return !1;
		for (const f in e) {
			const d = e.hasOwnProperty(f),
				h = t.hasOwnProperty(f);
			if ((d && !h) || (!d && h) || !xc(e[f], t[f])) return !1;
		}
	}
	return String(e) === String(t);
}
function Uy(e, t) {
	return e.findIndex((r) => xc(r, t));
}
const Vy = (e) => !!(e && e.__v_isRef === !0),
	He = (e) =>
		Rt(e)
			? e
			: e == null
				? ''
				: Fe(e) || (St(e) && (e.toString === Fy || !je(e.toString)))
					? Vy(e)
						? He(e.value)
						: JSON.stringify(e, jy, 2)
					: String(e),
	jy = (e, t) =>
		Vy(t)
			? jy(e, t.value)
			: ws(t)
				? {
						[`Map(${t.size})`]: [...t.entries()].reduce(
							(r, [o, s], u) => ((r[Gf(o, u) + ' =>'] = s), r),
							{},
						),
					}
				: vc(t)
					? { [`Set(${t.size})`]: [...t.values()].map((r) => Gf(r)) }
					: Tr(t)
						? Gf(t)
						: St(t) && !Fe(t) && !Hy(t)
							? String(t)
							: t,
	Gf = (e, t = '') => {
		var r;
		return Tr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
	};
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Cn;
class v_ {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this._isPaused = !1),
			(this.parent = Cn),
			!t && Cn && (this.index = (Cn.scopes || (Cn.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let t, r;
			if (this.scopes)
				for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
			for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let t, r;
			if (this.scopes)
				for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
			for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume();
		}
	}
	run(t) {
		if (this._active) {
			const r = Cn;
			try {
				return (Cn = this), t();
			} finally {
				Cn = r;
			}
		}
	}
	on() {
		Cn = this;
	}
	off() {
		Cn = this.parent;
	}
	stop(t) {
		if (this._active) {
			let r, o;
			for (r = 0, o = this.effects.length; r < o; r++) this.effects[r].stop();
			for (r = 0, o = this.cleanups.length; r < o; r++) this.cleanups[r]();
			if (this.scopes)
				for (r = 0, o = this.scopes.length; r < o; r++) this.scopes[r].stop(!0);
			if (!this.detached && this.parent && !t) {
				const s = this.parent.scopes.pop();
				s &&
					s !== this &&
					((this.parent.scopes[this.index] = s), (s.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function Gy() {
	return Cn;
}
function y_(e, t = !1) {
	Cn && Cn.cleanups.push(e);
}
let _t;
const Kf = new WeakSet();
class Ky {
	constructor(t) {
		(this.fn = t),
			(this.deps = void 0),
			(this.depsTail = void 0),
			(this.flags = 5),
			(this.next = void 0),
			(this.cleanup = void 0),
			(this.scheduler = void 0),
			Cn && Cn.active && Cn.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 &&
			((this.flags &= -65), Kf.has(this) && (Kf.delete(this), this.trigger()));
	}
	notify() {
		(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Yy(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		(this.flags |= 2), mm(this), Zy(this);
		const t = _t,
			r = xr;
		(_t = this), (xr = !0);
		try {
			return this.fn();
		} finally {
			Jy(this), (_t = t), (xr = r), (this.flags &= -3);
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let t = this.deps; t; t = t.nextDep) Sh(t);
			(this.deps = this.depsTail = void 0),
				mm(this),
				this.onStop && this.onStop(),
				(this.flags &= -2);
		}
	}
	trigger() {
		this.flags & 64
			? Kf.add(this)
			: this.scheduler
				? this.scheduler()
				: this.runIfDirty();
	}
	runIfDirty() {
		xd(this) && this.run();
	}
	get dirty() {
		return xd(this);
	}
}
let Xy = 0,
	$l,
	Pl;
function Yy(e, t = !1) {
	if (((e.flags |= 8), t)) {
		(e.next = Pl), (Pl = e);
		return;
	}
	(e.next = $l), ($l = e);
}
function wh() {
	Xy++;
}
function xh() {
	if (--Xy > 0) return;
	if (Pl) {
		let t = Pl;
		for (Pl = void 0; t; ) {
			const r = t.next;
			(t.next = void 0), (t.flags &= -9), (t = r);
		}
	}
	let e;
	for (; $l; ) {
		let t = $l;
		for ($l = void 0; t; ) {
			const r = t.next;
			if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
				try {
					t.trigger();
				} catch (o) {
					e || (e = o);
				}
			t = r;
		}
	}
	if (e) throw e;
}
function Zy(e) {
	for (let t = e.deps; t; t = t.nextDep)
		(t.version = -1),
			(t.prevActiveLink = t.dep.activeLink),
			(t.dep.activeLink = t);
}
function Jy(e) {
	let t,
		r = e.depsTail,
		o = r;
	for (; o; ) {
		const s = o.prevDep;
		o.version === -1 ? (o === r && (r = s), Sh(o), b_(o)) : (t = o),
			(o.dep.activeLink = o.prevActiveLink),
			(o.prevActiveLink = void 0),
			(o = s);
	}
	(e.deps = t), (e.depsTail = r);
}
function xd(e) {
	for (let t = e.deps; t; t = t.nextDep)
		if (
			t.dep.version !== t.version ||
			(t.dep.computed && (Qy(t.dep.computed) || t.dep.version !== t.version))
		)
			return !0;
	return !!e._dirty;
}
function Qy(e) {
	if (
		(e.flags & 4 && !(e.flags & 16)) ||
		((e.flags &= -17), e.globalVersion === Ul)
	)
		return;
	e.globalVersion = Ul;
	const t = e.dep;
	if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !xd(e))) {
		e.flags &= -3;
		return;
	}
	const r = _t,
		o = xr;
	(_t = e), (xr = !0);
	try {
		Zy(e);
		const s = e.fn(e._value);
		(t.version === 0 || qn(s, e._value)) && ((e._value = s), t.version++);
	} catch (s) {
		throw (t.version++, s);
	} finally {
		(_t = r), (xr = o), Jy(e), (e.flags &= -3);
	}
}
function Sh(e, t = !1) {
	const { dep: r, prevSub: o, nextSub: s } = e;
	if (
		(o && ((o.nextSub = s), (e.prevSub = void 0)),
		s && ((s.prevSub = o), (e.nextSub = void 0)),
		r.subs === e && ((r.subs = o), !o && r.computed))
	) {
		r.computed.flags &= -5;
		for (let u = r.computed.deps; u; u = u.nextDep) Sh(u, !0);
	}
	!t && !--r.sc && r.map && r.map.delete(r.key);
}
function b_(e) {
	const { prevDep: t, nextDep: r } = e;
	t && ((t.nextDep = r), (e.prevDep = void 0)),
		r && ((r.prevDep = t), (e.nextDep = void 0));
}
let xr = !0;
const e0 = [];
function io() {
	e0.push(xr), (xr = !1);
}
function oo() {
	const e = e0.pop();
	xr = e === void 0 ? !0 : e;
}
function mm(e) {
	const { cleanup: t } = e;
	if (((e.cleanup = void 0), t)) {
		const r = _t;
		_t = void 0;
		try {
			t();
		} finally {
			_t = r;
		}
	}
}
let Ul = 0;
class w_ {
	constructor(t, r) {
		(this.sub = t),
			(this.dep = r),
			(this.version = r.version),
			(this.nextDep =
				this.prevDep =
				this.nextSub =
				this.prevSub =
				this.prevActiveLink =
					void 0);
	}
}
class Sc {
	constructor(t) {
		(this.computed = t),
			(this.version = 0),
			(this.activeLink = void 0),
			(this.subs = void 0),
			(this.map = void 0),
			(this.key = void 0),
			(this.sc = 0);
	}
	track(t) {
		if (!_t || !xr || _t === this.computed) return;
		let r = this.activeLink;
		if (r === void 0 || r.sub !== _t)
			(r = this.activeLink = new w_(_t, this)),
				_t.deps
					? ((r.prevDep = _t.depsTail),
						(_t.depsTail.nextDep = r),
						(_t.depsTail = r))
					: (_t.deps = _t.depsTail = r),
				t0(r);
		else if (r.version === -1 && ((r.version = this.version), r.nextDep)) {
			const o = r.nextDep;
			(o.prevDep = r.prevDep),
				r.prevDep && (r.prevDep.nextDep = o),
				(r.prevDep = _t.depsTail),
				(r.nextDep = void 0),
				(_t.depsTail.nextDep = r),
				(_t.depsTail = r),
				_t.deps === r && (_t.deps = o);
		}
		return r;
	}
	trigger(t) {
		this.version++, Ul++, this.notify(t);
	}
	notify(t) {
		wh();
		try {
			for (let r = this.subs; r; r = r.prevSub)
				r.sub.notify() && r.sub.dep.notify();
		} finally {
			xh();
		}
	}
}
function t0(e) {
	if ((e.dep.sc++, e.sub.flags & 4)) {
		const t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let o = t.deps; o; o = o.nextDep) t0(o);
		}
		const r = e.dep.subs;
		r !== e && ((e.prevSub = r), r && (r.nextSub = e)), (e.dep.subs = e);
	}
}
const Bu = new WeakMap(),
	Lo = Symbol(''),
	Sd = Symbol(''),
	Vl = Symbol('');
function pn(e, t, r) {
	if (xr && _t) {
		let o = Bu.get(e);
		o || Bu.set(e, (o = new Map()));
		let s = o.get(r);
		s || (o.set(r, (s = new Sc())), (s.map = o), (s.key = r)), s.track();
	}
}
function ci(e, t, r, o, s, u) {
	const f = Bu.get(e);
	if (!f) {
		Ul++;
		return;
	}
	const d = (h) => {
		h && h.trigger();
	};
	if ((wh(), t === 'clear')) f.forEach(d);
	else {
		const h = Fe(e),
			p = h && bh(r);
		if (h && r === 'length') {
			const m = Number(o);
			f.forEach((v, b) => {
				(b === 'length' || b === Vl || (!Tr(b) && b >= m)) && d(v);
			});
		} else
			switch (
				((r !== void 0 || f.has(void 0)) && d(f.get(r)), p && d(f.get(Vl)), t)
			) {
				case 'add':
					h ? p && d(f.get('length')) : (d(f.get(Lo)), ws(e) && d(f.get(Sd)));
					break;
				case 'delete':
					h || (d(f.get(Lo)), ws(e) && d(f.get(Sd)));
					break;
				case 'set':
					ws(e) && d(f.get(Lo));
					break;
			}
	}
	xh();
}
function x_(e, t) {
	const r = Bu.get(e);
	return r && r.get(t);
}
function hs(e) {
	const t = ht(e);
	return t === e ? t : (pn(t, 'iterate', Vl), sr(e) ? t : t.map(gn));
}
function _c(e) {
	return pn((e = ht(e)), 'iterate', Vl), e;
}
const S_ = {
	__proto__: null,
	[Symbol.iterator]() {
		return Xf(this, Symbol.iterator, gn);
	},
	concat(...e) {
		return hs(this).concat(...e.map((t) => (Fe(t) ? hs(t) : t)));
	},
	entries() {
		return Xf(this, 'entries', (e) => ((e[1] = gn(e[1])), e));
	},
	every(e, t) {
		return oi(this, 'every', e, t, void 0, arguments);
	},
	filter(e, t) {
		return oi(this, 'filter', e, t, (r) => r.map(gn), arguments);
	},
	find(e, t) {
		return oi(this, 'find', e, t, gn, arguments);
	},
	findIndex(e, t) {
		return oi(this, 'findIndex', e, t, void 0, arguments);
	},
	findLast(e, t) {
		return oi(this, 'findLast', e, t, gn, arguments);
	},
	findLastIndex(e, t) {
		return oi(this, 'findLastIndex', e, t, void 0, arguments);
	},
	forEach(e, t) {
		return oi(this, 'forEach', e, t, void 0, arguments);
	},
	includes(...e) {
		return Yf(this, 'includes', e);
	},
	indexOf(...e) {
		return Yf(this, 'indexOf', e);
	},
	join(e) {
		return hs(this).join(e);
	},
	lastIndexOf(...e) {
		return Yf(this, 'lastIndexOf', e);
	},
	map(e, t) {
		return oi(this, 'map', e, t, void 0, arguments);
	},
	pop() {
		return wl(this, 'pop');
	},
	push(...e) {
		return wl(this, 'push', e);
	},
	reduce(e, ...t) {
		return vm(this, 'reduce', e, t);
	},
	reduceRight(e, ...t) {
		return vm(this, 'reduceRight', e, t);
	},
	shift() {
		return wl(this, 'shift');
	},
	some(e, t) {
		return oi(this, 'some', e, t, void 0, arguments);
	},
	splice(...e) {
		return wl(this, 'splice', e);
	},
	toReversed() {
		return hs(this).toReversed();
	},
	toSorted(e) {
		return hs(this).toSorted(e);
	},
	toSpliced(...e) {
		return hs(this).toSpliced(...e);
	},
	unshift(...e) {
		return wl(this, 'unshift', e);
	},
	values() {
		return Xf(this, 'values', gn);
	},
};
function Xf(e, t, r) {
	const o = _c(e),
		s = o[t]();
	return (
		o !== e &&
			!sr(e) &&
			((s._next = s.next),
			(s.next = () => {
				const u = s._next();
				return u.value && (u.value = r(u.value)), u;
			})),
		s
	);
}
const __ = Array.prototype;
function oi(e, t, r, o, s, u) {
	const f = _c(e),
		d = f !== e && !sr(e),
		h = f[t];
	if (h !== __[t]) {
		const v = h.apply(e, u);
		return d ? gn(v) : v;
	}
	let p = r;
	f !== e &&
		(d
			? (p = function (v, b) {
					return r.call(this, gn(v), b, e);
				})
			: r.length > 2 &&
				(p = function (v, b) {
					return r.call(this, v, b, e);
				}));
	const m = h.call(f, p, o);
	return d && s ? s(m) : m;
}
function vm(e, t, r, o) {
	const s = _c(e);
	let u = r;
	return (
		s !== e &&
			(sr(e)
				? r.length > 3 &&
					(u = function (f, d, h) {
						return r.call(this, f, d, h, e);
					})
				: (u = function (f, d, h) {
						return r.call(this, f, gn(d), h, e);
					})),
		s[t](u, ...o)
	);
}
function Yf(e, t, r) {
	const o = ht(e);
	pn(o, 'iterate', Vl);
	const s = o[t](...r);
	return (s === -1 || s === !1) && Ch(r[0])
		? ((r[0] = ht(r[0])), o[t](...r))
		: s;
}
function wl(e, t, r = []) {
	io(), wh();
	const o = ht(e)[t].apply(e, r);
	return xh(), oo(), o;
}
const k_ = mh('__proto__,__v_isRef,__isVue'),
	n0 = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((e) => e !== 'arguments' && e !== 'caller')
			.map((e) => Symbol[e])
			.filter(Tr),
	);
function T_(e) {
	Tr(e) || (e = String(e));
	const t = ht(this);
	return pn(t, 'has', e), t.hasOwnProperty(e);
}
class r0 {
	constructor(t = !1, r = !1) {
		(this._isReadonly = t), (this._isShallow = r);
	}
	get(t, r, o) {
		const s = this._isReadonly,
			u = this._isShallow;
		if (r === '__v_isReactive') return !s;
		if (r === '__v_isReadonly') return s;
		if (r === '__v_isShallow') return u;
		if (r === '__v_raw')
			return o === (s ? (u ? R_ : l0) : u ? s0 : o0).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0;
		const f = Fe(t);
		if (!s) {
			let h;
			if (f && (h = S_[r])) return h;
			if (r === 'hasOwnProperty') return T_;
		}
		const d = Reflect.get(t, r, kt(t) ? t : o);
		return (Tr(r) ? n0.has(r) : k_(r)) || (s || pn(t, 'get', r), u)
			? d
			: kt(d)
				? f && bh(r)
					? d
					: d.value
				: St(d)
					? s
						? ga(d)
						: Qn(d)
					: d;
	}
}
class i0 extends r0 {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, r, o, s) {
		let u = t[r];
		if (!this._isShallow) {
			const h = $o(u);
			if (
				(!sr(o) && !$o(o) && ((u = ht(u)), (o = ht(o))),
				!Fe(t) && kt(u) && !kt(o))
			)
				return h ? !1 : ((u.value = o), !0);
		}
		const f = Fe(t) && bh(r) ? Number(r) < t.length : wt(t, r),
			d = Reflect.set(t, r, o, kt(t) ? t : s);
		return (
			t === ht(s) && (f ? qn(o, u) && ci(t, 'set', r, o) : ci(t, 'add', r, o)),
			d
		);
	}
	deleteProperty(t, r) {
		const o = wt(t, r);
		t[r];
		const s = Reflect.deleteProperty(t, r);
		return s && o && ci(t, 'delete', r, void 0), s;
	}
	has(t, r) {
		const o = Reflect.has(t, r);
		return (!Tr(r) || !n0.has(r)) && pn(t, 'has', r), o;
	}
	ownKeys(t) {
		return pn(t, 'iterate', Fe(t) ? 'length' : Lo), Reflect.ownKeys(t);
	}
}
class C_ extends r0 {
	constructor(t = !1) {
		super(!0, t);
	}
	set(t, r) {
		return !0;
	}
	deleteProperty(t, r) {
		return !0;
	}
}
const E_ = new i0(),
	L_ = new C_(),
	A_ = new i0(!0);
const _d = (e) => e,
	au = (e) => Reflect.getPrototypeOf(e);
function M_(e, t, r) {
	return function (...o) {
		const s = this.__v_raw,
			u = ht(s),
			f = ws(u),
			d = e === 'entries' || (e === Symbol.iterator && f),
			h = e === 'keys' && f,
			p = s[e](...o),
			m = r ? _d : t ? kd : gn;
		return (
			!t && pn(u, 'iterate', h ? Sd : Lo),
			{
				next() {
					const { value: v, done: b } = p.next();
					return b
						? { value: v, done: b }
						: { value: d ? [m(v[0]), m(v[1])] : m(v), done: b };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function uu(e) {
	return function (...t) {
		return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
	};
}
function N_(e, t) {
	const r = {
		get(s) {
			const u = this.__v_raw,
				f = ht(u),
				d = ht(s);
			e || (qn(s, d) && pn(f, 'get', s), pn(f, 'get', d));
			const { has: h } = au(f),
				p = t ? _d : e ? kd : gn;
			if (h.call(f, s)) return p(u.get(s));
			if (h.call(f, d)) return p(u.get(d));
			u !== f && u.get(s);
		},
		get size() {
			const s = this.__v_raw;
			return !e && pn(ht(s), 'iterate', Lo), Reflect.get(s, 'size', s);
		},
		has(s) {
			const u = this.__v_raw,
				f = ht(u),
				d = ht(s);
			return (
				e || (qn(s, d) && pn(f, 'has', s), pn(f, 'has', d)),
				s === d ? u.has(s) : u.has(s) || u.has(d)
			);
		},
		forEach(s, u) {
			const f = this,
				d = f.__v_raw,
				h = ht(d),
				p = t ? _d : e ? kd : gn;
			return (
				!e && pn(h, 'iterate', Lo),
				d.forEach((m, v) => s.call(u, p(m), p(v), f))
			);
		},
	};
	return (
		en(
			r,
			e
				? {
						add: uu('add'),
						set: uu('set'),
						delete: uu('delete'),
						clear: uu('clear'),
					}
				: {
						add(s) {
							!t && !sr(s) && !$o(s) && (s = ht(s));
							const u = ht(this);
							return (
								au(u).has.call(u, s) || (u.add(s), ci(u, 'add', s, s)), this
							);
						},
						set(s, u) {
							!t && !sr(u) && !$o(u) && (u = ht(u));
							const f = ht(this),
								{ has: d, get: h } = au(f);
							let p = d.call(f, s);
							p || ((s = ht(s)), (p = d.call(f, s)));
							const m = h.call(f, s);
							return (
								f.set(s, u),
								p ? qn(u, m) && ci(f, 'set', s, u) : ci(f, 'add', s, u),
								this
							);
						},
						delete(s) {
							const u = ht(this),
								{ has: f, get: d } = au(u);
							let h = f.call(u, s);
							h || ((s = ht(s)), (h = f.call(u, s))), d && d.call(u, s);
							const p = u.delete(s);
							return h && ci(u, 'delete', s, void 0), p;
						},
						clear() {
							const s = ht(this),
								u = s.size !== 0,
								f = s.clear();
							return u && ci(s, 'clear', void 0, void 0), f;
						},
					},
		),
		['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
			r[s] = M_(s, e, t);
		}),
		r
	);
}
function _h(e, t) {
	const r = N_(e, t);
	return (o, s, u) =>
		s === '__v_isReactive'
			? !e
			: s === '__v_isReadonly'
				? e
				: s === '__v_raw'
					? o
					: Reflect.get(wt(r, s) && s in o ? r : o, s, u);
}
const $_ = { get: _h(!1, !1) },
	P_ = { get: _h(!1, !0) },
	O_ = { get: _h(!0, !1) };
const o0 = new WeakMap(),
	s0 = new WeakMap(),
	l0 = new WeakMap(),
	R_ = new WeakMap();
function D_(e) {
	switch (e) {
		case 'Object':
		case 'Array':
			return 1;
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2;
		default:
			return 0;
	}
}
function z_(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : D_(s_(e));
}
function Qn(e) {
	return $o(e) ? e : Th(e, !1, E_, $_, o0);
}
function kh(e) {
	return Th(e, !1, A_, P_, s0);
}
function ga(e) {
	return Th(e, !0, L_, O_, l0);
}
function Th(e, t, r, o, s) {
	if (!St(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const u = s.get(e);
	if (u) return u;
	const f = z_(e);
	if (f === 0) return e;
	const d = new Proxy(e, f === 2 ? o : r);
	return s.set(e, d), d;
}
function xs(e) {
	return $o(e) ? xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $o(e) {
	return !!(e && e.__v_isReadonly);
}
function sr(e) {
	return !!(e && e.__v_isShallow);
}
function Ch(e) {
	return e ? !!e.__v_raw : !1;
}
function ht(e) {
	const t = e && e.__v_raw;
	return t ? ht(t) : e;
}
function Eh(e) {
	return (
		!wt(e, '__v_skip') && Object.isExtensible(e) && qy(e, '__v_skip', !0), e
	);
}
const gn = (e) => (St(e) ? Qn(e) : e),
	kd = (e) => (St(e) ? ga(e) : e);
function kt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
function qe(e) {
	return a0(e, !1);
}
function Gr(e) {
	return a0(e, !0);
}
function a0(e, t) {
	return kt(e) ? e : new I_(e, t);
}
class I_ {
	constructor(t, r) {
		(this.dep = new Sc()),
			(this.__v_isRef = !0),
			(this.__v_isShallow = !1),
			(this._rawValue = r ? t : ht(t)),
			(this._value = r ? t : gn(t)),
			(this.__v_isShallow = r);
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(t) {
		const r = this._rawValue,
			o = this.__v_isShallow || sr(t) || $o(t);
		(t = o ? t : ht(t)),
			qn(t, r) &&
				((this._rawValue = t),
				(this._value = o ? t : gn(t)),
				this.dep.trigger());
	}
}
function H(e) {
	return kt(e) ? e.value : e;
}
function nn(e) {
	return je(e) ? e() : H(e);
}
const F_ = {
	get: (e, t, r) => (t === '__v_raw' ? e : H(Reflect.get(e, t, r))),
	set: (e, t, r, o) => {
		const s = e[t];
		return kt(s) && !kt(r) ? ((s.value = r), !0) : Reflect.set(e, t, r, o);
	},
};
function u0(e) {
	return xs(e) ? e : new Proxy(e, F_);
}
class H_ {
	constructor(t) {
		(this.__v_isRef = !0), (this._value = void 0);
		const r = (this.dep = new Sc()),
			{ get: o, set: s } = t(r.track.bind(r), r.trigger.bind(r));
		(this._get = o), (this._set = s);
	}
	get value() {
		return (this._value = this._get());
	}
	set value(t) {
		this._set(t);
	}
}
function c0(e) {
	return new H_(e);
}
function q_(e) {
	const t = Fe(e) ? new Array(e.length) : {};
	for (const r in e) t[r] = f0(e, r);
	return t;
}
class B_ {
	constructor(t, r, o) {
		(this._object = t),
			(this._key = r),
			(this._defaultValue = o),
			(this.__v_isRef = !0),
			(this._value = void 0);
	}
	get value() {
		const t = this._object[this._key];
		return (this._value = t === void 0 ? this._defaultValue : t);
	}
	set value(t) {
		this._object[this._key] = t;
	}
	get dep() {
		return x_(ht(this._object), this._key);
	}
}
class W_ {
	constructor(t) {
		(this._getter = t),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !0),
			(this._value = void 0);
	}
	get value() {
		return (this._value = this._getter());
	}
}
function ma(e, t, r) {
	return kt(e)
		? e
		: je(e)
			? new W_(e)
			: St(e) && arguments.length > 1
				? f0(e, t, r)
				: qe(e);
}
function f0(e, t, r) {
	const o = e[t];
	return kt(o) ? o : new B_(e, t, r);
}
class U_ {
	constructor(t, r, o) {
		(this.fn = t),
			(this.setter = r),
			(this._value = void 0),
			(this.dep = new Sc(this)),
			(this.__v_isRef = !0),
			(this.deps = void 0),
			(this.depsTail = void 0),
			(this.flags = 16),
			(this.globalVersion = Ul - 1),
			(this.next = void 0),
			(this.effect = this),
			(this.__v_isReadonly = !r),
			(this.isSSR = o);
	}
	notify() {
		if (((this.flags |= 16), !(this.flags & 8) && _t !== this))
			return Yy(this, !0), !0;
	}
	get value() {
		const t = this.dep.track();
		return Qy(this), t && (t.version = this.dep.version), this._value;
	}
	set value(t) {
		this.setter && this.setter(t);
	}
}
function V_(e, t, r = !1) {
	let o, s;
	return je(e) ? (o = e) : ((o = e.get), (s = e.set)), new U_(o, s, r);
}
const cu = {},
	Wu = new WeakMap();
let _o;
function j_(e, t = !1, r = _o) {
	if (r) {
		let o = Wu.get(r);
		o || Wu.set(r, (o = [])), o.push(e);
	}
}
function G_(e, t, r = mt) {
	const {
			immediate: o,
			deep: s,
			once: u,
			scheduler: f,
			augmentJob: d,
			call: h,
		} = r,
		p = (L) => (s ? L : sr(L) || s === !1 || s === 0 ? fi(L, 1) : fi(L));
	let m,
		v,
		b,
		w,
		C = !1,
		M = !1;
	if (
		(kt(e)
			? ((v = () => e.value), (C = sr(e)))
			: xs(e)
				? ((v = () => p(e)), (C = !0))
				: Fe(e)
					? ((M = !0),
						(C = e.some((L) => xs(L) || sr(L))),
						(v = () =>
							e.map((L) => {
								if (kt(L)) return L.value;
								if (xs(L)) return p(L);
								if (je(L)) return h ? h(L, 2) : L();
							})))
					: je(e)
						? t
							? (v = h ? () => h(e, 2) : e)
							: (v = () => {
									if (b) {
										io();
										try {
											b();
										} finally {
											oo();
										}
									}
									const L = _o;
									_o = m;
									try {
										return h ? h(e, 3, [w]) : e(w);
									} finally {
										_o = L;
									}
								})
						: (v = qr),
		t && s)
	) {
		const L = v,
			O = s === !0 ? 1 / 0 : s;
		v = () => fi(L(), O);
	}
	const E = Gy(),
		N = () => {
			m.stop(), E && yh(E.effects, m);
		};
	if (u && t) {
		const L = t;
		t = (...O) => {
			L(...O), N();
		};
	}
	let A = M ? new Array(e.length).fill(cu) : cu;
	const $ = (L) => {
		if (!(!(m.flags & 1) || (!m.dirty && !L)))
			if (t) {
				const O = m.run();
				if (s || C || (M ? O.some((U, B) => qn(U, A[B])) : qn(O, A))) {
					b && b();
					const U = _o;
					_o = m;
					try {
						const B = [O, A === cu ? void 0 : M && A[0] === cu ? [] : A, w];
						h ? h(t, 3, B) : t(...B), (A = O);
					} finally {
						_o = U;
					}
				}
			} else m.run();
	};
	return (
		d && d($),
		(m = new Ky(v)),
		(m.scheduler = f ? () => f($, !1) : $),
		(w = (L) => j_(L, !1, m)),
		(b = m.onStop =
			() => {
				const L = Wu.get(m);
				if (L) {
					if (h) h(L, 4);
					else for (const O of L) O();
					Wu.delete(m);
				}
			}),
		t ? (o ? $(!0) : (A = m.run())) : f ? f($.bind(null, !0), !0) : m.run(),
		(N.pause = m.pause.bind(m)),
		(N.resume = m.resume.bind(m)),
		(N.stop = N),
		N
	);
}
function fi(e, t = 1 / 0, r) {
	if (t <= 0 || !St(e) || e.__v_skip || ((r = r || new Set()), r.has(e)))
		return e;
	if ((r.add(e), t--, kt(e))) fi(e.value, t, r);
	else if (Fe(e)) for (let o = 0; o < e.length; o++) fi(e[o], t, r);
	else if (vc(e) || ws(e))
		e.forEach((o) => {
			fi(o, t, r);
		});
	else if (Hy(e)) {
		for (const o in e) fi(e[o], t, r);
		for (const o of Object.getOwnPropertySymbols(e))
			Object.prototype.propertyIsEnumerable.call(e, o) && fi(e[o], t, r);
	}
	return e;
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function va(e, t, r, o) {
	try {
		return o ? e(...o) : e();
	} catch (s) {
		ya(s, t, r);
	}
}
function Cr(e, t, r, o) {
	if (je(e)) {
		const s = va(e, t, r, o);
		return (
			s &&
				Iy(s) &&
				s.catch((u) => {
					ya(u, t, r);
				}),
			s
		);
	}
	if (Fe(e)) {
		const s = [];
		for (let u = 0; u < e.length; u++) s.push(Cr(e[u], t, r, o));
		return s;
	}
}
function ya(e, t, r, o = !0) {
	const s = t ? t.vnode : null,
		{ errorHandler: u, throwUnhandledErrorInProduction: f } =
			(t && t.appContext.config) || mt;
	if (t) {
		let d = t.parent;
		const h = t.proxy,
			p = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; d; ) {
			const m = d.ec;
			if (m) {
				for (let v = 0; v < m.length; v++) if (m[v](e, h, p) === !1) return;
			}
			d = d.parent;
		}
		if (u) {
			io(), va(u, null, 10, [e, h, p]), oo();
			return;
		}
	}
	K_(e, r, s, o, f);
}
function K_(e, t, r, o = !0, s = !1) {
	if (s) throw e;
	console.error(e);
}
const Ln = [];
let Fr = -1;
const Ss = [];
let Hi = null,
	ps = 0;
const d0 = Promise.resolve();
let Uu = null;
function Ot(e) {
	const t = Uu || d0;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function X_(e) {
	let t = Fr + 1,
		r = Ln.length;
	for (; t < r; ) {
		const o = (t + r) >>> 1,
			s = Ln[o],
			u = jl(s);
		u < e || (u === e && s.flags & 2) ? (t = o + 1) : (r = o);
	}
	return t;
}
function Lh(e) {
	if (!(e.flags & 1)) {
		const t = jl(e),
			r = Ln[Ln.length - 1];
		!r || (!(e.flags & 2) && t >= jl(r)) ? Ln.push(e) : Ln.splice(X_(t), 0, e),
			(e.flags |= 1),
			h0();
	}
}
function h0() {
	Uu || (Uu = d0.then(g0));
}
function Td(e) {
	Fe(e)
		? Ss.push(...e)
		: Hi && e.id === -1
			? Hi.splice(ps + 1, 0, e)
			: e.flags & 1 || (Ss.push(e), (e.flags |= 1)),
		h0();
}
function ym(e, t, r = Fr + 1) {
	for (; r < Ln.length; r++) {
		const o = Ln[r];
		if (o && o.flags & 2) {
			if (e && o.id !== e.uid) continue;
			Ln.splice(r, 1),
				r--,
				o.flags & 4 && (o.flags &= -2),
				o(),
				o.flags & 4 || (o.flags &= -2);
		}
	}
}
function p0(e) {
	if (Ss.length) {
		const t = [...new Set(Ss)].sort((r, o) => jl(r) - jl(o));
		if (((Ss.length = 0), Hi)) {
			Hi.push(...t);
			return;
		}
		for (Hi = t, ps = 0; ps < Hi.length; ps++) {
			const r = Hi[ps];
			r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), (r.flags &= -2);
		}
		(Hi = null), (ps = 0);
	}
}
const jl = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function g0(e) {
	try {
		for (Fr = 0; Fr < Ln.length; Fr++) {
			const t = Ln[Fr];
			t &&
				!(t.flags & 8) &&
				(t.flags & 4 && (t.flags &= -2),
				va(t, t.i, t.i ? 15 : 14),
				t.flags & 4 || (t.flags &= -2));
		}
	} finally {
		for (; Fr < Ln.length; Fr++) {
			const t = Ln[Fr];
			t && (t.flags &= -2);
		}
		(Fr = -1),
			(Ln.length = 0),
			p0(),
			(Uu = null),
			(Ln.length || Ss.length) && g0();
	}
}
let Jt = null,
	kc = null;
function Vu(e) {
	const t = Jt;
	return (Jt = e), (kc = (e && e.type.__scopeId) || null), t;
}
function m0(e) {
	kc = e;
}
function v0() {
	kc = null;
}
const y0 = (e) => rt;
function rt(e, t = Jt, r) {
	if (!t || e._n) return e;
	const o = (...s) => {
		o._d && Ku(-1);
		const u = Vu(t);
		let f;
		try {
			f = e(...s);
		} finally {
			Vu(u), o._d && Ku(1);
		}
		return f;
	};
	return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function gt(e, t) {
	if (Jt === null) return e;
	const r = $c(Jt),
		o = e.dirs || (e.dirs = []);
	for (let s = 0; s < t.length; s++) {
		let [u, f, d, h = mt] = t[s];
		u &&
			(je(u) && (u = { mounted: u, updated: u }),
			u.deep && fi(f),
			o.push({
				dir: u,
				instance: r,
				value: f,
				oldValue: void 0,
				arg: d,
				modifiers: h,
			}));
	}
	return e;
}
function yo(e, t, r, o) {
	const s = e.dirs,
		u = t && t.dirs;
	for (let f = 0; f < s.length; f++) {
		const d = s[f];
		u && (d.oldValue = u[f].value);
		let h = d.dir[o];
		h && (io(), Cr(h, r, 8, [e.el, d, e, t]), oo());
	}
}
const Y_ = Symbol('_vte'),
	b0 = (e) => e.__isTeleport,
	qi = Symbol('_leaveCb'),
	fu = Symbol('_enterCb');
function Z_() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map(),
	};
	return (
		Hs(() => {
			e.isMounted = !0;
		}),
		Ah(() => {
			e.isUnmounting = !0;
		}),
		e
	);
}
const ir = [Function, Array],
	w0 = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: ir,
		onEnter: ir,
		onAfterEnter: ir,
		onEnterCancelled: ir,
		onBeforeLeave: ir,
		onLeave: ir,
		onAfterLeave: ir,
		onLeaveCancelled: ir,
		onBeforeAppear: ir,
		onAppear: ir,
		onAfterAppear: ir,
		onAppearCancelled: ir,
	},
	x0 = (e) => {
		const t = e.subTree;
		return t.component ? x0(t.component) : t;
	},
	J_ = {
		name: 'BaseTransition',
		props: w0,
		setup(e, { slots: t }) {
			const r = qs(),
				o = Z_();
			return () => {
				const s = t.default && k0(t.default(), !0);
				if (!s || !s.length) return;
				const u = S0(s),
					f = ht(e),
					{ mode: d } = f;
				if (o.isLeaving) return Zf(u);
				const h = bm(u);
				if (!h) return Zf(u);
				let p = Cd(h, f, o, r, (b) => (p = b));
				h.type !== cn && Gl(h, p);
				const m = r.subTree,
					v = m && bm(m);
				if (v && v.type !== cn && !Hr(h, v) && x0(r).type !== cn) {
					const b = Cd(v, f, o, r);
					if ((Gl(v, b), d === 'out-in' && h.type !== cn))
						return (
							(o.isLeaving = !0),
							(b.afterLeave = () => {
								(o.isLeaving = !1),
									r.job.flags & 8 || r.update(),
									delete b.afterLeave;
							}),
							Zf(u)
						);
					d === 'in-out' &&
						h.type !== cn &&
						(b.delayLeave = (w, C, M) => {
							const E = _0(o, v);
							(E[String(v.key)] = v),
								(w[qi] = () => {
									C(), (w[qi] = void 0), delete p.delayedLeave;
								}),
								(p.delayedLeave = M);
						});
				}
				return u;
			};
		},
	};
function S0(e) {
	let t = e[0];
	if (e.length > 1) {
		for (const r of e)
			if (r.type !== cn) {
				t = r;
				break;
			}
	}
	return t;
}
const Q_ = J_;
function _0(e, t) {
	const { leavingVNodes: r } = e;
	let o = r.get(t.type);
	return o || ((o = Object.create(null)), r.set(t.type, o)), o;
}
function Cd(e, t, r, o, s) {
	const {
			appear: u,
			mode: f,
			persisted: d = !1,
			onBeforeEnter: h,
			onEnter: p,
			onAfterEnter: m,
			onEnterCancelled: v,
			onBeforeLeave: b,
			onLeave: w,
			onAfterLeave: C,
			onLeaveCancelled: M,
			onBeforeAppear: E,
			onAppear: N,
			onAfterAppear: A,
			onAppearCancelled: $,
		} = t,
		L = String(e.key),
		O = _0(r, e),
		U = (J, K) => {
			J && Cr(J, o, 9, K);
		},
		B = (J, K) => {
			const ee = K[1];
			U(J, K),
				Fe(J) ? J.every((Y) => Y.length <= 1) && ee() : J.length <= 1 && ee();
		},
		te = {
			mode: f,
			persisted: d,
			beforeEnter(J) {
				let K = h;
				if (!r.isMounted)
					if (u) K = E || h;
					else return;
				J[qi] && J[qi](!0);
				const ee = O[L];
				ee && Hr(e, ee) && ee.el[qi] && ee.el[qi](), U(K, [J]);
			},
			enter(J) {
				let K = p,
					ee = m,
					Y = v;
				if (!r.isMounted)
					if (u) (K = N || p), (ee = A || m), (Y = $ || v);
					else return;
				let I = !1;
				const F = (J[fu] = (k) => {
					I ||
						((I = !0),
						k ? U(Y, [J]) : U(ee, [J]),
						te.delayedLeave && te.delayedLeave(),
						(J[fu] = void 0));
				});
				K ? B(K, [J, F]) : F();
			},
			leave(J, K) {
				const ee = String(e.key);
				if ((J[fu] && J[fu](!0), r.isUnmounting)) return K();
				U(b, [J]);
				let Y = !1;
				const I = (J[qi] = (F) => {
					Y ||
						((Y = !0),
						K(),
						F ? U(M, [J]) : U(C, [J]),
						(J[qi] = void 0),
						O[ee] === e && delete O[ee]);
				});
				(O[ee] = e), w ? B(w, [J, I]) : I();
			},
			clone(J) {
				const K = Cd(J, t, r, o, s);
				return s && s(K), K;
			},
		};
	return te;
}
function Zf(e) {
	if (Tc(e)) return (e = Ji(e)), (e.children = null), e;
}
function bm(e) {
	if (!Tc(e)) return b0(e.type) && e.children ? S0(e.children) : e;
	const { shapeFlag: t, children: r } = e;
	if (r) {
		if (t & 16) return r[0];
		if (t & 32 && je(r.default)) return r.default();
	}
}
function Gl(e, t) {
	e.shapeFlag & 6 && e.component
		? ((e.transition = t), Gl(e.component.subTree, t))
		: e.shapeFlag & 128
			? ((e.ssContent.transition = t.clone(e.ssContent)),
				(e.ssFallback.transition = t.clone(e.ssFallback)))
			: (e.transition = t);
}
function k0(e, t = !1, r) {
	let o = [],
		s = 0;
	for (let u = 0; u < e.length; u++) {
		let f = e[u];
		const d = r == null ? f.key : String(r) + String(f.key != null ? f.key : u);
		f.type === ut
			? (f.patchFlag & 128 && s++, (o = o.concat(k0(f.children, t, d))))
			: (t || f.type !== cn) && o.push(d != null ? Ji(f, { key: d }) : f);
	}
	if (s > 1) for (let u = 0; u < o.length; u++) o[u].patchFlag = -2;
	return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function ct(e, t) {
	return je(e) ? en({ name: e.name }, t, { setup: e }) : e;
}
function T0(e) {
	e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Ed(e, t, r, o, s = !1) {
	if (Fe(e)) {
		e.forEach((C, M) => Ed(C, t && (Fe(t) ? t[M] : t), r, o, s));
		return;
	}
	if (_s(o) && !s) return;
	const u = o.shapeFlag & 4 ? $c(o.component) : o.el,
		f = s ? null : u,
		{ i: d, r: h } = e,
		p = t && t.r,
		m = d.refs === mt ? (d.refs = {}) : d.refs,
		v = d.setupState,
		b = ht(v),
		w = v === mt ? () => !1 : (C) => wt(b, C);
	if (
		(p != null &&
			p !== h &&
			(Rt(p)
				? ((m[p] = null), w(p) && (v[p] = null))
				: kt(p) && (p.value = null)),
		je(h))
	)
		va(h, d, 12, [f, m]);
	else {
		const C = Rt(h),
			M = kt(h);
		if (C || M) {
			const E = () => {
				if (e.f) {
					const N = C ? (w(h) ? v[h] : m[h]) : h.value;
					s
						? Fe(N) && yh(N, u)
						: Fe(N)
							? N.includes(u) || N.push(u)
							: C
								? ((m[h] = [u]), w(h) && (v[h] = m[h]))
								: ((h.value = [u]), e.k && (m[e.k] = h.value));
				} else
					C
						? ((m[h] = f), w(h) && (v[h] = f))
						: M && ((h.value = f), e.k && (m[e.k] = f));
			};
			f ? ((E.id = -1), Xn(E, r)) : E();
		}
	}
}
wc().requestIdleCallback;
wc().cancelIdleCallback;
const _s = (e) => !!e.type.__asyncLoader,
	Tc = (e) => e.type.__isKeepAlive;
function ek(e, t) {
	C0(e, 'a', t);
}
function tk(e, t) {
	C0(e, 'da', t);
}
function C0(e, t, r = rn) {
	const o =
		e.__wdc ||
		(e.__wdc = () => {
			let s = r;
			for (; s; ) {
				if (s.isDeactivated) return;
				s = s.parent;
			}
			return e();
		});
	if ((Cc(t, o, r), r)) {
		let s = r.parent;
		for (; s && s.parent; )
			Tc(s.parent.vnode) && nk(o, t, r, s), (s = s.parent);
	}
}
function nk(e, t, r, o) {
	const s = Cc(t, e, o, !0);
	Ec(() => {
		yh(o[t], s);
	}, r);
}
function Cc(e, t, r = rn, o = !1) {
	if (r) {
		const s = r[e] || (r[e] = []),
			u =
				t.__weh ||
				(t.__weh = (...f) => {
					io();
					const d = ba(r),
						h = Cr(t, r, e, f);
					return d(), oo(), h;
				});
		return o ? s.unshift(u) : s.push(u), u;
	}
}
const bi =
		(e) =>
		(t, r = rn) => {
			(!Yl || e === 'sp') && Cc(e, (...o) => t(...o), r);
		},
	rk = bi('bm'),
	Hs = bi('m'),
	ik = bi('bu'),
	ok = bi('u'),
	Ah = bi('bum'),
	Ec = bi('um'),
	sk = bi('sp'),
	lk = bi('rtg'),
	ak = bi('rtc');
function uk(e, t = rn) {
	Cc('ec', e, t);
}
const Mh = 'components',
	ck = 'directives';
function Po(e, t) {
	return Nh(Mh, e, !0, t) || e;
}
const E0 = Symbol.for('v-ndc');
function wm(e) {
	return Rt(e) ? Nh(Mh, e, !1) || e : e || E0;
}
function Kr(e) {
	return Nh(ck, e);
}
function Nh(e, t, r = !0, o = !1) {
	const s = Jt || rn;
	if (s) {
		const u = s.type;
		if (e === Mh) {
			const d = nT(u, !1);
			if (d && (d === t || d === er(t) || d === bc(er(t)))) return u;
		}
		const f = xm(s[e] || u[e], t) || xm(s.appContext[e], t);
		return !f && o ? u : f;
	}
}
function xm(e, t) {
	return e && (e[t] || e[er(t)] || e[bc(er(t))]);
}
function gi(e, t, r, o) {
	let s;
	const u = r,
		f = Fe(e);
	if (f || Rt(e)) {
		const d = f && xs(e);
		let h = !1;
		d && ((h = !sr(e)), (e = _c(e))), (s = new Array(e.length));
		for (let p = 0, m = e.length; p < m; p++)
			s[p] = t(h ? gn(e[p]) : e[p], p, void 0, u);
	} else if (typeof e == 'number') {
		s = new Array(e);
		for (let d = 0; d < e; d++) s[d] = t(d + 1, d, void 0, u);
	} else if (St(e))
		if (e[Symbol.iterator]) s = Array.from(e, (d, h) => t(d, h, void 0, u));
		else {
			const d = Object.keys(e);
			s = new Array(d.length);
			for (let h = 0, p = d.length; h < p; h++) {
				const m = d[h];
				s[h] = t(e[m], m, h, u);
			}
		}
	else s = [];
	return s;
}
function fk(e, t) {
	for (let r = 0; r < t.length; r++) {
		const o = t[r];
		if (Fe(o)) for (let s = 0; s < o.length; s++) e[o[s].name] = o[s].fn;
		else
			o &&
				(e[o.name] = o.key
					? (...s) => {
							const u = o.fn(...s);
							return u && (u.key = o.key), u;
						}
					: o.fn);
	}
	return e;
}
function vn(e, t, r = {}, o, s) {
	if (Jt.ce || (Jt.parent && _s(Jt.parent) && Jt.parent.ce))
		return (
			t !== 'default' && (r.name = t),
			oe(),
			tt(ut, null, [Pe('slot', r, o && o())], 64)
		);
	let u = e[t];
	u && u._c && (u._d = !1), oe();
	const f = u && L0(u(r)),
		d = r.key || (f && f.key),
		h = tt(
			ut,
			{ key: (d && !Tr(d) ? d : `_${t}`) + (!f && o ? '_fb' : '') },
			f || (o ? o() : []),
			f && e._ === 1 ? 64 : -2,
		);
	return (
		h.scopeId && (h.slotScopeIds = [h.scopeId + '-s']),
		u && u._c && (u._d = !0),
		h
	);
}
function L0(e) {
	return e.some((t) =>
		$s(t) ? !(t.type === cn || (t.type === ut && !L0(t.children))) : !0,
	)
		? e
		: null;
}
function dk(e, t) {
	const r = {};
	for (const o in e) r[Cu(o)] = e[o];
	return r;
}
const Ld = (e) => (e ? (eb(e) ? $c(e) : Ld(e.parent)) : null),
	Ol = en(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => Ld(e.parent),
		$root: (e) => Ld(e.root),
		$host: (e) => e.ce,
		$emit: (e) => e.emit,
		$options: (e) => M0(e),
		$forceUpdate: (e) =>
			e.f ||
			(e.f = () => {
				Lh(e.update);
			}),
		$nextTick: (e) => e.n || (e.n = Ot.bind(e.proxy)),
		$watch: (e) => Dk.bind(e),
	}),
	Jf = (e, t) => e !== mt && !e.__isScriptSetup && wt(e, t),
	hk = {
		get({ _: e }, t) {
			if (t === '__v_skip') return !0;
			const {
				ctx: r,
				setupState: o,
				data: s,
				props: u,
				accessCache: f,
				type: d,
				appContext: h,
			} = e;
			let p;
			if (t[0] !== '$') {
				const w = f[t];
				if (w !== void 0)
					switch (w) {
						case 1:
							return o[t];
						case 2:
							return s[t];
						case 4:
							return r[t];
						case 3:
							return u[t];
					}
				else {
					if (Jf(o, t)) return (f[t] = 1), o[t];
					if (s !== mt && wt(s, t)) return (f[t] = 2), s[t];
					if ((p = e.propsOptions[0]) && wt(p, t)) return (f[t] = 3), u[t];
					if (r !== mt && wt(r, t)) return (f[t] = 4), r[t];
					Ad && (f[t] = 0);
				}
			}
			const m = Ol[t];
			let v, b;
			if (m) return t === '$attrs' && pn(e.attrs, 'get', ''), m(e);
			if ((v = d.__cssModules) && (v = v[t])) return v;
			if (r !== mt && wt(r, t)) return (f[t] = 4), r[t];
			if (((b = h.config.globalProperties), wt(b, t))) return b[t];
		},
		set({ _: e }, t, r) {
			const { data: o, setupState: s, ctx: u } = e;
			return Jf(s, t)
				? ((s[t] = r), !0)
				: o !== mt && wt(o, t)
					? ((o[t] = r), !0)
					: wt(e.props, t) || (t[0] === '$' && t.slice(1) in e)
						? !1
						: ((u[t] = r), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: r,
					ctx: o,
					appContext: s,
					propsOptions: u,
				},
			},
			f,
		) {
			let d;
			return (
				!!r[f] ||
				(e !== mt && wt(e, f)) ||
				Jf(t, f) ||
				((d = u[0]) && wt(d, f)) ||
				wt(o, f) ||
				wt(Ol, f) ||
				wt(s.config.globalProperties, f)
			);
		},
		defineProperty(e, t, r) {
			return (
				r.get != null
					? (e._.accessCache[t] = 0)
					: wt(r, 'value') && this.set(e, t, r.value, null),
				Reflect.defineProperty(e, t, r)
			);
		},
	};
function pk() {
	return gk().attrs;
}
function gk() {
	const e = qs();
	return e.setupContext || (e.setupContext = nb(e));
}
function ju(e) {
	return Fe(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
function Kl(e, t) {
	return !e || !t
		? e || t
		: Fe(e) && Fe(t)
			? e.concat(t)
			: en({}, ju(e), ju(t));
}
let Ad = !0;
function mk(e) {
	const t = M0(e),
		r = e.proxy,
		o = e.ctx;
	(Ad = !1), t.beforeCreate && Sm(t.beforeCreate, e, 'bc');
	const {
		data: s,
		computed: u,
		methods: f,
		watch: d,
		provide: h,
		inject: p,
		created: m,
		beforeMount: v,
		mounted: b,
		beforeUpdate: w,
		updated: C,
		activated: M,
		deactivated: E,
		beforeDestroy: N,
		beforeUnmount: A,
		destroyed: $,
		unmounted: L,
		render: O,
		renderTracked: U,
		renderTriggered: B,
		errorCaptured: te,
		serverPrefetch: J,
		expose: K,
		inheritAttrs: ee,
		components: Y,
		directives: I,
		filters: F,
	} = t;
	if ((p && vk(p, o, null), f))
		for (const V in f) {
			const ie = f[V];
			je(ie) && (o[V] = ie.bind(r));
		}
	if (s) {
		const V = s.call(r, r);
		St(V) && (e.data = Qn(V));
	}
	if (((Ad = !0), u))
		for (const V in u) {
			const ie = u[V],
				ye = je(ie) ? ie.bind(r, r) : je(ie.get) ? ie.get.bind(r, r) : qr,
				Ne = !je(ie) && je(ie.set) ? ie.set.bind(r) : qr,
				We = ke({ get: ye, set: Ne });
			Object.defineProperty(o, V, {
				enumerable: !0,
				configurable: !0,
				get: () => We.value,
				set: (Ve) => (We.value = Ve),
			});
		}
	if (d) for (const V in d) A0(d[V], o, r, V);
	if (h) {
		const V = je(h) ? h.call(r) : h;
		Reflect.ownKeys(V).forEach((ie) => {
			Lu(ie, V[ie]);
		});
	}
	m && Sm(m, e, 'c');
	function W(V, ie) {
		Fe(ie) ? ie.forEach((ye) => V(ye.bind(r))) : ie && V(ie.bind(r));
	}
	if (
		(W(rk, v),
		W(Hs, b),
		W(ik, w),
		W(ok, C),
		W(ek, M),
		W(tk, E),
		W(uk, te),
		W(ak, U),
		W(lk, B),
		W(Ah, A),
		W(Ec, L),
		W(sk, J),
		Fe(K))
	)
		if (K.length) {
			const V = e.exposed || (e.exposed = {});
			K.forEach((ie) => {
				Object.defineProperty(V, ie, {
					get: () => r[ie],
					set: (ye) => (r[ie] = ye),
				});
			});
		} else e.exposed || (e.exposed = {});
	O && e.render === qr && (e.render = O),
		ee != null && (e.inheritAttrs = ee),
		Y && (e.components = Y),
		I && (e.directives = I),
		J && T0(e);
}
function vk(e, t, r = qr) {
	Fe(e) && (e = Md(e));
	for (const o in e) {
		const s = e[o];
		let u;
		St(s)
			? 'default' in s
				? (u = Br(s.from || o, s.default, !0))
				: (u = Br(s.from || o))
			: (u = Br(s)),
			kt(u)
				? Object.defineProperty(t, o, {
						enumerable: !0,
						configurable: !0,
						get: () => u.value,
						set: (f) => (u.value = f),
					})
				: (t[o] = u);
	}
}
function Sm(e, t, r) {
	Cr(Fe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function A0(e, t, r, o) {
	let s = o.includes('.') ? U0(r, o) : () => r[o];
	if (Rt(e)) {
		const u = t[e];
		je(u) && Et(s, u);
	} else if (je(e)) Et(s, e.bind(r));
	else if (St(e))
		if (Fe(e)) e.forEach((u) => A0(u, t, r, o));
		else {
			const u = je(e.handler) ? e.handler.bind(r) : t[e.handler];
			je(u) && Et(s, u, e);
		}
}
function M0(e) {
	const t = e.type,
		{ mixins: r, extends: o } = t,
		{
			mixins: s,
			optionsCache: u,
			config: { optionMergeStrategies: f },
		} = e.appContext,
		d = u.get(t);
	let h;
	return (
		d
			? (h = d)
			: !s.length && !r && !o
				? (h = t)
				: ((h = {}),
					s.length && s.forEach((p) => Gu(h, p, f, !0)),
					Gu(h, t, f)),
		St(t) && u.set(t, h),
		h
	);
}
function Gu(e, t, r, o = !1) {
	const { mixins: s, extends: u } = t;
	u && Gu(e, u, r, !0), s && s.forEach((f) => Gu(e, f, r, !0));
	for (const f in t)
		if (!(o && f === 'expose')) {
			const d = yk[f] || (r && r[f]);
			e[f] = d ? d(e[f], t[f]) : t[f];
		}
	return e;
}
const yk = {
	data: _m,
	props: km,
	emits: km,
	methods: El,
	computed: El,
	beforeCreate: Tn,
	created: Tn,
	beforeMount: Tn,
	mounted: Tn,
	beforeUpdate: Tn,
	updated: Tn,
	beforeDestroy: Tn,
	beforeUnmount: Tn,
	destroyed: Tn,
	unmounted: Tn,
	activated: Tn,
	deactivated: Tn,
	errorCaptured: Tn,
	serverPrefetch: Tn,
	components: El,
	directives: El,
	watch: wk,
	provide: _m,
	inject: bk,
};
function _m(e, t) {
	return t
		? e
			? function () {
					return en(
						je(e) ? e.call(this, this) : e,
						je(t) ? t.call(this, this) : t,
					);
				}
			: t
		: e;
}
function bk(e, t) {
	return El(Md(e), Md(t));
}
function Md(e) {
	if (Fe(e)) {
		const t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function Tn(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function El(e, t) {
	return e ? en(Object.create(null), e, t) : t;
}
function km(e, t) {
	return e
		? Fe(e) && Fe(t)
			? [...new Set([...e, ...t])]
			: en(Object.create(null), ju(e), ju(t ?? {}))
		: t;
}
function wk(e, t) {
	if (!e) return t;
	if (!t) return e;
	const r = en(Object.create(null), e);
	for (const o in t) r[o] = Tn(e[o], t[o]);
	return r;
}
function N0() {
	return {
		app: null,
		config: {
			isNativeTag: i_,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let xk = 0;
function Sk(e, t) {
	return function (o, s = null) {
		je(o) || (o = en({}, o)), s != null && !St(s) && (s = null);
		const u = N0(),
			f = new WeakSet(),
			d = [];
		let h = !1;
		const p = (u.app = {
			_uid: xk++,
			_component: o,
			_props: s,
			_container: null,
			_context: u,
			_instance: null,
			version: iT,
			get config() {
				return u.config;
			},
			set config(m) {},
			use(m, ...v) {
				return (
					f.has(m) ||
						(m && je(m.install)
							? (f.add(m), m.install(p, ...v))
							: je(m) && (f.add(m), m(p, ...v))),
					p
				);
			},
			mixin(m) {
				return u.mixins.includes(m) || u.mixins.push(m), p;
			},
			component(m, v) {
				return v ? ((u.components[m] = v), p) : u.components[m];
			},
			directive(m, v) {
				return v ? ((u.directives[m] = v), p) : u.directives[m];
			},
			mount(m, v, b) {
				if (!h) {
					const w = p._ceVNode || Pe(o, s);
					return (
						(w.appContext = u),
						b === !0 ? (b = 'svg') : b === !1 && (b = void 0),
						e(w, m, b),
						(h = !0),
						(p._container = m),
						(m.__vue_app__ = p),
						$c(w.component)
					);
				}
			},
			onUnmount(m) {
				d.push(m);
			},
			unmount() {
				h &&
					(Cr(d, p._instance, 16),
					e(null, p._container),
					delete p._container.__vue_app__);
			},
			provide(m, v) {
				return (u.provides[m] = v), p;
			},
			runWithContext(m) {
				const v = Ao;
				Ao = p;
				try {
					return m();
				} finally {
					Ao = v;
				}
			},
		});
		return p;
	};
}
let Ao = null;
function Lu(e, t) {
	if (rn) {
		let r = rn.provides;
		const o = rn.parent && rn.parent.provides;
		o === r && (r = rn.provides = Object.create(o)), (r[e] = t);
	}
}
function Br(e, t, r = !1) {
	const o = rn || Jt;
	if (o || Ao) {
		const s = Ao
			? Ao._context.provides
			: o
				? o.parent == null
					? o.vnode.appContext && o.vnode.appContext.provides
					: o.parent.provides
				: void 0;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return r && je(t) ? t.call(o && o.proxy) : t;
	}
}
function $0() {
	return !!(rn || Jt || Ao);
}
const P0 = {},
	O0 = () => Object.create(P0),
	R0 = (e) => Object.getPrototypeOf(e) === P0;
function _k(e, t, r, o = !1) {
	const s = {},
		u = O0();
	(e.propsDefaults = Object.create(null)), D0(e, t, s, u);
	for (const f in e.propsOptions[0]) f in s || (s[f] = void 0);
	r ? (e.props = o ? s : kh(s)) : e.type.props ? (e.props = s) : (e.props = u),
		(e.attrs = u);
}
function kk(e, t, r, o) {
	const {
			props: s,
			attrs: u,
			vnode: { patchFlag: f },
		} = e,
		d = ht(s),
		[h] = e.propsOptions;
	let p = !1;
	if ((o || f > 0) && !(f & 16)) {
		if (f & 8) {
			const m = e.vnode.dynamicProps;
			for (let v = 0; v < m.length; v++) {
				let b = m[v];
				if (Mc(e.emitsOptions, b)) continue;
				const w = t[b];
				if (h)
					if (wt(u, b)) w !== u[b] && ((u[b] = w), (p = !0));
					else {
						const C = er(b);
						s[C] = Nd(h, d, C, w, e, !1);
					}
				else w !== u[b] && ((u[b] = w), (p = !0));
			}
		}
	} else {
		D0(e, t, s, u) && (p = !0);
		let m;
		for (const v in d)
			(!t || (!wt(t, v) && ((m = yi(v)) === v || !wt(t, m)))) &&
				(h
					? r &&
						(r[v] !== void 0 || r[m] !== void 0) &&
						(s[v] = Nd(h, d, v, void 0, e, !0))
					: delete s[v]);
		if (u !== d)
			for (const v in u) (!t || !wt(t, v)) && (delete u[v], (p = !0));
	}
	p && ci(e.attrs, 'set', '');
}
function D0(e, t, r, o) {
	const [s, u] = e.propsOptions;
	let f = !1,
		d;
	if (t)
		for (let h in t) {
			if (Nl(h)) continue;
			const p = t[h];
			let m;
			s && wt(s, (m = er(h)))
				? !u || !u.includes(m)
					? (r[m] = p)
					: ((d || (d = {}))[m] = p)
				: Mc(e.emitsOptions, h) ||
					((!(h in o) || p !== o[h]) && ((o[h] = p), (f = !0)));
		}
	if (u) {
		const h = ht(r),
			p = d || mt;
		for (let m = 0; m < u.length; m++) {
			const v = u[m];
			r[v] = Nd(s, h, v, p[v], e, !wt(p, v));
		}
	}
	return f;
}
function Nd(e, t, r, o, s, u) {
	const f = e[r];
	if (f != null) {
		const d = wt(f, 'default');
		if (d && o === void 0) {
			const h = f.default;
			if (f.type !== Function && !f.skipFactory && je(h)) {
				const { propsDefaults: p } = s;
				if (r in p) o = p[r];
				else {
					const m = ba(s);
					(o = p[r] = h.call(null, t)), m();
				}
			} else o = h;
			s.ce && s.ce._setProp(r, o);
		}
		f[0] &&
			(u && !d ? (o = !1) : f[1] && (o === '' || o === yi(r)) && (o = !0));
	}
	return o;
}
const Tk = new WeakMap();
function z0(e, t, r = !1) {
	const o = r ? Tk : t.propsCache,
		s = o.get(e);
	if (s) return s;
	const u = e.props,
		f = {},
		d = [];
	let h = !1;
	if (!je(e)) {
		const m = (v) => {
			h = !0;
			const [b, w] = z0(v, t, !0);
			en(f, b), w && d.push(...w);
		};
		!r && t.mixins.length && t.mixins.forEach(m),
			e.extends && m(e.extends),
			e.mixins && e.mixins.forEach(m);
	}
	if (!u && !h) return St(e) && o.set(e, bs), bs;
	if (Fe(u))
		for (let m = 0; m < u.length; m++) {
			const v = er(u[m]);
			Tm(v) && (f[v] = mt);
		}
	else if (u)
		for (const m in u) {
			const v = er(m);
			if (Tm(v)) {
				const b = u[m],
					w = (f[v] = Fe(b) || je(b) ? { type: b } : en({}, b)),
					C = w.type;
				let M = !1,
					E = !0;
				if (Fe(C))
					for (let N = 0; N < C.length; ++N) {
						const A = C[N],
							$ = je(A) && A.name;
						if ($ === 'Boolean') {
							M = !0;
							break;
						} else $ === 'String' && (E = !1);
					}
				else M = je(C) && C.name === 'Boolean';
				(w[0] = M), (w[1] = E), (M || wt(w, 'default')) && d.push(v);
			}
		}
	const p = [f, d];
	return St(e) && o.set(e, p), p;
}
function Tm(e) {
	return e[0] !== '$' && !Nl(e);
}
const I0 = (e) => e[0] === '_' || e === '$stable',
	$h = (e) => (Fe(e) ? e.map(br) : [br(e)]),
	Ck = (e, t, r) => {
		if (t._n) return t;
		const o = rt((...s) => $h(t(...s)), r);
		return (o._c = !1), o;
	},
	F0 = (e, t, r) => {
		const o = e._ctx;
		for (const s in e) {
			if (I0(s)) continue;
			const u = e[s];
			if (je(u)) t[s] = Ck(s, u, o);
			else if (u != null) {
				const f = $h(u);
				t[s] = () => f;
			}
		}
	},
	H0 = (e, t) => {
		const r = $h(t);
		e.slots.default = () => r;
	},
	q0 = (e, t, r) => {
		for (const o in t) (r || o !== '_') && (e[o] = t[o]);
	},
	Ek = (e, t, r) => {
		const o = (e.slots = O0());
		if (e.vnode.shapeFlag & 32) {
			const s = t._;
			s ? (q0(o, t, r), r && qy(o, '_', s, !0)) : F0(t, o);
		} else t && H0(e, t);
	},
	Lk = (e, t, r) => {
		const { vnode: o, slots: s } = e;
		let u = !0,
			f = mt;
		if (o.shapeFlag & 32) {
			const d = t._;
			d
				? r && d === 1
					? (u = !1)
					: q0(s, t, r)
				: ((u = !t.$stable), F0(t, s)),
				(f = t);
		} else t && (H0(e, t), (f = { default: 1 }));
		if (u) for (const d in s) !I0(d) && f[d] == null && delete s[d];
	},
	Xn = Gk;
function Ak(e) {
	return Mk(e);
}
function Mk(e, t) {
	const r = wc();
	r.__VUE__ = !0;
	const {
			insert: o,
			remove: s,
			patchProp: u,
			createElement: f,
			createText: d,
			createComment: h,
			setText: p,
			setElementText: m,
			parentNode: v,
			nextSibling: b,
			setScopeId: w = qr,
			insertStaticContent: C,
		} = e,
		M = (
			z,
			q,
			X,
			le = null,
			fe = null,
			ue = null,
			Se = void 0,
			xe = null,
			de = !!q.dynamicChildren,
		) => {
			if (z === q) return;
			z && !Hr(z, q) && ((le = Z(z)), Ve(z, fe, ue, !0), (z = null)),
				q.patchFlag === -2 && ((de = !1), (q.dynamicChildren = null));
			const { type: pe, ref: Be, shapeFlag: Ee } = q;
			switch (pe) {
				case Nc:
					E(z, q, X, le);
					break;
				case cn:
					N(z, q, X, le);
					break;
				case ed:
					z == null && A(q, X, le, Se);
					break;
				case ut:
					Y(z, q, X, le, fe, ue, Se, xe, de);
					break;
				default:
					Ee & 1
						? O(z, q, X, le, fe, ue, Se, xe, de)
						: Ee & 6
							? I(z, q, X, le, fe, ue, Se, xe, de)
							: (Ee & 64 || Ee & 128) &&
								pe.process(z, q, X, le, fe, ue, Se, xe, de, $e);
			}
			Be != null && fe && Ed(Be, z && z.ref, ue, q || z, !q);
		},
		E = (z, q, X, le) => {
			if (z == null) o((q.el = d(q.children)), X, le);
			else {
				const fe = (q.el = z.el);
				q.children !== z.children && p(fe, q.children);
			}
		},
		N = (z, q, X, le) => {
			z == null ? o((q.el = h(q.children || '')), X, le) : (q.el = z.el);
		},
		A = (z, q, X, le) => {
			[z.el, z.anchor] = C(z.children, q, X, le, z.el, z.anchor);
		},
		$ = ({ el: z, anchor: q }, X, le) => {
			let fe;
			for (; z && z !== q; ) (fe = b(z)), o(z, X, le), (z = fe);
			o(q, X, le);
		},
		L = ({ el: z, anchor: q }) => {
			let X;
			for (; z && z !== q; ) (X = b(z)), s(z), (z = X);
			s(q);
		},
		O = (z, q, X, le, fe, ue, Se, xe, de) => {
			q.type === 'svg' ? (Se = 'svg') : q.type === 'math' && (Se = 'mathml'),
				z == null
					? U(q, X, le, fe, ue, Se, xe, de)
					: J(z, q, fe, ue, Se, xe, de);
		},
		U = (z, q, X, le, fe, ue, Se, xe) => {
			let de, pe;
			const { props: Be, shapeFlag: Ee, transition: De, dirs: Ue } = z;
			if (
				((de = z.el = f(z.type, ue, Be && Be.is, Be)),
				Ee & 8
					? m(de, z.children)
					: Ee & 16 && te(z.children, de, null, le, fe, Qf(z, ue), Se, xe),
				Ue && yo(z, null, le, 'created'),
				B(de, z, z.scopeId, Se, le),
				Be)
			) {
				for (const ot in Be)
					ot !== 'value' && !Nl(ot) && u(de, ot, null, Be[ot], ue, le);
				'value' in Be && u(de, 'value', null, Be.value, ue),
					(pe = Be.onVnodeBeforeMount) && zr(pe, le, z);
			}
			Ue && yo(z, null, le, 'beforeMount');
			const Qe = Nk(fe, De);
			Qe && De.beforeEnter(de),
				o(de, q, X),
				((pe = Be && Be.onVnodeMounted) || Qe || Ue) &&
					Xn(() => {
						pe && zr(pe, le, z),
							Qe && De.enter(de),
							Ue && yo(z, null, le, 'mounted');
					}, fe);
		},
		B = (z, q, X, le, fe) => {
			if ((X && w(z, X), le))
				for (let ue = 0; ue < le.length; ue++) w(z, le[ue]);
			if (fe) {
				let ue = fe.subTree;
				if (
					q === ue ||
					(G0(ue.type) && (ue.ssContent === q || ue.ssFallback === q))
				) {
					const Se = fe.vnode;
					B(z, Se, Se.scopeId, Se.slotScopeIds, fe.parent);
				}
			}
		},
		te = (z, q, X, le, fe, ue, Se, xe, de = 0) => {
			for (let pe = de; pe < z.length; pe++) {
				const Be = (z[pe] = xe ? Bi(z[pe]) : br(z[pe]));
				M(null, Be, q, X, le, fe, ue, Se, xe);
			}
		},
		J = (z, q, X, le, fe, ue, Se) => {
			const xe = (q.el = z.el);
			let { patchFlag: de, dynamicChildren: pe, dirs: Be } = q;
			de |= z.patchFlag & 16;
			const Ee = z.props || mt,
				De = q.props || mt;
			let Ue;
			if (
				(X && bo(X, !1),
				(Ue = De.onVnodeBeforeUpdate) && zr(Ue, X, q, z),
				Be && yo(q, z, X, 'beforeUpdate'),
				X && bo(X, !0),
				((Ee.innerHTML && De.innerHTML == null) ||
					(Ee.textContent && De.textContent == null)) &&
					m(xe, ''),
				pe
					? K(z.dynamicChildren, pe, xe, X, le, Qf(q, fe), ue)
					: Se || ie(z, q, xe, null, X, le, Qf(q, fe), ue, !1),
				de > 0)
			) {
				if (de & 16) ee(xe, Ee, De, X, fe);
				else if (
					(de & 2 &&
						Ee.class !== De.class &&
						u(xe, 'class', null, De.class, fe),
					de & 4 && u(xe, 'style', Ee.style, De.style, fe),
					de & 8)
				) {
					const Qe = q.dynamicProps;
					for (let ot = 0; ot < Qe.length; ot++) {
						const lt = Qe[ot],
							At = Ee[lt],
							st = De[lt];
						(st !== At || lt === 'value') && u(xe, lt, At, st, fe, X);
					}
				}
				de & 1 && z.children !== q.children && m(xe, q.children);
			} else !Se && pe == null && ee(xe, Ee, De, X, fe);
			((Ue = De.onVnodeUpdated) || Be) &&
				Xn(() => {
					Ue && zr(Ue, X, q, z), Be && yo(q, z, X, 'updated');
				}, le);
		},
		K = (z, q, X, le, fe, ue, Se) => {
			for (let xe = 0; xe < q.length; xe++) {
				const de = z[xe],
					pe = q[xe],
					Be =
						de.el && (de.type === ut || !Hr(de, pe) || de.shapeFlag & 70)
							? v(de.el)
							: X;
				M(de, pe, Be, null, le, fe, ue, Se, !0);
			}
		},
		ee = (z, q, X, le, fe) => {
			if (q !== X) {
				if (q !== mt)
					for (const ue in q)
						!Nl(ue) && !(ue in X) && u(z, ue, q[ue], null, fe, le);
				for (const ue in X) {
					if (Nl(ue)) continue;
					const Se = X[ue],
						xe = q[ue];
					Se !== xe && ue !== 'value' && u(z, ue, xe, Se, fe, le);
				}
				'value' in X && u(z, 'value', q.value, X.value, fe);
			}
		},
		Y = (z, q, X, le, fe, ue, Se, xe, de) => {
			const pe = (q.el = z ? z.el : d('')),
				Be = (q.anchor = z ? z.anchor : d(''));
			let { patchFlag: Ee, dynamicChildren: De, slotScopeIds: Ue } = q;
			Ue && (xe = xe ? xe.concat(Ue) : Ue),
				z == null
					? (o(pe, X, le),
						o(Be, X, le),
						te(q.children || [], X, Be, fe, ue, Se, xe, de))
					: Ee > 0 && Ee & 64 && De && z.dynamicChildren
						? (K(z.dynamicChildren, De, X, fe, ue, Se, xe),
							(q.key != null || (fe && q === fe.subTree)) && B0(z, q, !0))
						: ie(z, q, X, Be, fe, ue, Se, xe, de);
		},
		I = (z, q, X, le, fe, ue, Se, xe, de) => {
			(q.slotScopeIds = xe),
				z == null
					? q.shapeFlag & 512
						? fe.ctx.activate(q, X, le, Se, de)
						: F(q, X, le, fe, ue, Se, de)
					: k(z, q, de);
		},
		F = (z, q, X, le, fe, ue, Se) => {
			const xe = (z.component = Jk(z, le, fe));
			if ((Tc(z) && (xe.ctx.renderer = $e), Qk(xe, !1, Se), xe.asyncDep)) {
				if ((fe && fe.registerDep(xe, W, Se), !z.el)) {
					const de = (xe.subTree = Pe(cn));
					N(null, de, q, X);
				}
			} else W(xe, z, q, X, fe, ue, Se);
		},
		k = (z, q, X) => {
			const le = (q.component = z.component);
			if (qk(z, q, X))
				if (le.asyncDep && !le.asyncResolved) {
					V(le, q, X);
					return;
				} else (le.next = q), le.update();
			else (q.el = z.el), (le.vnode = q);
		},
		W = (z, q, X, le, fe, ue, Se) => {
			const xe = () => {
				if (z.isMounted) {
					let { next: Ee, bu: De, u: Ue, parent: Qe, vnode: ot } = z;
					{
						const It = W0(z);
						if (It) {
							Ee && ((Ee.el = ot.el), V(z, Ee, Se)),
								It.asyncDep.then(() => {
									z.isUnmounted || xe();
								});
							return;
						}
					}
					let lt = Ee,
						At;
					bo(z, !1),
						Ee ? ((Ee.el = ot.el), V(z, Ee, Se)) : (Ee = ot),
						De && Eu(De),
						(At = Ee.props && Ee.props.onVnodeBeforeUpdate) &&
							zr(At, Qe, Ee, ot),
						bo(z, !0);
					const st = Em(z),
						Ut = z.subTree;
					(z.subTree = st),
						M(Ut, st, v(Ut.el), Z(Ut), z, fe, ue),
						(Ee.el = st.el),
						lt === null && Oh(z, st.el),
						Ue && Xn(Ue, fe),
						(At = Ee.props && Ee.props.onVnodeUpdated) &&
							Xn(() => zr(At, Qe, Ee, ot), fe);
				} else {
					let Ee;
					const { el: De, props: Ue } = q,
						{ bm: Qe, m: ot, parent: lt, root: At, type: st } = z,
						Ut = _s(q);
					bo(z, !1),
						Qe && Eu(Qe),
						!Ut && (Ee = Ue && Ue.onVnodeBeforeMount) && zr(Ee, lt, q),
						bo(z, !0);
					{
						At.ce && At.ce._injectChildStyle(st);
						const It = (z.subTree = Em(z));
						M(null, It, X, le, z, fe, ue), (q.el = It.el);
					}
					if ((ot && Xn(ot, fe), !Ut && (Ee = Ue && Ue.onVnodeMounted))) {
						const It = q;
						Xn(() => zr(Ee, lt, It), fe);
					}
					(q.shapeFlag & 256 ||
						(lt && _s(lt.vnode) && lt.vnode.shapeFlag & 256)) &&
						z.a &&
						Xn(z.a, fe),
						(z.isMounted = !0),
						(q = X = le = null);
				}
			};
			z.scope.on();
			const de = (z.effect = new Ky(xe));
			z.scope.off();
			const pe = (z.update = de.run.bind(de)),
				Be = (z.job = de.runIfDirty.bind(de));
			(Be.i = z),
				(Be.id = z.uid),
				(de.scheduler = () => Lh(Be)),
				bo(z, !0),
				pe();
		},
		V = (z, q, X) => {
			q.component = z;
			const le = z.vnode.props;
			(z.vnode = q),
				(z.next = null),
				kk(z, q.props, le, X),
				Lk(z, q.children, X),
				io(),
				ym(z),
				oo();
		},
		ie = (z, q, X, le, fe, ue, Se, xe, de = !1) => {
			const pe = z && z.children,
				Be = z ? z.shapeFlag : 0,
				Ee = q.children,
				{ patchFlag: De, shapeFlag: Ue } = q;
			if (De > 0) {
				if (De & 128) {
					Ne(pe, Ee, X, le, fe, ue, Se, xe, de);
					return;
				} else if (De & 256) {
					ye(pe, Ee, X, le, fe, ue, Se, xe, de);
					return;
				}
			}
			Ue & 8
				? (Be & 16 && Le(pe, fe, ue), Ee !== pe && m(X, Ee))
				: Be & 16
					? Ue & 16
						? Ne(pe, Ee, X, le, fe, ue, Se, xe, de)
						: Le(pe, fe, ue, !0)
					: (Be & 8 && m(X, ''), Ue & 16 && te(Ee, X, le, fe, ue, Se, xe, de));
		},
		ye = (z, q, X, le, fe, ue, Se, xe, de) => {
			(z = z || bs), (q = q || bs);
			const pe = z.length,
				Be = q.length,
				Ee = Math.min(pe, Be);
			let De;
			for (De = 0; De < Ee; De++) {
				const Ue = (q[De] = de ? Bi(q[De]) : br(q[De]));
				M(z[De], Ue, X, null, fe, ue, Se, xe, de);
			}
			pe > Be
				? Le(z, fe, ue, !0, !1, Ee)
				: te(q, X, le, fe, ue, Se, xe, de, Ee);
		},
		Ne = (z, q, X, le, fe, ue, Se, xe, de) => {
			let pe = 0;
			const Be = q.length;
			let Ee = z.length - 1,
				De = Be - 1;
			for (; pe <= Ee && pe <= De; ) {
				const Ue = z[pe],
					Qe = (q[pe] = de ? Bi(q[pe]) : br(q[pe]));
				if (Hr(Ue, Qe)) M(Ue, Qe, X, null, fe, ue, Se, xe, de);
				else break;
				pe++;
			}
			for (; pe <= Ee && pe <= De; ) {
				const Ue = z[Ee],
					Qe = (q[De] = de ? Bi(q[De]) : br(q[De]));
				if (Hr(Ue, Qe)) M(Ue, Qe, X, null, fe, ue, Se, xe, de);
				else break;
				Ee--, De--;
			}
			if (pe > Ee) {
				if (pe <= De) {
					const Ue = De + 1,
						Qe = Ue < Be ? q[Ue].el : le;
					for (; pe <= De; )
						M(
							null,
							(q[pe] = de ? Bi(q[pe]) : br(q[pe])),
							X,
							Qe,
							fe,
							ue,
							Se,
							xe,
							de,
						),
							pe++;
				}
			} else if (pe > De) for (; pe <= Ee; ) Ve(z[pe], fe, ue, !0), pe++;
			else {
				const Ue = pe,
					Qe = pe,
					ot = new Map();
				for (pe = Qe; pe <= De; pe++) {
					const Dt = (q[pe] = de ? Bi(q[pe]) : br(q[pe]));
					Dt.key != null && ot.set(Dt.key, pe);
				}
				let lt,
					At = 0;
				const st = De - Qe + 1;
				let Ut = !1,
					It = 0;
				const Pn = new Array(st);
				for (pe = 0; pe < st; pe++) Pn[pe] = 0;
				for (pe = Ue; pe <= Ee; pe++) {
					const Dt = z[pe];
					if (At >= st) {
						Ve(Dt, fe, ue, !0);
						continue;
					}
					let On;
					if (Dt.key != null) On = ot.get(Dt.key);
					else
						for (lt = Qe; lt <= De; lt++)
							if (Pn[lt - Qe] === 0 && Hr(Dt, q[lt])) {
								On = lt;
								break;
							}
					On === void 0
						? Ve(Dt, fe, ue, !0)
						: ((Pn[On - Qe] = pe + 1),
							On >= It ? (It = On) : (Ut = !0),
							M(Dt, q[On], X, null, fe, ue, Se, xe, de),
							At++);
				}
				const Nr = Ut ? $k(Pn) : bs;
				for (lt = Nr.length - 1, pe = st - 1; pe >= 0; pe--) {
					const Dt = Qe + pe,
						On = q[Dt],
						Je = Dt + 1 < Be ? q[Dt + 1].el : le;
					Pn[pe] === 0
						? M(null, On, X, Je, fe, ue, Se, xe, de)
						: Ut && (lt < 0 || pe !== Nr[lt] ? We(On, X, Je, 2) : lt--);
				}
			}
		},
		We = (z, q, X, le, fe = null) => {
			const {
				el: ue,
				type: Se,
				transition: xe,
				children: de,
				shapeFlag: pe,
			} = z;
			if (pe & 6) {
				We(z.component.subTree, q, X, le);
				return;
			}
			if (pe & 128) {
				z.suspense.move(q, X, le);
				return;
			}
			if (pe & 64) {
				Se.move(z, q, X, $e);
				return;
			}
			if (Se === ut) {
				o(ue, q, X);
				for (let Ee = 0; Ee < de.length; Ee++) We(de[Ee], q, X, le);
				o(z.anchor, q, X);
				return;
			}
			if (Se === ed) {
				$(z, q, X);
				return;
			}
			if (le !== 2 && pe & 1 && xe)
				if (le === 0)
					xe.beforeEnter(ue), o(ue, q, X), Xn(() => xe.enter(ue), fe);
				else {
					const { leave: Ee, delayLeave: De, afterLeave: Ue } = xe,
						Qe = () => o(ue, q, X),
						ot = () => {
							Ee(ue, () => {
								Qe(), Ue && Ue();
							});
						};
					De ? De(ue, Qe, ot) : ot();
				}
			else o(ue, q, X);
		},
		Ve = (z, q, X, le = !1, fe = !1) => {
			const {
				type: ue,
				props: Se,
				ref: xe,
				children: de,
				dynamicChildren: pe,
				shapeFlag: Be,
				patchFlag: Ee,
				dirs: De,
				cacheIndex: Ue,
			} = z;
			if (
				(Ee === -2 && (fe = !1),
				xe != null && Ed(xe, null, X, z, !0),
				Ue != null && (q.renderCache[Ue] = void 0),
				Be & 256)
			) {
				q.ctx.deactivate(z);
				return;
			}
			const Qe = Be & 1 && De,
				ot = !_s(z);
			let lt;
			if ((ot && (lt = Se && Se.onVnodeBeforeUnmount) && zr(lt, q, z), Be & 6))
				Xe(z.component, X, le);
			else {
				if (Be & 128) {
					z.suspense.unmount(X, le);
					return;
				}
				Qe && yo(z, null, q, 'beforeUnmount'),
					Be & 64
						? z.type.remove(z, q, X, $e, le)
						: pe && !pe.hasOnce && (ue !== ut || (Ee > 0 && Ee & 64))
							? Le(pe, q, X, !1, !0)
							: ((ue === ut && Ee & 384) || (!fe && Be & 16)) && Le(de, q, X),
					le && nt(z);
			}
			((ot && (lt = Se && Se.onVnodeUnmounted)) || Qe) &&
				Xn(() => {
					lt && zr(lt, q, z), Qe && yo(z, null, q, 'unmounted');
				}, X);
		},
		nt = (z) => {
			const { type: q, el: X, anchor: le, transition: fe } = z;
			if (q === ut) {
				et(X, le);
				return;
			}
			if (q === ed) {
				L(z);
				return;
			}
			const ue = () => {
				s(X), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
			};
			if (z.shapeFlag & 1 && fe && !fe.persisted) {
				const { leave: Se, delayLeave: xe } = fe,
					de = () => Se(X, ue);
				xe ? xe(z.el, ue, de) : de();
			} else ue();
		},
		et = (z, q) => {
			let X;
			for (; z !== q; ) (X = b(z)), s(z), (z = X);
			s(q);
		},
		Xe = (z, q, X) => {
			const {
				bum: le,
				scope: fe,
				job: ue,
				subTree: Se,
				um: xe,
				m: de,
				a: pe,
			} = z;
			Cm(de),
				Cm(pe),
				le && Eu(le),
				fe.stop(),
				ue && ((ue.flags |= 8), Ve(Se, z, q, X)),
				xe && Xn(xe, q),
				Xn(() => {
					z.isUnmounted = !0;
				}, q),
				q &&
					q.pendingBranch &&
					!q.isUnmounted &&
					z.asyncDep &&
					!z.asyncResolved &&
					z.suspenseId === q.pendingId &&
					(q.deps--, q.deps === 0 && q.resolve());
		},
		Le = (z, q, X, le = !1, fe = !1, ue = 0) => {
			for (let Se = ue; Se < z.length; Se++) Ve(z[Se], q, X, le, fe);
		},
		Z = (z) => {
			if (z.shapeFlag & 6) return Z(z.component.subTree);
			if (z.shapeFlag & 128) return z.suspense.next();
			const q = b(z.anchor || z.el),
				X = q && q[Y_];
			return X ? b(X) : q;
		};
	let ae = !1;
	const he = (z, q, X) => {
			z == null
				? q._vnode && Ve(q._vnode, null, null, !0)
				: M(q._vnode || null, z, q, null, null, null, X),
				(q._vnode = z),
				ae || ((ae = !0), ym(), p0(), (ae = !1));
		},
		$e = {
			p: M,
			um: Ve,
			m: We,
			r: nt,
			mt: F,
			mc: te,
			pc: ie,
			pbc: K,
			n: Z,
			o: e,
		};
	return { render: he, hydrate: void 0, createApp: Sk(he) };
}
function Qf({ type: e, props: t }, r) {
	return (r === 'svg' && e === 'foreignObject') ||
		(r === 'mathml' &&
			e === 'annotation-xml' &&
			t &&
			t.encoding &&
			t.encoding.includes('html'))
		? void 0
		: r;
}
function bo({ effect: e, job: t }, r) {
	r ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Nk(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function B0(e, t, r = !1) {
	const o = e.children,
		s = t.children;
	if (Fe(o) && Fe(s))
		for (let u = 0; u < o.length; u++) {
			const f = o[u];
			let d = s[u];
			d.shapeFlag & 1 &&
				!d.dynamicChildren &&
				((d.patchFlag <= 0 || d.patchFlag === 32) &&
					((d = s[u] = Bi(s[u])), (d.el = f.el)),
				!r && d.patchFlag !== -2 && B0(f, d)),
				d.type === Nc && (d.el = f.el);
		}
}
function $k(e) {
	const t = e.slice(),
		r = [0];
	let o, s, u, f, d;
	const h = e.length;
	for (o = 0; o < h; o++) {
		const p = e[o];
		if (p !== 0) {
			if (((s = r[r.length - 1]), e[s] < p)) {
				(t[o] = s), r.push(o);
				continue;
			}
			for (u = 0, f = r.length - 1; u < f; )
				(d = (u + f) >> 1), e[r[d]] < p ? (u = d + 1) : (f = d);
			p < e[r[u]] && (u > 0 && (t[o] = r[u - 1]), (r[u] = o));
		}
	}
	for (u = r.length, f = r[u - 1]; u-- > 0; ) (r[u] = f), (f = t[f]);
	return r;
}
function W0(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : W0(t);
}
function Cm(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Pk = Symbol.for('v-scx'),
	Ok = () => Br(Pk);
function Ph(e, t) {
	return Lc(e, null, t);
}
function Rk(e, t) {
	return Lc(e, null, { flush: 'sync' });
}
function Et(e, t, r) {
	return Lc(e, t, r);
}
function Lc(e, t, r = mt) {
	const { immediate: o, deep: s, flush: u, once: f } = r,
		d = en({}, r),
		h = (t && o) || (!t && u !== 'post');
	let p;
	if (Yl) {
		if (u === 'sync') {
			const w = Ok();
			p = w.__watcherHandles || (w.__watcherHandles = []);
		} else if (!h) {
			const w = () => {};
			return (w.stop = qr), (w.resume = qr), (w.pause = qr), w;
		}
	}
	const m = rn;
	d.call = (w, C, M) => Cr(w, m, C, M);
	let v = !1;
	u === 'post'
		? (d.scheduler = (w) => {
				Xn(w, m && m.suspense);
			})
		: u !== 'sync' &&
			((v = !0),
			(d.scheduler = (w, C) => {
				C ? w() : Lh(w);
			})),
		(d.augmentJob = (w) => {
			t && (w.flags |= 4),
				v && ((w.flags |= 2), m && ((w.id = m.uid), (w.i = m)));
		});
	const b = G_(e, t, d);
	return Yl && (p ? p.push(b) : h && b()), b;
}
function Dk(e, t, r) {
	const o = this.proxy,
		s = Rt(e) ? (e.includes('.') ? U0(o, e) : () => o[e]) : e.bind(o, o);
	let u;
	je(t) ? (u = t) : ((u = t.handler), (r = t));
	const f = ba(this),
		d = Lc(s, u.bind(o), r);
	return f(), d;
}
function U0(e, t) {
	const r = t.split('.');
	return () => {
		let o = e;
		for (let s = 0; s < r.length && o; s++) o = o[r[s]];
		return o;
	};
}
function Ac(e, t, r = mt) {
	const o = qs(),
		s = er(t),
		u = yi(t),
		f = V0(e, s),
		d = c0((h, p) => {
			let m,
				v = mt,
				b;
			return (
				Rk(() => {
					const w = e[s];
					qn(m, w) && ((m = w), p());
				}),
				{
					get() {
						return h(), r.get ? r.get(m) : m;
					},
					set(w) {
						const C = r.set ? r.set(w) : w;
						if (!qn(C, m) && !(v !== mt && qn(w, v))) return;
						const M = o.vnode.props;
						(M &&
							(t in M || s in M || u in M) &&
							(`onUpdate:${t}` in M ||
								`onUpdate:${s}` in M ||
								`onUpdate:${u}` in M)) ||
							((m = w), p()),
							o.emit(`update:${t}`, C),
							qn(w, C) && qn(w, v) && !qn(C, b) && p(),
							(v = w),
							(b = C);
					},
				}
			);
		});
	return (
		(d[Symbol.iterator] = () => {
			let h = 0;
			return {
				next() {
					return h < 2 ? { value: h++ ? f || mt : d, done: !1 } : { done: !0 };
				},
			};
		}),
		d
	);
}
const V0 = (e, t) =>
	t === 'modelValue' || t === 'model-value'
		? e.modelModifiers
		: e[`${t}Modifiers`] || e[`${er(t)}Modifiers`] || e[`${yi(t)}Modifiers`];
function zk(e, t, ...r) {
	if (e.isUnmounted) return;
	const o = e.vnode.props || mt;
	let s = r;
	const u = t.startsWith('update:'),
		f = u && V0(o, t.slice(7));
	f &&
		(f.trim && (s = r.map((m) => (Rt(m) ? m.trim() : m))),
		f.number && (s = r.map(wd)));
	let d,
		h = o[(d = Cu(t))] || o[(d = Cu(er(t)))];
	!h && u && (h = o[(d = Cu(yi(t)))]), h && Cr(h, e, 6, s);
	const p = o[d + 'Once'];
	if (p) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[d]) return;
		(e.emitted[d] = !0), Cr(p, e, 6, s);
	}
}
function j0(e, t, r = !1) {
	const o = t.emitsCache,
		s = o.get(e);
	if (s !== void 0) return s;
	const u = e.emits;
	let f = {},
		d = !1;
	if (!je(e)) {
		const h = (p) => {
			const m = j0(p, t, !0);
			m && ((d = !0), en(f, m));
		};
		!r && t.mixins.length && t.mixins.forEach(h),
			e.extends && h(e.extends),
			e.mixins && e.mixins.forEach(h);
	}
	return !u && !d
		? (St(e) && o.set(e, null), null)
		: (Fe(u) ? u.forEach((h) => (f[h] = null)) : en(f, u),
			St(e) && o.set(e, f),
			f);
}
function Mc(e, t) {
	return !e || !mc(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, '')),
			wt(e, t[0].toLowerCase() + t.slice(1)) || wt(e, yi(t)) || wt(e, t));
}
function Em(e) {
	const {
			type: t,
			vnode: r,
			proxy: o,
			withProxy: s,
			propsOptions: [u],
			slots: f,
			attrs: d,
			emit: h,
			render: p,
			renderCache: m,
			props: v,
			data: b,
			setupState: w,
			ctx: C,
			inheritAttrs: M,
		} = e,
		E = Vu(e);
	let N, A;
	try {
		if (r.shapeFlag & 4) {
			const L = s || o,
				O = L;
			(N = br(p.call(O, L, m, v, w, b, C))), (A = d);
		} else {
			const L = t;
			(N = br(
				L.length > 1 ? L(v, { attrs: d, slots: f, emit: h }) : L(v, null),
			)),
				(A = t.props ? d : Fk(d));
		}
	} catch (L) {
		(Rl.length = 0), ya(L, e, 1), (N = Pe(cn));
	}
	let $ = N;
	if (A && M !== !1) {
		const L = Object.keys(A),
			{ shapeFlag: O } = $;
		L.length &&
			O & 7 &&
			(u && L.some(vh) && (A = Hk(A, u)), ($ = Ji($, A, !1, !0)));
	}
	return (
		r.dirs &&
			(($ = Ji($, null, !1, !0)),
			($.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs)),
		r.transition && Gl($, r.transition),
		(N = $),
		Vu(E),
		N
	);
}
function Ik(e, t = !0) {
	let r;
	for (let o = 0; o < e.length; o++) {
		const s = e[o];
		if ($s(s)) {
			if (s.type !== cn || s.children === 'v-if') {
				if (r) return;
				r = s;
			}
		} else return;
	}
	return r;
}
const Fk = (e) => {
		let t;
		for (const r in e)
			(r === 'class' || r === 'style' || mc(r)) && ((t || (t = {}))[r] = e[r]);
		return t;
	},
	Hk = (e, t) => {
		const r = {};
		for (const o in e) (!vh(o) || !(o.slice(9) in t)) && (r[o] = e[o]);
		return r;
	};
function qk(e, t, r) {
	const { props: o, children: s, component: u } = e,
		{ props: f, children: d, patchFlag: h } = t,
		p = u.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (r && h >= 0) {
		if (h & 1024) return !0;
		if (h & 16) return o ? Lm(o, f, p) : !!f;
		if (h & 8) {
			const m = t.dynamicProps;
			for (let v = 0; v < m.length; v++) {
				const b = m[v];
				if (f[b] !== o[b] && !Mc(p, b)) return !0;
			}
		}
	} else
		return (s || d) && (!d || !d.$stable)
			? !0
			: o === f
				? !1
				: o
					? f
						? Lm(o, f, p)
						: !0
					: !!f;
	return !1;
}
function Lm(e, t, r) {
	const o = Object.keys(t);
	if (o.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < o.length; s++) {
		const u = o[s];
		if (t[u] !== e[u] && !Mc(r, u)) return !0;
	}
	return !1;
}
function Oh({ vnode: e, parent: t }, r) {
	for (; t; ) {
		const o = t.subTree;
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = r), (t = t.parent);
		else break;
	}
}
const G0 = (e) => e.__isSuspense;
let $d = 0;
const Bk = {
		name: 'Suspense',
		__isSuspense: !0,
		process(e, t, r, o, s, u, f, d, h, p) {
			if (e == null) Wk(t, r, o, s, u, f, d, h, p);
			else {
				if (u && u.deps > 0 && !e.suspense.isInFallback) {
					(t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
					return;
				}
				Uk(e, t, r, o, s, f, d, h, p);
			}
		},
		hydrate: Vk,
		normalize: jk,
	},
	K0 = Bk;
function Xl(e, t) {
	const r = e.props && e.props[t];
	je(r) && r();
}
function Wk(e, t, r, o, s, u, f, d, h) {
	const {
			p,
			o: { createElement: m },
		} = h,
		v = m('div'),
		b = (e.suspense = X0(e, s, o, t, v, r, u, f, d, h));
	p(null, (b.pendingBranch = e.ssContent), v, null, o, b, u, f),
		b.deps > 0
			? (Xl(e, 'onPending'),
				Xl(e, 'onFallback'),
				p(null, e.ssFallback, t, r, o, null, u, f),
				ks(b, e.ssFallback))
			: b.resolve(!1, !0);
}
function Uk(e, t, r, o, s, u, f, d, { p: h, um: p, o: { createElement: m } }) {
	const v = (t.suspense = e.suspense);
	(v.vnode = t), (t.el = e.el);
	const b = t.ssContent,
		w = t.ssFallback,
		{ activeBranch: C, pendingBranch: M, isInFallback: E, isHydrating: N } = v;
	if (M)
		(v.pendingBranch = b),
			Hr(b, M)
				? (h(M, b, v.hiddenContainer, null, s, v, u, f, d),
					v.deps <= 0
						? v.resolve()
						: E && (N || (h(C, w, r, o, s, null, u, f, d), ks(v, w))))
				: ((v.pendingId = $d++),
					N ? ((v.isHydrating = !1), (v.activeBranch = M)) : p(M, s, v),
					(v.deps = 0),
					(v.effects.length = 0),
					(v.hiddenContainer = m('div')),
					E
						? (h(null, b, v.hiddenContainer, null, s, v, u, f, d),
							v.deps <= 0
								? v.resolve()
								: (h(C, w, r, o, s, null, u, f, d), ks(v, w)))
						: C && Hr(b, C)
							? (h(C, b, r, o, s, v, u, f, d), v.resolve(!0))
							: (h(null, b, v.hiddenContainer, null, s, v, u, f, d),
								v.deps <= 0 && v.resolve()));
	else if (C && Hr(b, C)) h(C, b, r, o, s, v, u, f, d), ks(v, b);
	else if (
		(Xl(t, 'onPending'),
		(v.pendingBranch = b),
		b.shapeFlag & 512
			? (v.pendingId = b.component.suspenseId)
			: (v.pendingId = $d++),
		h(null, b, v.hiddenContainer, null, s, v, u, f, d),
		v.deps <= 0)
	)
		v.resolve();
	else {
		const { timeout: A, pendingId: $ } = v;
		A > 0
			? setTimeout(() => {
					v.pendingId === $ && v.fallback(w);
				}, A)
			: A === 0 && v.fallback(w);
	}
}
function X0(e, t, r, o, s, u, f, d, h, p, m = !1) {
	const {
		p: v,
		m: b,
		um: w,
		n: C,
		o: { parentNode: M, remove: E },
	} = p;
	let N;
	const A = Kk(e);
	A && t && t.pendingBranch && ((N = t.pendingId), t.deps++);
	const $ = e.props ? By(e.props.timeout) : void 0,
		L = u,
		O = {
			vnode: e,
			parent: t,
			parentComponent: r,
			namespace: f,
			container: o,
			hiddenContainer: s,
			deps: 0,
			pendingId: $d++,
			timeout: typeof $ == 'number' ? $ : -1,
			activeBranch: null,
			pendingBranch: null,
			isInFallback: !m,
			isHydrating: m,
			isUnmounted: !1,
			effects: [],
			resolve(U = !1, B = !1) {
				const {
					vnode: te,
					activeBranch: J,
					pendingBranch: K,
					pendingId: ee,
					effects: Y,
					parentComponent: I,
					container: F,
				} = O;
				let k = !1;
				O.isHydrating
					? (O.isHydrating = !1)
					: U ||
						((k = J && K.transition && K.transition.mode === 'out-in'),
						k &&
							(J.transition.afterLeave = () => {
								ee === O.pendingId && (b(K, F, u === L ? C(J) : u, 0), Td(Y));
							}),
						J && (M(J.el) === F && (u = C(J)), w(J, I, O, !0)),
						k || b(K, F, u, 0)),
					ks(O, K),
					(O.pendingBranch = null),
					(O.isInFallback = !1);
				let W = O.parent,
					V = !1;
				for (; W; ) {
					if (W.pendingBranch) {
						W.effects.push(...Y), (V = !0);
						break;
					}
					W = W.parent;
				}
				!V && !k && Td(Y),
					(O.effects = []),
					A &&
						t &&
						t.pendingBranch &&
						N === t.pendingId &&
						(t.deps--, t.deps === 0 && !B && t.resolve()),
					Xl(te, 'onResolve');
			},
			fallback(U) {
				if (!O.pendingBranch) return;
				const {
					vnode: B,
					activeBranch: te,
					parentComponent: J,
					container: K,
					namespace: ee,
				} = O;
				Xl(B, 'onFallback');
				const Y = C(te),
					I = () => {
						O.isInFallback && (v(null, U, K, Y, J, null, ee, d, h), ks(O, U));
					},
					F = U.transition && U.transition.mode === 'out-in';
				F && (te.transition.afterLeave = I),
					(O.isInFallback = !0),
					w(te, J, null, !0),
					F || I();
			},
			move(U, B, te) {
				O.activeBranch && b(O.activeBranch, U, B, te), (O.container = U);
			},
			next() {
				return O.activeBranch && C(O.activeBranch);
			},
			registerDep(U, B, te) {
				const J = !!O.pendingBranch;
				J && O.deps++;
				const K = U.vnode.el;
				U.asyncDep
					.catch((ee) => {
						ya(ee, U, 0);
					})
					.then((ee) => {
						if (U.isUnmounted || O.isUnmounted || O.pendingId !== U.suspenseId)
							return;
						U.asyncResolved = !0;
						const { vnode: Y } = U;
						Od(U, ee), K && (Y.el = K);
						const I = !K && U.subTree.el;
						B(U, Y, M(K || U.subTree.el), K ? null : C(U.subTree), O, f, te),
							I && E(I),
							Oh(U, Y.el),
							J && --O.deps === 0 && O.resolve();
					});
			},
			unmount(U, B) {
				(O.isUnmounted = !0),
					O.activeBranch && w(O.activeBranch, r, U, B),
					O.pendingBranch && w(O.pendingBranch, r, U, B);
			},
		};
	return O;
}
function Vk(e, t, r, o, s, u, f, d, h) {
	const p = (t.suspense = X0(
			t,
			o,
			r,
			e.parentNode,
			document.createElement('div'),
			null,
			s,
			u,
			f,
			d,
			!0,
		)),
		m = h(e, (p.pendingBranch = t.ssContent), r, p, u, f);
	return p.deps === 0 && p.resolve(!1, !0), m;
}
function jk(e) {
	const { shapeFlag: t, children: r } = e,
		o = t & 32;
	(e.ssContent = Am(o ? r.default : r)),
		(e.ssFallback = o ? Am(r.fallback) : Pe(cn));
}
function Am(e) {
	let t;
	if (je(e)) {
		const r = Ns && e._c;
		r && ((e._d = !1), oe()), (e = e()), r && ((e._d = !0), (t = Wn), Y0());
	}
	return (
		Fe(e) && (e = Ik(e)),
		(e = br(e)),
		t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)),
		e
	);
}
function Gk(e, t) {
	t && t.pendingBranch
		? Fe(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: Td(e);
}
function ks(e, t) {
	e.activeBranch = t;
	const { vnode: r, parentComponent: o } = e;
	let s = t.el;
	for (; !s && t.component; ) (t = t.component.subTree), (s = t.el);
	(r.el = s), o && o.subTree === r && ((o.vnode.el = s), Oh(o, s));
}
function Kk(e) {
	const t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
const ut = Symbol.for('v-fgt'),
	Nc = Symbol.for('v-txt'),
	cn = Symbol.for('v-cmt'),
	ed = Symbol.for('v-stc'),
	Rl = [];
let Wn = null;
function oe(e = !1) {
	Rl.push((Wn = e ? null : []));
}
function Y0() {
	Rl.pop(), (Wn = Rl[Rl.length - 1] || null);
}
let Ns = 1;
function Ku(e) {
	(Ns += e), e < 0 && Wn && (Wn.hasOnce = !0);
}
function Z0(e) {
	return (
		(e.dynamicChildren = Ns > 0 ? Wn || bs : null),
		Y0(),
		Ns > 0 && Wn && Wn.push(e),
		e
	);
}
function ve(e, t, r, o, s, u) {
	return Z0(Q(e, t, r, o, s, u, !0));
}
function tt(e, t, r, o, s) {
	return Z0(Pe(e, t, r, o, s, !0));
}
function $s(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Hr(e, t) {
	return e.type === t.type && e.key === t.key;
}
const J0 = ({ key: e }) => e ?? null,
	Au = ({ ref: e, ref_key: t, ref_for: r }) => (
		typeof e == 'number' && (e = '' + e),
		e != null
			? Rt(e) || kt(e) || je(e)
				? { i: Jt, r: e, k: t, f: !!r }
				: e
			: null
	);
function Q(
	e,
	t = null,
	r = null,
	o = 0,
	s = null,
	u = e === ut ? 0 : 1,
	f = !1,
	d = !1,
) {
	const h = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && J0(t),
		ref: t && Au(t),
		scopeId: kc,
		slotScopeIds: null,
		children: r,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: u,
		patchFlag: o,
		dynamicProps: s,
		dynamicChildren: null,
		appContext: null,
		ctx: Jt,
	};
	return (
		d
			? (Rh(h, r), u & 128 && e.normalize(h))
			: r && (h.shapeFlag |= Rt(r) ? 8 : 16),
		Ns > 0 &&
			!f &&
			Wn &&
			(h.patchFlag > 0 || u & 6) &&
			h.patchFlag !== 32 &&
			Wn.push(h),
		h
	);
}
const Pe = Xk;
function Xk(e, t = null, r = null, o = 0, s = null, u = !1) {
	if (((!e || e === E0) && (e = cn), $s(e))) {
		const d = Ji(e, t, !0);
		return (
			r && Rh(d, r),
			Ns > 0 &&
				!u &&
				Wn &&
				(d.shapeFlag & 6 ? (Wn[Wn.indexOf(e)] = d) : Wn.push(d)),
			(d.patchFlag = -2),
			d
		);
	}
	if ((rT(e) && (e = e.__vccOpts), t)) {
		t = Q0(t);
		let { class: d, style: h } = t;
		d && !Rt(d) && (t.class = it(d)),
			St(h) && (Ch(h) && !Fe(h) && (h = en({}, h)), (t.style = Qt(h)));
	}
	const f = Rt(e) ? 1 : G0(e) ? 128 : b0(e) ? 64 : St(e) ? 4 : je(e) ? 2 : 0;
	return Q(e, t, r, o, s, f, u, !0);
}
function Q0(e) {
	return e ? (Ch(e) || R0(e) ? en({}, e) : e) : null;
}
function Ji(e, t, r = !1, o = !1) {
	const { props: s, ref: u, patchFlag: f, children: d, transition: h } = e,
		p = t ? hi(s || {}, t) : s,
		m = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e.type,
			props: p,
			key: p && J0(p),
			ref:
				t && t.ref
					? r && u
						? Fe(u)
							? u.concat(Au(t))
							: [u, Au(t)]
						: Au(t)
					: u,
			scopeId: e.scopeId,
			slotScopeIds: e.slotScopeIds,
			children: d,
			target: e.target,
			targetStart: e.targetStart,
			targetAnchor: e.targetAnchor,
			staticCount: e.staticCount,
			shapeFlag: e.shapeFlag,
			patchFlag: t && e.type !== ut ? (f === -1 ? 16 : f | 16) : f,
			dynamicProps: e.dynamicProps,
			dynamicChildren: e.dynamicChildren,
			appContext: e.appContext,
			dirs: e.dirs,
			transition: h,
			component: e.component,
			suspense: e.suspense,
			ssContent: e.ssContent && Ji(e.ssContent),
			ssFallback: e.ssFallback && Ji(e.ssFallback),
			el: e.el,
			anchor: e.anchor,
			ctx: e.ctx,
			ce: e.ce,
		};
	return h && o && Gl(m, h.clone(m)), m;
}
function pt(e = ' ', t = 0) {
	return Pe(Nc, null, e, t);
}
function Ke(e = '', t = !1) {
	return t ? (oe(), tt(cn, null, e)) : Pe(cn, null, e);
}
function br(e) {
	return e == null || typeof e == 'boolean'
		? Pe(cn)
		: Fe(e)
			? Pe(ut, null, e.slice())
			: $s(e)
				? Bi(e)
				: Pe(Nc, null, String(e));
}
function Bi(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ji(e);
}
function Rh(e, t) {
	let r = 0;
	const { shapeFlag: o } = e;
	if (t == null) t = null;
	else if (Fe(t)) r = 16;
	else if (typeof t == 'object')
		if (o & 65) {
			const s = t.default;
			s && (s._c && (s._d = !1), Rh(e, s()), s._c && (s._d = !0));
			return;
		} else {
			r = 32;
			const s = t._;
			!s && !R0(t)
				? (t._ctx = Jt)
				: s === 3 &&
					Jt &&
					(Jt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		je(t)
			? ((t = { default: t, _ctx: Jt }), (r = 32))
			: ((t = String(t)), o & 64 ? ((r = 16), (t = [pt(t)])) : (r = 8));
	(e.children = t), (e.shapeFlag |= r);
}
function hi(...e) {
	const t = {};
	for (let r = 0; r < e.length; r++) {
		const o = e[r];
		for (const s in o)
			if (s === 'class')
				t.class !== o.class && (t.class = it([t.class, o.class]));
			else if (s === 'style') t.style = Qt([t.style, o.style]);
			else if (mc(s)) {
				const u = t[s],
					f = o[s];
				f &&
					u !== f &&
					!(Fe(u) && u.includes(f)) &&
					(t[s] = u ? [].concat(u, f) : f);
			} else s !== '' && (t[s] = o[s]);
	}
	return t;
}
function zr(e, t, r, o = null) {
	Cr(e, t, 7, [r, o]);
}
const Yk = N0();
let Zk = 0;
function Jk(e, t, r) {
	const o = e.type,
		s = (t ? t.appContext : e.appContext) || Yk,
		u = {
			uid: Zk++,
			vnode: e,
			type: o,
			parent: t,
			appContext: s,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			job: null,
			scope: new v_(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(s.provides),
			ids: t ? t.ids : ['', 0, 0],
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: z0(o, s),
			emitsOptions: j0(o, s),
			emit: null,
			emitted: null,
			propsDefaults: mt,
			inheritAttrs: o.inheritAttrs,
			ctx: mt,
			data: mt,
			props: mt,
			attrs: mt,
			slots: mt,
			refs: mt,
			setupState: mt,
			setupContext: null,
			suspense: r,
			suspenseId: r ? r.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(u.ctx = { _: u }),
		(u.root = t ? t.root : u),
		(u.emit = zk.bind(null, u)),
		e.ce && e.ce(u),
		u
	);
}
let rn = null;
const qs = () => rn || Jt;
let Xu, Pd;
{
	const e = wc(),
		t = (r, o) => {
			let s;
			return (
				(s = e[r]) || (s = e[r] = []),
				s.push(o),
				(u) => {
					s.length > 1 ? s.forEach((f) => f(u)) : s[0](u);
				}
			);
		};
	(Xu = t('__VUE_INSTANCE_SETTERS__', (r) => (rn = r))),
		(Pd = t('__VUE_SSR_SETTERS__', (r) => (Yl = r)));
}
const ba = (e) => {
		const t = rn;
		return (
			Xu(e),
			e.scope.on(),
			() => {
				e.scope.off(), Xu(t);
			}
		);
	},
	Mm = () => {
		rn && rn.scope.off(), Xu(null);
	};
function eb(e) {
	return e.vnode.shapeFlag & 4;
}
let Yl = !1;
function Qk(e, t = !1, r = !1) {
	t && Pd(t);
	const { props: o, children: s } = e.vnode,
		u = eb(e);
	_k(e, o, u, t), Ek(e, s, r);
	const f = u ? eT(e, t) : void 0;
	return t && Pd(!1), f;
}
function eT(e, t) {
	const r = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, hk));
	const { setup: o } = r;
	if (o) {
		io();
		const s = (e.setupContext = o.length > 1 ? nb(e) : null),
			u = ba(e),
			f = va(o, e, 0, [e.props, s]),
			d = Iy(f);
		if ((oo(), u(), (d || e.sp) && !_s(e) && T0(e), d)) {
			if ((f.then(Mm, Mm), t))
				return f
					.then((h) => {
						Od(e, h);
					})
					.catch((h) => {
						ya(h, e, 0);
					});
			e.asyncDep = f;
		} else Od(e, f);
	} else tb(e);
}
function Od(e, t, r) {
	je(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: St(t) && (e.setupState = u0(t)),
		tb(e);
}
function tb(e, t, r) {
	const o = e.type;
	e.render || (e.render = o.render || qr);
	{
		const s = ba(e);
		io();
		try {
			mk(e);
		} finally {
			oo(), s();
		}
	}
}
const tT = {
	get(e, t) {
		return pn(e, 'get', ''), e[t];
	},
};
function nb(e) {
	const t = (r) => {
		e.exposed = r || {};
	};
	return {
		attrs: new Proxy(e.attrs, tT),
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function $c(e) {
	return e.exposed
		? e.exposeProxy ||
				(e.exposeProxy = new Proxy(u0(Eh(e.exposed)), {
					get(t, r) {
						if (r in t) return t[r];
						if (r in Ol) return Ol[r](e);
					},
					has(t, r) {
						return r in t || r in Ol;
					},
				}))
		: e.proxy;
}
function nT(e, t = !0) {
	return je(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function rT(e) {
	return je(e) && '__vccOpts' in e;
}
const ke = (e, t) => V_(e, t, Yl);
function wa(e, t, r) {
	const o = arguments.length;
	return o === 2
		? St(t) && !Fe(t)
			? $s(t)
				? Pe(e, null, [t])
				: Pe(e, t)
			: Pe(e, null, t)
		: (o > 3
				? (r = Array.prototype.slice.call(arguments, 2))
				: o === 3 && $s(r) && (r = [r]),
			Pe(e, t, r));
}
const iT = '3.5.12';
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Rd;
const Nm = typeof window < 'u' && window.trustedTypes;
if (Nm)
	try {
		Rd = Nm.createPolicy('vue', { createHTML: (e) => e });
	} catch {}
const rb = Rd ? (e) => Rd.createHTML(e) : (e) => e,
	oT = 'http://www.w3.org/2000/svg',
	sT = 'http://www.w3.org/1998/Math/MathML',
	ai = typeof document < 'u' ? document : null,
	$m = ai && ai.createElement('template'),
	lT = {
		insert: (e, t, r) => {
			t.insertBefore(e, r || null);
		},
		remove: (e) => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, r, o) => {
			const s =
				t === 'svg'
					? ai.createElementNS(oT, e)
					: t === 'mathml'
						? ai.createElementNS(sT, e)
						: r
							? ai.createElement(e, { is: r })
							: ai.createElement(e);
			return (
				e === 'select' &&
					o &&
					o.multiple != null &&
					s.setAttribute('multiple', o.multiple),
				s
			);
		},
		createText: (e) => ai.createTextNode(e),
		createComment: (e) => ai.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => ai.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, '');
		},
		insertStaticContent(e, t, r, o, s, u) {
			const f = r ? r.previousSibling : t.lastChild;
			if (s && (s === u || s.nextSibling))
				for (
					;
					t.insertBefore(s.cloneNode(!0), r),
						!(s === u || !(s = s.nextSibling));

				);
			else {
				$m.innerHTML = rb(
					o === 'svg'
						? `<svg>${e}</svg>`
						: o === 'mathml'
							? `<math>${e}</math>`
							: e,
				);
				const d = $m.content;
				if (o === 'svg' || o === 'mathml') {
					const h = d.firstChild;
					for (; h.firstChild; ) d.appendChild(h.firstChild);
					d.removeChild(h);
				}
				t.insertBefore(d, r);
			}
			return [
				f ? f.nextSibling : t.firstChild,
				r ? r.previousSibling : t.lastChild,
			];
		},
	},
	Oi = 'transition',
	xl = 'animation',
	Zl = Symbol('_vtc'),
	ib = {
		name: String,
		type: String,
		css: { type: Boolean, default: !0 },
		duration: [String, Number, Object],
		enterFromClass: String,
		enterActiveClass: String,
		enterToClass: String,
		appearFromClass: String,
		appearActiveClass: String,
		appearToClass: String,
		leaveFromClass: String,
		leaveActiveClass: String,
		leaveToClass: String,
	},
	aT = en({}, w0, ib),
	uT = (e) => ((e.displayName = 'Transition'), (e.props = aT), e),
	cT = uT((e, { slots: t }) => wa(Q_, fT(e), t)),
	wo = (e, t = []) => {
		Fe(e) ? e.forEach((r) => r(...t)) : e && e(...t);
	},
	Pm = (e) => (e ? (Fe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function fT(e) {
	const t = {};
	for (const Y in e) Y in ib || (t[Y] = e[Y]);
	if (e.css === !1) return t;
	const {
			name: r = 'v',
			type: o,
			duration: s,
			enterFromClass: u = `${r}-enter-from`,
			enterActiveClass: f = `${r}-enter-active`,
			enterToClass: d = `${r}-enter-to`,
			appearFromClass: h = u,
			appearActiveClass: p = f,
			appearToClass: m = d,
			leaveFromClass: v = `${r}-leave-from`,
			leaveActiveClass: b = `${r}-leave-active`,
			leaveToClass: w = `${r}-leave-to`,
		} = e,
		C = dT(s),
		M = C && C[0],
		E = C && C[1],
		{
			onBeforeEnter: N,
			onEnter: A,
			onEnterCancelled: $,
			onLeave: L,
			onLeaveCancelled: O,
			onBeforeAppear: U = N,
			onAppear: B = A,
			onAppearCancelled: te = $,
		} = t,
		J = (Y, I, F) => {
			xo(Y, I ? m : d), xo(Y, I ? p : f), F && F();
		},
		K = (Y, I) => {
			(Y._isLeaving = !1), xo(Y, v), xo(Y, w), xo(Y, b), I && I();
		},
		ee = (Y) => (I, F) => {
			const k = Y ? B : A,
				W = () => J(I, Y, F);
			wo(k, [I, W]),
				Om(() => {
					xo(I, Y ? h : u), Ri(I, Y ? m : d), Pm(k) || Rm(I, o, M, W);
				});
		};
	return en(t, {
		onBeforeEnter(Y) {
			wo(N, [Y]), Ri(Y, u), Ri(Y, f);
		},
		onBeforeAppear(Y) {
			wo(U, [Y]), Ri(Y, h), Ri(Y, p);
		},
		onEnter: ee(!1),
		onAppear: ee(!0),
		onLeave(Y, I) {
			Y._isLeaving = !0;
			const F = () => K(Y, I);
			Ri(Y, v),
				Ri(Y, b),
				gT(),
				Om(() => {
					Y._isLeaving && (xo(Y, v), Ri(Y, w), Pm(L) || Rm(Y, o, E, F));
				}),
				wo(L, [Y, F]);
		},
		onEnterCancelled(Y) {
			J(Y, !1), wo($, [Y]);
		},
		onAppearCancelled(Y) {
			J(Y, !0), wo(te, [Y]);
		},
		onLeaveCancelled(Y) {
			K(Y), wo(O, [Y]);
		},
	});
}
function dT(e) {
	if (e == null) return null;
	if (St(e)) return [td(e.enter), td(e.leave)];
	{
		const t = td(e);
		return [t, t];
	}
}
function td(e) {
	return By(e);
}
function Ri(e, t) {
	t.split(/\s+/).forEach((r) => r && e.classList.add(r)),
		(e[Zl] || (e[Zl] = new Set())).add(t);
}
function xo(e, t) {
	t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
	const r = e[Zl];
	r && (r.delete(t), r.size || (e[Zl] = void 0));
}
function Om(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let hT = 0;
function Rm(e, t, r, o) {
	const s = (e._endId = ++hT),
		u = () => {
			s === e._endId && o();
		};
	if (r != null) return setTimeout(u, r);
	const { type: f, timeout: d, propCount: h } = pT(e, t);
	if (!f) return o();
	const p = f + 'end';
	let m = 0;
	const v = () => {
			e.removeEventListener(p, b), u();
		},
		b = (w) => {
			w.target === e && ++m >= h && v();
		};
	setTimeout(() => {
		m < h && v();
	}, d + 1),
		e.addEventListener(p, b);
}
function pT(e, t) {
	const r = window.getComputedStyle(e),
		o = (C) => (r[C] || '').split(', '),
		s = o(`${Oi}Delay`),
		u = o(`${Oi}Duration`),
		f = Dm(s, u),
		d = o(`${xl}Delay`),
		h = o(`${xl}Duration`),
		p = Dm(d, h);
	let m = null,
		v = 0,
		b = 0;
	t === Oi
		? f > 0 && ((m = Oi), (v = f), (b = u.length))
		: t === xl
			? p > 0 && ((m = xl), (v = p), (b = h.length))
			: ((v = Math.max(f, p)),
				(m = v > 0 ? (f > p ? Oi : xl) : null),
				(b = m ? (m === Oi ? u.length : h.length) : 0));
	const w =
		m === Oi && /\b(transform|all)(,|$)/.test(o(`${Oi}Property`).toString());
	return { type: m, timeout: v, propCount: b, hasTransform: w };
}
function Dm(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((r, o) => zm(r) + zm(e[o])));
}
function zm(e) {
	return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function gT() {
	return document.body.offsetHeight;
}
function mT(e, t, r) {
	const o = e[Zl];
	o && (t = (t ? [t, ...o] : [...o]).join(' ')),
		t == null
			? e.removeAttribute('class')
			: r
				? e.setAttribute('class', t)
				: (e.className = t);
}
const Yu = Symbol('_vod'),
	ob = Symbol('_vsh'),
	Gi = {
		beforeMount(e, { value: t }, { transition: r }) {
			(e[Yu] = e.style.display === 'none' ? '' : e.style.display),
				r && t ? r.beforeEnter(e) : Sl(e, t);
		},
		mounted(e, { value: t }, { transition: r }) {
			r && t && r.enter(e);
		},
		updated(e, { value: t, oldValue: r }, { transition: o }) {
			!t != !r &&
				(o
					? t
						? (o.beforeEnter(e), Sl(e, !0), o.enter(e))
						: o.leave(e, () => {
								Sl(e, !1);
							})
					: Sl(e, t));
		},
		beforeUnmount(e, { value: t }) {
			Sl(e, t);
		},
	};
function Sl(e, t) {
	(e.style.display = t ? e[Yu] : 'none'), (e[ob] = !t);
}
const vT = Symbol(''),
	yT = /(^|;)\s*display\s*:/;
function bT(e, t, r) {
	const o = e.style,
		s = Rt(r);
	let u = !1;
	if (r && !s) {
		if (t)
			if (Rt(t))
				for (const f of t.split(';')) {
					const d = f.slice(0, f.indexOf(':')).trim();
					r[d] == null && Mu(o, d, '');
				}
			else for (const f in t) r[f] == null && Mu(o, f, '');
		for (const f in r) f === 'display' && (u = !0), Mu(o, f, r[f]);
	} else if (s) {
		if (t !== r) {
			const f = o[vT];
			f && (r += ';' + f), (o.cssText = r), (u = yT.test(r));
		}
	} else t && e.removeAttribute('style');
	Yu in e && ((e[Yu] = u ? o.display : ''), e[ob] && (o.display = 'none'));
}
const Im = /\s*!important$/;
function Mu(e, t, r) {
	if (Fe(r)) r.forEach((o) => Mu(e, t, o));
	else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r);
	else {
		const o = wT(e, t);
		Im.test(r)
			? e.setProperty(yi(o), r.replace(Im, ''), 'important')
			: (e[o] = r);
	}
}
const Fm = ['Webkit', 'Moz', 'ms'],
	nd = {};
function wT(e, t) {
	const r = nd[t];
	if (r) return r;
	let o = er(t);
	if (o !== 'filter' && o in e) return (nd[t] = o);
	o = bc(o);
	for (let s = 0; s < Fm.length; s++) {
		const u = Fm[s] + o;
		if (u in e) return (nd[t] = u);
	}
	return t;
}
const Hm = 'http://www.w3.org/1999/xlink';
function qm(e, t, r, o, s, u = g_(t)) {
	o && t.startsWith('xlink:')
		? r == null
			? e.removeAttributeNS(Hm, t.slice(6, t.length))
			: e.setAttributeNS(Hm, t, r)
		: r == null || (u && !Wy(r))
			? e.removeAttribute(t)
			: e.setAttribute(t, u ? '' : Tr(r) ? String(r) : r);
}
function Bm(e, t, r, o, s) {
	if (t === 'innerHTML' || t === 'textContent') {
		r != null && (e[t] = t === 'innerHTML' ? rb(r) : r);
		return;
	}
	const u = e.tagName;
	if (t === 'value' && u !== 'PROGRESS' && !u.includes('-')) {
		const d = u === 'OPTION' ? e.getAttribute('value') || '' : e.value,
			h = r == null ? (e.type === 'checkbox' ? 'on' : '') : String(r);
		(d !== h || !('_value' in e)) && (e.value = h),
			r == null && e.removeAttribute(t),
			(e._value = r);
		return;
	}
	let f = !1;
	if (r === '' || r == null) {
		const d = typeof e[t];
		d === 'boolean'
			? (r = Wy(r))
			: r == null && d === 'string'
				? ((r = ''), (f = !0))
				: d === 'number' && ((r = 0), (f = !0));
	}
	try {
		e[t] = r;
	} catch {}
	f && e.removeAttribute(s || t);
}
function To(e, t, r, o) {
	e.addEventListener(t, r, o);
}
function xT(e, t, r, o) {
	e.removeEventListener(t, r, o);
}
const Wm = Symbol('_vei');
function ST(e, t, r, o, s = null) {
	const u = e[Wm] || (e[Wm] = {}),
		f = u[t];
	if (o && f) f.value = o;
	else {
		const [d, h] = _T(t);
		if (o) {
			const p = (u[t] = CT(o, s));
			To(e, d, p, h);
		} else f && (xT(e, d, f, h), (u[t] = void 0));
	}
}
const Um = /(?:Once|Passive|Capture)$/;
function _T(e) {
	let t;
	if (Um.test(e)) {
		t = {};
		let o;
		for (; (o = e.match(Um)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
	}
	return [e[2] === ':' ? e.slice(3) : yi(e.slice(2)), t];
}
let rd = 0;
const kT = Promise.resolve(),
	TT = () => rd || (kT.then(() => (rd = 0)), (rd = Date.now()));
function CT(e, t) {
	const r = (o) => {
		if (!o._vts) o._vts = Date.now();
		else if (o._vts <= r.attached) return;
		Cr(ET(o, r.value), t, 5, [o]);
	};
	return (r.value = e), (r.attached = TT()), r;
}
function ET(e, t) {
	if (Fe(t)) {
		const r = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				r.call(e), (e._stopped = !0);
			}),
			t.map((o) => (s) => !s._stopped && o && o(s))
		);
	} else return t;
}
const Vm = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	LT = (e, t, r, o, s, u) => {
		const f = s === 'svg';
		t === 'class'
			? mT(e, o, f)
			: t === 'style'
				? bT(e, r, o)
				: mc(t)
					? vh(t) || ST(e, t, r, o, u)
					: (
								t[0] === '.'
									? ((t = t.slice(1)), !0)
									: t[0] === '^'
										? ((t = t.slice(1)), !1)
										: AT(e, t, o, f)
						  )
						? (Bm(e, t, o),
							!e.tagName.includes('-') &&
								(t === 'value' || t === 'checked' || t === 'selected') &&
								qm(e, t, o, f, u, t !== 'value'))
						: e._isVueCE && (/[A-Z]/.test(t) || !Rt(o))
							? Bm(e, er(t), o, u, t)
							: (t === 'true-value'
									? (e._trueValue = o)
									: t === 'false-value' && (e._falseValue = o),
								qm(e, t, o, f));
	};
function AT(e, t, r, o) {
	if (o)
		return !!(
			t === 'innerHTML' ||
			t === 'textContent' ||
			(t in e && Vm(t) && je(r))
		);
	if (
		t === 'spellcheck' ||
		t === 'draggable' ||
		t === 'translate' ||
		t === 'form' ||
		(t === 'list' && e.tagName === 'INPUT') ||
		(t === 'type' && e.tagName === 'TEXTAREA')
	)
		return !1;
	if (t === 'width' || t === 'height') {
		const s = e.tagName;
		if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE')
			return !1;
	}
	return Vm(t) && Rt(r) ? !1 : t in e;
}
const Zu = (e) => {
	const t = e.props['onUpdate:modelValue'] || !1;
	return Fe(t) ? (r) => Eu(t, r) : t;
};
function MT(e) {
	e.target.composing = !0;
}
function jm(e) {
	const t = e.target;
	t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const Ts = Symbol('_assign'),
	NT = {
		created(e, { modifiers: { lazy: t, trim: r, number: o } }, s) {
			e[Ts] = Zu(s);
			const u = o || (s.props && s.props.type === 'number');
			To(e, t ? 'change' : 'input', (f) => {
				if (f.target.composing) return;
				let d = e.value;
				r && (d = d.trim()), u && (d = wd(d)), e[Ts](d);
			}),
				r &&
					To(e, 'change', () => {
						e.value = e.value.trim();
					}),
				t ||
					(To(e, 'compositionstart', MT),
					To(e, 'compositionend', jm),
					To(e, 'change', jm));
		},
		mounted(e, { value: t }) {
			e.value = t ?? '';
		},
		beforeUpdate(
			e,
			{ value: t, oldValue: r, modifiers: { lazy: o, trim: s, number: u } },
			f,
		) {
			if (((e[Ts] = Zu(f)), e.composing)) return;
			const d =
					(u || e.type === 'number') && !/^0\d/.test(e.value)
						? wd(e.value)
						: e.value,
				h = t ?? '';
			d !== h &&
				((document.activeElement === e &&
					e.type !== 'range' &&
					((o && t === r) || (s && e.value.trim() === h))) ||
					(e.value = h));
		},
	},
	sb = {
		deep: !0,
		created(e, t, r) {
			(e[Ts] = Zu(r)),
				To(e, 'change', () => {
					const o = e._modelValue,
						s = $T(e),
						u = e.checked,
						f = e[Ts];
					if (Fe(o)) {
						const d = Uy(o, s),
							h = d !== -1;
						if (u && !h) f(o.concat(s));
						else if (!u && h) {
							const p = [...o];
							p.splice(d, 1), f(p);
						}
					} else if (vc(o)) {
						const d = new Set(o);
						u ? d.add(s) : d.delete(s), f(d);
					} else f(lb(e, u));
				});
		},
		mounted: Gm,
		beforeUpdate(e, t, r) {
			(e[Ts] = Zu(r)), Gm(e, t, r);
		},
	};
function Gm(e, { value: t, oldValue: r }, o) {
	e._modelValue = t;
	let s;
	if (Fe(t)) s = Uy(t, o.props.value) > -1;
	else if (vc(t)) s = t.has(o.props.value);
	else {
		if (t === r) return;
		s = xc(t, lb(e, !0));
	}
	e.checked !== s && (e.checked = s);
}
function $T(e) {
	return '_value' in e ? e._value : e.value;
}
function lb(e, t) {
	const r = t ? '_trueValue' : '_falseValue';
	return r in e ? e[r] : t;
}
const PT = ['ctrl', 'shift', 'alt', 'meta'],
	OT = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => 'button' in e && e.button !== 0,
		middle: (e) => 'button' in e && e.button !== 1,
		right: (e) => 'button' in e && e.button !== 2,
		exact: (e, t) => PT.some((r) => e[`${r}Key`] && !t.includes(r)),
	},
	Nu = (e, t) => {
		const r = e._withMods || (e._withMods = {}),
			o = t.join('.');
		return (
			r[o] ||
			(r[o] = (s, ...u) => {
				for (let f = 0; f < t.length; f++) {
					const d = OT[t[f]];
					if (d && d(s, t)) return;
				}
				return e(s, ...u);
			})
		);
	},
	RT = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	Dd = (e, t) => {
		const r = e._withKeys || (e._withKeys = {}),
			o = t.join('.');
		return (
			r[o] ||
			(r[o] = (s) => {
				if (!('key' in s)) return;
				const u = yi(s.key);
				if (t.some((f) => f === u || RT[f] === u)) return e(s);
			})
		);
	},
	DT = en({ patchProp: LT }, lT);
let Km;
function zT() {
	return Km || (Km = Ak(DT));
}
const ab = (...e) => {
	const t = zT().createApp(...e),
		{ mount: r } = t;
	return (
		(t.mount = (o) => {
			const s = FT(o);
			if (!s) return;
			const u = t._component;
			!je(u) && !u.render && !u.template && (u.template = s.innerHTML),
				s.nodeType === 1 && (s.textContent = '');
			const f = r(s, !1, IT(s));
			return (
				s instanceof Element &&
					(s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
				f
			);
		}),
		t
	);
};
function IT(e) {
	if (e instanceof SVGElement) return 'svg';
	if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
		return 'mathml';
}
function FT(e) {
	return Rt(e) ? document.querySelector(e) : e;
}
const Xr = (e, t) => {
		const r = e.__vccOpts || e;
		for (const [o, s] of t) r[o] = s;
		return r;
	},
	HT = {};
function qT(e, t) {
	const r = Po('RouterView');
	return oe(), tt(r);
}
const BT = Xr(HT, [['render', qT]]),
	WT = ['top', 'right', 'bottom', 'left'],
	Xm = ['start', 'end'],
	Ym = WT.reduce((e, t) => e.concat(t, t + '-' + Xm[0], t + '-' + Xm[1]), []),
	Jl = Math.min,
	ko = Math.max,
	UT = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	VT = { start: 'end', end: 'start' };
function zd(e, t, r) {
	return ko(e, Jl(t, r));
}
function Io(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function jr(e) {
	return e.split('-')[0];
}
function Sr(e) {
	return e.split('-')[1];
}
function ub(e) {
	return e === 'x' ? 'y' : 'x';
}
function Dh(e) {
	return e === 'y' ? 'height' : 'width';
}
function xa(e) {
	return ['top', 'bottom'].includes(jr(e)) ? 'y' : 'x';
}
function zh(e) {
	return ub(xa(e));
}
function cb(e, t, r) {
	r === void 0 && (r = !1);
	const o = Sr(e),
		s = zh(e),
		u = Dh(s);
	let f =
		s === 'x'
			? o === (r ? 'end' : 'start')
				? 'right'
				: 'left'
			: o === 'start'
				? 'bottom'
				: 'top';
	return t.reference[u] > t.floating[u] && (f = Qu(f)), [f, Qu(f)];
}
function jT(e) {
	const t = Qu(e);
	return [Ju(e), t, Ju(t)];
}
function Ju(e) {
	return e.replace(/start|end/g, (t) => VT[t]);
}
function GT(e, t, r) {
	const o = ['left', 'right'],
		s = ['right', 'left'],
		u = ['top', 'bottom'],
		f = ['bottom', 'top'];
	switch (e) {
		case 'top':
		case 'bottom':
			return r ? (t ? s : o) : t ? o : s;
		case 'left':
		case 'right':
			return t ? u : f;
		default:
			return [];
	}
}
function KT(e, t, r, o) {
	const s = Sr(e);
	let u = GT(jr(e), r === 'start', o);
	return (
		s && ((u = u.map((f) => f + '-' + s)), t && (u = u.concat(u.map(Ju)))), u
	);
}
function Qu(e) {
	return e.replace(/left|right|bottom|top/g, (t) => UT[t]);
}
function XT(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function fb(e) {
	return typeof e != 'number'
		? XT(e)
		: { top: e, right: e, bottom: e, left: e };
}
function Dl(e) {
	return {
		...e,
		top: e.y,
		left: e.x,
		right: e.x + e.width,
		bottom: e.y + e.height,
	};
}
function Zm(e, t, r) {
	let { reference: o, floating: s } = e;
	const u = xa(t),
		f = zh(t),
		d = Dh(f),
		h = jr(t),
		p = u === 'y',
		m = o.x + o.width / 2 - s.width / 2,
		v = o.y + o.height / 2 - s.height / 2,
		b = o[d] / 2 - s[d] / 2;
	let w;
	switch (h) {
		case 'top':
			w = { x: m, y: o.y - s.height };
			break;
		case 'bottom':
			w = { x: m, y: o.y + o.height };
			break;
		case 'right':
			w = { x: o.x + o.width, y: v };
			break;
		case 'left':
			w = { x: o.x - s.width, y: v };
			break;
		default:
			w = { x: o.x, y: o.y };
	}
	switch (Sr(t)) {
		case 'start':
			w[f] -= b * (r && p ? -1 : 1);
			break;
		case 'end':
			w[f] += b * (r && p ? -1 : 1);
			break;
	}
	return w;
}
const YT = async (e, t, r) => {
	const {
			placement: o = 'bottom',
			strategy: s = 'absolute',
			middleware: u = [],
			platform: f,
		} = r,
		d = u.filter(Boolean),
		h = await (f.isRTL == null ? void 0 : f.isRTL(t));
	let p = await f.getElementRects({ reference: e, floating: t, strategy: s }),
		{ x: m, y: v } = Zm(p, o, h),
		b = o,
		w = {},
		C = 0;
	for (let M = 0; M < d.length; M++) {
		const { name: E, fn: N } = d[M],
			{
				x: A,
				y: $,
				data: L,
				reset: O,
			} = await N({
				x: m,
				y: v,
				initialPlacement: o,
				placement: b,
				strategy: s,
				middlewareData: w,
				rects: p,
				platform: f,
				elements: { reference: e, floating: t },
			});
		(m = A ?? m),
			(v = $ ?? v),
			(w = { ...w, [E]: { ...w[E], ...L } }),
			O &&
				C <= 50 &&
				(C++,
				typeof O == 'object' &&
					(O.placement && (b = O.placement),
					O.rects &&
						(p =
							O.rects === !0
								? await f.getElementRects({
										reference: e,
										floating: t,
										strategy: s,
									})
								: O.rects),
					({ x: m, y: v } = Zm(p, b, h))),
				(M = -1));
	}
	return { x: m, y: v, placement: b, strategy: s, middlewareData: w };
};
async function Pc(e, t) {
	var r;
	t === void 0 && (t = {});
	const { x: o, y: s, platform: u, rects: f, elements: d, strategy: h } = e,
		{
			boundary: p = 'clippingAncestors',
			rootBoundary: m = 'viewport',
			elementContext: v = 'floating',
			altBoundary: b = !1,
			padding: w = 0,
		} = Io(t, e),
		C = fb(w),
		E = d[b ? (v === 'floating' ? 'reference' : 'floating') : v],
		N = Dl(
			await u.getClippingRect({
				element:
					(r = await (u.isElement == null ? void 0 : u.isElement(E))) == null ||
					r
						? E
						: E.contextElement ||
							(await (u.getDocumentElement == null
								? void 0
								: u.getDocumentElement(d.floating))),
				boundary: p,
				rootBoundary: m,
				strategy: h,
			}),
		),
		A = v === 'floating' ? { ...f.floating, x: o, y: s } : f.reference,
		$ = await (u.getOffsetParent == null
			? void 0
			: u.getOffsetParent(d.floating)),
		L = (await (u.isElement == null ? void 0 : u.isElement($)))
			? (await (u.getScale == null ? void 0 : u.getScale($))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		O = Dl(
			u.convertOffsetParentRelativeRectToViewportRelativeRect
				? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: d,
						rect: A,
						offsetParent: $,
						strategy: h,
					})
				: A,
		);
	return {
		top: (N.top - O.top + C.top) / L.y,
		bottom: (O.bottom - N.bottom + C.bottom) / L.y,
		left: (N.left - O.left + C.left) / L.x,
		right: (O.right - N.right + C.right) / L.x,
	};
}
const ZT = (e) => ({
	name: 'arrow',
	options: e,
	async fn(t) {
		const {
				x: r,
				y: o,
				placement: s,
				rects: u,
				platform: f,
				elements: d,
				middlewareData: h,
			} = t,
			{ element: p, padding: m = 0 } = Io(e, t) || {};
		if (p == null) return {};
		const v = fb(m),
			b = { x: r, y: o },
			w = zh(s),
			C = Dh(w),
			M = await f.getDimensions(p),
			E = w === 'y',
			N = E ? 'top' : 'left',
			A = E ? 'bottom' : 'right',
			$ = E ? 'clientHeight' : 'clientWidth',
			L = u.reference[C] + u.reference[w] - b[w] - u.floating[C],
			O = b[w] - u.reference[w],
			U = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
		let B = U ? U[$] : 0;
		(!B || !(await (f.isElement == null ? void 0 : f.isElement(U)))) &&
			(B = d.floating[$] || u.floating[C]);
		const te = L / 2 - O / 2,
			J = B / 2 - M[C] / 2 - 1,
			K = Jl(v[N], J),
			ee = Jl(v[A], J),
			Y = K,
			I = B - M[C] - ee,
			F = B / 2 - M[C] / 2 + te,
			k = zd(Y, F, I),
			W =
				!h.arrow &&
				Sr(s) != null &&
				F !== k &&
				u.reference[C] / 2 - (F < Y ? K : ee) - M[C] / 2 < 0,
			V = W ? (F < Y ? F - Y : F - I) : 0;
		return {
			[w]: b[w] + V,
			data: {
				[w]: k,
				centerOffset: F - k - V,
				...(W && { alignmentOffset: V }),
			},
			reset: W,
		};
	},
});
function JT(e, t, r) {
	return (
		e
			? [...r.filter((s) => Sr(s) === e), ...r.filter((s) => Sr(s) !== e)]
			: r.filter((s) => jr(s) === s)
	).filter((s) => (e ? Sr(s) === e || (t ? Ju(s) !== s : !1) : !0));
}
const QT = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'autoPlacement',
				options: e,
				async fn(t) {
					var r, o, s;
					const {
							rects: u,
							middlewareData: f,
							placement: d,
							platform: h,
							elements: p,
						} = t,
						{
							crossAxis: m = !1,
							alignment: v,
							allowedPlacements: b = Ym,
							autoAlignment: w = !0,
							...C
						} = Io(e, t),
						M = v !== void 0 || b === Ym ? JT(v || null, w, b) : b,
						E = await Pc(t, C),
						N = ((r = f.autoPlacement) == null ? void 0 : r.index) || 0,
						A = M[N];
					if (A == null) return {};
					const $ = cb(
						A,
						u,
						await (h.isRTL == null ? void 0 : h.isRTL(p.floating)),
					);
					if (d !== A) return { reset: { placement: M[0] } };
					const L = [E[jr(A)], E[$[0]], E[$[1]]],
						O = [
							...(((o = f.autoPlacement) == null ? void 0 : o.overflows) || []),
							{ placement: A, overflows: L },
						],
						U = M[N + 1];
					if (U)
						return {
							data: { index: N + 1, overflows: O },
							reset: { placement: U },
						};
					const B = O.map((K) => {
							const ee = Sr(K.placement);
							return [
								K.placement,
								ee && m
									? K.overflows.slice(0, 2).reduce((Y, I) => Y + I, 0)
									: K.overflows[0],
								K.overflows,
							];
						}).sort((K, ee) => K[1] - ee[1]),
						J =
							((s = B.filter((K) =>
								K[2].slice(0, Sr(K[0]) ? 2 : 3).every((ee) => ee <= 0),
							)[0]) == null
								? void 0
								: s[0]) || B[0][0];
					return J !== d
						? { data: { index: N + 1, overflows: O }, reset: { placement: J } }
						: {};
				},
			}
		);
	},
	eC = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var r, o;
					const {
							placement: s,
							middlewareData: u,
							rects: f,
							initialPlacement: d,
							platform: h,
							elements: p,
						} = t,
						{
							mainAxis: m = !0,
							crossAxis: v = !0,
							fallbackPlacements: b,
							fallbackStrategy: w = 'bestFit',
							fallbackAxisSideDirection: C = 'none',
							flipAlignment: M = !0,
							...E
						} = Io(e, t);
					if ((r = u.arrow) != null && r.alignmentOffset) return {};
					const N = jr(s),
						A = jr(d) === d,
						$ = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)),
						L = b || (A || !M ? [Qu(d)] : jT(d));
					!b && C !== 'none' && L.push(...KT(d, M, C, $));
					const O = [d, ...L],
						U = await Pc(t, E),
						B = [];
					let te = ((o = u.flip) == null ? void 0 : o.overflows) || [];
					if ((m && B.push(U[N]), v)) {
						const Y = cb(s, f, $);
						B.push(U[Y[0]], U[Y[1]]);
					}
					if (
						((te = [...te, { placement: s, overflows: B }]),
						!B.every((Y) => Y <= 0))
					) {
						var J, K;
						const Y = (((J = u.flip) == null ? void 0 : J.index) || 0) + 1,
							I = O[Y];
						if (I)
							return {
								data: { index: Y, overflows: te },
								reset: { placement: I },
							};
						let F =
							(K = te
								.filter((k) => k.overflows[0] <= 0)
								.sort((k, W) => k.overflows[1] - W.overflows[1])[0]) == null
								? void 0
								: K.placement;
						if (!F)
							switch (w) {
								case 'bestFit': {
									var ee;
									const k =
										(ee = te
											.map((W) => [
												W.placement,
												W.overflows
													.filter((V) => V > 0)
													.reduce((V, ie) => V + ie, 0),
											])
											.sort((W, V) => W[1] - V[1])[0]) == null
											? void 0
											: ee[0];
									k && (F = k);
									break;
								}
								case 'initialPlacement':
									F = d;
									break;
							}
						if (s !== F) return { reset: { placement: F } };
					}
					return {};
				},
			}
		);
	};
async function tC(e, t) {
	const { placement: r, platform: o, elements: s } = e,
		u = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
		f = jr(r),
		d = Sr(r),
		h = xa(r) === 'y',
		p = ['left', 'top'].includes(f) ? -1 : 1,
		m = u && h ? -1 : 1,
		v = Io(t, e);
	let {
		mainAxis: b,
		crossAxis: w,
		alignmentAxis: C,
	} = typeof v == 'number'
		? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
	return (
		d && typeof C == 'number' && (w = d === 'end' ? C * -1 : C),
		h ? { x: w * m, y: b * p } : { x: b * p, y: w * m }
	);
}
const nC = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var r, o;
					const { x: s, y: u, placement: f, middlewareData: d } = t,
						h = await tC(t, e);
					return f === ((r = d.offset) == null ? void 0 : r.placement) &&
						(o = d.arrow) != null &&
						o.alignmentOffset
						? {}
						: { x: s + h.x, y: u + h.y, data: { ...h, placement: f } };
				},
			}
		);
	},
	rC = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: r, y: o, placement: s } = t,
						{
							mainAxis: u = !0,
							crossAxis: f = !1,
							limiter: d = {
								fn: (E) => {
									let { x: N, y: A } = E;
									return { x: N, y: A };
								},
							},
							...h
						} = Io(e, t),
						p = { x: r, y: o },
						m = await Pc(t, h),
						v = xa(jr(s)),
						b = ub(v);
					let w = p[b],
						C = p[v];
					if (u) {
						const E = b === 'y' ? 'top' : 'left',
							N = b === 'y' ? 'bottom' : 'right',
							A = w + m[E],
							$ = w - m[N];
						w = zd(A, w, $);
					}
					if (f) {
						const E = v === 'y' ? 'top' : 'left',
							N = v === 'y' ? 'bottom' : 'right',
							A = C + m[E],
							$ = C - m[N];
						C = zd(A, C, $);
					}
					const M = d.fn({ ...t, [b]: w, [v]: C });
					return { ...M, data: { x: M.x - r, y: M.y - o } };
				},
			}
		);
	},
	iC = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					const { placement: r, rects: o, platform: s, elements: u } = t,
						{ apply: f = () => {}, ...d } = Io(e, t),
						h = await Pc(t, d),
						p = jr(r),
						m = Sr(r),
						v = xa(r) === 'y',
						{ width: b, height: w } = o.floating;
					let C, M;
					p === 'top' || p === 'bottom'
						? ((C = p),
							(M =
								m ===
								((await (s.isRTL == null ? void 0 : s.isRTL(u.floating)))
									? 'start'
									: 'end')
									? 'left'
									: 'right'))
						: ((M = p), (C = m === 'end' ? 'top' : 'bottom'));
					const E = w - h[C],
						N = b - h[M],
						A = !t.middlewareData.shift;
					let $ = E,
						L = N;
					if (v) {
						const U = b - h.left - h.right;
						L = m || A ? Jl(N, U) : U;
					} else {
						const U = w - h.top - h.bottom;
						$ = m || A ? Jl(E, U) : U;
					}
					if (A && !m) {
						const U = ko(h.left, 0),
							B = ko(h.right, 0),
							te = ko(h.top, 0),
							J = ko(h.bottom, 0);
						v
							? (L = b - 2 * (U !== 0 || B !== 0 ? U + B : ko(h.left, h.right)))
							: ($ =
									w - 2 * (te !== 0 || J !== 0 ? te + J : ko(h.top, h.bottom)));
					}
					await f({ ...t, availableWidth: L, availableHeight: $ });
					const O = await s.getDimensions(u.floating);
					return b !== O.width || w !== O.height
						? { reset: { rects: !0 } }
						: {};
				},
			}
		);
	};
function or(e) {
	var t;
	return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wr(e) {
	return or(e).getComputedStyle(e);
}
const Jm = Math.min,
	zl = Math.max,
	ec = Math.round;
function db(e) {
	const t = Wr(e);
	let r = parseFloat(t.width),
		o = parseFloat(t.height);
	const s = e.offsetWidth,
		u = e.offsetHeight,
		f = ec(r) !== s || ec(o) !== u;
	return f && ((r = s), (o = u)), { width: r, height: o, fallback: f };
}
function Qi(e) {
	return pb(e) ? (e.nodeName || '').toLowerCase() : '';
}
let du;
function hb() {
	if (du) return du;
	const e = navigator.userAgentData;
	return e && Array.isArray(e.brands)
		? ((du = e.brands.map((t) => t.brand + '/' + t.version).join(' ')), du)
		: navigator.userAgent;
}
function Ur(e) {
	return e instanceof or(e).HTMLElement;
}
function Yi(e) {
	return e instanceof or(e).Element;
}
function pb(e) {
	return e instanceof or(e).Node;
}
function Qm(e) {
	return typeof ShadowRoot > 'u'
		? !1
		: e instanceof or(e).ShadowRoot || e instanceof ShadowRoot;
}
function Oc(e) {
	const { overflow: t, overflowX: r, overflowY: o, display: s } = Wr(e);
	return (
		/auto|scroll|overlay|hidden|clip/.test(t + o + r) &&
		!['inline', 'contents'].includes(s)
	);
}
function oC(e) {
	return ['table', 'td', 'th'].includes(Qi(e));
}
function Id(e) {
	const t = /firefox/i.test(hb()),
		r = Wr(e),
		o = r.backdropFilter || r.WebkitBackdropFilter;
	return (
		r.transform !== 'none' ||
		r.perspective !== 'none' ||
		(!!o && o !== 'none') ||
		(t && r.willChange === 'filter') ||
		(t && !!r.filter && r.filter !== 'none') ||
		['transform', 'perspective'].some((s) => r.willChange.includes(s)) ||
		['paint', 'layout', 'strict', 'content'].some((s) => {
			const u = r.contain;
			return u != null && u.includes(s);
		})
	);
}
function gb() {
	return !/^((?!chrome|android).)*safari/i.test(hb());
}
function Ih(e) {
	return ['html', 'body', '#document'].includes(Qi(e));
}
function mb(e) {
	return Yi(e) ? e : e.contextElement;
}
const vb = { x: 1, y: 1 };
function Cs(e) {
	const t = mb(e);
	if (!Ur(t)) return vb;
	const r = t.getBoundingClientRect(),
		{ width: o, height: s, fallback: u } = db(t);
	let f = (u ? ec(r.width) : r.width) / o,
		d = (u ? ec(r.height) : r.height) / s;
	return (
		(f && Number.isFinite(f)) || (f = 1),
		(d && Number.isFinite(d)) || (d = 1),
		{ x: f, y: d }
	);
}
function Ql(e, t, r, o) {
	var s, u;
	t === void 0 && (t = !1), r === void 0 && (r = !1);
	const f = e.getBoundingClientRect(),
		d = mb(e);
	let h = vb;
	t && (o ? Yi(o) && (h = Cs(o)) : (h = Cs(e)));
	const p = d ? or(d) : window,
		m = !gb() && r;
	let v =
			(f.left +
				((m && ((s = p.visualViewport) == null ? void 0 : s.offsetLeft)) ||
					0)) /
			h.x,
		b =
			(f.top +
				((m && ((u = p.visualViewport) == null ? void 0 : u.offsetTop)) || 0)) /
			h.y,
		w = f.width / h.x,
		C = f.height / h.y;
	if (d) {
		const M = or(d),
			E = o && Yi(o) ? or(o) : o;
		let N = M.frameElement;
		for (; N && o && E !== M; ) {
			const A = Cs(N),
				$ = N.getBoundingClientRect(),
				L = getComputedStyle(N);
			($.x += (N.clientLeft + parseFloat(L.paddingLeft)) * A.x),
				($.y += (N.clientTop + parseFloat(L.paddingTop)) * A.y),
				(v *= A.x),
				(b *= A.y),
				(w *= A.x),
				(C *= A.y),
				(v += $.x),
				(b += $.y),
				(N = or(N).frameElement);
		}
	}
	return {
		width: w,
		height: C,
		top: b,
		right: v + w,
		bottom: b + C,
		left: v,
		x: v,
		y: b,
	};
}
function Zi(e) {
	return ((pb(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function Rc(e) {
	return Yi(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yb(e) {
	return Ql(Zi(e)).left + Rc(e).scrollLeft;
}
function ea(e) {
	if (Qi(e) === 'html') return e;
	const t = e.assignedSlot || e.parentNode || (Qm(e) && e.host) || Zi(e);
	return Qm(t) ? t.host : t;
}
function bb(e) {
	const t = ea(e);
	return Ih(t) ? t.ownerDocument.body : Ur(t) && Oc(t) ? t : bb(t);
}
function tc(e, t) {
	var r;
	t === void 0 && (t = []);
	const o = bb(e),
		s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		u = or(o);
	return s
		? t.concat(u, u.visualViewport || [], Oc(o) ? o : [])
		: t.concat(o, tc(o));
}
function ev(e, t, r) {
	return t === 'viewport'
		? Dl(
				(function (o, s) {
					const u = or(o),
						f = Zi(o),
						d = u.visualViewport;
					let h = f.clientWidth,
						p = f.clientHeight,
						m = 0,
						v = 0;
					if (d) {
						(h = d.width), (p = d.height);
						const b = gb();
						(b || (!b && s === 'fixed')) &&
							((m = d.offsetLeft), (v = d.offsetTop));
					}
					return { width: h, height: p, x: m, y: v };
				})(e, r),
			)
		: Yi(t)
			? Dl(
					(function (o, s) {
						const u = Ql(o, !0, s === 'fixed'),
							f = u.top + o.clientTop,
							d = u.left + o.clientLeft,
							h = Ur(o) ? Cs(o) : { x: 1, y: 1 };
						return {
							width: o.clientWidth * h.x,
							height: o.clientHeight * h.y,
							x: d * h.x,
							y: f * h.y,
						};
					})(t, r),
				)
			: Dl(
					(function (o) {
						const s = Zi(o),
							u = Rc(o),
							f = o.ownerDocument.body,
							d = zl(
								s.scrollWidth,
								s.clientWidth,
								f.scrollWidth,
								f.clientWidth,
							),
							h = zl(
								s.scrollHeight,
								s.clientHeight,
								f.scrollHeight,
								f.clientHeight,
							);
						let p = -u.scrollLeft + yb(o);
						const m = -u.scrollTop;
						return (
							Wr(f).direction === 'rtl' &&
								(p += zl(s.clientWidth, f.clientWidth) - d),
							{ width: d, height: h, x: p, y: m }
						);
					})(Zi(e)),
				);
}
function tv(e) {
	return Ur(e) && Wr(e).position !== 'fixed' ? e.offsetParent : null;
}
function nv(e) {
	const t = or(e);
	let r = tv(e);
	for (; r && oC(r) && Wr(r).position === 'static'; ) r = tv(r);
	return r &&
		(Qi(r) === 'html' ||
			(Qi(r) === 'body' && Wr(r).position === 'static' && !Id(r)))
		? t
		: r ||
				(function (o) {
					let s = ea(o);
					for (; Ur(s) && !Ih(s); ) {
						if (Id(s)) return s;
						s = ea(s);
					}
					return null;
				})(e) ||
				t;
}
function sC(e, t, r) {
	const o = Ur(t),
		s = Zi(t),
		u = Ql(e, !0, r === 'fixed', t);
	let f = { scrollLeft: 0, scrollTop: 0 };
	const d = { x: 0, y: 0 };
	if (o || (!o && r !== 'fixed'))
		if (((Qi(t) !== 'body' || Oc(s)) && (f = Rc(t)), Ur(t))) {
			const h = Ql(t, !0);
			(d.x = h.x + t.clientLeft), (d.y = h.y + t.clientTop);
		} else s && (d.x = yb(s));
	return {
		x: u.left + f.scrollLeft - d.x,
		y: u.top + f.scrollTop - d.y,
		width: u.width,
		height: u.height,
	};
}
const lC = {
		getClippingRect: function (e) {
			let { element: t, boundary: r, rootBoundary: o, strategy: s } = e;
			const u =
					r === 'clippingAncestors'
						? (function (p, m) {
								const v = m.get(p);
								if (v) return v;
								let b = tc(p).filter((E) => Yi(E) && Qi(E) !== 'body'),
									w = null;
								const C = Wr(p).position === 'fixed';
								let M = C ? ea(p) : p;
								for (; Yi(M) && !Ih(M); ) {
									const E = Wr(M),
										N = Id(M);
									(
										C
											? N || w
											: N ||
												E.position !== 'static' ||
												!w ||
												!['absolute', 'fixed'].includes(w.position)
									)
										? (w = E)
										: (b = b.filter((A) => A !== M)),
										(M = ea(M));
								}
								return m.set(p, b), b;
							})(t, this._c)
						: [].concat(r),
				f = [...u, o],
				d = f[0],
				h = f.reduce(
					(p, m) => {
						const v = ev(t, m, s);
						return (
							(p.top = zl(v.top, p.top)),
							(p.right = Jm(v.right, p.right)),
							(p.bottom = Jm(v.bottom, p.bottom)),
							(p.left = zl(v.left, p.left)),
							p
						);
					},
					ev(t, d, s),
				);
			return {
				width: h.right - h.left,
				height: h.bottom - h.top,
				x: h.left,
				y: h.top,
			};
		},
		convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
			let { rect: t, offsetParent: r, strategy: o } = e;
			const s = Ur(r),
				u = Zi(r);
			if (r === u) return t;
			let f = { scrollLeft: 0, scrollTop: 0 },
				d = { x: 1, y: 1 };
			const h = { x: 0, y: 0 };
			if (
				(s || (!s && o !== 'fixed')) &&
				((Qi(r) !== 'body' || Oc(u)) && (f = Rc(r)), Ur(r))
			) {
				const p = Ql(r);
				(d = Cs(r)), (h.x = p.x + r.clientLeft), (h.y = p.y + r.clientTop);
			}
			return {
				width: t.width * d.x,
				height: t.height * d.y,
				x: t.x * d.x - f.scrollLeft * d.x + h.x,
				y: t.y * d.y - f.scrollTop * d.y + h.y,
			};
		},
		isElement: Yi,
		getDimensions: function (e) {
			return Ur(e) ? db(e) : e.getBoundingClientRect();
		},
		getOffsetParent: nv,
		getDocumentElement: Zi,
		getScale: Cs,
		async getElementRects(e) {
			let { reference: t, floating: r, strategy: o } = e;
			const s = this.getOffsetParent || nv,
				u = this.getDimensions;
			return {
				reference: sC(t, await s(r), o),
				floating: { x: 0, y: 0, ...(await u(r)) },
			};
		},
		getClientRects: (e) => Array.from(e.getClientRects()),
		isRTL: (e) => Wr(e).direction === 'rtl',
	},
	aC = (e, t, r) => {
		const o = new Map(),
			s = { platform: lC, ...r },
			u = { ...s.platform, _c: o };
		return YT(e, t, { ...s, platform: u });
	};
function wb(e, t) {
	for (const r in t)
		Object.prototype.hasOwnProperty.call(t, r) &&
			(typeof t[r] == 'object' && e[r] ? wb(e[r], t[r]) : (e[r] = t[r]));
}
const _r = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: 'body',
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: 'absolute',
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: 'top',
			triggers: ['hover', 'focus', 'touch'],
			hideTriggers: (e) => [...e, 'click'],
			delay: { show: 200, hide: 0 },
			handleResize: !1,
			html: !1,
			loadingContent: '...',
		},
		dropdown: {
			placement: 'bottom',
			triggers: ['click'],
			delay: 0,
			handleResize: !0,
			autoHide: !0,
		},
		menu: {
			$extend: 'dropdown',
			triggers: ['hover', 'focus'],
			popperTriggers: ['hover'],
			delay: { show: 0, hide: 400 },
		},
	},
};
function ta(e, t) {
	let r = _r.themes[e] || {},
		o;
	do
		(o = r[t]),
			typeof o > 'u'
				? r.$extend
					? (r = _r.themes[r.$extend] || {})
					: ((r = null), (o = _r[t]))
				: (r = null);
	while (r);
	return o;
}
function uC(e) {
	const t = [e];
	let r = _r.themes[e] || {};
	do
		r.$extend && !r.$resetCss
			? (t.push(r.$extend), (r = _r.themes[r.$extend] || {}))
			: (r = null);
	while (r);
	return t.map((o) => `v-popper--theme-${o}`);
}
function rv(e) {
	const t = [e];
	let r = _r.themes[e] || {};
	do
		r.$extend
			? (t.push(r.$extend), (r = _r.themes[r.$extend] || {}))
			: (r = null);
	while (r);
	return t;
}
let Ps = !1;
if (typeof window < 'u') {
	Ps = !1;
	try {
		const e = Object.defineProperty({}, 'passive', {
			get() {
				Ps = !0;
			},
		});
		window.addEventListener('test', null, e);
	} catch {}
}
let xb = !1;
typeof window < 'u' &&
	typeof navigator < 'u' &&
	(xb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Sb = ['auto', 'top', 'bottom', 'left', 'right'].reduce(
		(e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
		[],
	),
	iv = {
		hover: 'mouseenter',
		focus: 'focus',
		click: 'click',
		touch: 'touchstart',
		pointer: 'pointerdown',
	},
	ov = {
		hover: 'mouseleave',
		focus: 'blur',
		click: 'click',
		touch: 'touchend',
		pointer: 'pointerup',
	};
function sv(e, t) {
	const r = e.indexOf(t);
	r !== -1 && e.splice(r, 1);
}
function id() {
	return new Promise((e) =>
		requestAnimationFrame(() => {
			requestAnimationFrame(e);
		}),
	);
}
const Yn = [];
let So = null;
const lv = {};
function av(e) {
	let t = lv[e];
	return t || (t = lv[e] = []), t;
}
let Fd = function () {};
typeof window < 'u' && (Fd = window.Element);
function at(e) {
	return function (t) {
		return ta(t.theme, e);
	};
}
const od = '__floating-vue__popper',
	_b = () =>
		ct({
			name: 'VPopper',
			provide() {
				return { [od]: { parentPopper: this } };
			},
			inject: { [od]: { default: null } },
			props: {
				theme: { type: String, required: !0 },
				targetNodes: { type: Function, required: !0 },
				referenceNode: { type: Function, default: null },
				popperNode: { type: Function, required: !0 },
				shown: { type: Boolean, default: !1 },
				showGroup: { type: String, default: null },
				ariaId: { default: null },
				disabled: { type: Boolean, default: at('disabled') },
				positioningDisabled: {
					type: Boolean,
					default: at('positioningDisabled'),
				},
				placement: {
					type: String,
					default: at('placement'),
					validator: (e) => Sb.includes(e),
				},
				delay: { type: [String, Number, Object], default: at('delay') },
				distance: { type: [Number, String], default: at('distance') },
				skidding: { type: [Number, String], default: at('skidding') },
				triggers: { type: Array, default: at('triggers') },
				showTriggers: { type: [Array, Function], default: at('showTriggers') },
				hideTriggers: { type: [Array, Function], default: at('hideTriggers') },
				popperTriggers: { type: Array, default: at('popperTriggers') },
				popperShowTriggers: {
					type: [Array, Function],
					default: at('popperShowTriggers'),
				},
				popperHideTriggers: {
					type: [Array, Function],
					default: at('popperHideTriggers'),
				},
				container: {
					type: [String, Object, Fd, Boolean],
					default: at('container'),
				},
				boundary: { type: [String, Fd], default: at('boundary') },
				strategy: {
					type: String,
					validator: (e) => ['absolute', 'fixed'].includes(e),
					default: at('strategy'),
				},
				autoHide: { type: [Boolean, Function], default: at('autoHide') },
				handleResize: { type: Boolean, default: at('handleResize') },
				instantMove: { type: Boolean, default: at('instantMove') },
				eagerMount: { type: Boolean, default: at('eagerMount') },
				popperClass: {
					type: [String, Array, Object],
					default: at('popperClass'),
				},
				computeTransformOrigin: {
					type: Boolean,
					default: at('computeTransformOrigin'),
				},
				autoMinSize: { type: Boolean, default: at('autoMinSize') },
				autoSize: { type: [Boolean, String], default: at('autoSize') },
				autoMaxSize: { type: Boolean, default: at('autoMaxSize') },
				autoBoundaryMaxSize: {
					type: Boolean,
					default: at('autoBoundaryMaxSize'),
				},
				preventOverflow: { type: Boolean, default: at('preventOverflow') },
				overflowPadding: {
					type: [Number, String],
					default: at('overflowPadding'),
				},
				arrowPadding: { type: [Number, String], default: at('arrowPadding') },
				arrowOverflow: { type: Boolean, default: at('arrowOverflow') },
				flip: { type: Boolean, default: at('flip') },
				shift: { type: Boolean, default: at('shift') },
				shiftCrossAxis: { type: Boolean, default: at('shiftCrossAxis') },
				noAutoFocus: { type: Boolean, default: at('noAutoFocus') },
				disposeTimeout: { type: Number, default: at('disposeTimeout') },
			},
			emits: {
				show: () => !0,
				hide: () => !0,
				'update:shown': (e) => !0,
				'apply-show': () => !0,
				'apply-hide': () => !0,
				'close-group': () => !0,
				'close-directive': () => !0,
				'auto-hide': () => !0,
				resize: () => !0,
			},
			data() {
				return {
					isShown: !1,
					isMounted: !1,
					skipTransition: !1,
					classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
					result: {
						x: 0,
						y: 0,
						placement: '',
						strategy: this.strategy,
						arrow: { x: 0, y: 0, centerOffset: 0 },
						transformOrigin: null,
					},
					randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join('_')}`,
					shownChildren: new Set(),
					lastAutoHide: !0,
					pendingHide: !1,
					containsGlobalTarget: !1,
					isDisposed: !0,
					mouseDownContains: !1,
				};
			},
			computed: {
				popperId() {
					return this.ariaId != null ? this.ariaId : this.randomId;
				},
				shouldMountContent() {
					return this.eagerMount || this.isMounted;
				},
				slotData() {
					return {
						popperId: this.popperId,
						isShown: this.isShown,
						shouldMountContent: this.shouldMountContent,
						skipTransition: this.skipTransition,
						autoHide:
							typeof this.autoHide == 'function'
								? this.lastAutoHide
								: this.autoHide,
						show: this.show,
						hide: this.hide,
						handleResize: this.handleResize,
						onResize: this.onResize,
						classes: { ...this.classes, popperClass: this.popperClass },
						result: this.positioningDisabled ? null : this.result,
						attrs: this.$attrs,
					};
				},
				parentPopper() {
					var e;
					return (e = this[od]) == null ? void 0 : e.parentPopper;
				},
				hasPopperShowTriggerHover() {
					var e, t;
					return (
						((e = this.popperTriggers) == null
							? void 0
							: e.includes('hover')) ||
						((t = this.popperShowTriggers) == null
							? void 0
							: t.includes('hover'))
					);
				},
			},
			watch: {
				shown: '$_autoShowHide',
				disabled(e) {
					e ? this.dispose() : this.init();
				},
				async container() {
					this.isShown &&
						(this.$_ensureTeleport(), await this.$_computePosition());
				},
				triggers: { handler: '$_refreshListeners', deep: !0 },
				positioningDisabled: '$_refreshListeners',
				...[
					'placement',
					'distance',
					'skidding',
					'boundary',
					'strategy',
					'overflowPadding',
					'arrowPadding',
					'preventOverflow',
					'shift',
					'shiftCrossAxis',
					'flip',
				].reduce((e, t) => ((e[t] = '$_computePosition'), e), {}),
			},
			created() {
				this.autoMinSize &&
					console.warn(
						'[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.',
					),
					this.autoMaxSize &&
						console.warn(
							'[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.',
						);
			},
			mounted() {
				this.init(), this.$_detachPopperNode();
			},
			activated() {
				this.$_autoShowHide();
			},
			deactivated() {
				this.hide();
			},
			beforeUnmount() {
				this.dispose();
			},
			methods: {
				show({ event: e = null, skipDelay: t = !1, force: r = !1 } = {}) {
					var o, s;
					((o = this.parentPopper) != null &&
						o.lockedChild &&
						this.parentPopper.lockedChild !== this) ||
						((this.pendingHide = !1),
						(r || !this.disabled) &&
							(((s = this.parentPopper) == null ? void 0 : s.lockedChild) ===
								this && (this.parentPopper.lockedChild = null),
							this.$_scheduleShow(e, t),
							this.$emit('show'),
							(this.$_showFrameLocked = !0),
							requestAnimationFrame(() => {
								this.$_showFrameLocked = !1;
							})),
						this.$emit('update:shown', !0));
				},
				hide({ event: e = null, skipDelay: t = !1 } = {}) {
					var r;
					if (!this.$_hideInProgress) {
						if (this.shownChildren.size > 0) {
							this.pendingHide = !0;
							return;
						}
						if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
							this.parentPopper &&
								((this.parentPopper.lockedChild = this),
								clearTimeout(this.parentPopper.lockedChildTimer),
								(this.parentPopper.lockedChildTimer = setTimeout(() => {
									this.parentPopper.lockedChild === this &&
										(this.parentPopper.lockedChild.hide({ skipDelay: t }),
										(this.parentPopper.lockedChild = null));
								}, 1e3)));
							return;
						}
						((r = this.parentPopper) == null ? void 0 : r.lockedChild) ===
							this && (this.parentPopper.lockedChild = null),
							(this.pendingHide = !1),
							this.$_scheduleHide(e, t),
							this.$emit('hide'),
							this.$emit('update:shown', !1);
					}
				},
				init() {
					var e;
					this.isDisposed &&
						((this.isDisposed = !1),
						(this.isMounted = !1),
						(this.$_events = []),
						(this.$_preventShow = !1),
						(this.$_referenceNode =
							((e = this.referenceNode) == null ? void 0 : e.call(this)) ??
							this.$el),
						(this.$_targetNodes = this.targetNodes().filter(
							(t) => t.nodeType === t.ELEMENT_NODE,
						)),
						(this.$_popperNode = this.popperNode()),
						(this.$_innerNode =
							this.$_popperNode.querySelector('.v-popper__inner')),
						(this.$_arrowNode = this.$_popperNode.querySelector(
							'.v-popper__arrow-container',
						)),
						this.$_swapTargetAttrs('title', 'data-original-title'),
						this.$_detachPopperNode(),
						this.triggers.length && this.$_addEventListeners(),
						this.shown && this.show());
				},
				dispose() {
					this.isDisposed ||
						((this.isDisposed = !0),
						this.$_removeEventListeners(),
						this.hide({ skipDelay: !0 }),
						this.$_detachPopperNode(),
						(this.isMounted = !1),
						(this.isShown = !1),
						this.$_updateParentShownChildren(!1),
						this.$_swapTargetAttrs('data-original-title', 'title'));
				},
				async onResize() {
					this.isShown &&
						(await this.$_computePosition(), this.$emit('resize'));
				},
				async $_computePosition() {
					if (this.isDisposed || this.positioningDisabled) return;
					const e = { strategy: this.strategy, middleware: [] };
					(this.distance || this.skidding) &&
						e.middleware.push(
							nC({ mainAxis: this.distance, crossAxis: this.skidding }),
						);
					const t = this.placement.startsWith('auto');
					if (
						(t
							? e.middleware.push(
									QT({ alignment: this.placement.split('-')[1] ?? '' }),
								)
							: (e.placement = this.placement),
						this.preventOverflow &&
							(this.shift &&
								e.middleware.push(
									rC({
										padding: this.overflowPadding,
										boundary: this.boundary,
										crossAxis: this.shiftCrossAxis,
									}),
								),
							!t &&
								this.flip &&
								e.middleware.push(
									eC({
										padding: this.overflowPadding,
										boundary: this.boundary,
									}),
								)),
						e.middleware.push(
							ZT({ element: this.$_arrowNode, padding: this.arrowPadding }),
						),
						this.arrowOverflow &&
							e.middleware.push({
								name: 'arrowOverflow',
								fn: ({ placement: o, rects: s, middlewareData: u }) => {
									let f;
									const { centerOffset: d } = u.arrow;
									return (
										o.startsWith('top') || o.startsWith('bottom')
											? (f = Math.abs(d) > s.reference.width / 2)
											: (f = Math.abs(d) > s.reference.height / 2),
										{ data: { overflow: f } }
									);
								},
							}),
						this.autoMinSize || this.autoSize)
					) {
						const o = this.autoSize
							? this.autoSize
							: this.autoMinSize
								? 'min'
								: null;
						e.middleware.push({
							name: 'autoSize',
							fn: ({ rects: s, placement: u, middlewareData: f }) => {
								var d;
								if ((d = f.autoSize) != null && d.skip) return {};
								let h, p;
								return (
									u.startsWith('top') || u.startsWith('bottom')
										? (h = s.reference.width)
										: (p = s.reference.height),
									(this.$_innerNode.style[
										o === 'min'
											? 'minWidth'
											: o === 'max'
												? 'maxWidth'
												: 'width'
									] = h != null ? `${h}px` : null),
									(this.$_innerNode.style[
										o === 'min'
											? 'minHeight'
											: o === 'max'
												? 'maxHeight'
												: 'height'
									] = p != null ? `${p}px` : null),
									{ data: { skip: !0 }, reset: { rects: !0 } }
								);
							},
						});
					}
					(this.autoMaxSize || this.autoBoundaryMaxSize) &&
						((this.$_innerNode.style.maxWidth = null),
						(this.$_innerNode.style.maxHeight = null),
						e.middleware.push(
							iC({
								boundary: this.boundary,
								padding: this.overflowPadding,
								apply: ({ availableWidth: o, availableHeight: s }) => {
									(this.$_innerNode.style.maxWidth =
										o != null ? `${o}px` : null),
										(this.$_innerNode.style.maxHeight =
											s != null ? `${s}px` : null);
								},
							}),
						));
					const r = await aC(this.$_referenceNode, this.$_popperNode, e);
					Object.assign(this.result, {
						x: r.x,
						y: r.y,
						placement: r.placement,
						strategy: r.strategy,
						arrow: {
							...r.middlewareData.arrow,
							...r.middlewareData.arrowOverflow,
						},
					});
				},
				$_scheduleShow(e, t = !1) {
					if (
						(this.$_updateParentShownChildren(!0),
						(this.$_hideInProgress = !1),
						clearTimeout(this.$_scheduleTimer),
						So &&
							this.instantMove &&
							So.instantMove &&
							So !== this.parentPopper)
					) {
						So.$_applyHide(!0), this.$_applyShow(!0);
						return;
					}
					t
						? this.$_applyShow()
						: (this.$_scheduleTimer = setTimeout(
								this.$_applyShow.bind(this),
								this.$_computeDelay('show'),
							));
				},
				$_scheduleHide(e, t = !1) {
					if (this.shownChildren.size > 0) {
						this.pendingHide = !0;
						return;
					}
					this.$_updateParentShownChildren(!1),
						(this.$_hideInProgress = !0),
						clearTimeout(this.$_scheduleTimer),
						this.isShown && (So = this),
						t
							? this.$_applyHide()
							: (this.$_scheduleTimer = setTimeout(
									this.$_applyHide.bind(this),
									this.$_computeDelay('hide'),
								));
				},
				$_computeDelay(e) {
					const t = this.delay;
					return parseInt((t && t[e]) || t || 0);
				},
				async $_applyShow(e = !1) {
					clearTimeout(this.$_disposeTimer),
						clearTimeout(this.$_scheduleTimer),
						(this.skipTransition = e),
						!this.isShown &&
							(this.$_ensureTeleport(),
							await id(),
							await this.$_computePosition(),
							await this.$_applyShowEffect(),
							this.positioningDisabled ||
								this.$_registerEventListeners(
									[...tc(this.$_referenceNode), ...tc(this.$_popperNode)],
									'scroll',
									() => {
										this.$_computePosition();
									},
								));
				},
				async $_applyShowEffect() {
					if (this.$_hideInProgress) return;
					if (this.computeTransformOrigin) {
						const t = this.$_referenceNode.getBoundingClientRect(),
							r = this.$_popperNode.querySelector('.v-popper__wrapper'),
							o = r.parentNode.getBoundingClientRect(),
							s = t.x + t.width / 2 - (o.left + r.offsetLeft),
							u = t.y + t.height / 2 - (o.top + r.offsetTop);
						this.result.transformOrigin = `${s}px ${u}px`;
					}
					(this.isShown = !0),
						this.$_applyAttrsToTarget({
							'aria-describedby': this.popperId,
							'data-popper-shown': '',
						});
					const e = this.showGroup;
					if (e) {
						let t;
						for (let r = 0; r < Yn.length; r++)
							(t = Yn[r]),
								t.showGroup !== e && (t.hide(), t.$emit('close-group'));
					}
					Yn.push(this), document.body.classList.add('v-popper--some-open');
					for (const t of rv(this.theme))
						av(t).push(this),
							document.body.classList.add(`v-popper--some-open--${t}`);
					this.$emit('apply-show'),
						(this.classes.showFrom = !0),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !1),
						await id(),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !0),
						this.noAutoFocus || this.$_popperNode.focus();
				},
				async $_applyHide(e = !1) {
					if (this.shownChildren.size > 0) {
						(this.pendingHide = !0), (this.$_hideInProgress = !1);
						return;
					}
					if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
					(this.skipTransition = e),
						sv(Yn, this),
						Yn.length === 0 &&
							document.body.classList.remove('v-popper--some-open');
					for (const r of rv(this.theme)) {
						const o = av(r);
						sv(o, this),
							o.length === 0 &&
								document.body.classList.remove(`v-popper--some-open--${r}`);
					}
					So === this && (So = null),
						(this.isShown = !1),
						this.$_applyAttrsToTarget({
							'aria-describedby': void 0,
							'data-popper-shown': void 0,
						}),
						clearTimeout(this.$_disposeTimer);
					const t = this.disposeTimeout;
					t !== null &&
						(this.$_disposeTimer = setTimeout(() => {
							this.$_popperNode &&
								(this.$_detachPopperNode(), (this.isMounted = !1));
						}, t)),
						this.$_removeEventListeners('scroll'),
						this.$emit('apply-hide'),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !0),
						(this.classes.hideTo = !1),
						await id(),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !0);
				},
				$_autoShowHide() {
					this.shown ? this.show() : this.hide();
				},
				$_ensureTeleport() {
					if (this.isDisposed) return;
					let e = this.container;
					if (
						(typeof e == 'string'
							? (e = window.document.querySelector(e))
							: e === !1 && (e = this.$_targetNodes[0].parentNode),
						!e)
					)
						throw new Error('No container for popover: ' + this.container);
					e.appendChild(this.$_popperNode), (this.isMounted = !0);
				},
				$_addEventListeners() {
					const e = (r) => {
						(this.isShown && !this.$_hideInProgress) ||
							((r.usedByTooltip = !0),
							!this.$_preventShow && this.show({ event: r }));
					};
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						iv,
						this.triggers,
						this.showTriggers,
						e,
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							iv,
							this.popperTriggers,
							this.popperShowTriggers,
							e,
						);
					const t = (r) => {
						r.usedByTooltip || this.hide({ event: r });
					};
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						ov,
						this.triggers,
						this.hideTriggers,
						t,
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							ov,
							this.popperTriggers,
							this.popperHideTriggers,
							t,
						);
				},
				$_registerEventListeners(e, t, r) {
					this.$_events.push({ targetNodes: e, eventType: t, handler: r }),
						e.forEach((o) =>
							o.addEventListener(t, r, Ps ? { passive: !0 } : void 0),
						);
				},
				$_registerTriggerListeners(e, t, r, o, s) {
					let u = r;
					o != null && (u = typeof o == 'function' ? o(u) : o),
						u.forEach((f) => {
							const d = t[f];
							d && this.$_registerEventListeners(e, d, s);
						});
				},
				$_removeEventListeners(e) {
					const t = [];
					this.$_events.forEach((r) => {
						const { targetNodes: o, eventType: s, handler: u } = r;
						!e || e === s
							? o.forEach((f) => f.removeEventListener(s, u))
							: t.push(r);
					}),
						(this.$_events = t);
				},
				$_refreshListeners() {
					this.isDisposed ||
						(this.$_removeEventListeners(), this.$_addEventListeners());
				},
				$_handleGlobalClose(e, t = !1) {
					this.$_showFrameLocked ||
						(this.hide({ event: e }),
						e.closePopover
							? this.$emit('close-directive')
							: this.$emit('auto-hide'),
						t &&
							((this.$_preventShow = !0),
							setTimeout(() => {
								this.$_preventShow = !1;
							}, 300)));
				},
				$_detachPopperNode() {
					this.$_popperNode.parentNode &&
						this.$_popperNode.parentNode.removeChild(this.$_popperNode);
				},
				$_swapTargetAttrs(e, t) {
					for (const r of this.$_targetNodes) {
						const o = r.getAttribute(e);
						o && (r.removeAttribute(e), r.setAttribute(t, o));
					}
				},
				$_applyAttrsToTarget(e) {
					for (const t of this.$_targetNodes)
						for (const r in e) {
							const o = e[r];
							o == null ? t.removeAttribute(r) : t.setAttribute(r, o);
						}
				},
				$_updateParentShownChildren(e) {
					let t = this.parentPopper;
					for (; t; )
						e
							? t.shownChildren.add(this.randomId)
							: (t.shownChildren.delete(this.randomId),
								t.pendingHide && t.hide()),
							(t = t.parentPopper);
				},
				$_isAimingPopper() {
					const e = this.$_referenceNode.getBoundingClientRect();
					if (Il >= e.left && Il <= e.right && Fl >= e.top && Fl <= e.bottom) {
						const t = this.$_popperNode.getBoundingClientRect(),
							r = Il - Ii,
							o = Fl - Fi,
							s =
								t.left +
								t.width / 2 -
								Ii +
								(t.top + t.height / 2) -
								Fi +
								t.width +
								t.height,
							u = Ii + r * s,
							f = Fi + o * s;
						return (
							hu(Ii, Fi, u, f, t.left, t.top, t.left, t.bottom) ||
							hu(Ii, Fi, u, f, t.left, t.top, t.right, t.top) ||
							hu(Ii, Fi, u, f, t.right, t.top, t.right, t.bottom) ||
							hu(Ii, Fi, u, f, t.left, t.bottom, t.right, t.bottom)
						);
					}
					return !1;
				},
			},
			render() {
				return this.$slots.default(this.slotData);
			},
		});
if (typeof document < 'u' && typeof window < 'u') {
	if (xb) {
		const e = Ps ? { passive: !0, capture: !0 } : !0;
		document.addEventListener('touchstart', (t) => uv(t, !0), e),
			document.addEventListener('touchend', (t) => cv(t, !0), e);
	} else
		window.addEventListener('mousedown', (e) => uv(e, !1), !0),
			window.addEventListener('click', (e) => cv(e, !1), !0);
	window.addEventListener('resize', fC);
}
function uv(e, t) {
	if (_r.autoHideOnMousedown) kb(e, t);
	else
		for (let r = 0; r < Yn.length; r++) {
			const o = Yn[r];
			try {
				o.mouseDownContains = o.popperNode().contains(e.target);
			} catch {}
		}
}
function cv(e, t) {
	_r.autoHideOnMousedown || kb(e, t);
}
function kb(e, t) {
	const r = {};
	for (let o = Yn.length - 1; o >= 0; o--) {
		const s = Yn[o];
		try {
			const u = (s.containsGlobalTarget =
				s.mouseDownContains || s.popperNode().contains(e.target));
			(s.pendingHide = !1),
				requestAnimationFrame(() => {
					if (((s.pendingHide = !1), !r[s.randomId] && fv(s, u, e))) {
						if (
							(s.$_handleGlobalClose(e, t),
							!e.closeAllPopover && e.closePopover && u)
						) {
							let d = s.parentPopper;
							for (; d; ) (r[d.randomId] = !0), (d = d.parentPopper);
							return;
						}
						let f = s.parentPopper;
						for (; f && fv(f, f.containsGlobalTarget, e); )
							f.$_handleGlobalClose(e, t), (f = f.parentPopper);
					}
				});
		} catch {}
	}
}
function fv(e, t, r) {
	return r.closeAllPopover || (r.closePopover && t) || (cC(e, r) && !t);
}
function cC(e, t) {
	if (typeof e.autoHide == 'function') {
		const r = e.autoHide(t);
		return (e.lastAutoHide = r), r;
	}
	return e.autoHide;
}
function fC() {
	for (let e = 0; e < Yn.length; e++) Yn[e].$_computePosition();
}
function dv() {
	for (let e = 0; e < Yn.length; e++) Yn[e].hide();
}
let Ii = 0,
	Fi = 0,
	Il = 0,
	Fl = 0;
typeof window < 'u' &&
	window.addEventListener(
		'mousemove',
		(e) => {
			(Ii = Il), (Fi = Fl), (Il = e.clientX), (Fl = e.clientY);
		},
		Ps ? { passive: !0 } : void 0,
	);
function hu(e, t, r, o, s, u, f, d) {
	const h =
			((f - s) * (t - u) - (d - u) * (e - s)) /
			((d - u) * (r - e) - (f - s) * (o - t)),
		p =
			((r - e) * (t - u) - (o - t) * (e - s)) /
			((d - u) * (r - e) - (f - s) * (o - t));
	return h >= 0 && h <= 1 && p >= 0 && p <= 1;
}
const dC = { extends: _b() },
	Dc = (e, t) => {
		const r = e.__vccOpts || e;
		for (const [o, s] of t) r[o] = s;
		return r;
	};
function hC(e, t, r, o, s, u) {
	return (
		oe(),
		ve(
			'div',
			{
				ref: 'reference',
				class: it(['v-popper', { 'v-popper--shown': e.slotData.isShown }]),
			},
			[vn(e.$slots, 'default', h_(Q0(e.slotData)))],
			2,
		)
	);
}
const pC = Dc(dC, [['render', hC]]);
function gC() {
	var e = window.navigator.userAgent,
		t = e.indexOf('MSIE ');
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
	var r = e.indexOf('Trident/');
	if (r > 0) {
		var o = e.indexOf('rv:');
		return parseInt(e.substring(o + 3, e.indexOf('.', o)), 10);
	}
	var s = e.indexOf('Edge/');
	return s > 0 ? parseInt(e.substring(s + 5, e.indexOf('.', s)), 10) : -1;
}
let $u;
function Hd() {
	Hd.init || ((Hd.init = !0), ($u = gC() !== -1));
}
var zc = {
	name: 'ResizeObserver',
	props: {
		emitOnMount: { type: Boolean, default: !1 },
		ignoreWidth: { type: Boolean, default: !1 },
		ignoreHeight: { type: Boolean, default: !1 },
	},
	emits: ['notify'],
	mounted() {
		Hd(),
			Ot(() => {
				(this._w = this.$el.offsetWidth),
					(this._h = this.$el.offsetHeight),
					this.emitOnMount && this.emitSize();
			});
		const e = document.createElement('object');
		(this._resizeObject = e),
			e.setAttribute('aria-hidden', 'true'),
			e.setAttribute('tabindex', -1),
			(e.onload = this.addResizeHandlers),
			(e.type = 'text/html'),
			$u && this.$el.appendChild(e),
			(e.data = 'about:blank'),
			$u || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
				(!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
				((this._w = this.$el.offsetWidth),
				(this._h = this.$el.offsetHeight),
				this.emitSize());
		},
		emitSize() {
			this.$emit('notify', { width: this._w, height: this._h });
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener(
				'resize',
				this.compareAndNotify,
			),
				this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject &&
				this._resizeObject.onload &&
				(!$u &&
					this._resizeObject.contentDocument &&
					this._resizeObject.contentDocument.defaultView.removeEventListener(
						'resize',
						this.compareAndNotify,
					),
				this.$el.removeChild(this._resizeObject),
				(this._resizeObject.onload = null),
				(this._resizeObject = null));
		},
	},
};
const mC = y0();
m0('data-v-b329ee4c');
const vC = { class: 'resize-observer', tabindex: '-1' };
v0();
const yC = mC((e, t, r, o, s, u) => (oe(), tt('div', vC)));
zc.render = yC;
zc.__scopeId = 'data-v-b329ee4c';
zc.__file = 'src/components/ResizeObserver.vue';
const Tb = (e = 'theme') => ({
		computed: {
			themeClass() {
				return uC(this[e]);
			},
		},
	}),
	bC = ct({
		name: 'VPopperContent',
		components: { ResizeObserver: zc },
		mixins: [Tb()],
		props: {
			popperId: String,
			theme: String,
			shown: Boolean,
			mounted: Boolean,
			skipTransition: Boolean,
			autoHide: Boolean,
			handleResize: Boolean,
			classes: Object,
			result: Object,
		},
		emits: ['hide', 'resize'],
		methods: {
			toPx(e) {
				return e != null && !isNaN(e) ? `${e}px` : null;
			},
		},
	}),
	wC = ['id', 'aria-hidden', 'tabindex', 'data-popper-placement'],
	xC = { ref: 'inner', class: 'v-popper__inner' },
	SC = Q('div', { class: 'v-popper__arrow-outer' }, null, -1),
	_C = Q('div', { class: 'v-popper__arrow-inner' }, null, -1),
	kC = [SC, _C];
function TC(e, t, r, o, s, u) {
	const f = Po('ResizeObserver');
	return (
		oe(),
		ve(
			'div',
			{
				id: e.popperId,
				ref: 'popover',
				class: it([
					'v-popper__popper',
					[
						e.themeClass,
						e.classes.popperClass,
						{
							'v-popper__popper--shown': e.shown,
							'v-popper__popper--hidden': !e.shown,
							'v-popper__popper--show-from': e.classes.showFrom,
							'v-popper__popper--show-to': e.classes.showTo,
							'v-popper__popper--hide-from': e.classes.hideFrom,
							'v-popper__popper--hide-to': e.classes.hideTo,
							'v-popper__popper--skip-transition': e.skipTransition,
							'v-popper__popper--arrow-overflow':
								e.result && e.result.arrow.overflow,
							'v-popper__popper--no-positioning': !e.result,
						},
					],
				]),
				style: Qt(
					e.result
						? {
								position: e.result.strategy,
								transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`,
							}
						: void 0,
				),
				'aria-hidden': e.shown ? 'false' : 'true',
				tabindex: e.autoHide ? 0 : void 0,
				'data-popper-placement': e.result ? e.result.placement : void 0,
				onKeyup:
					t[2] || (t[2] = Dd((d) => e.autoHide && e.$emit('hide'), ['esc'])),
			},
			[
				Q('div', {
					class: 'v-popper__backdrop',
					onClick: t[0] || (t[0] = (d) => e.autoHide && e.$emit('hide')),
				}),
				Q(
					'div',
					{
						class: 'v-popper__wrapper',
						style: Qt(
							e.result ? { transformOrigin: e.result.transformOrigin } : void 0,
						),
					},
					[
						Q(
							'div',
							xC,
							[
								e.mounted
									? (oe(),
										ve(
											ut,
											{ key: 0 },
											[
												Q('div', null, [vn(e.$slots, 'default')]),
												e.handleResize
													? (oe(),
														tt(f, {
															key: 0,
															onNotify:
																t[1] || (t[1] = (d) => e.$emit('resize', d)),
														}))
													: Ke('', !0),
											],
											64,
										))
									: Ke('', !0),
							],
							512,
						),
						Q(
							'div',
							{
								ref: 'arrow',
								class: 'v-popper__arrow-container',
								style: Qt(
									e.result
										? {
												left: e.toPx(e.result.arrow.x),
												top: e.toPx(e.result.arrow.y),
											}
										: void 0,
								),
							},
							kC,
							4,
						),
					],
					4,
				),
			],
			46,
			wC,
		)
	);
}
const Cb = Dc(bC, [['render', TC]]),
	Eb = {
		methods: {
			show(...e) {
				return this.$refs.popper.show(...e);
			},
			hide(...e) {
				return this.$refs.popper.hide(...e);
			},
			dispose(...e) {
				return this.$refs.popper.dispose(...e);
			},
			onResize(...e) {
				return this.$refs.popper.onResize(...e);
			},
		},
	};
let qd = function () {};
typeof window < 'u' && (qd = window.Element);
const CC = ct({
	name: 'VPopperWrapper',
	components: { Popper: pC, PopperContent: Cb },
	mixins: [Eb, Tb('finalTheme')],
	props: {
		theme: { type: String, default: null },
		referenceNode: { type: Function, default: null },
		shown: { type: Boolean, default: !1 },
		showGroup: { type: String, default: null },
		ariaId: { default: null },
		disabled: { type: Boolean, default: void 0 },
		positioningDisabled: { type: Boolean, default: void 0 },
		placement: { type: String, default: void 0 },
		delay: { type: [String, Number, Object], default: void 0 },
		distance: { type: [Number, String], default: void 0 },
		skidding: { type: [Number, String], default: void 0 },
		triggers: { type: Array, default: void 0 },
		showTriggers: { type: [Array, Function], default: void 0 },
		hideTriggers: { type: [Array, Function], default: void 0 },
		popperTriggers: { type: Array, default: void 0 },
		popperShowTriggers: { type: [Array, Function], default: void 0 },
		popperHideTriggers: { type: [Array, Function], default: void 0 },
		container: { type: [String, Object, qd, Boolean], default: void 0 },
		boundary: { type: [String, qd], default: void 0 },
		strategy: { type: String, default: void 0 },
		autoHide: { type: [Boolean, Function], default: void 0 },
		handleResize: { type: Boolean, default: void 0 },
		instantMove: { type: Boolean, default: void 0 },
		eagerMount: { type: Boolean, default: void 0 },
		popperClass: { type: [String, Array, Object], default: void 0 },
		computeTransformOrigin: { type: Boolean, default: void 0 },
		autoMinSize: { type: Boolean, default: void 0 },
		autoSize: { type: [Boolean, String], default: void 0 },
		autoMaxSize: { type: Boolean, default: void 0 },
		autoBoundaryMaxSize: { type: Boolean, default: void 0 },
		preventOverflow: { type: Boolean, default: void 0 },
		overflowPadding: { type: [Number, String], default: void 0 },
		arrowPadding: { type: [Number, String], default: void 0 },
		arrowOverflow: { type: Boolean, default: void 0 },
		flip: { type: Boolean, default: void 0 },
		shift: { type: Boolean, default: void 0 },
		shiftCrossAxis: { type: Boolean, default: void 0 },
		noAutoFocus: { type: Boolean, default: void 0 },
		disposeTimeout: { type: Number, default: void 0 },
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		'update:shown': (e) => !0,
		'apply-show': () => !0,
		'apply-hide': () => !0,
		'close-group': () => !0,
		'close-directive': () => !0,
		'auto-hide': () => !0,
		resize: () => !0,
	},
	computed: {
		finalTheme() {
			return this.theme ?? this.$options.vPopperTheme;
		},
	},
	methods: {
		getTargetNodes() {
			return Array.from(this.$el.children).filter(
				(e) => e !== this.$refs.popperContent.$el,
			);
		},
	},
});
function EC(e, t, r, o, s, u) {
	const f = Po('PopperContent'),
		d = Po('Popper');
	return (
		oe(),
		tt(
			d,
			hi({ ref: 'popper' }, e.$props, {
				theme: e.finalTheme,
				'target-nodes': e.getTargetNodes,
				'popper-node': () => e.$refs.popperContent.$el,
				class: [e.themeClass],
				onShow: t[0] || (t[0] = () => e.$emit('show')),
				onHide: t[1] || (t[1] = () => e.$emit('hide')),
				'onUpdate:shown': t[2] || (t[2] = (h) => e.$emit('update:shown', h)),
				onApplyShow: t[3] || (t[3] = () => e.$emit('apply-show')),
				onApplyHide: t[4] || (t[4] = () => e.$emit('apply-hide')),
				onCloseGroup: t[5] || (t[5] = () => e.$emit('close-group')),
				onCloseDirective: t[6] || (t[6] = () => e.$emit('close-directive')),
				onAutoHide: t[7] || (t[7] = () => e.$emit('auto-hide')),
				onResize: t[8] || (t[8] = () => e.$emit('resize')),
			}),
			{
				default: rt(
					({
						popperId: h,
						isShown: p,
						shouldMountContent: m,
						skipTransition: v,
						autoHide: b,
						show: w,
						hide: C,
						handleResize: M,
						onResize: E,
						classes: N,
						result: A,
					}) => [
						vn(e.$slots, 'default', { shown: p, show: w, hide: C }),
						Pe(
							f,
							{
								ref: 'popperContent',
								'popper-id': h,
								theme: e.finalTheme,
								shown: p,
								mounted: m,
								'skip-transition': v,
								'auto-hide': b,
								'handle-resize': M,
								classes: N,
								result: A,
								onHide: C,
								onResize: E,
							},
							{
								default: rt(() => [
									vn(e.$slots, 'popper', { shown: p, hide: C }),
								]),
								_: 2,
							},
							1032,
							[
								'popper-id',
								'theme',
								'shown',
								'mounted',
								'skip-transition',
								'auto-hide',
								'handle-resize',
								'classes',
								'result',
								'onHide',
								'onResize',
							],
						),
					],
				),
				_: 3,
			},
			16,
			['theme', 'target-nodes', 'popper-node', 'class'],
		)
	);
}
const Fh = Dc(CC, [['render', EC]]),
	LC = { ...Fh, name: 'VDropdown', vPopperTheme: 'dropdown' },
	AC = { ...Fh, name: 'VMenu', vPopperTheme: 'menu' },
	Lb = { ...Fh, name: 'VTooltip', vPopperTheme: 'tooltip' },
	MC = ct({
		name: 'VTooltipDirective',
		components: { Popper: _b(), PopperContent: Cb },
		mixins: [Eb],
		inheritAttrs: !1,
		props: {
			theme: { type: String, default: 'tooltip' },
			html: { type: Boolean, default: (e) => ta(e.theme, 'html') },
			content: { type: [String, Number, Function], default: null },
			loadingContent: {
				type: String,
				default: (e) => ta(e.theme, 'loadingContent'),
			},
			targetNodes: { type: Function, required: !0 },
		},
		data() {
			return { asyncContent: null };
		},
		computed: {
			isContentAsync() {
				return typeof this.content == 'function';
			},
			loading() {
				return this.isContentAsync && this.asyncContent == null;
			},
			finalContent() {
				return this.isContentAsync
					? this.loading
						? this.loadingContent
						: this.asyncContent
					: this.content;
			},
		},
		watch: {
			content: {
				handler() {
					this.fetchContent(!0);
				},
				immediate: !0,
			},
			async finalContent() {
				await this.$nextTick(), this.$refs.popper.onResize();
			},
		},
		created() {
			this.$_fetchId = 0;
		},
		methods: {
			fetchContent(e) {
				if (
					typeof this.content == 'function' &&
					this.$_isShown &&
					(e || (!this.$_loading && this.asyncContent == null))
				) {
					(this.asyncContent = null), (this.$_loading = !0);
					const t = ++this.$_fetchId,
						r = this.content(this);
					r.then ? r.then((o) => this.onResult(t, o)) : this.onResult(t, r);
				}
			},
			onResult(e, t) {
				e === this.$_fetchId &&
					((this.$_loading = !1), (this.asyncContent = t));
			},
			onShow() {
				(this.$_isShown = !0), this.fetchContent();
			},
			onHide() {
				this.$_isShown = !1;
			},
		},
	}),
	NC = ['innerHTML'],
	$C = ['textContent'];
function PC(e, t, r, o, s, u) {
	const f = Po('PopperContent'),
		d = Po('Popper');
	return (
		oe(),
		tt(
			d,
			hi({ ref: 'popper' }, e.$attrs, {
				theme: e.theme,
				'target-nodes': e.targetNodes,
				'popper-node': () => e.$refs.popperContent.$el,
				onApplyShow: e.onShow,
				onApplyHide: e.onHide,
			}),
			{
				default: rt(
					({
						popperId: h,
						isShown: p,
						shouldMountContent: m,
						skipTransition: v,
						autoHide: b,
						hide: w,
						handleResize: C,
						onResize: M,
						classes: E,
						result: N,
					}) => [
						Pe(
							f,
							{
								ref: 'popperContent',
								class: it({ 'v-popper--tooltip-loading': e.loading }),
								'popper-id': h,
								theme: e.theme,
								shown: p,
								mounted: m,
								'skip-transition': v,
								'auto-hide': b,
								'handle-resize': C,
								classes: E,
								result: N,
								onHide: w,
								onResize: M,
							},
							{
								default: rt(() => [
									e.html
										? (oe(),
											ve(
												'div',
												{ key: 0, innerHTML: e.finalContent },
												null,
												8,
												NC,
											))
										: (oe(),
											ve(
												'div',
												{ key: 1, textContent: He(e.finalContent) },
												null,
												8,
												$C,
											)),
								]),
								_: 2,
							},
							1032,
							[
								'class',
								'popper-id',
								'theme',
								'shown',
								'mounted',
								'skip-transition',
								'auto-hide',
								'handle-resize',
								'classes',
								'result',
								'onHide',
								'onResize',
							],
						),
					],
				),
				_: 1,
			},
			16,
			['theme', 'target-nodes', 'popper-node', 'onApplyShow', 'onApplyHide'],
		)
	);
}
const OC = Dc(MC, [['render', PC]]),
	Ab = 'v-popper--has-tooltip';
function RC(e, t) {
	let r = e.placement;
	if (!r && t) for (const o of Sb) t[o] && (r = o);
	return r || (r = ta(e.theme || 'tooltip', 'placement')), r;
}
function Mb(e, t, r) {
	let o;
	const s = typeof t;
	return (
		s === 'string'
			? (o = { content: t })
			: t && s === 'object'
				? (o = t)
				: (o = { content: !1 }),
		(o.placement = RC(o, r)),
		(o.targetNodes = () => [e]),
		(o.referenceNode = () => e),
		o
	);
}
let sd,
	na,
	DC = 0;
function zC() {
	if (sd) return;
	(na = qe([])),
		(sd = ab({
			name: 'VTooltipDirectiveApp',
			setup() {
				return { directives: na };
			},
			render() {
				return this.directives.map((t) =>
					wa(OC, {
						...t.options,
						shown: t.shown || t.options.shown,
						key: t.id,
					}),
				);
			},
			devtools: { hide: !0 },
		}));
	const e = document.createElement('div');
	document.body.appendChild(e), sd.mount(e);
}
function Nb(e, t, r) {
	zC();
	const o = qe(Mb(e, t, r)),
		s = qe(!1),
		u = { id: DC++, options: o, shown: s };
	return (
		na.value.push(u),
		e.classList && e.classList.add(Ab),
		(e.$_popper = {
			options: o,
			item: u,
			show() {
				s.value = !0;
			},
			hide() {
				s.value = !1;
			},
		})
	);
}
function Hh(e) {
	if (e.$_popper) {
		const t = na.value.indexOf(e.$_popper.item);
		t !== -1 && na.value.splice(t, 1),
			delete e.$_popper,
			delete e.$_popperOldShown,
			delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(Ab);
}
function hv(e, { value: t, modifiers: r }) {
	const o = Mb(e, t, r);
	if (!o.content || ta(o.theme || 'tooltip', 'disabled')) Hh(e);
	else {
		let s;
		e.$_popper ? ((s = e.$_popper), (s.options.value = o)) : (s = Nb(e, t, r)),
			typeof t.shown < 'u' &&
				t.shown !== e.$_popperOldShown &&
				((e.$_popperOldShown = t.shown), t.shown ? s.show() : s.hide());
	}
}
const $b = {
	beforeMount: hv,
	updated: hv,
	beforeUnmount(e) {
		Hh(e);
	},
};
function pv(e) {
	e.addEventListener('mousedown', nc),
		e.addEventListener('click', nc),
		e.addEventListener('touchstart', Pb, Ps ? { passive: !0 } : !1);
}
function gv(e) {
	e.removeEventListener('mousedown', nc),
		e.removeEventListener('click', nc),
		e.removeEventListener('touchstart', Pb),
		e.removeEventListener('touchend', Ob),
		e.removeEventListener('touchcancel', Rb);
}
function nc(e) {
	const t = e.currentTarget;
	(e.closePopover = !t.$_vclosepopover_touch),
		(e.closeAllPopover =
			t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
}
function Pb(e) {
	if (e.changedTouches.length === 1) {
		const t = e.currentTarget;
		t.$_vclosepopover_touch = !0;
		const r = e.changedTouches[0];
		(t.$_vclosepopover_touchPoint = r),
			t.addEventListener('touchend', Ob),
			t.addEventListener('touchcancel', Rb);
	}
}
function Ob(e) {
	const t = e.currentTarget;
	if (((t.$_vclosepopover_touch = !1), e.changedTouches.length === 1)) {
		const r = e.changedTouches[0],
			o = t.$_vclosepopover_touchPoint;
		(e.closePopover =
			Math.abs(r.screenY - o.screenY) < 20 &&
			Math.abs(r.screenX - o.screenX) < 20),
			(e.closeAllPopover =
				t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
	}
}
function Rb(e) {
	const t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
const IC = {
		beforeMount(e, { value: t, modifiers: r }) {
			(e.$_closePopoverModifiers = r), (typeof t > 'u' || t) && pv(e);
		},
		updated(e, { value: t, oldValue: r, modifiers: o }) {
			(e.$_closePopoverModifiers = o),
				t !== r && (typeof t > 'u' || t ? pv(e) : gv(e));
		},
		beforeUnmount(e) {
			gv(e);
		},
	},
	FC = $b,
	Db = Lb;
function HC(e, t = {}) {
	e.$_vTooltipInstalled ||
		((e.$_vTooltipInstalled = !0),
		wb(_r, t),
		e.directive('tooltip', $b),
		e.directive('close-popper', IC),
		e.component('VTooltip', Lb),
		e.component('VDropdown', LC),
		e.component('VMenu', AC));
}
const zb = { version: '5.2.2', install: HC, options: _r };
function Ib(e) {
	return e != null;
}
function qh(e) {
	return e == null && (e = []), Array.isArray(e) ? e : [e];
}
const qC = /^[A-Za-z]:\//;
function BC(e = '') {
	return e && e.replace(/\\/g, '/').replace(qC, (t) => t.toUpperCase());
}
const WC = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,
	mv = /^\/([A-Za-z]:)?$/;
function UC() {
	return typeof process < 'u' && typeof process.cwd == 'function'
		? process.cwd().replace(/\\/g, '/')
		: '/';
}
const vv = function (...e) {
	e = e.map((o) => BC(o));
	let t = '',
		r = !1;
	for (let o = e.length - 1; o >= -1 && !r; o--) {
		const s = o >= 0 ? e[o] : UC();
		!s || s.length === 0 || ((t = `${s}/${t}`), (r = yv(s)));
	}
	return (t = VC(t, !r)), r && !yv(t) ? `/${t}` : t.length > 0 ? t : '.';
};
function VC(e, t) {
	let r = '',
		o = 0,
		s = -1,
		u = 0,
		f = null;
	for (let d = 0; d <= e.length; ++d) {
		if (d < e.length) f = e[d];
		else {
			if (f === '/') break;
			f = '/';
		}
		if (f === '/') {
			if (!(s === d - 1 || u === 1))
				if (u === 2) {
					if (
						r.length < 2 ||
						o !== 2 ||
						r[r.length - 1] !== '.' ||
						r[r.length - 2] !== '.'
					) {
						if (r.length > 2) {
							const h = r.lastIndexOf('/');
							h === -1
								? ((r = ''), (o = 0))
								: ((r = r.slice(0, h)),
									(o = r.length - 1 - r.lastIndexOf('/'))),
								(s = d),
								(u = 0);
							continue;
						} else if (r.length > 0) {
							(r = ''), (o = 0), (s = d), (u = 0);
							continue;
						}
					}
					t && ((r += r.length > 0 ? '/..' : '..'), (o = 2));
				} else
					r.length > 0
						? (r += `/${e.slice(s + 1, d)}`)
						: (r = e.slice(s + 1, d)),
						(o = d - s - 1);
			(s = d), (u = 0);
		} else f === '.' && u !== -1 ? ++u : (u = -1);
	}
	return r;
}
const yv = function (e) {
		return WC.test(e);
	},
	jC = function (e, t) {
		const r = vv(e).replace(mv, '$1').split('/'),
			o = vv(t).replace(mv, '$1').split('/');
		if (o[0][1] === ':' && r[0][1] === ':' && r[0] !== o[0]) return o.join('/');
		const s = [...r];
		for (const u of s) {
			if (o[0] !== u) break;
			r.shift(), o.shift();
		}
		return [...r.map(() => '..'), ...o].join('/');
	};
function GC(e) {
	let t = 0;
	if (e.length === 0) return `${t}`;
	for (let r = 0; r < e.length; r++) {
		const o = e.charCodeAt(r);
		(t = (t << 5) - t + o), (t = t & t);
	}
	return `${t}`;
}
function Fb(e, t, r, o) {
	const s = jC(t, e),
		u = {
			id: KC(s, r),
			name: s,
			type: 'suite',
			mode: 'queued',
			filepath: e,
			tasks: [],
			meta: Object.create(null),
			projectName: r,
			file: void 0,
			pool: o,
		};
	return (u.file = u), u;
}
function KC(e, t) {
	return GC(`${e}${t || ''}`);
}
function Hb(e) {
	return ra(e);
}
function ra(e) {
	return e.type === 'test';
}
function qb(e) {
	const t = [],
		r = qh(e);
	for (const o of r)
		if (ra(o)) t.push(o);
		else
			for (const s of o.tasks)
				if (ra(s)) t.push(s);
				else {
					const u = qb(s);
					for (const f of u) t.push(f);
				}
	return t;
}
function Bh(e = []) {
	return qh(e).flatMap((t) => (ra(t) ? [t] : [t, ...Bh(t.tasks)]));
}
function XC(e) {
	const t = [e.name];
	let r = e;
	for (; r != null && r.suite; )
		(r = r.suite), r != null && r.name && t.unshift(r.name);
	return r !== e.file && t.unshift(e.file.name), t;
}
const YC = 6e4;
function Bb(e) {
	return e;
}
const ZC = Bb,
	{ clearTimeout: JC, setTimeout: QC } = globalThis,
	eE = Math.random.bind(Math);
function tE(e, t) {
	const {
			post: r,
			on: o,
			off: s = () => {},
			eventNames: u = [],
			serialize: f = Bb,
			deserialize: d = ZC,
			resolver: h,
			bind: p = 'rpc',
			timeout: m = YC,
		} = t,
		v = new Map();
	let b,
		w = !1;
	const C = new Proxy(
		{},
		{
			get(N, A) {
				if (A === '$functions') return e;
				if (A === '$close') return M;
				if (A === 'then' && !u.includes('then') && !('then' in e)) return;
				const $ = (...O) => {
					r(f({ m: A, a: O, t: 'q' }));
				};
				if (u.includes(A)) return ($.asEvent = $), $;
				const L = async (...O) => {
					if (w) throw new Error(`[birpc] rpc is closed, cannot call "${A}"`);
					if (b)
						try {
							await b;
						} finally {
							b = void 0;
						}
					return new Promise((U, B) => {
						var K;
						const te = rE();
						let J;
						m >= 0 &&
							((J = QC(() => {
								var ee;
								try {
									throw (
										((ee = t.onTimeoutError) == null || ee.call(t, A, O),
										new Error(`[birpc] timeout on calling "${A}"`))
									);
								} catch (Y) {
									B(Y);
								}
								v.delete(te);
							}, m)),
							typeof J == 'object' &&
								(J = (K = J.unref) == null ? void 0 : K.call(J))),
							v.set(te, { resolve: U, reject: B, timeoutId: J, method: A }),
							r(f({ m: A, a: O, i: te, t: 'q' }));
					});
				};
				return (L.asEvent = $), L;
			},
		},
	);
	function M() {
		(w = !0),
			v.forEach(({ reject: N, method: A }) => {
				N(new Error(`[birpc] rpc is closed, cannot call "${A}"`));
			}),
			v.clear(),
			s(E);
	}
	async function E(N, ...A) {
		const $ = d(N);
		if ($.t === 'q') {
			const { m: L, a: O } = $;
			let U, B;
			const te = h ? h(L, e[L]) : e[L];
			if (!te) B = new Error(`[birpc] function "${L}" not found`);
			else
				try {
					U = await te.apply(p === 'rpc' ? C : e, O);
				} catch (J) {
					B = J;
				}
			$.i &&
				(B && t.onError && t.onError(B, L, O),
				r(f({ t: 's', i: $.i, r: U, e: B }), ...A));
		} else {
			const { i: L, r: O, e: U } = $,
				B = v.get(L);
			B && (JC(B.timeoutId), U ? B.reject(U) : B.resolve(O)), v.delete(L);
		}
	}
	return (b = o(E)), C;
}
const nE = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
function rE(e = 21) {
	let t = '',
		r = e;
	for (; r--; ) t += nE[(eE() * 64) | 0];
	return t;
}
const { parse: Wb, stringify: iE } = JSON,
	{ keys: oE } = Object,
	ia = String,
	Ub = 'string',
	bv = {},
	rc = 'object',
	Vb = (e, t) => t,
	sE = (e) => (e instanceof ia ? ia(e) : e),
	lE = (e, t) => (typeof t === Ub ? new ia(t) : t),
	jb = (e, t, r, o) => {
		const s = [];
		for (let u = oE(r), { length: f } = u, d = 0; d < f; d++) {
			const h = u[d],
				p = r[h];
			if (p instanceof ia) {
				const m = e[p];
				typeof m === rc && !t.has(m)
					? (t.add(m), (r[h] = bv), s.push({ k: h, a: [e, t, m, o] }))
					: (r[h] = o.call(r, h, m));
			} else r[h] !== bv && (r[h] = o.call(r, h, p));
		}
		for (let { length: u } = s, f = 0; f < u; f++) {
			const { k: d, a: h } = s[f];
			r[d] = o.call(r, d, jb.apply(null, h));
		}
		return r;
	},
	wv = (e, t, r) => {
		const o = ia(t.push(r) - 1);
		return e.set(r, o), o;
	},
	Bd = (e, t) => {
		const r = Wb(e, lE).map(sE),
			o = r[0],
			s = t || Vb,
			u = typeof o === rc && o ? jb(r, new Set(), o, s) : o;
		return s.call({ '': u }, '', u);
	},
	Gb = (e, t, r) => {
		const o =
				t && typeof t === rc
					? (m, v) => (m === '' || -1 < t.indexOf(m) ? v : void 0)
					: t || Vb,
			s = new Map(),
			u = [],
			f = [];
		let d = +wv(s, u, o.call({ '': e }, '', e)),
			h = !d;
		for (; d < u.length; ) (h = !0), (f[d] = iE(u[d++], p, r));
		return '[' + f.join(',') + ']';
		function p(m, v) {
			if (h) return (h = !h), v;
			const b = o.call(this, m, v);
			switch (typeof b) {
				case rc:
					if (b === null) return b;
				case Ub:
					return s.get(b) || wv(s, u, b);
			}
			return b;
		}
	},
	aE = (e) => Wb(Gb(e));
class Kb {
	constructor() {
		ds(this, 'filesMap', new Map());
		ds(this, 'pathsSet', new Set());
		ds(this, 'idMap', new Map());
	}
	getPaths() {
		return Array.from(this.pathsSet);
	}
	getFiles(t) {
		return t
			? t
					.map((r) => this.filesMap.get(r))
					.flat()
					.filter((r) => r && !r.local)
			: Array.from(this.filesMap.values())
					.flat()
					.filter((r) => !r.local);
	}
	getFilepaths() {
		return Array.from(this.filesMap.keys());
	}
	getFailedFilepaths() {
		return this.getFiles()
			.filter((t) => {
				var r;
				return ((r = t.result) == null ? void 0 : r.state) === 'fail';
			})
			.map((t) => t.filepath);
	}
	collectPaths(t = []) {
		t.forEach((r) => {
			this.pathsSet.add(r);
		});
	}
	collectFiles(t = []) {
		t.forEach((r) => {
			const o = this.filesMap.get(r.filepath) || [],
				s = o.filter(
					(f) =>
						f.projectName !== r.projectName ||
						f.meta.typecheck !== r.meta.typecheck,
				),
				u = o.find((f) => f.projectName === r.projectName);
			u && (r.logs = u.logs),
				s.push(r),
				this.filesMap.set(r.filepath, s),
				this.updateId(r);
		});
	}
	clearFiles(t, r = []) {
		const o = t;
		r.forEach((s) => {
			const u = this.filesMap.get(s),
				f = Fb(s, o.config.root, o.config.name || '');
			if (((f.local = !0), this.idMap.set(f.id, f), !u)) {
				this.filesMap.set(s, [f]);
				return;
			}
			const d = u.filter((h) => h.projectName !== o.config.name);
			d.length ? this.filesMap.set(s, [...d, f]) : this.filesMap.set(s, [f]);
		});
	}
	updateId(t) {
		this.idMap.get(t.id) !== t &&
			(this.idMap.set(t.id, t),
			t.type === 'suite' &&
				t.tasks.forEach((r) => {
					this.updateId(r);
				}));
	}
	updateTasks(t) {
		for (const [r, o, s] of t) {
			const u = this.idMap.get(r);
			u &&
				((u.result = o),
				(u.meta = s),
				(o == null ? void 0 : o.state) === 'skip' && (u.mode = 'skip'));
		}
	}
	updateUserLog(t) {
		const r = t.taskId && this.idMap.get(t.taskId);
		r && (r.logs || (r.logs = []), r.logs.push(t));
	}
}
function Wh(e) {
	return qb(e).some((t) => {
		var r, o;
		return (o = (r = t.result) == null ? void 0 : r.errors) == null
			? void 0
			: o.some(
					(s) =>
						typeof (s == null ? void 0 : s.message) == 'string' &&
						s.message.match(/Snapshot .* mismatched/),
				);
	});
}
function uE(e, t = {}) {
	const {
		handlers: r = {},
		autoReconnect: o = !0,
		reconnectInterval: s = 2e3,
		reconnectTries: u = 10,
		connectTimeout: f = 6e4,
		reactive: d = (A) => A,
		WebSocketConstructor: h = globalThis.WebSocket,
	} = t;
	let p = u;
	const m = d(
		{ ws: new h(e), state: new Kb(), waitForConnection: N, reconnect: M },
		'state',
	);
	(m.state.filesMap = d(m.state.filesMap, 'filesMap')),
		(m.state.idMap = d(m.state.idMap, 'idMap'));
	let v;
	const b = {
			onSpecsCollected(A) {
				var $;
				A == null ||
					A.forEach(([L, O]) => {
						m.state.clearFiles({ config: L }, [O]);
					}),
					($ = r.onSpecsCollected) == null || $.call(r, A);
			},
			onPathsCollected(A) {
				var $;
				m.state.collectPaths(A),
					($ = r.onPathsCollected) == null || $.call(r, A);
			},
			onCollected(A) {
				var $;
				m.state.collectFiles(A), ($ = r.onCollected) == null || $.call(r, A);
			},
			onTaskUpdate(A) {
				var $;
				m.state.updateTasks(A), ($ = r.onTaskUpdate) == null || $.call(r, A);
			},
			onUserConsoleLog(A) {
				var $;
				m.state.updateUserLog(A),
					($ = r.onUserConsoleLog) == null || $.call(r, A);
			},
			onFinished(A, $) {
				var L;
				(L = r.onFinished) == null || L.call(r, A, $);
			},
			onFinishedReportCoverage() {
				var A;
				(A = r.onFinishedReportCoverage) == null || A.call(r);
			},
		},
		w = {
			post: (A) => m.ws.send(A),
			on: (A) => (v = A),
			serialize: (A) =>
				Gb(A, ($, L) =>
					L instanceof Error
						? { name: L.name, message: L.message, stack: L.stack }
						: L,
				),
			deserialize: Bd,
			onTimeoutError(A) {
				throw new Error(`[vitest-ws-client]: Timeout calling "${A}"`);
			},
		};
	m.rpc = tE(b, w);
	let C;
	function M(A = !1) {
		A && (p = u), (m.ws = new h(e)), E();
	}
	function E() {
		(C = new Promise((A, $) => {
			var O, U;
			const L =
				(U =
					(O = setTimeout(() => {
						$(new Error(`Cannot connect to the server in ${f / 1e3} seconds`));
					}, f)) == null
						? void 0
						: O.unref) == null
					? void 0
					: U.call(O);
			m.ws.OPEN === m.ws.readyState && A(),
				m.ws.addEventListener('open', () => {
					(p = u), A(), clearTimeout(L);
				});
		})),
			m.ws.addEventListener('message', (A) => {
				v(A.data);
			}),
			m.ws.addEventListener('close', () => {
				(p -= 1), o && p > 0 && setTimeout(M, s);
			});
	}
	E();
	function N() {
		return C;
	}
	return m;
}
function Ic(e) {
	return Gy() ? (y_(e), !0) : !1;
}
const ld = new WeakMap(),
	cE = (...e) => {
		var t;
		const r = e[0],
			o = (t = qs()) == null ? void 0 : t.proxy;
		if (o == null && !$0())
			throw new Error('injectLocal must be called in setup');
		return o && ld.has(o) && r in ld.get(o) ? ld.get(o)[r] : Br(...e);
	},
	fE = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const dE = Object.prototype.toString,
	hE = (e) => dE.call(e) === '[object Object]',
	oa = () => {};
function Xb(e, t) {
	function r(...o) {
		return new Promise((s, u) => {
			Promise.resolve(
				e(() => t.apply(this, o), { fn: t, thisArg: this, args: o }),
			)
				.then(s)
				.catch(u);
		});
	}
	return r;
}
const Yb = (e) => e();
function Zb(e, t = {}) {
	let r,
		o,
		s = oa;
	const u = (d) => {
		clearTimeout(d), s(), (s = oa);
	};
	return (d) => {
		const h = nn(e),
			p = nn(t.maxWait);
		return (
			r && u(r),
			h <= 0 || (p !== void 0 && p <= 0)
				? (o && (u(o), (o = null)), Promise.resolve(d()))
				: new Promise((m, v) => {
						(s = t.rejectOnCancel ? v : m),
							p &&
								!o &&
								(o = setTimeout(() => {
									r && u(r), (o = null), m(d());
								}, p)),
							(r = setTimeout(() => {
								o && u(o), (o = null), m(d());
							}, h));
					})
		);
	};
}
function pE(e = Yb) {
	const t = qe(!0);
	function r() {
		t.value = !1;
	}
	function o() {
		t.value = !0;
	}
	const s = (...u) => {
		t.value && e(...u);
	};
	return { isActive: ga(t), pause: r, resume: o, eventFilter: s };
}
function xv(e, t = !1, r = 'Timeout') {
	return new Promise((o, s) => {
		setTimeout(t ? () => s(r) : o, e);
	});
}
function Sv(e) {
	return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function gE(e) {
	return qs();
}
function _v(e) {
	return Array.isArray(e) ? e : [e];
}
function mE(...e) {
	if (e.length !== 1) return ma(...e);
	const t = e[0];
	return typeof t == 'function' ? ga(c0(() => ({ get: t, set: oa }))) : qe(t);
}
function pu(e, t = 200, r = {}) {
	return Xb(Zb(t, r), e);
}
function Jb(e, t, r = {}) {
	const { eventFilter: o = Yb, ...s } = r;
	return Et(e, Xb(o, t), s);
}
function Qb(e, t, r = {}) {
	const { eventFilter: o, ...s } = r,
		{ eventFilter: u, pause: f, resume: d, isActive: h } = pE(o);
	return {
		stop: Jb(e, t, { ...s, eventFilter: u }),
		pause: f,
		resume: d,
		isActive: h,
	};
}
function Uh(e, t = !0, r) {
	gE() ? Hs(e, r) : t ? e() : Ot(e);
}
function Wd(e, t = !1) {
	function r(
		v,
		{ flush: b = 'sync', deep: w = !1, timeout: C, throwOnTimeout: M } = {},
	) {
		let E = null;
		const A = [
			new Promise(($) => {
				E = Et(
					e,
					(L) => {
						v(L) !== t &&
							(E ? E() : Ot(() => (E == null ? void 0 : E())), $(L));
					},
					{ flush: b, deep: w, immediate: !0 },
				);
			}),
		];
		return (
			C != null &&
				A.push(
					xv(C, M)
						.then(() => nn(e))
						.finally(() => (E == null ? void 0 : E())),
				),
			Promise.race(A)
		);
	}
	function o(v, b) {
		if (!kt(v)) return r((L) => L === v, b);
		const {
			flush: w = 'sync',
			deep: C = !1,
			timeout: M,
			throwOnTimeout: E,
		} = b ?? {};
		let N = null;
		const $ = [
			new Promise((L) => {
				N = Et(
					[e, v],
					([O, U]) => {
						t !== (O === U) &&
							(N ? N() : Ot(() => (N == null ? void 0 : N())), L(O));
					},
					{ flush: w, deep: C, immediate: !0 },
				);
			}),
		];
		return (
			M != null &&
				$.push(
					xv(M, E)
						.then(() => nn(e))
						.finally(() => (N == null || N(), nn(e))),
				),
			Promise.race($)
		);
	}
	function s(v) {
		return r((b) => !!b, v);
	}
	function u(v) {
		return o(null, v);
	}
	function f(v) {
		return o(void 0, v);
	}
	function d(v) {
		return r(Number.isNaN, v);
	}
	function h(v, b) {
		return r((w) => {
			const C = Array.from(w);
			return C.includes(v) || C.includes(nn(v));
		}, b);
	}
	function p(v) {
		return m(1, v);
	}
	function m(v = 1, b) {
		let w = -1;
		return r(() => ((w += 1), w >= v), b);
	}
	return Array.isArray(nn(e))
		? {
				toMatch: r,
				toContains: h,
				changed: p,
				changedTimes: m,
				get not() {
					return Wd(e, !t);
				},
			}
		: {
				toMatch: r,
				toBe: o,
				toBeTruthy: s,
				toBeNull: u,
				toBeNaN: d,
				toBeUndefined: f,
				changed: p,
				changedTimes: m,
				get not() {
					return Wd(e, !t);
				},
			};
}
function kv(e) {
	return Wd(e);
}
function vE(e = !1, t = {}) {
	const { truthyValue: r = !0, falsyValue: o = !1 } = t,
		s = kt(e),
		u = qe(e);
	function f(d) {
		if (arguments.length) return (u.value = d), u.value;
		{
			const h = nn(r);
			return (u.value = u.value === h ? nn(o) : h), u.value;
		}
	}
	return s ? f : [u, f];
}
function Vh(e, t, r = {}) {
	const { debounce: o = 0, maxWait: s = void 0, ...u } = r;
	return Jb(e, t, { ...u, eventFilter: Zb(o, { maxWait: s }) });
}
function yE(e, t, r) {
	const o = Et(e, (...s) => (Ot(() => o()), t(...s)), r);
	return o;
}
function bE(e, t, r) {
	let o;
	kt(r) ? (o = { evaluating: r }) : (o = {});
	const {
			lazy: s = !1,
			evaluating: u = void 0,
			shallow: f = !0,
			onError: d = oa,
		} = o,
		h = qe(!s),
		p = f ? Gr(t) : qe(t);
	let m = 0;
	return (
		Ph(async (v) => {
			if (!h.value) return;
			m++;
			const b = m;
			let w = !1;
			u &&
				Promise.resolve().then(() => {
					u.value = !0;
				});
			try {
				const C = await e((M) => {
					v(() => {
						u && (u.value = !1), w || M();
					});
				});
				b === m && (p.value = C);
			} catch (C) {
				d(C);
			} finally {
				u && b === m && (u.value = !1), (w = !0);
			}
		}),
		s ? ke(() => ((h.value = !0), p.value)) : p
	);
}
const Er = fE ? window : void 0;
function ic(e) {
	var t;
	const r = nn(e);
	return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function Oo(...e) {
	let t, r, o, s;
	if (
		(typeof e[0] == 'string' || Array.isArray(e[0])
			? (([r, o, s] = e), (t = Er))
			: ([t, r, o, s] = e),
		!t)
	)
		return oa;
	(r = _v(r)), (o = _v(o));
	const u = [],
		f = () => {
			u.forEach((m) => m()), (u.length = 0);
		},
		d = (m, v, b, w) => (
			m.addEventListener(v, b, w), () => m.removeEventListener(v, b, w)
		),
		h = Et(
			() => [ic(t), nn(s)],
			([m, v]) => {
				if ((f(), !m)) return;
				const b = hE(v) ? { ...v } : v;
				u.push(...r.flatMap((w) => o.map((C) => d(m, w, C, b))));
			},
			{ immediate: !0, flush: 'post' },
		),
		p = () => {
			h(), f();
		};
	return Ic(p), p;
}
function wE() {
	const e = qe(!1),
		t = qs();
	return (
		t &&
			Hs(() => {
				e.value = !0;
			}, t),
		e
	);
}
function ew(e) {
	const t = wE();
	return ke(() => (t.value, !!e()));
}
function xE(e) {
	return typeof e == 'function'
		? e
		: typeof e == 'string'
			? (t) => t.key === e
			: Array.isArray(e)
				? (t) => e.includes(t.key)
				: () => !0;
}
function tw(...e) {
	let t,
		r,
		o = {};
	e.length === 3
		? ((t = e[0]), (r = e[1]), (o = e[2]))
		: e.length === 2
			? typeof e[1] == 'object'
				? ((t = !0), (r = e[0]), (o = e[1]))
				: ((t = e[0]), (r = e[1]))
			: ((t = !0), (r = e[0]));
	const {
			target: s = Er,
			eventName: u = 'keydown',
			passive: f = !1,
			dedupe: d = !1,
		} = o,
		h = xE(t);
	return Oo(
		s,
		u,
		(m) => {
			(m.repeat && nn(d)) || (h(m) && r(m));
		},
		f,
	);
}
function SE(e, t = {}) {
	const { immediate: r = !0, fpsLimit: o = void 0, window: s = Er } = t,
		u = qe(!1),
		f = ke(() => (o ? 1e3 / nn(o) : null));
	let d = 0,
		h = null;
	function p(b) {
		if (!u.value || !s) return;
		d || (d = b);
		const w = b - d;
		if (f.value && w < f.value) {
			h = s.requestAnimationFrame(p);
			return;
		}
		(d = b), e({ delta: w, timestamp: b }), (h = s.requestAnimationFrame(p));
	}
	function m() {
		!u.value &&
			s &&
			((u.value = !0), (d = 0), (h = s.requestAnimationFrame(p)));
	}
	function v() {
		(u.value = !1), h != null && s && (s.cancelAnimationFrame(h), (h = null));
	}
	return r && m(), Ic(v), { isActive: ga(u), pause: v, resume: m };
}
const _E = Symbol('vueuse-ssr-width');
function kE() {
	const e = $0() ? cE(_E, null) : null;
	return typeof e == 'number' ? e : void 0;
}
function nw(e, t = {}) {
	const { window: r = Er, ssrWidth: o = kE() } = t,
		s = ew(() => r && 'matchMedia' in r && typeof r.matchMedia == 'function'),
		u = qe(typeof o == 'number');
	let f;
	const d = qe(!1),
		h = (v) => {
			d.value = v.matches;
		},
		p = () => {
			f &&
				('removeEventListener' in f
					? f.removeEventListener('change', h)
					: f.removeListener(h));
		},
		m = Ph(() => {
			if (u.value) {
				u.value = !s.value;
				const v = nn(e).split(',');
				d.value = v.some((b) => {
					const w = b.includes('not all'),
						C = b.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
						M = b.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
					let E = !!(C || M);
					return (
						C && E && (E = o >= Sv(C[1])),
						M && E && (E = o <= Sv(M[1])),
						w ? !E : E
					);
				});
				return;
			}
			s.value &&
				(p(),
				(f = r.matchMedia(nn(e))),
				'addEventListener' in f
					? f.addEventListener('change', h)
					: f.addListener(h),
				(d.value = f.matches));
		});
	return (
		Ic(() => {
			m(), p(), (f = void 0);
		}),
		ke(() => d.value)
	);
}
const gu =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	mu = '__vueuse_ssr_handlers__',
	TE = CE();
function CE() {
	return mu in gu || (gu[mu] = gu[mu] || {}), gu[mu];
}
function rw(e, t) {
	return TE[e] || t;
}
function EE(e) {
	return nw('(prefers-color-scheme: dark)', e);
}
function LE(e) {
	return e == null
		? 'any'
		: e instanceof Set
			? 'set'
			: e instanceof Map
				? 'map'
				: e instanceof Date
					? 'date'
					: typeof e == 'boolean'
						? 'boolean'
						: typeof e == 'string'
							? 'string'
							: typeof e == 'object'
								? 'object'
								: Number.isNaN(e)
									? 'any'
									: 'number';
}
const AE = {
		boolean: { read: (e) => e === 'true', write: (e) => String(e) },
		object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
		number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
		any: { read: (e) => e, write: (e) => String(e) },
		string: { read: (e) => e, write: (e) => String(e) },
		map: {
			read: (e) => new Map(JSON.parse(e)),
			write: (e) => JSON.stringify(Array.from(e.entries())),
		},
		set: {
			read: (e) => new Set(JSON.parse(e)),
			write: (e) => JSON.stringify(Array.from(e)),
		},
		date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
	},
	Tv = 'vueuse-storage';
function iw(e, t, r, o = {}) {
	var s;
	const {
			flush: u = 'pre',
			deep: f = !0,
			listenToStorageChanges: d = !0,
			writeDefaults: h = !0,
			mergeDefaults: p = !1,
			shallow: m,
			window: v = Er,
			eventFilter: b,
			onError: w = (ee) => {
				console.error(ee);
			},
			initOnMounted: C,
		} = o,
		M = (m ? Gr : qe)(typeof t == 'function' ? t() : t),
		E = ke(() => nn(e));
	if (!r)
		try {
			r = rw('getDefaultStorage', () => {
				var ee;
				return (ee = Er) == null ? void 0 : ee.localStorage;
			})();
		} catch (ee) {
			w(ee);
		}
	if (!r) return M;
	const N = nn(t),
		A = LE(N),
		$ = (s = o.serializer) != null ? s : AE[A],
		{ pause: L, resume: O } = Qb(M, () => B(M.value), {
			flush: u,
			deep: f,
			eventFilter: b,
		});
	Et(E, () => J(), { flush: u }),
		v &&
			d &&
			Uh(() => {
				r instanceof Storage
					? Oo(v, 'storage', J, { passive: !0 })
					: Oo(v, Tv, K),
					C && J();
			}),
		C || J();
	function U(ee, Y) {
		if (v) {
			const I = { key: E.value, oldValue: ee, newValue: Y, storageArea: r };
			v.dispatchEvent(
				r instanceof Storage
					? new StorageEvent('storage', I)
					: new CustomEvent(Tv, { detail: I }),
			);
		}
	}
	function B(ee) {
		try {
			const Y = r.getItem(E.value);
			if (ee == null) U(Y, null), r.removeItem(E.value);
			else {
				const I = $.write(ee);
				Y !== I && (r.setItem(E.value, I), U(Y, I));
			}
		} catch (Y) {
			w(Y);
		}
	}
	function te(ee) {
		const Y = ee ? ee.newValue : r.getItem(E.value);
		if (Y == null) return h && N != null && r.setItem(E.value, $.write(N)), N;
		if (!ee && p) {
			const I = $.read(Y);
			return typeof p == 'function'
				? p(I, N)
				: A === 'object' && !Array.isArray(I)
					? { ...N, ...I }
					: I;
		} else return typeof Y != 'string' ? Y : $.read(Y);
	}
	function J(ee) {
		if (!(ee && ee.storageArea !== r)) {
			if (ee && ee.key == null) {
				M.value = N;
				return;
			}
			if (!(ee && ee.key !== E.value)) {
				L();
				try {
					(ee == null ? void 0 : ee.newValue) !== $.write(M.value) &&
						(M.value = te(ee));
				} catch (Y) {
					w(Y);
				} finally {
					ee ? Ot(O) : O();
				}
			}
		}
	}
	function K(ee) {
		J(ee.detail);
	}
	return M;
}
const ME =
	'*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function NE(e = {}) {
	const {
			selector: t = 'html',
			attribute: r = 'class',
			initialValue: o = 'auto',
			window: s = Er,
			storage: u,
			storageKey: f = 'vueuse-color-scheme',
			listenToStorageChanges: d = !0,
			storageRef: h,
			emitAuto: p,
			disableTransition: m = !0,
		} = e,
		v = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
		b = EE({ window: s }),
		w = ke(() => (b.value ? 'dark' : 'light')),
		C =
			h ||
			(f == null
				? mE(o)
				: iw(f, o, u, { window: s, listenToStorageChanges: d })),
		M = ke(() => (C.value === 'auto' ? w.value : C.value)),
		E = rw('updateHTMLAttrs', (L, O, U) => {
			const B =
				typeof L == 'string'
					? s == null
						? void 0
						: s.document.querySelector(L)
					: ic(L);
			if (!B) return;
			const te = new Set(),
				J = new Set();
			let K = null;
			if (O === 'class') {
				const Y = U.split(/\s/g);
				Object.values(v)
					.flatMap((I) => (I || '').split(/\s/g))
					.filter(Boolean)
					.forEach((I) => {
						Y.includes(I) ? te.add(I) : J.add(I);
					});
			} else K = { key: O, value: U };
			if (te.size === 0 && J.size === 0 && K === null) return;
			let ee;
			m &&
				((ee = s.document.createElement('style')),
				ee.appendChild(document.createTextNode(ME)),
				s.document.head.appendChild(ee));
			for (const Y of te) B.classList.add(Y);
			for (const Y of J) B.classList.remove(Y);
			K && B.setAttribute(K.key, K.value),
				m && (s.getComputedStyle(ee).opacity, document.head.removeChild(ee));
		});
	function N(L) {
		var O;
		E(t, r, (O = v[L]) != null ? O : L);
	}
	function A(L) {
		e.onChanged ? e.onChanged(L, N) : N(L);
	}
	Et(M, A, { flush: 'post', immediate: !0 }), Uh(() => A(M.value));
	const $ = ke({
		get() {
			return p ? C.value : M.value;
		},
		set(L) {
			C.value = L;
		},
	});
	return Object.assign($, { store: C, system: w, state: M });
}
function $E(e = {}) {
	const { valueDark: t = 'dark', valueLight: r = '' } = e,
		o = NE({
			...e,
			onChanged: (f, d) => {
				var h;
				e.onChanged
					? (h = e.onChanged) == null || h.call(e, f === 'dark', d, f)
					: d(f);
			},
			modes: { dark: t, light: r },
		}),
		s = ke(() => o.system.value);
	return ke({
		get() {
			return o.value === 'dark';
		},
		set(f) {
			const d = f ? 'dark' : 'light';
			s.value === d ? (o.value = 'auto') : (o.value = d);
		},
	});
}
function PE(e, t, r = {}) {
	const { window: o = Er, ...s } = r;
	let u;
	const f = ew(() => o && 'ResizeObserver' in o),
		d = () => {
			u && (u.disconnect(), (u = void 0));
		},
		h = ke(() => {
			const v = nn(e);
			return Array.isArray(v) ? v.map((b) => ic(b)) : [ic(v)];
		}),
		p = Et(
			h,
			(v) => {
				if ((d(), f.value && o)) {
					u = new ResizeObserver(t);
					for (const b of v) b && u.observe(b, s);
				}
			},
			{ immediate: !0, flush: 'post' },
		),
		m = () => {
			d(), p();
		};
	return Ic(m), { isSupported: f, stop: m };
}
function Fc(e, t, r = {}) {
	const { window: o = Er } = r;
	return iw(e, t, o == null ? void 0 : o.localStorage, r);
}
function OE(e = 'history', t = {}) {
	const {
		initialValue: r = {},
		removeNullishValues: o = !0,
		removeFalsyValues: s = !1,
		write: u = !0,
		writeMode: f = 'replace',
		window: d = Er,
	} = t;
	if (!d) return Qn(r);
	const h = Qn({});
	function p() {
		if (e === 'history') return d.location.search || '';
		if (e === 'hash') {
			const $ = d.location.hash || '',
				L = $.indexOf('?');
			return L > 0 ? $.slice(L) : '';
		} else return (d.location.hash || '').replace(/^#/, '');
	}
	function m($) {
		const L = $.toString();
		if (e === 'history') return `${L ? `?${L}` : ''}${d.location.hash || ''}`;
		if (e === 'hash-params')
			return `${d.location.search || ''}${L ? `#${L}` : ''}`;
		const O = d.location.hash || '#',
			U = O.indexOf('?');
		return U > 0
			? `${d.location.search || ''}${O.slice(0, U)}${L ? `?${L}` : ''}`
			: `${d.location.search || ''}${O}${L ? `?${L}` : ''}`;
	}
	function v() {
		return new URLSearchParams(p());
	}
	function b($) {
		const L = new Set(Object.keys(h));
		for (const O of $.keys()) {
			const U = $.getAll(O);
			(h[O] = U.length > 1 ? U : $.get(O) || ''), L.delete(O);
		}
		Array.from(L).forEach((O) => delete h[O]);
	}
	const { pause: w, resume: C } = Qb(
		h,
		() => {
			const $ = new URLSearchParams('');
			Object.keys(h).forEach((L) => {
				const O = h[L];
				Array.isArray(O)
					? O.forEach((U) => $.append(L, U))
					: (o && O == null) || (s && !O)
						? $.delete(L)
						: $.set(L, O);
			}),
				M($, !1);
		},
		{ deep: !0 },
	);
	function M($, L) {
		w(),
			L && b($),
			f === 'replace'
				? d.history.replaceState(
						d.history.state,
						d.document.title,
						d.location.pathname + m($),
					)
				: d.history.pushState(
						d.history.state,
						d.document.title,
						d.location.pathname + m($),
					),
			C();
	}
	function E() {
		u && M(v(), !0);
	}
	const N = { passive: !0 };
	Oo(d, 'popstate', E, N), e !== 'history' && Oo(d, 'hashchange', E, N);
	const A = v();
	return A.keys().next().value ? b(A) : Object.assign(h, r), h;
}
function jh(e = {}) {
	const {
			window: t = Er,
			initialWidth: r = Number.POSITIVE_INFINITY,
			initialHeight: o = Number.POSITIVE_INFINITY,
			listenOrientation: s = !0,
			includeScrollbar: u = !0,
			type: f = 'inner',
		} = e,
		d = qe(r),
		h = qe(o),
		p = () => {
			if (t)
				if (f === 'outer') (d.value = t.outerWidth), (h.value = t.outerHeight);
				else if (f === 'visual' && t.visualViewport) {
					const { width: v, height: b, scale: w } = t.visualViewport;
					(d.value = Math.round(v * w)), (h.value = Math.round(b * w));
				} else
					u
						? ((d.value = t.innerWidth), (h.value = t.innerHeight))
						: ((d.value = t.document.documentElement.clientWidth),
							(h.value = t.document.documentElement.clientHeight));
		};
	p(), Uh(p);
	const m = { passive: !0 };
	if (
		(Oo('resize', p, m),
		t &&
			f === 'visual' &&
			t.visualViewport &&
			Oo(t.visualViewport, 'resize', p, m),
		s)
	) {
		const v = nw('(orientation: portrait)');
		Et(v, () => p());
	}
	return { width: d, height: h };
}
const Ud = Gr([]),
	Vn = Gr([]),
	Lr = Fc('vitest-ui_task-tree-opened', [], { shallow: !0 }),
	oc = ke(() => new Set(Lr.value)),
	un = Fc('vitest-ui_task-tree-filter', {
		expandAll: void 0,
		failed: !1,
		success: !1,
		skipped: !1,
		onlyTests: !1,
		search: '',
	}),
	Hn = qe(un.value.search),
	RE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function ow(e) {
	return e.replace(/[&<>"']/g, (t) => RE[t]);
}
const DE = ke(() => {
		const e = Hn.value.toLowerCase();
		return e.length ? new RegExp(`(${ow(e)})`, 'gi') : null;
	}),
	sw = ke(() => Hn.value.trim() !== ''),
	Ze = Qn({
		failed: un.value.failed,
		success: un.value.success,
		skipped: un.value.skipped,
		onlyTests: un.value.onlyTests,
	}),
	Vd = ke(() => !!(Ze.failed || Ze.success || Ze.skipped)),
	Hc = Gr([]),
	Os = qe(!1),
	Cv = ke(() => {
		const e = un.value.expandAll;
		return Lr.value.length > 0 ? e !== !0 : e !== !1;
	}),
	zE = ke(() => {
		const e = sw.value,
			t = Vd.value,
			r = Ze.onlyTests,
			o = Ce.summary.filesFailed,
			s = Ce.summary.filesSuccess,
			u = Ce.summary.filesSkipped,
			f = Ce.summary.filesRunning,
			d = Hc.value;
		return Ce.collectTestsTotal(e || t, r, d, {
			failed: o,
			success: s,
			skipped: u,
			running: f,
		});
	});
function Sa(e) {
	return Object.hasOwnProperty.call(e, 'tasks');
}
function IE(e, t) {
	return typeof e != 'string' || typeof t != 'string'
		? !1
		: e.toLowerCase().includes(t.toLowerCase());
}
function lw(e) {
	if (!e) return '';
	const t = e.split('').reduce((o, s, u) => o + s.charCodeAt(0) + u, 0),
		r = ['blue', 'yellow', 'cyan', 'green', 'magenta'];
	return r[t % r.length];
}
function FE(e) {
	return e.type === 'test';
}
function HE(e) {
	return e.mode === 'run' && e.type === 'test';
}
function Mn(e) {
	return e.type === 'file';
}
function mi(e) {
	return e.type === 'file' || e.type === 'suite';
}
function qE(e = Ce.root.tasks) {
	return e.sort((t, r) =>
		`${t.filepath}:${t.projectName}`.localeCompare(
			`${r.filepath}:${r.projectName}`,
		),
	);
}
function sa(e, t = !1) {
	var o, s, u, f, d;
	let r = Ce.nodes.get(e.id);
	if (
		(r
			? ((r.typecheck = !!e.meta && 'typecheck' in e.meta),
				(r.state = (o = e.result) == null ? void 0 : o.state),
				(r.mode = e.mode),
				(r.duration = (s = e.result) == null ? void 0 : s.duration),
				(r.collectDuration = e.collectDuration),
				(r.setupDuration = e.setupDuration),
				(r.environmentLoad = e.environmentLoad),
				(r.prepareDuration = e.prepareDuration))
			: ((r = {
					id: e.id,
					parentId: 'root',
					name: e.name,
					mode: e.mode,
					expandable: !0,
					expanded: oc.value.size > 0 && oc.value.has(e.id),
					type: 'file',
					children: new Set(),
					tasks: [],
					typecheck: !!e.meta && 'typecheck' in e.meta,
					indent: 0,
					duration:
						((u = e.result) == null ? void 0 : u.duration) != null
							? Math.round((f = e.result) == null ? void 0 : f.duration)
							: void 0,
					filepath: e.filepath,
					projectName: e.projectName || '',
					projectNameColor: lw(e.projectName),
					collectDuration: e.collectDuration,
					setupDuration: e.setupDuration,
					environmentLoad: e.environmentLoad,
					prepareDuration: e.prepareDuration,
					state: (d = e.result) == null ? void 0 : d.state,
				}),
				Ce.nodes.set(e.id, r),
				Ce.root.tasks.push(r)),
		t)
	)
		for (let h = 0; h < e.tasks.length; h++) _a(e.id, e.tasks[h], !0);
}
function aw(e, t) {
	const r = Ce.nodes.get(e);
	if (!r || !mi(r)) return;
	const o = vt.state.idMap.get(e);
	if (!(!o || !Sa(o)))
		return _a(r.parentId, o, t && o.tasks.length > 0), [r, o];
}
function BE(e) {
	const t = Ce.nodes.get(e);
	if (!t) return;
	const r = vt.state.idMap.get(e);
	!r || !Hb(r) || _a(t.parentId, r, !1);
}
function _a(e, t, r) {
	var f, d, h, p, m;
	const o = Ce.nodes.get(e);
	let s;
	const u =
		((f = t.result) == null ? void 0 : f.duration) != null
			? Math.round((d = t.result) == null ? void 0 : d.duration)
			: void 0;
	if (
		o &&
		((s = Ce.nodes.get(t.id)),
		s
			? (o.children.has(t.id) || (o.tasks.push(s), o.children.add(t.id)),
				(s.mode = t.mode),
				(s.duration = u),
				(s.state = (h = t.result) == null ? void 0 : h.state))
			: (Hb(t)
					? (s = {
							id: t.id,
							fileId: t.file.id,
							parentId: e,
							name: t.name,
							mode: t.mode,
							type: t.type,
							expandable: !1,
							expanded: !1,
							indent: o.indent + 1,
							duration: u,
							state: (p = t.result) == null ? void 0 : p.state,
						})
					: (s = {
							id: t.id,
							fileId: t.file.id,
							parentId: e,
							name: t.name,
							mode: t.mode,
							type: 'suite',
							expandable: !0,
							expanded: oc.value.size > 0 && oc.value.has(t.id),
							children: new Set(),
							tasks: [],
							indent: o.indent + 1,
							duration: u,
							state: (m = t.result) == null ? void 0 : m.state,
						}),
				Ce.nodes.set(t.id, s),
				o.tasks.push(s),
				o.children.add(t.id)),
		s && r && Sa(t))
	)
		for (let v = 0; v < t.tasks.length; v++) _a(s.id, t.tasks[v], r);
}
function WE(e) {
	const t = Ce.nodes.get(e);
	if (!t || !mi(t)) return;
	const r = new Set(Lr.value);
	r.delete(t.id);
	const o = [...VE(t)];
	(Lr.value = Array.from(r)), (Vn.value = o);
}
function UE() {
	jd(Ce.root.tasks);
	const e = [...Vn.value.filter(Mn)];
	jd(e), (Lr.value = []), (un.value.expandAll = !0), (Vn.value = e);
}
function jd(e) {
	for (const t of e) mi(t) && ((t.expanded = !1), jd(t.tasks));
}
function* uw(e, t) {
	if ((t && (yield e.id), mi(e)))
		for (let r = 0; r < e.tasks.length; r++) yield* uw(e.tasks[r], !0);
}
function* VE(e) {
	const t = e.id,
		r = new Set(uw(e, !1));
	for (let o = 0; o < Vn.value.length; o++) {
		const s = Vn.value[o];
		if (s.id === t) {
			(s.expanded = !1), yield s;
			continue;
		}
		if (r.has(s.id)) {
			r.delete(s.id);
			continue;
		}
		yield s;
	}
}
const qc = qe('idle'),
	Ll = ke(() => qc.value === 'idle'),
	Wi = qe([]);
function jE(e, t, r) {
	return e ? dw(e, t, r) : !1;
}
function Gh(e, t) {
	const r = [...cw(e, t)];
	(Vn.value = r), (Hc.value = r.filter(Mn).map((o) => lr(o.id)));
}
function* cw(e, t) {
	for (const r of qE()) yield* fw(r, e, t);
}
function* fw(e, t, r) {
	const o = new Set(),
		s = new Map(),
		u = [];
	let f;
	if (r.onlyTests)
		for (const [v, b] of Gd(e, o, (w) => Ev(w, t, r))) u.push([v, b]);
	else {
		for (const [v, b] of Gd(e, o, (w) => Ev(w, t, r)))
			mi(b)
				? (s.set(b.id, v),
					Mn(b)
						? (v && (f = b.id), u.push([v, b]))
						: u.push([v || s.get(b.parentId) === !0, b]))
				: u.push([v || s.get(b.parentId) === !0, b]);
		!f && !Mn(e) && 'fileId' in e && (f = e.fileId);
	}
	const d = new Set(),
		h = [...KE(u, r.onlyTests, o, d, f)].reverse(),
		p = Ce.nodes,
		m = new Set(
			h
				.filter((v) => {
					var b;
					return (
						Mn(v) ||
						(mi(v) && ((b = p.get(v.parentId)) == null ? void 0 : b.expanded))
					);
				})
				.map((v) => v.id),
		);
	yield* h.filter((v) => {
		var b;
		return (
			Mn(v) ||
			(m.has(v.parentId) &&
				((b = p.get(v.parentId)) == null ? void 0 : b.expanded))
		);
	});
}
function GE(e, t, r, o, s) {
	if (o) {
		if (Mn(t)) return s.has(t.id) ? t : void 0;
		if (r.has(t.id)) {
			const u = Ce.nodes.get(t.parentId);
			return u && Mn(u) && s.add(u.id), t;
		}
	} else if (e || r.has(t.id) || s.has(t.id)) {
		const u = Ce.nodes.get(t.parentId);
		return u && Mn(u) && s.add(u.id), t;
	}
}
function* KE(e, t, r, o, s) {
	for (let u = e.length - 1; u >= 0; u--) {
		const [f, d] = e[u],
			h = mi(d);
		if (!t && s && r.has(s) && 'fileId' in d && d.fileId === s) {
			h && r.add(d.id);
			let p = Ce.nodes.get(d.parentId);
			for (; p; )
				r.add(p.id), Mn(p) && o.add(p.id), (p = Ce.nodes.get(p.parentId));
			yield d;
			continue;
		}
		if (h) {
			const p = GE(f, d, r, t, o);
			p && (yield p);
		} else if (f) {
			const p = Ce.nodes.get(d.parentId);
			p && Mn(p) && o.add(p.id), yield d;
		}
	}
}
function XE(e, t) {
	var r, o;
	return (t.success || t.failed) &&
		'result' in e &&
		((t.success && ((r = e.result) == null ? void 0 : r.state) === 'pass') ||
			(t.failed && ((o = e.result) == null ? void 0 : o.state) === 'fail'))
		? !0
		: t.skipped && 'mode' in e
			? e.mode === 'skip' || e.mode === 'todo'
			: !1;
}
function dw(e, t, r) {
	if (t.length === 0 || IE(e.name, t))
		if (r.success || r.failed || r.skipped) {
			if (XE(e, r)) return !0;
		} else return !0;
	return !1;
}
function* Gd(e, t, r) {
	const o = r(e);
	if (o)
		if (FE(e)) {
			let s = Ce.nodes.get(e.parentId);
			for (; s; ) t.add(s.id), (s = Ce.nodes.get(s.parentId));
		} else if (Mn(e)) t.add(e.id);
		else {
			t.add(e.id);
			let s = Ce.nodes.get(e.parentId);
			for (; s; ) t.add(s.id), (s = Ce.nodes.get(s.parentId));
		}
	if ((yield [o, e], mi(e)))
		for (let s = 0; s < e.tasks.length; s++) yield* Gd(e.tasks[s], t, r);
}
function Ev(e, t, r) {
	const o = vt.state.idMap.get(e.id);
	return o ? dw(o, t, r) : !1;
}
function YE(e, t, r) {
	const o = aw(e, !1);
	if (!o) return;
	const [s, u] = o;
	for (const p of u.tasks) _a(s.id, p, !1);
	s.expanded = !0;
	const f = new Set(Lr.value);
	f.add(s.id);
	const d = new Set(fw(s, t, r)),
		h = [...QE(s, d)];
	(Lr.value = Array.from(f)), (Vn.value = h);
}
function ZE(e, t) {
	Kh(Ce.root.tasks, !1);
	const r = [...cw(e, t)];
	(un.value.expandAll = !1),
		(Lr.value = []),
		(Vn.value = r),
		(Hc.value = r.filter(Mn).map((o) => lr(o.id)));
}
function JE(e, t) {
	if (e.size) for (const r of Vn.value) e.has(r.id) && (r.expanded = !0);
	else t && Kh(Vn.value.filter(Mn), !0);
}
function Kh(e, t) {
	for (const r of e) mi(r) && ((r.expanded = !0), Kh(r.tasks, !1));
	t && ((un.value.expandAll = !1), (Lr.value = []));
}
function* QE(e, t) {
	const r = e.id,
		o = new Set(Array.from(t).map((s) => s.id));
	for (const s of Vn.value)
		s.id === r
			? ((s.expanded = !0), o.has(s.id) || (yield e), yield* t)
			: o.has(s.id) || (yield s);
}
function eL(e, t, r, o) {
	e
		.map((s) => [`${s.filepath}:${s.projectName || ''}`, s])
		.sort(([s], [u]) => s.localeCompare(u))
		.map(([, s]) => sa(s, t)),
		(Ud.value = [...Ce.root.tasks]),
		Gh(r.trim(), {
			failed: o.failed,
			success: o.success,
			skipped: o.skipped,
			onlyTests: o.onlyTests,
		});
}
function tL(e) {
	queueMicrotask(() => {
		const t = Ce.pendingTasks,
			r = vt.state.idMap;
		for (const o of e)
			if (o[1]) {
				const u = r.get(o[0]);
				if (u) {
					let f = t.get(u.file.id);
					f || ((f = new Set()), t.set(u.file.id, f)), f.add(u.id);
				}
			}
	});
}
function Lv(e, t, r, o, s) {
	e && lL(r);
	const u = !e;
	queueMicrotask(() => {
		t ? iL(u) : oL(u);
	}),
		queueMicrotask(() => {
			aL(r);
		}),
		queueMicrotask(() => {
			t &&
				((r.failedSnapshot = Ud.value && Wh(Ud.value.map((f) => lr(f.id)))),
				(r.failedSnapshotEnabled = !0));
		}),
		queueMicrotask(() => {
			sL(o, s, t);
		});
}
function* nL() {
	yield* Vn.value.filter(HE);
}
function rL() {
	const e = vt.state.idMap;
	let t;
	for (const r of nL())
		(t = e.get(r.parentId)),
			t &&
				Sa(t) &&
				t.mode === 'todo' &&
				((t = e.get(r.id)), t && (t.mode = 'todo'));
}
function iL(e) {
	const t = vt.state.getFiles(),
		r = Ce.nodes,
		o = t.filter((u) => !r.has(u.id));
	for (let u = 0; u < o.length; u++) sa(o[u], e), sc(o[u].tasks);
	const s = Ce.root.tasks;
	for (let u = 0; u < s.length; u++) {
		const f = s[u],
			d = lr(f.id);
		if (!d) continue;
		sa(d, e);
		const h = d.tasks;
		h != null && h.length && sc(d.tasks);
	}
}
function oL(e) {
	const t = new Map(Ce.pendingTasks.entries());
	Ce.pendingTasks.clear();
	const r = Ce.nodes,
		o = Array.from(t.keys())
			.filter((d) => !r.has(d))
			.map((d) => lr(d))
			.filter(Boolean);
	let s;
	for (let d = 0; d < o.length; d++)
		(s = o[d]), sa(s, !1), sc(s.tasks), t.delete(s.id);
	const u = vt.state.idMap,
		f = Ce.root.tasks;
	for (let d = 0; d < f.length; d++) {
		const h = f[d],
			p = lr(h.id);
		if (!p) continue;
		const m = t.get(p.id);
		m &&
			(sa(p, e),
			sc(
				Array.from(m)
					.map((v) => u.get(v))
					.filter(Boolean),
			));
	}
}
function sL(e, t, r = !1) {
	const o = un.value.expandAll,
		s = o !== !0,
		u = new Set(Lr.value),
		f = (u.size > 0 && o === !1) || s;
	queueMicrotask(() => {
		Av(e, t, r);
	}),
		Os.value ||
			queueMicrotask(() => {
				(Vn.value.length || r) && (Os.value = !0);
			}),
		f &&
			(queueMicrotask(() => {
				JE(u, r), s && (un.value.expandAll = !1);
			}),
			queueMicrotask(() => {
				Av(e, t, r);
			}));
}
function Av(e, t, r) {
	Gh(e, t), r && (rL(), (qc.value = 'idle'));
}
function sc(e) {
	let t;
	for (let r = 0; r < e.length; r++)
		(t = e[r]), Sa(t) ? aw(t.id, !0) : BE(t.id);
}
function lL(e) {
	(e.files = 0),
		(e.time = ''),
		(e.filesFailed = 0),
		(e.filesSuccess = 0),
		(e.filesIgnore = 0),
		(e.filesRunning = 0),
		(e.filesSkipped = 0),
		(e.filesTodo = 0),
		(e.testsFailed = 0),
		(e.testsSuccess = 0),
		(e.testsIgnore = 0),
		(e.testsSkipped = 0),
		(e.testsTodo = 0),
		(e.totalTests = 0),
		(e.failedSnapshotEnabled = !1);
}
function aL(e) {
	var f, d, h, p, m, v;
	const t = vt.state.idMap,
		r = new Map(Ce.root.tasks.filter((b) => t.has(b.id)).map((b) => [b.id, b])),
		o = Array.from(r.values()).map((b) => [b.id, lr(b.id)]),
		s = {
			files: r.size,
			time: '',
			filesFailed: 0,
			filesSuccess: 0,
			filesIgnore: 0,
			filesRunning: 0,
			filesSkipped: 0,
			filesTodo: 0,
			filesSnapshotFailed: 0,
			testsFailed: 0,
			testsSuccess: 0,
			testsIgnore: 0,
			testsSkipped: 0,
			testsTodo: 0,
			totalTests: 0,
			failedSnapshot: !1,
			failedSnapshotEnabled: !1,
		};
	let u = 0;
	for (const [b, w] of o) {
		if (!w) continue;
		const C = r.get(b);
		C &&
			((C.mode = w.mode),
			(C.setupDuration = w.setupDuration),
			(C.prepareDuration = w.prepareDuration),
			(C.environmentLoad = w.environmentLoad),
			(C.collectDuration = w.collectDuration),
			(C.duration =
				((f = w.result) == null ? void 0 : f.duration) != null
					? Math.round((d = w.result) == null ? void 0 : d.duration)
					: void 0),
			(C.state = (h = w.result) == null ? void 0 : h.state)),
			(u += Math.max(0, w.collectDuration || 0)),
			(u += Math.max(0, w.setupDuration || 0)),
			(u += Math.max(0, ((p = w.result) == null ? void 0 : p.duration) || 0)),
			(u += Math.max(0, w.environmentLoad || 0)),
			(u += Math.max(0, w.prepareDuration || 0)),
			(s.time = u > 1e3 ? `${(u / 1e3).toFixed(2)}s` : `${Math.round(u)}ms`),
			((m = w.result) == null ? void 0 : m.state) === 'fail'
				? s.filesFailed++
				: ((v = w.result) == null ? void 0 : v.state) === 'pass'
					? s.filesSuccess++
					: w.mode === 'skip'
						? (s.filesIgnore++, s.filesSkipped++)
						: w.mode === 'todo'
							? (s.filesIgnore++, s.filesTodo++)
							: s.filesRunning++;
		const {
			failed: M,
			success: E,
			skipped: N,
			total: A,
			ignored: $,
			todo: L,
		} = hw(w);
		(s.totalTests += A),
			(s.testsFailed += M),
			(s.testsSuccess += E),
			(s.testsSkipped += N),
			(s.testsTodo += L),
			(s.testsIgnore += $);
	}
	(e.files = s.files),
		(e.time = s.time),
		(e.filesFailed = s.filesFailed),
		(e.filesSuccess = s.filesSuccess),
		(e.filesIgnore = s.filesIgnore),
		(e.filesRunning = s.filesRunning),
		(e.filesSkipped = s.filesSkipped),
		(e.filesTodo = s.filesTodo),
		(e.testsFailed = s.testsFailed),
		(e.testsSuccess = s.testsSuccess),
		(e.testsFailed = s.testsFailed),
		(e.testsTodo = s.testsTodo),
		(e.testsIgnore = s.testsIgnore),
		(e.testsSkipped = s.testsSkipped),
		(e.totalTests = s.totalTests);
}
function hw(e, t = '', r) {
	var s, u;
	const o = {
		failed: 0,
		success: 0,
		skipped: 0,
		running: 0,
		total: 0,
		ignored: 0,
		todo: 0,
	};
	for (const f of pw(e))
		(!r || jE(f, t, r)) &&
			(o.total++,
			((s = f.result) == null ? void 0 : s.state) === 'fail'
				? o.failed++
				: ((u = f.result) == null ? void 0 : u.state) === 'pass'
					? o.success++
					: f.mode === 'skip'
						? (o.ignored++, o.skipped++)
						: f.mode === 'todo' && (o.ignored++, o.todo++));
	return (o.running = o.total - o.failed - o.success - o.ignored), o;
}
function uL(e, t, r, o, s, u) {
	var f, d;
	if (t)
		return r
			.map((h) => hw(h, s, u))
			.reduce(
				(h, { failed: p, success: m, ignored: v, running: b }) => (
					(h.failed += p),
					(h.success += m),
					(h.skipped += v),
					(h.running += b),
					h
				),
				{ failed: 0, success: 0, skipped: 0, running: 0 },
			);
	if (e) {
		const h = { failed: 0, success: 0, skipped: 0, running: 0 },
			p = !u.success && !u.failed,
			m = u.failed || p,
			v = u.success || p;
		for (const b of r)
			((f = b.result) == null ? void 0 : f.state) === 'fail'
				? (h.failed += m ? 1 : 0)
				: ((d = b.result) == null ? void 0 : d.state) === 'pass'
					? (h.success += v ? 1 : 0)
					: b.mode === 'skip' || b.mode === 'todo' || h.running++;
		return h;
	}
	return o;
}
function* pw(e) {
	const t = qh(e);
	let r;
	for (let o = 0; o < t.length; o++)
		(r = t[o]), ra(r) ? yield r : yield* pw(r.tasks);
}
class cL {
	constructor(
		t = [],
		r = !1,
		o = 500,
		s = { id: 'vitest-root-node', expandable: !0, expanded: !0, tasks: [] },
		u = new Map(),
		f = new Map(),
		d = Qn({
			files: 0,
			time: '',
			filesFailed: 0,
			filesSuccess: 0,
			filesIgnore: 0,
			filesRunning: 0,
			filesSkipped: 0,
			filesSnapshotFailed: 0,
			filesTodo: 0,
			testsFailed: 0,
			testsSuccess: 0,
			testsIgnore: 0,
			testsSkipped: 0,
			testsTodo: 0,
			totalTests: 0,
			failedSnapshot: !1,
			failedSnapshotEnabled: !1,
		}),
	) {
		ds(this, 'rafCollector');
		ds(this, 'resumeEndRunId');
		(this.projects = t),
			(this.onTaskUpdateCalled = r),
			(this.resumeEndTimeout = o),
			(this.root = s),
			(this.pendingTasks = u),
			(this.nodes = f),
			(this.summary = d),
			(this.rafCollector = SE(this.runCollect.bind(this), {
				fpsLimit: 10,
				immediate: !1,
			}));
	}
	loadFiles(t, r) {
		this.projects.splice(0, this.projects.length, ...r),
			eL(t, !0, Hn.value.trim(), {
				failed: Ze.failed,
				success: Ze.success,
				skipped: Ze.skipped,
				onlyTests: Ze.onlyTests,
			});
	}
	startRun() {
		(this.resumeEndRunId = setTimeout(
			() => this.endRun(),
			this.resumeEndTimeout,
		)),
			this.collect(!0, !1);
	}
	resumeRun(t) {
		tL(t),
			this.onTaskUpdateCalled ||
				(clearTimeout(this.resumeEndRunId),
				(this.onTaskUpdateCalled = !0),
				this.collect(!0, !1, !1),
				this.rafCollector.resume());
	}
	endRun() {
		this.rafCollector.pause(),
			(this.onTaskUpdateCalled = !1),
			this.collect(!1, !0);
	}
	runCollect() {
		this.collect(!1, !1);
	}
	collect(t, r, o = !0) {
		o
			? queueMicrotask(() => {
					Lv(t, r, this.summary, Hn.value.trim(), {
						failed: Ze.failed,
						success: Ze.success,
						skipped: Ze.skipped,
						onlyTests: Ze.onlyTests,
					});
				})
			: Lv(t, r, this.summary, Hn.value.trim(), {
					failed: Ze.failed,
					success: Ze.success,
					skipped: Ze.skipped,
					onlyTests: Ze.onlyTests,
				});
	}
	collectTestsTotal(t, r, o, s) {
		return uL(t, r, o, s, Hn.value.trim(), {
			failed: Ze.failed,
			success: Ze.success,
			skipped: Ze.skipped,
			onlyTests: Ze.onlyTests,
		});
	}
	collapseNode(t) {
		queueMicrotask(() => {
			WE(t);
		});
	}
	expandNode(t) {
		queueMicrotask(() => {
			YE(t, Hn.value.trim(), {
				failed: Ze.failed,
				success: Ze.success,
				skipped: Ze.skipped,
				onlyTests: Ze.onlyTests,
			});
		});
	}
	collapseAllNodes() {
		queueMicrotask(() => {
			UE();
		});
	}
	expandAllNodes() {
		queueMicrotask(() => {
			ZE(Hn.value.trim(), {
				failed: Ze.failed,
				success: Ze.success,
				skipped: Ze.skipped,
				onlyTests: Ze.onlyTests,
			});
		});
	}
	filterNodes() {
		queueMicrotask(() => {
			Gh(Hn.value.trim(), {
				failed: Ze.failed,
				success: Ze.success,
				skipped: Ze.skipped,
				onlyTests: Ze.onlyTests,
			});
		});
	}
}
const Ce = new cL(),
	Ir = qe([414, 896]),
	Bc = OE('hash', {
		initialValue: { file: '', view: null, line: null, test: null },
	}),
	eo = ma(Bc, 'file'),
	Kn = ma(Bc, 'view'),
	gw = ma(Bc, 'line'),
	mw = ma(Bc, 'test'),
	Rs = qe(),
	Es = qe(!0),
	to = qe(!1),
	lc = qe(!0),
	ms = ke(() => {
		var e;
		return (e = Vc.value) == null ? void 0 : e.coverage;
	}),
	Kd = ke(() => {
		var e;
		return (e = ms.value) == null ? void 0 : e.enabled;
	}),
	vs = ke(() => Kd.value && !!ms.value.htmlReporter),
	yr = Fc('vitest-ui_splitpanes-mainSizes', [33, 67], { initOnMounted: !0 }),
	Mo = Fc('vitest-ui_splitpanes-detailSizes', [33, 67], { initOnMounted: !0 }),
	mn = Qn({
		navigation: yr.value[0],
		details: { size: yr.value[1], browser: Mo.value[0], main: Mo.value[1] },
	}),
	Mv = ke(() => {
		var e;
		if (vs.value) {
			const t = ms.value.reportsDirectory.lastIndexOf('/'),
				r = (e = ms.value.htmlReporter) == null ? void 0 : e.subdir;
			return r
				? `/${ms.value.reportsDirectory.slice(t + 1)}/${r}/index.html`
				: `/${ms.value.reportsDirectory.slice(t + 1)}/index.html`;
		}
	});
Et(
	qc,
	(e) => {
		lc.value = e === 'running';
	},
	{ immediate: !0 },
);
function fL() {
	const e = eo.value;
	if (e && e.length > 0) {
		const t = lr(e);
		t
			? ((Rs.value = t), (Es.value = !1), (to.value = !1))
			: yE(
					() => vt.state.getFiles(),
					() => {
						(Rs.value = lr(e)), (Es.value = !1), (to.value = !1);
					},
				);
	}
	return Es;
}
function ac(e) {
	(Es.value = e), (to.value = !1), e && ((Rs.value = void 0), (eo.value = ''));
}
function vw({ file: e, line: t, view: r, test: o }) {
	(eo.value = e),
		(gw.value = t),
		(Kn.value = r),
		(mw.value = o),
		(Rs.value = lr(e)),
		ac(!1);
}
function dL(e) {
	vw({
		file: e.file.id,
		test: e.type === 'test' ? e.id : null,
		line: null,
		view: null,
	});
}
function hL() {
	(to.value = !0), (Es.value = !1), (Rs.value = void 0), (eo.value = '');
}
function pL() {
	(mn.details.browser = 100), (mn.details.main = 0), (Mo.value = [100, 0]);
}
function gL() {
	(mn.details.browser = 33), (mn.details.main = 67), (Mo.value = [33, 67]);
}
function mL() {
	(mn.navigation = 33), (mn.details.size = 67), (yr.value = [33, 67]);
}
const vL = {
		setCurrentFileId(e) {
			(eo.value = e), (Rs.value = lr(e)), ac(!1);
		},
		async setIframeViewport(e, t) {
			(Ir.value = [e, t]), await new Promise((r) => requestAnimationFrame(r));
		},
	},
	yL = location.port,
	bL = [location.hostname, yL].filter(Boolean).join(':'),
	wL = `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${bL}/__vitest_api__`,
	kr = !!window.METADATA_PATH,
	xL = 44,
	Nv = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	SL = new Uint8Array(64),
	yw = new Uint8Array(128);
for (let e = 0; e < Nv.length; e++) {
	const t = Nv.charCodeAt(e);
	(SL[e] = t), (yw[t] = e);
}
function _l(e, t) {
	let r = 0,
		o = 0,
		s = 0;
	do {
		const f = e.next();
		(s = yw[f]), (r |= (s & 31) << o), (o += 5);
	} while (s & 32);
	const u = r & 1;
	return (r >>>= 1), u && (r = -2147483648 | -r), t + r;
}
function $v(e, t) {
	return e.pos >= t ? !1 : e.peek() !== xL;
}
class _L {
	constructor(t) {
		(this.pos = 0), (this.buffer = t);
	}
	next() {
		return this.buffer.charCodeAt(this.pos++);
	}
	peek() {
		return this.buffer.charCodeAt(this.pos);
	}
	indexOf(t) {
		const { buffer: r, pos: o } = this,
			s = r.indexOf(t, o);
		return s === -1 ? r.length : s;
	}
}
function kL(e) {
	const { length: t } = e,
		r = new _L(e),
		o = [];
	let s = 0,
		u = 0,
		f = 0,
		d = 0,
		h = 0;
	do {
		const p = r.indexOf(';'),
			m = [];
		let v = !0,
			b = 0;
		for (s = 0; r.pos < p; ) {
			let w;
			(s = _l(r, s)),
				s < b && (v = !1),
				(b = s),
				$v(r, p)
					? ((u = _l(r, u)),
						(f = _l(r, f)),
						(d = _l(r, d)),
						$v(r, p)
							? ((h = _l(r, h)), (w = [s, u, f, d, h]))
							: (w = [s, u, f, d]))
					: (w = [s]),
				m.push(w),
				r.pos++;
		}
		v || TL(m), o.push(m), (r.pos = p + 1);
	} while (r.pos <= t);
	return o;
}
function TL(e) {
	e.sort(CL);
}
function CL(e, t) {
	return e[0] - t[0];
}
const EL = /^[\w+.-]+:\/\//,
	LL =
		/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
	AL = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Bt;
(function (e) {
	(e[(e.Empty = 1)] = 'Empty'),
		(e[(e.Hash = 2)] = 'Hash'),
		(e[(e.Query = 3)] = 'Query'),
		(e[(e.RelativePath = 4)] = 'RelativePath'),
		(e[(e.AbsolutePath = 5)] = 'AbsolutePath'),
		(e[(e.SchemeRelative = 6)] = 'SchemeRelative'),
		(e[(e.Absolute = 7)] = 'Absolute');
})(Bt || (Bt = {}));
function ML(e) {
	return EL.test(e);
}
function NL(e) {
	return e.startsWith('//');
}
function bw(e) {
	return e.startsWith('/');
}
function $L(e) {
	return e.startsWith('file:');
}
function Pv(e) {
	return /^[.?#]/.test(e);
}
function vu(e) {
	const t = LL.exec(e);
	return ww(
		t[1],
		t[2] || '',
		t[3],
		t[4] || '',
		t[5] || '/',
		t[6] || '',
		t[7] || '',
	);
}
function PL(e) {
	const t = AL.exec(e),
		r = t[2];
	return ww(
		'file:',
		'',
		t[1] || '',
		'',
		bw(r) ? r : '/' + r,
		t[3] || '',
		t[4] || '',
	);
}
function ww(e, t, r, o, s, u, f) {
	return {
		scheme: e,
		user: t,
		host: r,
		port: o,
		path: s,
		query: u,
		hash: f,
		type: Bt.Absolute,
	};
}
function Ov(e) {
	if (NL(e)) {
		const r = vu('http:' + e);
		return (r.scheme = ''), (r.type = Bt.SchemeRelative), r;
	}
	if (bw(e)) {
		const r = vu('http://foo.com' + e);
		return (r.scheme = ''), (r.host = ''), (r.type = Bt.AbsolutePath), r;
	}
	if ($L(e)) return PL(e);
	if (ML(e)) return vu(e);
	const t = vu('http://foo.com/' + e);
	return (
		(t.scheme = ''),
		(t.host = ''),
		(t.type = e
			? e.startsWith('?')
				? Bt.Query
				: e.startsWith('#')
					? Bt.Hash
					: Bt.RelativePath
			: Bt.Empty),
		t
	);
}
function OL(e) {
	if (e.endsWith('/..')) return e;
	const t = e.lastIndexOf('/');
	return e.slice(0, t + 1);
}
function RL(e, t) {
	xw(t, t.type),
		e.path === '/' ? (e.path = t.path) : (e.path = OL(t.path) + e.path);
}
function xw(e, t) {
	const r = t <= Bt.RelativePath,
		o = e.path.split('/');
	let s = 1,
		u = 0,
		f = !1;
	for (let h = 1; h < o.length; h++) {
		const p = o[h];
		if (!p) {
			f = !0;
			continue;
		}
		if (((f = !1), p !== '.')) {
			if (p === '..') {
				u ? ((f = !0), u--, s--) : r && (o[s++] = p);
				continue;
			}
			(o[s++] = p), u++;
		}
	}
	let d = '';
	for (let h = 1; h < s; h++) d += '/' + o[h];
	(!d || (f && !d.endsWith('/..'))) && (d += '/'), (e.path = d);
}
function DL(e, t) {
	if (!e && !t) return '';
	const r = Ov(e);
	let o = r.type;
	if (t && o !== Bt.Absolute) {
		const u = Ov(t),
			f = u.type;
		switch (o) {
			case Bt.Empty:
				r.hash = u.hash;
			case Bt.Hash:
				r.query = u.query;
			case Bt.Query:
			case Bt.RelativePath:
				RL(r, u);
			case Bt.AbsolutePath:
				(r.user = u.user), (r.host = u.host), (r.port = u.port);
			case Bt.SchemeRelative:
				r.scheme = u.scheme;
		}
		f > o && (o = f);
	}
	xw(r, o);
	const s = r.query + r.hash;
	switch (o) {
		case Bt.Hash:
		case Bt.Query:
			return s;
		case Bt.RelativePath: {
			const u = r.path.slice(1);
			return u ? (Pv(t || e) && !Pv(u) ? './' + u + s : u + s) : s || '.';
		}
		case Bt.AbsolutePath:
			return r.path + s;
		default:
			return r.scheme + '//' + r.user + r.host + r.port + r.path + s;
	}
}
function Rv(e, t) {
	return t && !t.endsWith('/') && (t += '/'), DL(e, t);
}
function zL(e) {
	if (!e) return '';
	const t = e.lastIndexOf('/');
	return e.slice(0, t + 1);
}
const no = 0,
	IL = 1,
	FL = 2,
	HL = 3,
	qL = 4;
function BL(e, t) {
	const r = Dv(e, 0);
	if (r === e.length) return e;
	t || (e = e.slice());
	for (let o = r; o < e.length; o = Dv(e, o + 1)) e[o] = UL(e[o], t);
	return e;
}
function Dv(e, t) {
	for (let r = t; r < e.length; r++) if (!WL(e[r])) return r;
	return e.length;
}
function WL(e) {
	for (let t = 1; t < e.length; t++) if (e[t][no] < e[t - 1][no]) return !1;
	return !0;
}
function UL(e, t) {
	return t || (e = e.slice()), e.sort(VL);
}
function VL(e, t) {
	return e[no] - t[no];
}
let uc = !1;
function jL(e, t, r, o) {
	for (; r <= o; ) {
		const s = r + ((o - r) >> 1),
			u = e[s][no] - t;
		if (u === 0) return (uc = !0), s;
		u < 0 ? (r = s + 1) : (o = s - 1);
	}
	return (uc = !1), r - 1;
}
function GL(e, t, r) {
	for (let o = r + 1; o < e.length && e[o][no] === t; r = o++);
	return r;
}
function KL(e, t, r) {
	for (let o = r - 1; o >= 0 && e[o][no] === t; r = o--);
	return r;
}
function XL() {
	return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
}
function YL(e, t, r, o) {
	const { lastKey: s, lastNeedle: u, lastIndex: f } = r;
	let d = 0,
		h = e.length - 1;
	if (o === s) {
		if (t === u) return (uc = f !== -1 && e[f][no] === t), f;
		t >= u ? (d = f === -1 ? 0 : f) : (h = f);
	}
	return (r.lastKey = o), (r.lastNeedle = t), (r.lastIndex = jL(e, t, d, h));
}
const ZL = '`line` must be greater than 0 (lines start at line 1)',
	JL =
		'`column` must be greater than or equal to 0 (columns start at column 0)',
	zv = -1,
	QL = 1;
class eA {
	constructor(t, r) {
		const o = typeof t == 'string';
		if (!o && t._decodedMemo) return t;
		const s = o ? JSON.parse(t) : t,
			{
				version: u,
				file: f,
				names: d,
				sourceRoot: h,
				sources: p,
				sourcesContent: m,
			} = s;
		(this.version = u),
			(this.file = f),
			(this.names = d || []),
			(this.sourceRoot = h),
			(this.sources = p),
			(this.sourcesContent = m),
			(this.ignoreList = s.ignoreList || s.x_google_ignoreList || void 0);
		const v = Rv(h || '', zL(r));
		this.resolvedSources = p.map((w) => Rv(w || '', v));
		const { mappings: b } = s;
		typeof b == 'string'
			? ((this._encoded = b), (this._decoded = void 0))
			: ((this._encoded = void 0), (this._decoded = BL(b, o))),
			(this._decodedMemo = XL()),
			(this._bySources = void 0),
			(this._bySourceMemos = void 0);
	}
}
function tA(e) {
	var t;
	return (t = e)._decoded || (t._decoded = kL(e._encoded));
}
function nA(e, t) {
	let { line: r, column: o, bias: s } = t;
	if ((r--, r < 0)) throw new Error(ZL);
	if (o < 0) throw new Error(JL);
	const u = tA(e);
	if (r >= u.length) return yu(null, null, null, null);
	const f = u[r],
		d = rA(f, e._decodedMemo, r, o, s || QL);
	if (d === -1) return yu(null, null, null, null);
	const h = f[d];
	if (h.length === 1) return yu(null, null, null, null);
	const { names: p, resolvedSources: m } = e;
	return yu(m[h[IL]], h[FL] + 1, h[HL], h.length === 5 ? p[h[qL]] : null);
}
function yu(e, t, r, o) {
	return { source: e, line: t, column: r, name: o };
}
function rA(e, t, r, o, s) {
	let u = YL(e, o, t, r);
	return (
		uc ? (u = (s === zv ? GL : KL)(e, o, u)) : s === zv && u++,
		u === -1 || u === e.length ? -1 : u
	);
}
const iA = /^[A-Za-z]:\//;
function oA(e = '') {
	return e && e.replace(/\\/g, '/').replace(iA, (t) => t.toUpperCase());
}
const sA = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function lA() {
	return typeof process < 'u' && typeof process.cwd == 'function'
		? process.cwd().replace(/\\/g, '/')
		: '/';
}
const aA = function (...e) {
	e = e.map((o) => oA(o));
	let t = '',
		r = !1;
	for (let o = e.length - 1; o >= -1 && !r; o--) {
		const s = o >= 0 ? e[o] : lA();
		!s || s.length === 0 || ((t = `${s}/${t}`), (r = Iv(s)));
	}
	return (t = uA(t, !r)), r && !Iv(t) ? `/${t}` : t.length > 0 ? t : '.';
};
function uA(e, t) {
	let r = '',
		o = 0,
		s = -1,
		u = 0,
		f = null;
	for (let d = 0; d <= e.length; ++d) {
		if (d < e.length) f = e[d];
		else {
			if (f === '/') break;
			f = '/';
		}
		if (f === '/') {
			if (!(s === d - 1 || u === 1))
				if (u === 2) {
					if (
						r.length < 2 ||
						o !== 2 ||
						r[r.length - 1] !== '.' ||
						r[r.length - 2] !== '.'
					) {
						if (r.length > 2) {
							const h = r.lastIndexOf('/');
							h === -1
								? ((r = ''), (o = 0))
								: ((r = r.slice(0, h)),
									(o = r.length - 1 - r.lastIndexOf('/'))),
								(s = d),
								(u = 0);
							continue;
						} else if (r.length > 0) {
							(r = ''), (o = 0), (s = d), (u = 0);
							continue;
						}
					}
					t && ((r += r.length > 0 ? '/..' : '..'), (o = 2));
				} else
					r.length > 0
						? (r += `/${e.slice(s + 1, d)}`)
						: (r = e.slice(s + 1, d)),
						(o = d - s - 1);
			(s = d), (u = 0);
		} else f === '.' && u !== -1 ? ++u : (u = -1);
	}
	return r;
}
const Iv = function (e) {
		return sA.test(e);
	},
	Sw = /^\s*at .*(?:\S:\d+|\(native\))/m,
	cA = /^(?:eval@)?(?:\[native code\])?$/,
	fA = [
		'node:internal',
		/\/packages\/\w+\/dist\//,
		/\/@vitest\/\w+\/dist\//,
		'/vitest/dist/',
		'/vitest/src/',
		'/vite-node/dist/',
		'/vite-node/src/',
		'/node_modules/chai/',
		'/node_modules/tinypool/',
		'/node_modules/tinyspy/',
		'/deps/chunk-',
		'/deps/@vitest',
		'/deps/loupe',
		'/deps/chai',
		/node:\w+/,
		/__vitest_test__/,
		/__vitest_browser__/,
		/\/deps\/vitest_/,
	];
function _w(e) {
	if (!e.includes(':')) return [e];
	const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ''));
	if (!r) return [e];
	let o = r[1];
	if (
		(o.startsWith('async ') && (o = o.slice(6)),
		(o.startsWith('http:') || o.startsWith('https:')) &&
			(o = new URL(o).pathname),
		o.startsWith('/@fs/'))
	) {
		const s = /^\/@fs\/[a-zA-Z]:\//.test(o);
		o = o.slice(s ? 5 : 4);
	}
	return [o, r[2] || void 0, r[3] || void 0];
}
function dA(e) {
	let t = e.trim();
	if (
		cA.test(t) ||
		(t.includes(' > eval') &&
			(t = t.replace(
				/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
				':$1',
			)),
		!t.includes('@') && !t.includes(':'))
	)
		return null;
	const r = /((.*".+"[^@]*)?[^@]*)(@)/,
		o = t.match(r),
		s = o && o[1] ? o[1] : void 0,
		[u, f, d] = _w(t.replace(r, ''));
	return !u || !f || !d
		? null
		: {
				file: u,
				method: s || '',
				line: Number.parseInt(f),
				column: Number.parseInt(d),
			};
}
function hA(e) {
	let t = e.trim();
	if (!Sw.test(t)) return null;
	t.includes('(eval ') &&
		(t = t
			.replace(/eval code/g, 'eval')
			.replace(/(\(eval at [^()]*)|(,.*$)/g, ''));
	let r = t
		.replace(/^\s+/, '')
		.replace(/\(eval code/g, '(')
		.replace(/^.*?\s+/, '');
	const o = r.match(/ (\(.+\)$)/);
	r = o ? r.replace(o[0], '') : r;
	const [s, u, f] = _w(o ? o[1] : r);
	let d = (o && r) || '',
		h = s && ['eval', '<anonymous>'].includes(s) ? void 0 : s;
	return !h || !u || !f
		? null
		: (d.startsWith('async ') && (d = d.slice(6)),
			h.startsWith('file://') && (h = h.slice(7)),
			(h = aA(h)),
			d && (d = d.replace(/__vite_ssr_import_\d+__\./g, '')),
			{
				method: d,
				file: h,
				line: Number.parseInt(u),
				column: Number.parseInt(f),
			});
}
function pA(e, t = {}) {
	const { ignoreStackEntries: r = fA } = t;
	let o = Sw.test(e) ? mA(e) : gA(e);
	return (
		r.length && (o = o.filter((s) => !r.some((u) => s.file.match(u)))),
		o.map((s) => {
			var u;
			t.getFileName && (s.file = t.getFileName(s.file));
			const f = (u = t.getSourceMap) == null ? void 0 : u.call(t, s.file);
			if (!f || typeof f != 'object' || !f.version) return s;
			const d = new eA(f),
				{ line: h, column: p } = nA(d, s);
			return h != null && p != null ? { ...s, line: h, column: p } : s;
		})
	);
}
function gA(e) {
	return e
		.split(
			`
`,
		)
		.map((t) => dA(t))
		.filter(Ib);
}
function mA(e) {
	return e
		.split(
			`
`,
		)
		.map((t) => hA(t))
		.filter(Ib);
}
var Ro =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function kw(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Tw = {},
	pi = {};
const vA = 'Á',
	yA = 'á',
	bA = 'Ă',
	wA = 'ă',
	xA = '∾',
	SA = '∿',
	_A = '∾̳',
	kA = 'Â',
	TA = 'â',
	CA = '´',
	EA = 'А',
	LA = 'а',
	AA = 'Æ',
	MA = 'æ',
	NA = '⁡',
	$A = '𝔄',
	PA = '𝔞',
	OA = 'À',
	RA = 'à',
	DA = 'ℵ',
	zA = 'ℵ',
	IA = 'Α',
	FA = 'α',
	HA = 'Ā',
	qA = 'ā',
	BA = '⨿',
	WA = '&',
	UA = '&',
	VA = '⩕',
	jA = '⩓',
	GA = '∧',
	KA = '⩜',
	XA = '⩘',
	YA = '⩚',
	ZA = '∠',
	JA = '⦤',
	QA = '∠',
	eM = '⦨',
	tM = '⦩',
	nM = '⦪',
	rM = '⦫',
	iM = '⦬',
	oM = '⦭',
	sM = '⦮',
	lM = '⦯',
	aM = '∡',
	uM = '∟',
	cM = '⊾',
	fM = '⦝',
	dM = '∢',
	hM = 'Å',
	pM = '⍼',
	gM = 'Ą',
	mM = 'ą',
	vM = '𝔸',
	yM = '𝕒',
	bM = '⩯',
	wM = '≈',
	xM = '⩰',
	SM = '≊',
	_M = '≋',
	kM = "'",
	TM = '⁡',
	CM = '≈',
	EM = '≊',
	LM = 'Å',
	AM = 'å',
	MM = '𝒜',
	NM = '𝒶',
	$M = '≔',
	PM = '*',
	OM = '≈',
	RM = '≍',
	DM = 'Ã',
	zM = 'ã',
	IM = 'Ä',
	FM = 'ä',
	HM = '∳',
	qM = '⨑',
	BM = '≌',
	WM = '϶',
	UM = '‵',
	VM = '∽',
	jM = '⋍',
	GM = '∖',
	KM = '⫧',
	XM = '⊽',
	YM = '⌅',
	ZM = '⌆',
	JM = '⌅',
	QM = '⎵',
	eN = '⎶',
	tN = '≌',
	nN = 'Б',
	rN = 'б',
	iN = '„',
	oN = '∵',
	sN = '∵',
	lN = '∵',
	aN = '⦰',
	uN = '϶',
	cN = 'ℬ',
	fN = 'ℬ',
	dN = 'Β',
	hN = 'β',
	pN = 'ℶ',
	gN = '≬',
	mN = '𝔅',
	vN = '𝔟',
	yN = '⋂',
	bN = '◯',
	wN = '⋃',
	xN = '⨀',
	SN = '⨁',
	_N = '⨂',
	kN = '⨆',
	TN = '★',
	CN = '▽',
	EN = '△',
	LN = '⨄',
	AN = '⋁',
	MN = '⋀',
	NN = '⤍',
	$N = '⧫',
	PN = '▪',
	ON = '▴',
	RN = '▾',
	DN = '◂',
	zN = '▸',
	IN = '␣',
	FN = '▒',
	HN = '░',
	qN = '▓',
	BN = '█',
	WN = '=⃥',
	UN = '≡⃥',
	VN = '⫭',
	jN = '⌐',
	GN = '𝔹',
	KN = '𝕓',
	XN = '⊥',
	YN = '⊥',
	ZN = '⋈',
	JN = '⧉',
	QN = '┐',
	e$ = '╕',
	t$ = '╖',
	n$ = '╗',
	r$ = '┌',
	i$ = '╒',
	o$ = '╓',
	s$ = '╔',
	l$ = '─',
	a$ = '═',
	u$ = '┬',
	c$ = '╤',
	f$ = '╥',
	d$ = '╦',
	h$ = '┴',
	p$ = '╧',
	g$ = '╨',
	m$ = '╩',
	v$ = '⊟',
	y$ = '⊞',
	b$ = '⊠',
	w$ = '┘',
	x$ = '╛',
	S$ = '╜',
	_$ = '╝',
	k$ = '└',
	T$ = '╘',
	C$ = '╙',
	E$ = '╚',
	L$ = '│',
	A$ = '║',
	M$ = '┼',
	N$ = '╪',
	$$ = '╫',
	P$ = '╬',
	O$ = '┤',
	R$ = '╡',
	D$ = '╢',
	z$ = '╣',
	I$ = '├',
	F$ = '╞',
	H$ = '╟',
	q$ = '╠',
	B$ = '‵',
	W$ = '˘',
	U$ = '˘',
	V$ = '¦',
	j$ = '𝒷',
	G$ = 'ℬ',
	K$ = '⁏',
	X$ = '∽',
	Y$ = '⋍',
	Z$ = '⧅',
	J$ = '\\',
	Q$ = '⟈',
	eP = '•',
	tP = '•',
	nP = '≎',
	rP = '⪮',
	iP = '≏',
	oP = '≎',
	sP = '≏',
	lP = 'Ć',
	aP = 'ć',
	uP = '⩄',
	cP = '⩉',
	fP = '⩋',
	dP = '∩',
	hP = '⋒',
	pP = '⩇',
	gP = '⩀',
	mP = 'ⅅ',
	vP = '∩︀',
	yP = '⁁',
	bP = 'ˇ',
	wP = 'ℭ',
	xP = '⩍',
	SP = 'Č',
	_P = 'č',
	kP = 'Ç',
	TP = 'ç',
	CP = 'Ĉ',
	EP = 'ĉ',
	LP = '∰',
	AP = '⩌',
	MP = '⩐',
	NP = 'Ċ',
	$P = 'ċ',
	PP = '¸',
	OP = '¸',
	RP = '⦲',
	DP = '¢',
	zP = '·',
	IP = '·',
	FP = '𝔠',
	HP = 'ℭ',
	qP = 'Ч',
	BP = 'ч',
	WP = '✓',
	UP = '✓',
	VP = 'Χ',
	jP = 'χ',
	GP = 'ˆ',
	KP = '≗',
	XP = '↺',
	YP = '↻',
	ZP = '⊛',
	JP = '⊚',
	QP = '⊝',
	eO = '⊙',
	tO = '®',
	nO = 'Ⓢ',
	rO = '⊖',
	iO = '⊕',
	oO = '⊗',
	sO = '○',
	lO = '⧃',
	aO = '≗',
	uO = '⨐',
	cO = '⫯',
	fO = '⧂',
	dO = '∲',
	hO = '”',
	pO = '’',
	gO = '♣',
	mO = '♣',
	vO = ':',
	yO = '∷',
	bO = '⩴',
	wO = '≔',
	xO = '≔',
	SO = ',',
	_O = '@',
	kO = '∁',
	TO = '∘',
	CO = '∁',
	EO = 'ℂ',
	LO = '≅',
	AO = '⩭',
	MO = '≡',
	NO = '∮',
	$O = '∯',
	PO = '∮',
	OO = '𝕔',
	RO = 'ℂ',
	DO = '∐',
	zO = '∐',
	IO = '©',
	FO = '©',
	HO = '℗',
	qO = '∳',
	BO = '↵',
	WO = '✗',
	UO = '⨯',
	VO = '𝒞',
	jO = '𝒸',
	GO = '⫏',
	KO = '⫑',
	XO = '⫐',
	YO = '⫒',
	ZO = '⋯',
	JO = '⤸',
	QO = '⤵',
	eR = '⋞',
	tR = '⋟',
	nR = '↶',
	rR = '⤽',
	iR = '⩈',
	oR = '⩆',
	sR = '≍',
	lR = '∪',
	aR = '⋓',
	uR = '⩊',
	cR = '⊍',
	fR = '⩅',
	dR = '∪︀',
	hR = '↷',
	pR = '⤼',
	gR = '⋞',
	mR = '⋟',
	vR = '⋎',
	yR = '⋏',
	bR = '¤',
	wR = '↶',
	xR = '↷',
	SR = '⋎',
	_R = '⋏',
	kR = '∲',
	TR = '∱',
	CR = '⌭',
	ER = '†',
	LR = '‡',
	AR = 'ℸ',
	MR = '↓',
	NR = '↡',
	$R = '⇓',
	PR = '‐',
	OR = '⫤',
	RR = '⊣',
	DR = '⤏',
	zR = '˝',
	IR = 'Ď',
	FR = 'ď',
	HR = 'Д',
	qR = 'д',
	BR = '‡',
	WR = '⇊',
	UR = 'ⅅ',
	VR = 'ⅆ',
	jR = '⤑',
	GR = '⩷',
	KR = '°',
	XR = '∇',
	YR = 'Δ',
	ZR = 'δ',
	JR = '⦱',
	QR = '⥿',
	eD = '𝔇',
	tD = '𝔡',
	nD = '⥥',
	rD = '⇃',
	iD = '⇂',
	oD = '´',
	sD = '˙',
	lD = '˝',
	aD = '`',
	uD = '˜',
	cD = '⋄',
	fD = '⋄',
	dD = '⋄',
	hD = '♦',
	pD = '♦',
	gD = '¨',
	mD = 'ⅆ',
	vD = 'ϝ',
	yD = '⋲',
	bD = '÷',
	wD = '÷',
	xD = '⋇',
	SD = '⋇',
	_D = 'Ђ',
	kD = 'ђ',
	TD = '⌞',
	CD = '⌍',
	ED = '$',
	LD = '𝔻',
	AD = '𝕕',
	MD = '¨',
	ND = '˙',
	$D = '⃜',
	PD = '≐',
	OD = '≑',
	RD = '≐',
	DD = '∸',
	zD = '∔',
	ID = '⊡',
	FD = '⌆',
	HD = '∯',
	qD = '¨',
	BD = '⇓',
	WD = '⇐',
	UD = '⇔',
	VD = '⫤',
	jD = '⟸',
	GD = '⟺',
	KD = '⟹',
	XD = '⇒',
	YD = '⊨',
	ZD = '⇑',
	JD = '⇕',
	QD = '∥',
	ez = '⤓',
	tz = '↓',
	nz = '↓',
	rz = '⇓',
	iz = '⇵',
	oz = '̑',
	sz = '⇊',
	lz = '⇃',
	az = '⇂',
	uz = '⥐',
	cz = '⥞',
	fz = '⥖',
	dz = '↽',
	hz = '⥟',
	pz = '⥗',
	gz = '⇁',
	mz = '↧',
	vz = '⊤',
	yz = '⤐',
	bz = '⌟',
	wz = '⌌',
	xz = '𝒟',
	Sz = '𝒹',
	_z = 'Ѕ',
	kz = 'ѕ',
	Tz = '⧶',
	Cz = 'Đ',
	Ez = 'đ',
	Lz = '⋱',
	Az = '▿',
	Mz = '▾',
	Nz = '⇵',
	$z = '⥯',
	Pz = '⦦',
	Oz = 'Џ',
	Rz = 'џ',
	Dz = '⟿',
	zz = 'É',
	Iz = 'é',
	Fz = '⩮',
	Hz = 'Ě',
	qz = 'ě',
	Bz = 'Ê',
	Wz = 'ê',
	Uz = '≖',
	Vz = '≕',
	jz = 'Э',
	Gz = 'э',
	Kz = '⩷',
	Xz = 'Ė',
	Yz = 'ė',
	Zz = '≑',
	Jz = 'ⅇ',
	Qz = '≒',
	e2 = '𝔈',
	t2 = '𝔢',
	n2 = '⪚',
	r2 = 'È',
	i2 = 'è',
	o2 = '⪖',
	s2 = '⪘',
	l2 = '⪙',
	a2 = '∈',
	u2 = '⏧',
	c2 = 'ℓ',
	f2 = '⪕',
	d2 = '⪗',
	h2 = 'Ē',
	p2 = 'ē',
	g2 = '∅',
	m2 = '∅',
	v2 = '◻',
	y2 = '∅',
	b2 = '▫',
	w2 = ' ',
	x2 = ' ',
	S2 = ' ',
	_2 = 'Ŋ',
	k2 = 'ŋ',
	T2 = ' ',
	C2 = 'Ę',
	E2 = 'ę',
	L2 = '𝔼',
	A2 = '𝕖',
	M2 = '⋕',
	N2 = '⧣',
	$2 = '⩱',
	P2 = 'ε',
	O2 = 'Ε',
	R2 = 'ε',
	D2 = 'ϵ',
	z2 = '≖',
	I2 = '≕',
	F2 = '≂',
	H2 = '⪖',
	q2 = '⪕',
	B2 = '⩵',
	W2 = '=',
	U2 = '≂',
	V2 = '≟',
	j2 = '⇌',
	G2 = '≡',
	K2 = '⩸',
	X2 = '⧥',
	Y2 = '⥱',
	Z2 = '≓',
	J2 = 'ℯ',
	Q2 = 'ℰ',
	eI = '≐',
	tI = '⩳',
	nI = '≂',
	rI = 'Η',
	iI = 'η',
	oI = 'Ð',
	sI = 'ð',
	lI = 'Ë',
	aI = 'ë',
	uI = '€',
	cI = '!',
	fI = '∃',
	dI = '∃',
	hI = 'ℰ',
	pI = 'ⅇ',
	gI = 'ⅇ',
	mI = '≒',
	vI = 'Ф',
	yI = 'ф',
	bI = '♀',
	wI = 'ﬃ',
	xI = 'ﬀ',
	SI = 'ﬄ',
	_I = '𝔉',
	kI = '𝔣',
	TI = 'ﬁ',
	CI = '◼',
	EI = '▪',
	LI = 'fj',
	AI = '♭',
	MI = 'ﬂ',
	NI = '▱',
	$I = 'ƒ',
	PI = '𝔽',
	OI = '𝕗',
	RI = '∀',
	DI = '∀',
	zI = '⋔',
	II = '⫙',
	FI = 'ℱ',
	HI = '⨍',
	qI = '½',
	BI = '⅓',
	WI = '¼',
	UI = '⅕',
	VI = '⅙',
	jI = '⅛',
	GI = '⅔',
	KI = '⅖',
	XI = '¾',
	YI = '⅗',
	ZI = '⅜',
	JI = '⅘',
	QI = '⅚',
	eF = '⅝',
	tF = '⅞',
	nF = '⁄',
	rF = '⌢',
	iF = '𝒻',
	oF = 'ℱ',
	sF = 'ǵ',
	lF = 'Γ',
	aF = 'γ',
	uF = 'Ϝ',
	cF = 'ϝ',
	fF = '⪆',
	dF = 'Ğ',
	hF = 'ğ',
	pF = 'Ģ',
	gF = 'Ĝ',
	mF = 'ĝ',
	vF = 'Г',
	yF = 'г',
	bF = 'Ġ',
	wF = 'ġ',
	xF = '≥',
	SF = '≧',
	_F = '⪌',
	kF = '⋛',
	TF = '≥',
	CF = '≧',
	EF = '⩾',
	LF = '⪩',
	AF = '⩾',
	MF = '⪀',
	NF = '⪂',
	$F = '⪄',
	PF = '⋛︀',
	OF = '⪔',
	RF = '𝔊',
	DF = '𝔤',
	zF = '≫',
	IF = '⋙',
	FF = '⋙',
	HF = 'ℷ',
	qF = 'Ѓ',
	BF = 'ѓ',
	WF = '⪥',
	UF = '≷',
	VF = '⪒',
	jF = '⪤',
	GF = '⪊',
	KF = '⪊',
	XF = '⪈',
	YF = '≩',
	ZF = '⪈',
	JF = '≩',
	QF = '⋧',
	eH = '𝔾',
	tH = '𝕘',
	nH = '`',
	rH = '≥',
	iH = '⋛',
	oH = '≧',
	sH = '⪢',
	lH = '≷',
	aH = '⩾',
	uH = '≳',
	cH = '𝒢',
	fH = 'ℊ',
	dH = '≳',
	hH = '⪎',
	pH = '⪐',
	gH = '⪧',
	mH = '⩺',
	vH = '>',
	yH = '>',
	bH = '≫',
	wH = '⋗',
	xH = '⦕',
	SH = '⩼',
	_H = '⪆',
	kH = '⥸',
	TH = '⋗',
	CH = '⋛',
	EH = '⪌',
	LH = '≷',
	AH = '≳',
	MH = '≩︀',
	NH = '≩︀',
	$H = 'ˇ',
	PH = ' ',
	OH = '½',
	RH = 'ℋ',
	DH = 'Ъ',
	zH = 'ъ',
	IH = '⥈',
	FH = '↔',
	HH = '⇔',
	qH = '↭',
	BH = '^',
	WH = 'ℏ',
	UH = 'Ĥ',
	VH = 'ĥ',
	jH = '♥',
	GH = '♥',
	KH = '…',
	XH = '⊹',
	YH = '𝔥',
	ZH = 'ℌ',
	JH = 'ℋ',
	QH = '⤥',
	eq = '⤦',
	tq = '⇿',
	nq = '∻',
	rq = '↩',
	iq = '↪',
	oq = '𝕙',
	sq = 'ℍ',
	lq = '―',
	aq = '─',
	uq = '𝒽',
	cq = 'ℋ',
	fq = 'ℏ',
	dq = 'Ħ',
	hq = 'ħ',
	pq = '≎',
	gq = '≏',
	mq = '⁃',
	vq = '‐',
	yq = 'Í',
	bq = 'í',
	wq = '⁣',
	xq = 'Î',
	Sq = 'î',
	_q = 'И',
	kq = 'и',
	Tq = 'İ',
	Cq = 'Е',
	Eq = 'е',
	Lq = '¡',
	Aq = '⇔',
	Mq = '𝔦',
	Nq = 'ℑ',
	$q = 'Ì',
	Pq = 'ì',
	Oq = 'ⅈ',
	Rq = '⨌',
	Dq = '∭',
	zq = '⧜',
	Iq = '℩',
	Fq = 'Ĳ',
	Hq = 'ĳ',
	qq = 'Ī',
	Bq = 'ī',
	Wq = 'ℑ',
	Uq = 'ⅈ',
	Vq = 'ℐ',
	jq = 'ℑ',
	Gq = 'ı',
	Kq = 'ℑ',
	Xq = '⊷',
	Yq = 'Ƶ',
	Zq = '⇒',
	Jq = '℅',
	Qq = '∞',
	eB = '⧝',
	tB = 'ı',
	nB = '⊺',
	rB = '∫',
	iB = '∬',
	oB = 'ℤ',
	sB = '∫',
	lB = '⊺',
	aB = '⋂',
	uB = '⨗',
	cB = '⨼',
	fB = '⁣',
	dB = '⁢',
	hB = 'Ё',
	pB = 'ё',
	gB = 'Į',
	mB = 'į',
	vB = '𝕀',
	yB = '𝕚',
	bB = 'Ι',
	wB = 'ι',
	xB = '⨼',
	SB = '¿',
	_B = '𝒾',
	kB = 'ℐ',
	TB = '∈',
	CB = '⋵',
	EB = '⋹',
	LB = '⋴',
	AB = '⋳',
	MB = '∈',
	NB = '⁢',
	$B = 'Ĩ',
	PB = 'ĩ',
	OB = 'І',
	RB = 'і',
	DB = 'Ï',
	zB = 'ï',
	IB = 'Ĵ',
	FB = 'ĵ',
	HB = 'Й',
	qB = 'й',
	BB = '𝔍',
	WB = '𝔧',
	UB = 'ȷ',
	VB = '𝕁',
	jB = '𝕛',
	GB = '𝒥',
	KB = '𝒿',
	XB = 'Ј',
	YB = 'ј',
	ZB = 'Є',
	JB = 'є',
	QB = 'Κ',
	e3 = 'κ',
	t3 = 'ϰ',
	n3 = 'Ķ',
	r3 = 'ķ',
	i3 = 'К',
	o3 = 'к',
	s3 = '𝔎',
	l3 = '𝔨',
	a3 = 'ĸ',
	u3 = 'Х',
	c3 = 'х',
	f3 = 'Ќ',
	d3 = 'ќ',
	h3 = '𝕂',
	p3 = '𝕜',
	g3 = '𝒦',
	m3 = '𝓀',
	v3 = '⇚',
	y3 = 'Ĺ',
	b3 = 'ĺ',
	w3 = '⦴',
	x3 = 'ℒ',
	S3 = 'Λ',
	_3 = 'λ',
	k3 = '⟨',
	T3 = '⟪',
	C3 = '⦑',
	E3 = '⟨',
	L3 = '⪅',
	A3 = 'ℒ',
	M3 = '«',
	N3 = '⇤',
	$3 = '⤟',
	P3 = '←',
	O3 = '↞',
	R3 = '⇐',
	D3 = '⤝',
	z3 = '↩',
	I3 = '↫',
	F3 = '⤹',
	H3 = '⥳',
	q3 = '↢',
	B3 = '⤙',
	W3 = '⤛',
	U3 = '⪫',
	V3 = '⪭',
	j3 = '⪭︀',
	G3 = '⤌',
	K3 = '⤎',
	X3 = '❲',
	Y3 = '{',
	Z3 = '[',
	J3 = '⦋',
	Q3 = '⦏',
	e5 = '⦍',
	t5 = 'Ľ',
	n5 = 'ľ',
	r5 = 'Ļ',
	i5 = 'ļ',
	o5 = '⌈',
	s5 = '{',
	l5 = 'Л',
	a5 = 'л',
	u5 = '⤶',
	c5 = '“',
	f5 = '„',
	d5 = '⥧',
	h5 = '⥋',
	p5 = '↲',
	g5 = '≤',
	m5 = '≦',
	v5 = '⟨',
	y5 = '⇤',
	b5 = '←',
	w5 = '←',
	x5 = '⇐',
	S5 = '⇆',
	_5 = '↢',
	k5 = '⌈',
	T5 = '⟦',
	C5 = '⥡',
	E5 = '⥙',
	L5 = '⇃',
	A5 = '⌊',
	M5 = '↽',
	N5 = '↼',
	$5 = '⇇',
	P5 = '↔',
	O5 = '↔',
	R5 = '⇔',
	D5 = '⇆',
	z5 = '⇋',
	I5 = '↭',
	F5 = '⥎',
	H5 = '↤',
	q5 = '⊣',
	B5 = '⥚',
	W5 = '⋋',
	U5 = '⧏',
	V5 = '⊲',
	j5 = '⊴',
	G5 = '⥑',
	K5 = '⥠',
	X5 = '⥘',
	Y5 = '↿',
	Z5 = '⥒',
	J5 = '↼',
	Q5 = '⪋',
	e8 = '⋚',
	t8 = '≤',
	n8 = '≦',
	r8 = '⩽',
	i8 = '⪨',
	o8 = '⩽',
	s8 = '⩿',
	l8 = '⪁',
	a8 = '⪃',
	u8 = '⋚︀',
	c8 = '⪓',
	f8 = '⪅',
	d8 = '⋖',
	h8 = '⋚',
	p8 = '⪋',
	g8 = '⋚',
	m8 = '≦',
	v8 = '≶',
	y8 = '≶',
	b8 = '⪡',
	w8 = '≲',
	x8 = '⩽',
	S8 = '≲',
	_8 = '⥼',
	k8 = '⌊',
	T8 = '𝔏',
	C8 = '𝔩',
	E8 = '≶',
	L8 = '⪑',
	A8 = '⥢',
	M8 = '↽',
	N8 = '↼',
	$8 = '⥪',
	P8 = '▄',
	O8 = 'Љ',
	R8 = 'љ',
	D8 = '⇇',
	z8 = '≪',
	I8 = '⋘',
	F8 = '⌞',
	H8 = '⇚',
	q8 = '⥫',
	B8 = '◺',
	W8 = 'Ŀ',
	U8 = 'ŀ',
	V8 = '⎰',
	j8 = '⎰',
	G8 = '⪉',
	K8 = '⪉',
	X8 = '⪇',
	Y8 = '≨',
	Z8 = '⪇',
	J8 = '≨',
	Q8 = '⋦',
	eW = '⟬',
	tW = '⇽',
	nW = '⟦',
	rW = '⟵',
	iW = '⟵',
	oW = '⟸',
	sW = '⟷',
	lW = '⟷',
	aW = '⟺',
	uW = '⟼',
	cW = '⟶',
	fW = '⟶',
	dW = '⟹',
	hW = '↫',
	pW = '↬',
	gW = '⦅',
	mW = '𝕃',
	vW = '𝕝',
	yW = '⨭',
	bW = '⨴',
	wW = '∗',
	xW = '_',
	SW = '↙',
	_W = '↘',
	kW = '◊',
	TW = '◊',
	CW = '⧫',
	EW = '(',
	LW = '⦓',
	AW = '⇆',
	MW = '⌟',
	NW = '⇋',
	$W = '⥭',
	PW = '‎',
	OW = '⊿',
	RW = '‹',
	DW = '𝓁',
	zW = 'ℒ',
	IW = '↰',
	FW = '↰',
	HW = '≲',
	qW = '⪍',
	BW = '⪏',
	WW = '[',
	UW = '‘',
	VW = '‚',
	jW = 'Ł',
	GW = 'ł',
	KW = '⪦',
	XW = '⩹',
	YW = '<',
	ZW = '<',
	JW = '≪',
	QW = '⋖',
	e4 = '⋋',
	t4 = '⋉',
	n4 = '⥶',
	r4 = '⩻',
	i4 = '◃',
	o4 = '⊴',
	s4 = '◂',
	l4 = '⦖',
	a4 = '⥊',
	u4 = '⥦',
	c4 = '≨︀',
	f4 = '≨︀',
	d4 = '¯',
	h4 = '♂',
	p4 = '✠',
	g4 = '✠',
	m4 = '↦',
	v4 = '↦',
	y4 = '↧',
	b4 = '↤',
	w4 = '↥',
	x4 = '▮',
	S4 = '⨩',
	_4 = 'М',
	k4 = 'м',
	T4 = '—',
	C4 = '∺',
	E4 = '∡',
	L4 = ' ',
	A4 = 'ℳ',
	M4 = '𝔐',
	N4 = '𝔪',
	$4 = '℧',
	P4 = 'µ',
	O4 = '*',
	R4 = '⫰',
	D4 = '∣',
	z4 = '·',
	I4 = '⊟',
	F4 = '−',
	H4 = '∸',
	q4 = '⨪',
	B4 = '∓',
	W4 = '⫛',
	U4 = '…',
	V4 = '∓',
	j4 = '⊧',
	G4 = '𝕄',
	K4 = '𝕞',
	X4 = '∓',
	Y4 = '𝓂',
	Z4 = 'ℳ',
	J4 = '∾',
	Q4 = 'Μ',
	eU = 'μ',
	tU = '⊸',
	nU = '⊸',
	rU = '∇',
	iU = 'Ń',
	oU = 'ń',
	sU = '∠⃒',
	lU = '≉',
	aU = '⩰̸',
	uU = '≋̸',
	cU = 'ŉ',
	fU = '≉',
	dU = '♮',
	hU = 'ℕ',
	pU = '♮',
	gU = ' ',
	mU = '≎̸',
	vU = '≏̸',
	yU = '⩃',
	bU = 'Ň',
	wU = 'ň',
	xU = 'Ņ',
	SU = 'ņ',
	_U = '≇',
	kU = '⩭̸',
	TU = '⩂',
	CU = 'Н',
	EU = 'н',
	LU = '–',
	AU = '⤤',
	MU = '↗',
	NU = '⇗',
	$U = '↗',
	PU = '≠',
	OU = '≐̸',
	RU = '​',
	DU = '​',
	zU = '​',
	IU = '​',
	FU = '≢',
	HU = '⤨',
	qU = '≂̸',
	BU = '≫',
	WU = '≪',
	UU = `
`,
	VU = '∄',
	jU = '∄',
	GU = '𝔑',
	KU = '𝔫',
	XU = '≧̸',
	YU = '≱',
	ZU = '≱',
	JU = '≧̸',
	QU = '⩾̸',
	e6 = '⩾̸',
	t6 = '⋙̸',
	n6 = '≵',
	r6 = '≫⃒',
	i6 = '≯',
	o6 = '≯',
	s6 = '≫̸',
	l6 = '↮',
	a6 = '⇎',
	u6 = '⫲',
	c6 = '∋',
	f6 = '⋼',
	d6 = '⋺',
	h6 = '∋',
	p6 = 'Њ',
	g6 = 'њ',
	m6 = '↚',
	v6 = '⇍',
	y6 = '‥',
	b6 = '≦̸',
	w6 = '≰',
	x6 = '↚',
	S6 = '⇍',
	_6 = '↮',
	k6 = '⇎',
	T6 = '≰',
	C6 = '≦̸',
	E6 = '⩽̸',
	L6 = '⩽̸',
	A6 = '≮',
	M6 = '⋘̸',
	N6 = '≴',
	$6 = '≪⃒',
	P6 = '≮',
	O6 = '⋪',
	R6 = '⋬',
	D6 = '≪̸',
	z6 = '∤',
	I6 = '⁠',
	F6 = ' ',
	H6 = '𝕟',
	q6 = 'ℕ',
	B6 = '⫬',
	W6 = '¬',
	U6 = '≢',
	V6 = '≭',
	j6 = '∦',
	G6 = '∉',
	K6 = '≠',
	X6 = '≂̸',
	Y6 = '∄',
	Z6 = '≯',
	J6 = '≱',
	Q6 = '≧̸',
	eV = '≫̸',
	tV = '≹',
	nV = '⩾̸',
	rV = '≵',
	iV = '≎̸',
	oV = '≏̸',
	sV = '∉',
	lV = '⋵̸',
	aV = '⋹̸',
	uV = '∉',
	cV = '⋷',
	fV = '⋶',
	dV = '⧏̸',
	hV = '⋪',
	pV = '⋬',
	gV = '≮',
	mV = '≰',
	vV = '≸',
	yV = '≪̸',
	bV = '⩽̸',
	wV = '≴',
	xV = '⪢̸',
	SV = '⪡̸',
	_V = '∌',
	kV = '∌',
	TV = '⋾',
	CV = '⋽',
	EV = '⊀',
	LV = '⪯̸',
	AV = '⋠',
	MV = '∌',
	NV = '⧐̸',
	$V = '⋫',
	PV = '⋭',
	OV = '⊏̸',
	RV = '⋢',
	DV = '⊐̸',
	zV = '⋣',
	IV = '⊂⃒',
	FV = '⊈',
	HV = '⊁',
	qV = '⪰̸',
	BV = '⋡',
	WV = '≿̸',
	UV = '⊃⃒',
	VV = '⊉',
	jV = '≁',
	GV = '≄',
	KV = '≇',
	XV = '≉',
	YV = '∤',
	ZV = '∦',
	JV = '∦',
	QV = '⫽⃥',
	ej = '∂̸',
	tj = '⨔',
	nj = '⊀',
	rj = '⋠',
	ij = '⊀',
	oj = '⪯̸',
	sj = '⪯̸',
	lj = '⤳̸',
	aj = '↛',
	uj = '⇏',
	cj = '↝̸',
	fj = '↛',
	dj = '⇏',
	hj = '⋫',
	pj = '⋭',
	gj = '⊁',
	mj = '⋡',
	vj = '⪰̸',
	yj = '𝒩',
	bj = '𝓃',
	wj = '∤',
	xj = '∦',
	Sj = '≁',
	_j = '≄',
	kj = '≄',
	Tj = '∤',
	Cj = '∦',
	Ej = '⋢',
	Lj = '⋣',
	Aj = '⊄',
	Mj = '⫅̸',
	Nj = '⊈',
	$j = '⊂⃒',
	Pj = '⊈',
	Oj = '⫅̸',
	Rj = '⊁',
	Dj = '⪰̸',
	zj = '⊅',
	Ij = '⫆̸',
	Fj = '⊉',
	Hj = '⊃⃒',
	qj = '⊉',
	Bj = '⫆̸',
	Wj = '≹',
	Uj = 'Ñ',
	Vj = 'ñ',
	jj = '≸',
	Gj = '⋪',
	Kj = '⋬',
	Xj = '⋫',
	Yj = '⋭',
	Zj = 'Ν',
	Jj = 'ν',
	Qj = '#',
	eG = '№',
	tG = ' ',
	nG = '≍⃒',
	rG = '⊬',
	iG = '⊭',
	oG = '⊮',
	sG = '⊯',
	lG = '≥⃒',
	aG = '>⃒',
	uG = '⤄',
	cG = '⧞',
	fG = '⤂',
	dG = '≤⃒',
	hG = '<⃒',
	pG = '⊴⃒',
	gG = '⤃',
	mG = '⊵⃒',
	vG = '∼⃒',
	yG = '⤣',
	bG = '↖',
	wG = '⇖',
	xG = '↖',
	SG = '⤧',
	_G = 'Ó',
	kG = 'ó',
	TG = '⊛',
	CG = 'Ô',
	EG = 'ô',
	LG = '⊚',
	AG = 'О',
	MG = 'о',
	NG = '⊝',
	$G = 'Ő',
	PG = 'ő',
	OG = '⨸',
	RG = '⊙',
	DG = '⦼',
	zG = 'Œ',
	IG = 'œ',
	FG = '⦿',
	HG = '𝔒',
	qG = '𝔬',
	BG = '˛',
	WG = 'Ò',
	UG = 'ò',
	VG = '⧁',
	jG = '⦵',
	GG = 'Ω',
	KG = '∮',
	XG = '↺',
	YG = '⦾',
	ZG = '⦻',
	JG = '‾',
	QG = '⧀',
	e9 = 'Ō',
	t9 = 'ō',
	n9 = 'Ω',
	r9 = 'ω',
	i9 = 'Ο',
	o9 = 'ο',
	s9 = '⦶',
	l9 = '⊖',
	a9 = '𝕆',
	u9 = '𝕠',
	c9 = '⦷',
	f9 = '“',
	d9 = '‘',
	h9 = '⦹',
	p9 = '⊕',
	g9 = '↻',
	m9 = '⩔',
	v9 = '∨',
	y9 = '⩝',
	b9 = 'ℴ',
	w9 = 'ℴ',
	x9 = 'ª',
	S9 = 'º',
	_9 = '⊶',
	k9 = '⩖',
	T9 = '⩗',
	C9 = '⩛',
	E9 = 'Ⓢ',
	L9 = '𝒪',
	A9 = 'ℴ',
	M9 = 'Ø',
	N9 = 'ø',
	$9 = '⊘',
	P9 = 'Õ',
	O9 = 'õ',
	R9 = '⨶',
	D9 = '⨷',
	z9 = '⊗',
	I9 = 'Ö',
	F9 = 'ö',
	H9 = '⌽',
	q9 = '‾',
	B9 = '⏞',
	W9 = '⎴',
	U9 = '⏜',
	V9 = '¶',
	j9 = '∥',
	G9 = '∥',
	K9 = '⫳',
	X9 = '⫽',
	Y9 = '∂',
	Z9 = '∂',
	J9 = 'П',
	Q9 = 'п',
	e7 = '%',
	t7 = '.',
	n7 = '‰',
	r7 = '⊥',
	i7 = '‱',
	o7 = '𝔓',
	s7 = '𝔭',
	l7 = 'Φ',
	a7 = 'φ',
	u7 = 'ϕ',
	c7 = 'ℳ',
	f7 = '☎',
	d7 = 'Π',
	h7 = 'π',
	p7 = '⋔',
	g7 = 'ϖ',
	m7 = 'ℏ',
	v7 = 'ℎ',
	y7 = 'ℏ',
	b7 = '⨣',
	w7 = '⊞',
	x7 = '⨢',
	S7 = '+',
	_7 = '∔',
	k7 = '⨥',
	T7 = '⩲',
	C7 = '±',
	E7 = '±',
	L7 = '⨦',
	A7 = '⨧',
	M7 = '±',
	N7 = 'ℌ',
	$7 = '⨕',
	P7 = '𝕡',
	O7 = 'ℙ',
	R7 = '£',
	D7 = '⪷',
	z7 = '⪻',
	I7 = '≺',
	F7 = '≼',
	H7 = '⪷',
	q7 = '≺',
	B7 = '≼',
	W7 = '≺',
	U7 = '⪯',
	V7 = '≼',
	j7 = '≾',
	G7 = '⪯',
	K7 = '⪹',
	X7 = '⪵',
	Y7 = '⋨',
	Z7 = '⪯',
	J7 = '⪳',
	Q7 = '≾',
	eK = '′',
	tK = '″',
	nK = 'ℙ',
	rK = '⪹',
	iK = '⪵',
	oK = '⋨',
	sK = '∏',
	lK = '∏',
	aK = '⌮',
	uK = '⌒',
	cK = '⌓',
	fK = '∝',
	dK = '∝',
	hK = '∷',
	pK = '∝',
	gK = '≾',
	mK = '⊰',
	vK = '𝒫',
	yK = '𝓅',
	bK = 'Ψ',
	wK = 'ψ',
	xK = ' ',
	SK = '𝔔',
	_K = '𝔮',
	kK = '⨌',
	TK = '𝕢',
	CK = 'ℚ',
	EK = '⁗',
	LK = '𝒬',
	AK = '𝓆',
	MK = 'ℍ',
	NK = '⨖',
	$K = '?',
	PK = '≟',
	OK = '"',
	RK = '"',
	DK = '⇛',
	zK = '∽̱',
	IK = 'Ŕ',
	FK = 'ŕ',
	HK = '√',
	qK = '⦳',
	BK = '⟩',
	WK = '⟫',
	UK = '⦒',
	VK = '⦥',
	jK = '⟩',
	GK = '»',
	KK = '⥵',
	XK = '⇥',
	YK = '⤠',
	ZK = '⤳',
	JK = '→',
	QK = '↠',
	eX = '⇒',
	tX = '⤞',
	nX = '↪',
	rX = '↬',
	iX = '⥅',
	oX = '⥴',
	sX = '⤖',
	lX = '↣',
	aX = '↝',
	uX = '⤚',
	cX = '⤜',
	fX = '∶',
	dX = 'ℚ',
	hX = '⤍',
	pX = '⤏',
	gX = '⤐',
	mX = '❳',
	vX = '}',
	yX = ']',
	bX = '⦌',
	wX = '⦎',
	xX = '⦐',
	SX = 'Ř',
	_X = 'ř',
	kX = 'Ŗ',
	TX = 'ŗ',
	CX = '⌉',
	EX = '}',
	LX = 'Р',
	AX = 'р',
	MX = '⤷',
	NX = '⥩',
	$X = '”',
	PX = '”',
	OX = '↳',
	RX = 'ℜ',
	DX = 'ℛ',
	zX = 'ℜ',
	IX = 'ℝ',
	FX = 'ℜ',
	HX = '▭',
	qX = '®',
	BX = '®',
	WX = '∋',
	UX = '⇋',
	VX = '⥯',
	jX = '⥽',
	GX = '⌋',
	KX = '𝔯',
	XX = 'ℜ',
	YX = '⥤',
	ZX = '⇁',
	JX = '⇀',
	QX = '⥬',
	eY = 'Ρ',
	tY = 'ρ',
	nY = 'ϱ',
	rY = '⟩',
	iY = '⇥',
	oY = '→',
	sY = '→',
	lY = '⇒',
	aY = '⇄',
	uY = '↣',
	cY = '⌉',
	fY = '⟧',
	dY = '⥝',
	hY = '⥕',
	pY = '⇂',
	gY = '⌋',
	mY = '⇁',
	vY = '⇀',
	yY = '⇄',
	bY = '⇌',
	wY = '⇉',
	xY = '↝',
	SY = '↦',
	_Y = '⊢',
	kY = '⥛',
	TY = '⋌',
	CY = '⧐',
	EY = '⊳',
	LY = '⊵',
	AY = '⥏',
	MY = '⥜',
	NY = '⥔',
	$Y = '↾',
	PY = '⥓',
	OY = '⇀',
	RY = '˚',
	DY = '≓',
	zY = '⇄',
	IY = '⇌',
	FY = '‏',
	HY = '⎱',
	qY = '⎱',
	BY = '⫮',
	WY = '⟭',
	UY = '⇾',
	VY = '⟧',
	jY = '⦆',
	GY = '𝕣',
	KY = 'ℝ',
	XY = '⨮',
	YY = '⨵',
	ZY = '⥰',
	JY = ')',
	QY = '⦔',
	eZ = '⨒',
	tZ = '⇉',
	nZ = '⇛',
	rZ = '›',
	iZ = '𝓇',
	oZ = 'ℛ',
	sZ = '↱',
	lZ = '↱',
	aZ = ']',
	uZ = '’',
	cZ = '’',
	fZ = '⋌',
	dZ = '⋊',
	hZ = '▹',
	pZ = '⊵',
	gZ = '▸',
	mZ = '⧎',
	vZ = '⧴',
	yZ = '⥨',
	bZ = '℞',
	wZ = 'Ś',
	xZ = 'ś',
	SZ = '‚',
	_Z = '⪸',
	kZ = 'Š',
	TZ = 'š',
	CZ = '⪼',
	EZ = '≻',
	LZ = '≽',
	AZ = '⪰',
	MZ = '⪴',
	NZ = 'Ş',
	$Z = 'ş',
	PZ = 'Ŝ',
	OZ = 'ŝ',
	RZ = '⪺',
	DZ = '⪶',
	zZ = '⋩',
	IZ = '⨓',
	FZ = '≿',
	HZ = 'С',
	qZ = 'с',
	BZ = '⊡',
	WZ = '⋅',
	UZ = '⩦',
	VZ = '⤥',
	jZ = '↘',
	GZ = '⇘',
	KZ = '↘',
	XZ = '§',
	YZ = ';',
	ZZ = '⤩',
	JZ = '∖',
	QZ = '∖',
	eJ = '✶',
	tJ = '𝔖',
	nJ = '𝔰',
	rJ = '⌢',
	iJ = '♯',
	oJ = 'Щ',
	sJ = 'щ',
	lJ = 'Ш',
	aJ = 'ш',
	uJ = '↓',
	cJ = '←',
	fJ = '∣',
	dJ = '∥',
	hJ = '→',
	pJ = '↑',
	gJ = '­',
	mJ = 'Σ',
	vJ = 'σ',
	yJ = 'ς',
	bJ = 'ς',
	wJ = '∼',
	xJ = '⩪',
	SJ = '≃',
	_J = '≃',
	kJ = '⪞',
	TJ = '⪠',
	CJ = '⪝',
	EJ = '⪟',
	LJ = '≆',
	AJ = '⨤',
	MJ = '⥲',
	NJ = '←',
	$J = '∘',
	PJ = '∖',
	OJ = '⨳',
	RJ = '⧤',
	DJ = '∣',
	zJ = '⌣',
	IJ = '⪪',
	FJ = '⪬',
	HJ = '⪬︀',
	qJ = 'Ь',
	BJ = 'ь',
	WJ = '⌿',
	UJ = '⧄',
	VJ = '/',
	jJ = '𝕊',
	GJ = '𝕤',
	KJ = '♠',
	XJ = '♠',
	YJ = '∥',
	ZJ = '⊓',
	JJ = '⊓︀',
	QJ = '⊔',
	eQ = '⊔︀',
	tQ = '√',
	nQ = '⊏',
	rQ = '⊑',
	iQ = '⊏',
	oQ = '⊑',
	sQ = '⊐',
	lQ = '⊒',
	aQ = '⊐',
	uQ = '⊒',
	cQ = '□',
	fQ = '□',
	dQ = '⊓',
	hQ = '⊏',
	pQ = '⊑',
	gQ = '⊐',
	mQ = '⊒',
	vQ = '⊔',
	yQ = '▪',
	bQ = '□',
	wQ = '▪',
	xQ = '→',
	SQ = '𝒮',
	_Q = '𝓈',
	kQ = '∖',
	TQ = '⌣',
	CQ = '⋆',
	EQ = '⋆',
	LQ = '☆',
	AQ = '★',
	MQ = 'ϵ',
	NQ = 'ϕ',
	$Q = '¯',
	PQ = '⊂',
	OQ = '⋐',
	RQ = '⪽',
	DQ = '⫅',
	zQ = '⊆',
	IQ = '⫃',
	FQ = '⫁',
	HQ = '⫋',
	qQ = '⊊',
	BQ = '⪿',
	WQ = '⥹',
	UQ = '⊂',
	VQ = '⋐',
	jQ = '⊆',
	GQ = '⫅',
	KQ = '⊆',
	XQ = '⊊',
	YQ = '⫋',
	ZQ = '⫇',
	JQ = '⫕',
	QQ = '⫓',
	eee = '⪸',
	tee = '≻',
	nee = '≽',
	ree = '≻',
	iee = '⪰',
	oee = '≽',
	see = '≿',
	lee = '⪰',
	aee = '⪺',
	uee = '⪶',
	cee = '⋩',
	fee = '≿',
	dee = '∋',
	hee = '∑',
	pee = '∑',
	gee = '♪',
	mee = '¹',
	vee = '²',
	yee = '³',
	bee = '⊃',
	wee = '⋑',
	xee = '⪾',
	See = '⫘',
	_ee = '⫆',
	kee = '⊇',
	Tee = '⫄',
	Cee = '⊃',
	Eee = '⊇',
	Lee = '⟉',
	Aee = '⫗',
	Mee = '⥻',
	Nee = '⫂',
	$ee = '⫌',
	Pee = '⊋',
	Oee = '⫀',
	Ree = '⊃',
	Dee = '⋑',
	zee = '⊇',
	Iee = '⫆',
	Fee = '⊋',
	Hee = '⫌',
	qee = '⫈',
	Bee = '⫔',
	Wee = '⫖',
	Uee = '⤦',
	Vee = '↙',
	jee = '⇙',
	Gee = '↙',
	Kee = '⤪',
	Xee = 'ß',
	Yee = '	',
	Zee = '⌖',
	Jee = 'Τ',
	Qee = 'τ',
	ete = '⎴',
	tte = 'Ť',
	nte = 'ť',
	rte = 'Ţ',
	ite = 'ţ',
	ote = 'Т',
	ste = 'т',
	lte = '⃛',
	ate = '⌕',
	ute = '𝔗',
	cte = '𝔱',
	fte = '∴',
	dte = '∴',
	hte = '∴',
	pte = 'Θ',
	gte = 'θ',
	mte = 'ϑ',
	vte = 'ϑ',
	yte = '≈',
	bte = '∼',
	wte = '  ',
	xte = ' ',
	Ste = ' ',
	_te = '≈',
	kte = '∼',
	Tte = 'Þ',
	Cte = 'þ',
	Ete = '˜',
	Lte = '∼',
	Ate = '≃',
	Mte = '≅',
	Nte = '≈',
	$te = '⨱',
	Pte = '⊠',
	Ote = '×',
	Rte = '⨰',
	Dte = '∭',
	zte = '⤨',
	Ite = '⌶',
	Fte = '⫱',
	Hte = '⊤',
	qte = '𝕋',
	Bte = '𝕥',
	Wte = '⫚',
	Ute = '⤩',
	Vte = '‴',
	jte = '™',
	Gte = '™',
	Kte = '▵',
	Xte = '▿',
	Yte = '◃',
	Zte = '⊴',
	Jte = '≜',
	Qte = '▹',
	ene = '⊵',
	tne = '◬',
	nne = '≜',
	rne = '⨺',
	ine = '⃛',
	one = '⨹',
	sne = '⧍',
	lne = '⨻',
	ane = '⏢',
	une = '𝒯',
	cne = '𝓉',
	fne = 'Ц',
	dne = 'ц',
	hne = 'Ћ',
	pne = 'ћ',
	gne = 'Ŧ',
	mne = 'ŧ',
	vne = '≬',
	yne = '↞',
	bne = '↠',
	wne = 'Ú',
	xne = 'ú',
	Sne = '↑',
	_ne = '↟',
	kne = '⇑',
	Tne = '⥉',
	Cne = 'Ў',
	Ene = 'ў',
	Lne = 'Ŭ',
	Ane = 'ŭ',
	Mne = 'Û',
	Nne = 'û',
	$ne = 'У',
	Pne = 'у',
	One = '⇅',
	Rne = 'Ű',
	Dne = 'ű',
	zne = '⥮',
	Ine = '⥾',
	Fne = '𝔘',
	Hne = '𝔲',
	qne = 'Ù',
	Bne = 'ù',
	Wne = '⥣',
	Une = '↿',
	Vne = '↾',
	jne = '▀',
	Gne = '⌜',
	Kne = '⌜',
	Xne = '⌏',
	Yne = '◸',
	Zne = 'Ū',
	Jne = 'ū',
	Qne = '¨',
	ere = '_',
	tre = '⏟',
	nre = '⎵',
	rre = '⏝',
	ire = '⋃',
	ore = '⊎',
	sre = 'Ų',
	lre = 'ų',
	are = '𝕌',
	ure = '𝕦',
	cre = '⤒',
	fre = '↑',
	dre = '↑',
	hre = '⇑',
	pre = '⇅',
	gre = '↕',
	mre = '↕',
	vre = '⇕',
	yre = '⥮',
	bre = '↿',
	wre = '↾',
	xre = '⊎',
	Sre = '↖',
	_re = '↗',
	kre = 'υ',
	Tre = 'ϒ',
	Cre = 'ϒ',
	Ere = 'Υ',
	Lre = 'υ',
	Are = '↥',
	Mre = '⊥',
	Nre = '⇈',
	$re = '⌝',
	Pre = '⌝',
	Ore = '⌎',
	Rre = 'Ů',
	Dre = 'ů',
	zre = '◹',
	Ire = '𝒰',
	Fre = '𝓊',
	Hre = '⋰',
	qre = 'Ũ',
	Bre = 'ũ',
	Wre = '▵',
	Ure = '▴',
	Vre = '⇈',
	jre = 'Ü',
	Gre = 'ü',
	Kre = '⦧',
	Xre = '⦜',
	Yre = 'ϵ',
	Zre = 'ϰ',
	Jre = '∅',
	Qre = 'ϕ',
	eie = 'ϖ',
	tie = '∝',
	nie = '↕',
	rie = '⇕',
	iie = 'ϱ',
	oie = 'ς',
	sie = '⊊︀',
	lie = '⫋︀',
	aie = '⊋︀',
	uie = '⫌︀',
	cie = 'ϑ',
	fie = '⊲',
	die = '⊳',
	hie = '⫨',
	pie = '⫫',
	gie = '⫩',
	mie = 'В',
	vie = 'в',
	yie = '⊢',
	bie = '⊨',
	wie = '⊩',
	xie = '⊫',
	Sie = '⫦',
	_ie = '⊻',
	kie = '∨',
	Tie = '⋁',
	Cie = '≚',
	Eie = '⋮',
	Lie = '|',
	Aie = '‖',
	Mie = '|',
	Nie = '‖',
	$ie = '∣',
	Pie = '|',
	Oie = '❘',
	Rie = '≀',
	Die = ' ',
	zie = '𝔙',
	Iie = '𝔳',
	Fie = '⊲',
	Hie = '⊂⃒',
	qie = '⊃⃒',
	Bie = '𝕍',
	Wie = '𝕧',
	Uie = '∝',
	Vie = '⊳',
	jie = '𝒱',
	Gie = '𝓋',
	Kie = '⫋︀',
	Xie = '⊊︀',
	Yie = '⫌︀',
	Zie = '⊋︀',
	Jie = '⊪',
	Qie = '⦚',
	eoe = 'Ŵ',
	toe = 'ŵ',
	noe = '⩟',
	roe = '∧',
	ioe = '⋀',
	ooe = '≙',
	soe = '℘',
	loe = '𝔚',
	aoe = '𝔴',
	uoe = '𝕎',
	coe = '𝕨',
	foe = '℘',
	doe = '≀',
	hoe = '≀',
	poe = '𝒲',
	goe = '𝓌',
	moe = '⋂',
	voe = '◯',
	yoe = '⋃',
	boe = '▽',
	woe = '𝔛',
	xoe = '𝔵',
	Soe = '⟷',
	_oe = '⟺',
	koe = 'Ξ',
	Toe = 'ξ',
	Coe = '⟵',
	Eoe = '⟸',
	Loe = '⟼',
	Aoe = '⋻',
	Moe = '⨀',
	Noe = '𝕏',
	$oe = '𝕩',
	Poe = '⨁',
	Ooe = '⨂',
	Roe = '⟶',
	Doe = '⟹',
	zoe = '𝒳',
	Ioe = '𝓍',
	Foe = '⨆',
	Hoe = '⨄',
	qoe = '△',
	Boe = '⋁',
	Woe = '⋀',
	Uoe = 'Ý',
	Voe = 'ý',
	joe = 'Я',
	Goe = 'я',
	Koe = 'Ŷ',
	Xoe = 'ŷ',
	Yoe = 'Ы',
	Zoe = 'ы',
	Joe = '¥',
	Qoe = '𝔜',
	ese = '𝔶',
	tse = 'Ї',
	nse = 'ї',
	rse = '𝕐',
	ise = '𝕪',
	ose = '𝒴',
	sse = '𝓎',
	lse = 'Ю',
	ase = 'ю',
	use = 'ÿ',
	cse = 'Ÿ',
	fse = 'Ź',
	dse = 'ź',
	hse = 'Ž',
	pse = 'ž',
	gse = 'З',
	mse = 'з',
	vse = 'Ż',
	yse = 'ż',
	bse = 'ℨ',
	wse = '​',
	xse = 'Ζ',
	Sse = 'ζ',
	_se = '𝔷',
	kse = 'ℨ',
	Tse = 'Ж',
	Cse = 'ж',
	Ese = '⇝',
	Lse = '𝕫',
	Ase = 'ℤ',
	Mse = '𝒵',
	Nse = '𝓏',
	$se = '‍',
	Pse = '‌',
	Cw = {
		Aacute: vA,
		aacute: yA,
		Abreve: bA,
		abreve: wA,
		ac: xA,
		acd: SA,
		acE: _A,
		Acirc: kA,
		acirc: TA,
		acute: CA,
		Acy: EA,
		acy: LA,
		AElig: AA,
		aelig: MA,
		af: NA,
		Afr: $A,
		afr: PA,
		Agrave: OA,
		agrave: RA,
		alefsym: DA,
		aleph: zA,
		Alpha: IA,
		alpha: FA,
		Amacr: HA,
		amacr: qA,
		amalg: BA,
		amp: WA,
		AMP: UA,
		andand: VA,
		And: jA,
		and: GA,
		andd: KA,
		andslope: XA,
		andv: YA,
		ang: ZA,
		ange: JA,
		angle: QA,
		angmsdaa: eM,
		angmsdab: tM,
		angmsdac: nM,
		angmsdad: rM,
		angmsdae: iM,
		angmsdaf: oM,
		angmsdag: sM,
		angmsdah: lM,
		angmsd: aM,
		angrt: uM,
		angrtvb: cM,
		angrtvbd: fM,
		angsph: dM,
		angst: hM,
		angzarr: pM,
		Aogon: gM,
		aogon: mM,
		Aopf: vM,
		aopf: yM,
		apacir: bM,
		ap: wM,
		apE: xM,
		ape: SM,
		apid: _M,
		apos: kM,
		ApplyFunction: TM,
		approx: CM,
		approxeq: EM,
		Aring: LM,
		aring: AM,
		Ascr: MM,
		ascr: NM,
		Assign: $M,
		ast: PM,
		asymp: OM,
		asympeq: RM,
		Atilde: DM,
		atilde: zM,
		Auml: IM,
		auml: FM,
		awconint: HM,
		awint: qM,
		backcong: BM,
		backepsilon: WM,
		backprime: UM,
		backsim: VM,
		backsimeq: jM,
		Backslash: GM,
		Barv: KM,
		barvee: XM,
		barwed: YM,
		Barwed: ZM,
		barwedge: JM,
		bbrk: QM,
		bbrktbrk: eN,
		bcong: tN,
		Bcy: nN,
		bcy: rN,
		bdquo: iN,
		becaus: oN,
		because: sN,
		Because: lN,
		bemptyv: aN,
		bepsi: uN,
		bernou: cN,
		Bernoullis: fN,
		Beta: dN,
		beta: hN,
		beth: pN,
		between: gN,
		Bfr: mN,
		bfr: vN,
		bigcap: yN,
		bigcirc: bN,
		bigcup: wN,
		bigodot: xN,
		bigoplus: SN,
		bigotimes: _N,
		bigsqcup: kN,
		bigstar: TN,
		bigtriangledown: CN,
		bigtriangleup: EN,
		biguplus: LN,
		bigvee: AN,
		bigwedge: MN,
		bkarow: NN,
		blacklozenge: $N,
		blacksquare: PN,
		blacktriangle: ON,
		blacktriangledown: RN,
		blacktriangleleft: DN,
		blacktriangleright: zN,
		blank: IN,
		blk12: FN,
		blk14: HN,
		blk34: qN,
		block: BN,
		bne: WN,
		bnequiv: UN,
		bNot: VN,
		bnot: jN,
		Bopf: GN,
		bopf: KN,
		bot: XN,
		bottom: YN,
		bowtie: ZN,
		boxbox: JN,
		boxdl: QN,
		boxdL: e$,
		boxDl: t$,
		boxDL: n$,
		boxdr: r$,
		boxdR: i$,
		boxDr: o$,
		boxDR: s$,
		boxh: l$,
		boxH: a$,
		boxhd: u$,
		boxHd: c$,
		boxhD: f$,
		boxHD: d$,
		boxhu: h$,
		boxHu: p$,
		boxhU: g$,
		boxHU: m$,
		boxminus: v$,
		boxplus: y$,
		boxtimes: b$,
		boxul: w$,
		boxuL: x$,
		boxUl: S$,
		boxUL: _$,
		boxur: k$,
		boxuR: T$,
		boxUr: C$,
		boxUR: E$,
		boxv: L$,
		boxV: A$,
		boxvh: M$,
		boxvH: N$,
		boxVh: $$,
		boxVH: P$,
		boxvl: O$,
		boxvL: R$,
		boxVl: D$,
		boxVL: z$,
		boxvr: I$,
		boxvR: F$,
		boxVr: H$,
		boxVR: q$,
		bprime: B$,
		breve: W$,
		Breve: U$,
		brvbar: V$,
		bscr: j$,
		Bscr: G$,
		bsemi: K$,
		bsim: X$,
		bsime: Y$,
		bsolb: Z$,
		bsol: J$,
		bsolhsub: Q$,
		bull: eP,
		bullet: tP,
		bump: nP,
		bumpE: rP,
		bumpe: iP,
		Bumpeq: oP,
		bumpeq: sP,
		Cacute: lP,
		cacute: aP,
		capand: uP,
		capbrcup: cP,
		capcap: fP,
		cap: dP,
		Cap: hP,
		capcup: pP,
		capdot: gP,
		CapitalDifferentialD: mP,
		caps: vP,
		caret: yP,
		caron: bP,
		Cayleys: wP,
		ccaps: xP,
		Ccaron: SP,
		ccaron: _P,
		Ccedil: kP,
		ccedil: TP,
		Ccirc: CP,
		ccirc: EP,
		Cconint: LP,
		ccups: AP,
		ccupssm: MP,
		Cdot: NP,
		cdot: $P,
		cedil: PP,
		Cedilla: OP,
		cemptyv: RP,
		cent: DP,
		centerdot: zP,
		CenterDot: IP,
		cfr: FP,
		Cfr: HP,
		CHcy: qP,
		chcy: BP,
		check: WP,
		checkmark: UP,
		Chi: VP,
		chi: jP,
		circ: GP,
		circeq: KP,
		circlearrowleft: XP,
		circlearrowright: YP,
		circledast: ZP,
		circledcirc: JP,
		circleddash: QP,
		CircleDot: eO,
		circledR: tO,
		circledS: nO,
		CircleMinus: rO,
		CirclePlus: iO,
		CircleTimes: oO,
		cir: sO,
		cirE: lO,
		cire: aO,
		cirfnint: uO,
		cirmid: cO,
		cirscir: fO,
		ClockwiseContourIntegral: dO,
		CloseCurlyDoubleQuote: hO,
		CloseCurlyQuote: pO,
		clubs: gO,
		clubsuit: mO,
		colon: vO,
		Colon: yO,
		Colone: bO,
		colone: wO,
		coloneq: xO,
		comma: SO,
		commat: _O,
		comp: kO,
		compfn: TO,
		complement: CO,
		complexes: EO,
		cong: LO,
		congdot: AO,
		Congruent: MO,
		conint: NO,
		Conint: $O,
		ContourIntegral: PO,
		copf: OO,
		Copf: RO,
		coprod: DO,
		Coproduct: zO,
		copy: IO,
		COPY: FO,
		copysr: HO,
		CounterClockwiseContourIntegral: qO,
		crarr: BO,
		cross: WO,
		Cross: UO,
		Cscr: VO,
		cscr: jO,
		csub: GO,
		csube: KO,
		csup: XO,
		csupe: YO,
		ctdot: ZO,
		cudarrl: JO,
		cudarrr: QO,
		cuepr: eR,
		cuesc: tR,
		cularr: nR,
		cularrp: rR,
		cupbrcap: iR,
		cupcap: oR,
		CupCap: sR,
		cup: lR,
		Cup: aR,
		cupcup: uR,
		cupdot: cR,
		cupor: fR,
		cups: dR,
		curarr: hR,
		curarrm: pR,
		curlyeqprec: gR,
		curlyeqsucc: mR,
		curlyvee: vR,
		curlywedge: yR,
		curren: bR,
		curvearrowleft: wR,
		curvearrowright: xR,
		cuvee: SR,
		cuwed: _R,
		cwconint: kR,
		cwint: TR,
		cylcty: CR,
		dagger: ER,
		Dagger: LR,
		daleth: AR,
		darr: MR,
		Darr: NR,
		dArr: $R,
		dash: PR,
		Dashv: OR,
		dashv: RR,
		dbkarow: DR,
		dblac: zR,
		Dcaron: IR,
		dcaron: FR,
		Dcy: HR,
		dcy: qR,
		ddagger: BR,
		ddarr: WR,
		DD: UR,
		dd: VR,
		DDotrahd: jR,
		ddotseq: GR,
		deg: KR,
		Del: XR,
		Delta: YR,
		delta: ZR,
		demptyv: JR,
		dfisht: QR,
		Dfr: eD,
		dfr: tD,
		dHar: nD,
		dharl: rD,
		dharr: iD,
		DiacriticalAcute: oD,
		DiacriticalDot: sD,
		DiacriticalDoubleAcute: lD,
		DiacriticalGrave: aD,
		DiacriticalTilde: uD,
		diam: cD,
		diamond: fD,
		Diamond: dD,
		diamondsuit: hD,
		diams: pD,
		die: gD,
		DifferentialD: mD,
		digamma: vD,
		disin: yD,
		div: bD,
		divide: wD,
		divideontimes: xD,
		divonx: SD,
		DJcy: _D,
		djcy: kD,
		dlcorn: TD,
		dlcrop: CD,
		dollar: ED,
		Dopf: LD,
		dopf: AD,
		Dot: MD,
		dot: ND,
		DotDot: $D,
		doteq: PD,
		doteqdot: OD,
		DotEqual: RD,
		dotminus: DD,
		dotplus: zD,
		dotsquare: ID,
		doublebarwedge: FD,
		DoubleContourIntegral: HD,
		DoubleDot: qD,
		DoubleDownArrow: BD,
		DoubleLeftArrow: WD,
		DoubleLeftRightArrow: UD,
		DoubleLeftTee: VD,
		DoubleLongLeftArrow: jD,
		DoubleLongLeftRightArrow: GD,
		DoubleLongRightArrow: KD,
		DoubleRightArrow: XD,
		DoubleRightTee: YD,
		DoubleUpArrow: ZD,
		DoubleUpDownArrow: JD,
		DoubleVerticalBar: QD,
		DownArrowBar: ez,
		downarrow: tz,
		DownArrow: nz,
		Downarrow: rz,
		DownArrowUpArrow: iz,
		DownBreve: oz,
		downdownarrows: sz,
		downharpoonleft: lz,
		downharpoonright: az,
		DownLeftRightVector: uz,
		DownLeftTeeVector: cz,
		DownLeftVectorBar: fz,
		DownLeftVector: dz,
		DownRightTeeVector: hz,
		DownRightVectorBar: pz,
		DownRightVector: gz,
		DownTeeArrow: mz,
		DownTee: vz,
		drbkarow: yz,
		drcorn: bz,
		drcrop: wz,
		Dscr: xz,
		dscr: Sz,
		DScy: _z,
		dscy: kz,
		dsol: Tz,
		Dstrok: Cz,
		dstrok: Ez,
		dtdot: Lz,
		dtri: Az,
		dtrif: Mz,
		duarr: Nz,
		duhar: $z,
		dwangle: Pz,
		DZcy: Oz,
		dzcy: Rz,
		dzigrarr: Dz,
		Eacute: zz,
		eacute: Iz,
		easter: Fz,
		Ecaron: Hz,
		ecaron: qz,
		Ecirc: Bz,
		ecirc: Wz,
		ecir: Uz,
		ecolon: Vz,
		Ecy: jz,
		ecy: Gz,
		eDDot: Kz,
		Edot: Xz,
		edot: Yz,
		eDot: Zz,
		ee: Jz,
		efDot: Qz,
		Efr: e2,
		efr: t2,
		eg: n2,
		Egrave: r2,
		egrave: i2,
		egs: o2,
		egsdot: s2,
		el: l2,
		Element: a2,
		elinters: u2,
		ell: c2,
		els: f2,
		elsdot: d2,
		Emacr: h2,
		emacr: p2,
		empty: g2,
		emptyset: m2,
		EmptySmallSquare: v2,
		emptyv: y2,
		EmptyVerySmallSquare: b2,
		emsp13: w2,
		emsp14: x2,
		emsp: S2,
		ENG: _2,
		eng: k2,
		ensp: T2,
		Eogon: C2,
		eogon: E2,
		Eopf: L2,
		eopf: A2,
		epar: M2,
		eparsl: N2,
		eplus: $2,
		epsi: P2,
		Epsilon: O2,
		epsilon: R2,
		epsiv: D2,
		eqcirc: z2,
		eqcolon: I2,
		eqsim: F2,
		eqslantgtr: H2,
		eqslantless: q2,
		Equal: B2,
		equals: W2,
		EqualTilde: U2,
		equest: V2,
		Equilibrium: j2,
		equiv: G2,
		equivDD: K2,
		eqvparsl: X2,
		erarr: Y2,
		erDot: Z2,
		escr: J2,
		Escr: Q2,
		esdot: eI,
		Esim: tI,
		esim: nI,
		Eta: rI,
		eta: iI,
		ETH: oI,
		eth: sI,
		Euml: lI,
		euml: aI,
		euro: uI,
		excl: cI,
		exist: fI,
		Exists: dI,
		expectation: hI,
		exponentiale: pI,
		ExponentialE: gI,
		fallingdotseq: mI,
		Fcy: vI,
		fcy: yI,
		female: bI,
		ffilig: wI,
		fflig: xI,
		ffllig: SI,
		Ffr: _I,
		ffr: kI,
		filig: TI,
		FilledSmallSquare: CI,
		FilledVerySmallSquare: EI,
		fjlig: LI,
		flat: AI,
		fllig: MI,
		fltns: NI,
		fnof: $I,
		Fopf: PI,
		fopf: OI,
		forall: RI,
		ForAll: DI,
		fork: zI,
		forkv: II,
		Fouriertrf: FI,
		fpartint: HI,
		frac12: qI,
		frac13: BI,
		frac14: WI,
		frac15: UI,
		frac16: VI,
		frac18: jI,
		frac23: GI,
		frac25: KI,
		frac34: XI,
		frac35: YI,
		frac38: ZI,
		frac45: JI,
		frac56: QI,
		frac58: eF,
		frac78: tF,
		frasl: nF,
		frown: rF,
		fscr: iF,
		Fscr: oF,
		gacute: sF,
		Gamma: lF,
		gamma: aF,
		Gammad: uF,
		gammad: cF,
		gap: fF,
		Gbreve: dF,
		gbreve: hF,
		Gcedil: pF,
		Gcirc: gF,
		gcirc: mF,
		Gcy: vF,
		gcy: yF,
		Gdot: bF,
		gdot: wF,
		ge: xF,
		gE: SF,
		gEl: _F,
		gel: kF,
		geq: TF,
		geqq: CF,
		geqslant: EF,
		gescc: LF,
		ges: AF,
		gesdot: MF,
		gesdoto: NF,
		gesdotol: $F,
		gesl: PF,
		gesles: OF,
		Gfr: RF,
		gfr: DF,
		gg: zF,
		Gg: IF,
		ggg: FF,
		gimel: HF,
		GJcy: qF,
		gjcy: BF,
		gla: WF,
		gl: UF,
		glE: VF,
		glj: jF,
		gnap: GF,
		gnapprox: KF,
		gne: XF,
		gnE: YF,
		gneq: ZF,
		gneqq: JF,
		gnsim: QF,
		Gopf: eH,
		gopf: tH,
		grave: nH,
		GreaterEqual: rH,
		GreaterEqualLess: iH,
		GreaterFullEqual: oH,
		GreaterGreater: sH,
		GreaterLess: lH,
		GreaterSlantEqual: aH,
		GreaterTilde: uH,
		Gscr: cH,
		gscr: fH,
		gsim: dH,
		gsime: hH,
		gsiml: pH,
		gtcc: gH,
		gtcir: mH,
		gt: vH,
		GT: yH,
		Gt: bH,
		gtdot: wH,
		gtlPar: xH,
		gtquest: SH,
		gtrapprox: _H,
		gtrarr: kH,
		gtrdot: TH,
		gtreqless: CH,
		gtreqqless: EH,
		gtrless: LH,
		gtrsim: AH,
		gvertneqq: MH,
		gvnE: NH,
		Hacek: $H,
		hairsp: PH,
		half: OH,
		hamilt: RH,
		HARDcy: DH,
		hardcy: zH,
		harrcir: IH,
		harr: FH,
		hArr: HH,
		harrw: qH,
		Hat: BH,
		hbar: WH,
		Hcirc: UH,
		hcirc: VH,
		hearts: jH,
		heartsuit: GH,
		hellip: KH,
		hercon: XH,
		hfr: YH,
		Hfr: ZH,
		HilbertSpace: JH,
		hksearow: QH,
		hkswarow: eq,
		hoarr: tq,
		homtht: nq,
		hookleftarrow: rq,
		hookrightarrow: iq,
		hopf: oq,
		Hopf: sq,
		horbar: lq,
		HorizontalLine: aq,
		hscr: uq,
		Hscr: cq,
		hslash: fq,
		Hstrok: dq,
		hstrok: hq,
		HumpDownHump: pq,
		HumpEqual: gq,
		hybull: mq,
		hyphen: vq,
		Iacute: yq,
		iacute: bq,
		ic: wq,
		Icirc: xq,
		icirc: Sq,
		Icy: _q,
		icy: kq,
		Idot: Tq,
		IEcy: Cq,
		iecy: Eq,
		iexcl: Lq,
		iff: Aq,
		ifr: Mq,
		Ifr: Nq,
		Igrave: $q,
		igrave: Pq,
		ii: Oq,
		iiiint: Rq,
		iiint: Dq,
		iinfin: zq,
		iiota: Iq,
		IJlig: Fq,
		ijlig: Hq,
		Imacr: qq,
		imacr: Bq,
		image: Wq,
		ImaginaryI: Uq,
		imagline: Vq,
		imagpart: jq,
		imath: Gq,
		Im: Kq,
		imof: Xq,
		imped: Yq,
		Implies: Zq,
		incare: Jq,
		in: '∈',
		infin: Qq,
		infintie: eB,
		inodot: tB,
		intcal: nB,
		int: rB,
		Int: iB,
		integers: oB,
		Integral: sB,
		intercal: lB,
		Intersection: aB,
		intlarhk: uB,
		intprod: cB,
		InvisibleComma: fB,
		InvisibleTimes: dB,
		IOcy: hB,
		iocy: pB,
		Iogon: gB,
		iogon: mB,
		Iopf: vB,
		iopf: yB,
		Iota: bB,
		iota: wB,
		iprod: xB,
		iquest: SB,
		iscr: _B,
		Iscr: kB,
		isin: TB,
		isindot: CB,
		isinE: EB,
		isins: LB,
		isinsv: AB,
		isinv: MB,
		it: NB,
		Itilde: $B,
		itilde: PB,
		Iukcy: OB,
		iukcy: RB,
		Iuml: DB,
		iuml: zB,
		Jcirc: IB,
		jcirc: FB,
		Jcy: HB,
		jcy: qB,
		Jfr: BB,
		jfr: WB,
		jmath: UB,
		Jopf: VB,
		jopf: jB,
		Jscr: GB,
		jscr: KB,
		Jsercy: XB,
		jsercy: YB,
		Jukcy: ZB,
		jukcy: JB,
		Kappa: QB,
		kappa: e3,
		kappav: t3,
		Kcedil: n3,
		kcedil: r3,
		Kcy: i3,
		kcy: o3,
		Kfr: s3,
		kfr: l3,
		kgreen: a3,
		KHcy: u3,
		khcy: c3,
		KJcy: f3,
		kjcy: d3,
		Kopf: h3,
		kopf: p3,
		Kscr: g3,
		kscr: m3,
		lAarr: v3,
		Lacute: y3,
		lacute: b3,
		laemptyv: w3,
		lagran: x3,
		Lambda: S3,
		lambda: _3,
		lang: k3,
		Lang: T3,
		langd: C3,
		langle: E3,
		lap: L3,
		Laplacetrf: A3,
		laquo: M3,
		larrb: N3,
		larrbfs: $3,
		larr: P3,
		Larr: O3,
		lArr: R3,
		larrfs: D3,
		larrhk: z3,
		larrlp: I3,
		larrpl: F3,
		larrsim: H3,
		larrtl: q3,
		latail: B3,
		lAtail: W3,
		lat: U3,
		late: V3,
		lates: j3,
		lbarr: G3,
		lBarr: K3,
		lbbrk: X3,
		lbrace: Y3,
		lbrack: Z3,
		lbrke: J3,
		lbrksld: Q3,
		lbrkslu: e5,
		Lcaron: t5,
		lcaron: n5,
		Lcedil: r5,
		lcedil: i5,
		lceil: o5,
		lcub: s5,
		Lcy: l5,
		lcy: a5,
		ldca: u5,
		ldquo: c5,
		ldquor: f5,
		ldrdhar: d5,
		ldrushar: h5,
		ldsh: p5,
		le: g5,
		lE: m5,
		LeftAngleBracket: v5,
		LeftArrowBar: y5,
		leftarrow: b5,
		LeftArrow: w5,
		Leftarrow: x5,
		LeftArrowRightArrow: S5,
		leftarrowtail: _5,
		LeftCeiling: k5,
		LeftDoubleBracket: T5,
		LeftDownTeeVector: C5,
		LeftDownVectorBar: E5,
		LeftDownVector: L5,
		LeftFloor: A5,
		leftharpoondown: M5,
		leftharpoonup: N5,
		leftleftarrows: $5,
		leftrightarrow: P5,
		LeftRightArrow: O5,
		Leftrightarrow: R5,
		leftrightarrows: D5,
		leftrightharpoons: z5,
		leftrightsquigarrow: I5,
		LeftRightVector: F5,
		LeftTeeArrow: H5,
		LeftTee: q5,
		LeftTeeVector: B5,
		leftthreetimes: W5,
		LeftTriangleBar: U5,
		LeftTriangle: V5,
		LeftTriangleEqual: j5,
		LeftUpDownVector: G5,
		LeftUpTeeVector: K5,
		LeftUpVectorBar: X5,
		LeftUpVector: Y5,
		LeftVectorBar: Z5,
		LeftVector: J5,
		lEg: Q5,
		leg: e8,
		leq: t8,
		leqq: n8,
		leqslant: r8,
		lescc: i8,
		les: o8,
		lesdot: s8,
		lesdoto: l8,
		lesdotor: a8,
		lesg: u8,
		lesges: c8,
		lessapprox: f8,
		lessdot: d8,
		lesseqgtr: h8,
		lesseqqgtr: p8,
		LessEqualGreater: g8,
		LessFullEqual: m8,
		LessGreater: v8,
		lessgtr: y8,
		LessLess: b8,
		lesssim: w8,
		LessSlantEqual: x8,
		LessTilde: S8,
		lfisht: _8,
		lfloor: k8,
		Lfr: T8,
		lfr: C8,
		lg: E8,
		lgE: L8,
		lHar: A8,
		lhard: M8,
		lharu: N8,
		lharul: $8,
		lhblk: P8,
		LJcy: O8,
		ljcy: R8,
		llarr: D8,
		ll: z8,
		Ll: I8,
		llcorner: F8,
		Lleftarrow: H8,
		llhard: q8,
		lltri: B8,
		Lmidot: W8,
		lmidot: U8,
		lmoustache: V8,
		lmoust: j8,
		lnap: G8,
		lnapprox: K8,
		lne: X8,
		lnE: Y8,
		lneq: Z8,
		lneqq: J8,
		lnsim: Q8,
		loang: eW,
		loarr: tW,
		lobrk: nW,
		longleftarrow: rW,
		LongLeftArrow: iW,
		Longleftarrow: oW,
		longleftrightarrow: sW,
		LongLeftRightArrow: lW,
		Longleftrightarrow: aW,
		longmapsto: uW,
		longrightarrow: cW,
		LongRightArrow: fW,
		Longrightarrow: dW,
		looparrowleft: hW,
		looparrowright: pW,
		lopar: gW,
		Lopf: mW,
		lopf: vW,
		loplus: yW,
		lotimes: bW,
		lowast: wW,
		lowbar: xW,
		LowerLeftArrow: SW,
		LowerRightArrow: _W,
		loz: kW,
		lozenge: TW,
		lozf: CW,
		lpar: EW,
		lparlt: LW,
		lrarr: AW,
		lrcorner: MW,
		lrhar: NW,
		lrhard: $W,
		lrm: PW,
		lrtri: OW,
		lsaquo: RW,
		lscr: DW,
		Lscr: zW,
		lsh: IW,
		Lsh: FW,
		lsim: HW,
		lsime: qW,
		lsimg: BW,
		lsqb: WW,
		lsquo: UW,
		lsquor: VW,
		Lstrok: jW,
		lstrok: GW,
		ltcc: KW,
		ltcir: XW,
		lt: YW,
		LT: ZW,
		Lt: JW,
		ltdot: QW,
		lthree: e4,
		ltimes: t4,
		ltlarr: n4,
		ltquest: r4,
		ltri: i4,
		ltrie: o4,
		ltrif: s4,
		ltrPar: l4,
		lurdshar: a4,
		luruhar: u4,
		lvertneqq: c4,
		lvnE: f4,
		macr: d4,
		male: h4,
		malt: p4,
		maltese: g4,
		Map: '⤅',
		map: m4,
		mapsto: v4,
		mapstodown: y4,
		mapstoleft: b4,
		mapstoup: w4,
		marker: x4,
		mcomma: S4,
		Mcy: _4,
		mcy: k4,
		mdash: T4,
		mDDot: C4,
		measuredangle: E4,
		MediumSpace: L4,
		Mellintrf: A4,
		Mfr: M4,
		mfr: N4,
		mho: $4,
		micro: P4,
		midast: O4,
		midcir: R4,
		mid: D4,
		middot: z4,
		minusb: I4,
		minus: F4,
		minusd: H4,
		minusdu: q4,
		MinusPlus: B4,
		mlcp: W4,
		mldr: U4,
		mnplus: V4,
		models: j4,
		Mopf: G4,
		mopf: K4,
		mp: X4,
		mscr: Y4,
		Mscr: Z4,
		mstpos: J4,
		Mu: Q4,
		mu: eU,
		multimap: tU,
		mumap: nU,
		nabla: rU,
		Nacute: iU,
		nacute: oU,
		nang: sU,
		nap: lU,
		napE: aU,
		napid: uU,
		napos: cU,
		napprox: fU,
		natural: dU,
		naturals: hU,
		natur: pU,
		nbsp: gU,
		nbump: mU,
		nbumpe: vU,
		ncap: yU,
		Ncaron: bU,
		ncaron: wU,
		Ncedil: xU,
		ncedil: SU,
		ncong: _U,
		ncongdot: kU,
		ncup: TU,
		Ncy: CU,
		ncy: EU,
		ndash: LU,
		nearhk: AU,
		nearr: MU,
		neArr: NU,
		nearrow: $U,
		ne: PU,
		nedot: OU,
		NegativeMediumSpace: RU,
		NegativeThickSpace: DU,
		NegativeThinSpace: zU,
		NegativeVeryThinSpace: IU,
		nequiv: FU,
		nesear: HU,
		nesim: qU,
		NestedGreaterGreater: BU,
		NestedLessLess: WU,
		NewLine: UU,
		nexist: VU,
		nexists: jU,
		Nfr: GU,
		nfr: KU,
		ngE: XU,
		nge: YU,
		ngeq: ZU,
		ngeqq: JU,
		ngeqslant: QU,
		nges: e6,
		nGg: t6,
		ngsim: n6,
		nGt: r6,
		ngt: i6,
		ngtr: o6,
		nGtv: s6,
		nharr: l6,
		nhArr: a6,
		nhpar: u6,
		ni: c6,
		nis: f6,
		nisd: d6,
		niv: h6,
		NJcy: p6,
		njcy: g6,
		nlarr: m6,
		nlArr: v6,
		nldr: y6,
		nlE: b6,
		nle: w6,
		nleftarrow: x6,
		nLeftarrow: S6,
		nleftrightarrow: _6,
		nLeftrightarrow: k6,
		nleq: T6,
		nleqq: C6,
		nleqslant: E6,
		nles: L6,
		nless: A6,
		nLl: M6,
		nlsim: N6,
		nLt: $6,
		nlt: P6,
		nltri: O6,
		nltrie: R6,
		nLtv: D6,
		nmid: z6,
		NoBreak: I6,
		NonBreakingSpace: F6,
		nopf: H6,
		Nopf: q6,
		Not: B6,
		not: W6,
		NotCongruent: U6,
		NotCupCap: V6,
		NotDoubleVerticalBar: j6,
		NotElement: G6,
		NotEqual: K6,
		NotEqualTilde: X6,
		NotExists: Y6,
		NotGreater: Z6,
		NotGreaterEqual: J6,
		NotGreaterFullEqual: Q6,
		NotGreaterGreater: eV,
		NotGreaterLess: tV,
		NotGreaterSlantEqual: nV,
		NotGreaterTilde: rV,
		NotHumpDownHump: iV,
		NotHumpEqual: oV,
		notin: sV,
		notindot: lV,
		notinE: aV,
		notinva: uV,
		notinvb: cV,
		notinvc: fV,
		NotLeftTriangleBar: dV,
		NotLeftTriangle: hV,
		NotLeftTriangleEqual: pV,
		NotLess: gV,
		NotLessEqual: mV,
		NotLessGreater: vV,
		NotLessLess: yV,
		NotLessSlantEqual: bV,
		NotLessTilde: wV,
		NotNestedGreaterGreater: xV,
		NotNestedLessLess: SV,
		notni: _V,
		notniva: kV,
		notnivb: TV,
		notnivc: CV,
		NotPrecedes: EV,
		NotPrecedesEqual: LV,
		NotPrecedesSlantEqual: AV,
		NotReverseElement: MV,
		NotRightTriangleBar: NV,
		NotRightTriangle: $V,
		NotRightTriangleEqual: PV,
		NotSquareSubset: OV,
		NotSquareSubsetEqual: RV,
		NotSquareSuperset: DV,
		NotSquareSupersetEqual: zV,
		NotSubset: IV,
		NotSubsetEqual: FV,
		NotSucceeds: HV,
		NotSucceedsEqual: qV,
		NotSucceedsSlantEqual: BV,
		NotSucceedsTilde: WV,
		NotSuperset: UV,
		NotSupersetEqual: VV,
		NotTilde: jV,
		NotTildeEqual: GV,
		NotTildeFullEqual: KV,
		NotTildeTilde: XV,
		NotVerticalBar: YV,
		nparallel: ZV,
		npar: JV,
		nparsl: QV,
		npart: ej,
		npolint: tj,
		npr: nj,
		nprcue: rj,
		nprec: ij,
		npreceq: oj,
		npre: sj,
		nrarrc: lj,
		nrarr: aj,
		nrArr: uj,
		nrarrw: cj,
		nrightarrow: fj,
		nRightarrow: dj,
		nrtri: hj,
		nrtrie: pj,
		nsc: gj,
		nsccue: mj,
		nsce: vj,
		Nscr: yj,
		nscr: bj,
		nshortmid: wj,
		nshortparallel: xj,
		nsim: Sj,
		nsime: _j,
		nsimeq: kj,
		nsmid: Tj,
		nspar: Cj,
		nsqsube: Ej,
		nsqsupe: Lj,
		nsub: Aj,
		nsubE: Mj,
		nsube: Nj,
		nsubset: $j,
		nsubseteq: Pj,
		nsubseteqq: Oj,
		nsucc: Rj,
		nsucceq: Dj,
		nsup: zj,
		nsupE: Ij,
		nsupe: Fj,
		nsupset: Hj,
		nsupseteq: qj,
		nsupseteqq: Bj,
		ntgl: Wj,
		Ntilde: Uj,
		ntilde: Vj,
		ntlg: jj,
		ntriangleleft: Gj,
		ntrianglelefteq: Kj,
		ntriangleright: Xj,
		ntrianglerighteq: Yj,
		Nu: Zj,
		nu: Jj,
		num: Qj,
		numero: eG,
		numsp: tG,
		nvap: nG,
		nvdash: rG,
		nvDash: iG,
		nVdash: oG,
		nVDash: sG,
		nvge: lG,
		nvgt: aG,
		nvHarr: uG,
		nvinfin: cG,
		nvlArr: fG,
		nvle: dG,
		nvlt: hG,
		nvltrie: pG,
		nvrArr: gG,
		nvrtrie: mG,
		nvsim: vG,
		nwarhk: yG,
		nwarr: bG,
		nwArr: wG,
		nwarrow: xG,
		nwnear: SG,
		Oacute: _G,
		oacute: kG,
		oast: TG,
		Ocirc: CG,
		ocirc: EG,
		ocir: LG,
		Ocy: AG,
		ocy: MG,
		odash: NG,
		Odblac: $G,
		odblac: PG,
		odiv: OG,
		odot: RG,
		odsold: DG,
		OElig: zG,
		oelig: IG,
		ofcir: FG,
		Ofr: HG,
		ofr: qG,
		ogon: BG,
		Ograve: WG,
		ograve: UG,
		ogt: VG,
		ohbar: jG,
		ohm: GG,
		oint: KG,
		olarr: XG,
		olcir: YG,
		olcross: ZG,
		oline: JG,
		olt: QG,
		Omacr: e9,
		omacr: t9,
		Omega: n9,
		omega: r9,
		Omicron: i9,
		omicron: o9,
		omid: s9,
		ominus: l9,
		Oopf: a9,
		oopf: u9,
		opar: c9,
		OpenCurlyDoubleQuote: f9,
		OpenCurlyQuote: d9,
		operp: h9,
		oplus: p9,
		orarr: g9,
		Or: m9,
		or: v9,
		ord: y9,
		order: b9,
		orderof: w9,
		ordf: x9,
		ordm: S9,
		origof: _9,
		oror: k9,
		orslope: T9,
		orv: C9,
		oS: E9,
		Oscr: L9,
		oscr: A9,
		Oslash: M9,
		oslash: N9,
		osol: $9,
		Otilde: P9,
		otilde: O9,
		otimesas: R9,
		Otimes: D9,
		otimes: z9,
		Ouml: I9,
		ouml: F9,
		ovbar: H9,
		OverBar: q9,
		OverBrace: B9,
		OverBracket: W9,
		OverParenthesis: U9,
		para: V9,
		parallel: j9,
		par: G9,
		parsim: K9,
		parsl: X9,
		part: Y9,
		PartialD: Z9,
		Pcy: J9,
		pcy: Q9,
		percnt: e7,
		period: t7,
		permil: n7,
		perp: r7,
		pertenk: i7,
		Pfr: o7,
		pfr: s7,
		Phi: l7,
		phi: a7,
		phiv: u7,
		phmmat: c7,
		phone: f7,
		Pi: d7,
		pi: h7,
		pitchfork: p7,
		piv: g7,
		planck: m7,
		planckh: v7,
		plankv: y7,
		plusacir: b7,
		plusb: w7,
		pluscir: x7,
		plus: S7,
		plusdo: _7,
		plusdu: k7,
		pluse: T7,
		PlusMinus: C7,
		plusmn: E7,
		plussim: L7,
		plustwo: A7,
		pm: M7,
		Poincareplane: N7,
		pointint: $7,
		popf: P7,
		Popf: O7,
		pound: R7,
		prap: D7,
		Pr: z7,
		pr: I7,
		prcue: F7,
		precapprox: H7,
		prec: q7,
		preccurlyeq: B7,
		Precedes: W7,
		PrecedesEqual: U7,
		PrecedesSlantEqual: V7,
		PrecedesTilde: j7,
		preceq: G7,
		precnapprox: K7,
		precneqq: X7,
		precnsim: Y7,
		pre: Z7,
		prE: J7,
		precsim: Q7,
		prime: eK,
		Prime: tK,
		primes: nK,
		prnap: rK,
		prnE: iK,
		prnsim: oK,
		prod: sK,
		Product: lK,
		profalar: aK,
		profline: uK,
		profsurf: cK,
		prop: fK,
		Proportional: dK,
		Proportion: hK,
		propto: pK,
		prsim: gK,
		prurel: mK,
		Pscr: vK,
		pscr: yK,
		Psi: bK,
		psi: wK,
		puncsp: xK,
		Qfr: SK,
		qfr: _K,
		qint: kK,
		qopf: TK,
		Qopf: CK,
		qprime: EK,
		Qscr: LK,
		qscr: AK,
		quaternions: MK,
		quatint: NK,
		quest: $K,
		questeq: PK,
		quot: OK,
		QUOT: RK,
		rAarr: DK,
		race: zK,
		Racute: IK,
		racute: FK,
		radic: HK,
		raemptyv: qK,
		rang: BK,
		Rang: WK,
		rangd: UK,
		range: VK,
		rangle: jK,
		raquo: GK,
		rarrap: KK,
		rarrb: XK,
		rarrbfs: YK,
		rarrc: ZK,
		rarr: JK,
		Rarr: QK,
		rArr: eX,
		rarrfs: tX,
		rarrhk: nX,
		rarrlp: rX,
		rarrpl: iX,
		rarrsim: oX,
		Rarrtl: sX,
		rarrtl: lX,
		rarrw: aX,
		ratail: uX,
		rAtail: cX,
		ratio: fX,
		rationals: dX,
		rbarr: hX,
		rBarr: pX,
		RBarr: gX,
		rbbrk: mX,
		rbrace: vX,
		rbrack: yX,
		rbrke: bX,
		rbrksld: wX,
		rbrkslu: xX,
		Rcaron: SX,
		rcaron: _X,
		Rcedil: kX,
		rcedil: TX,
		rceil: CX,
		rcub: EX,
		Rcy: LX,
		rcy: AX,
		rdca: MX,
		rdldhar: NX,
		rdquo: $X,
		rdquor: PX,
		rdsh: OX,
		real: RX,
		realine: DX,
		realpart: zX,
		reals: IX,
		Re: FX,
		rect: HX,
		reg: qX,
		REG: BX,
		ReverseElement: WX,
		ReverseEquilibrium: UX,
		ReverseUpEquilibrium: VX,
		rfisht: jX,
		rfloor: GX,
		rfr: KX,
		Rfr: XX,
		rHar: YX,
		rhard: ZX,
		rharu: JX,
		rharul: QX,
		Rho: eY,
		rho: tY,
		rhov: nY,
		RightAngleBracket: rY,
		RightArrowBar: iY,
		rightarrow: oY,
		RightArrow: sY,
		Rightarrow: lY,
		RightArrowLeftArrow: aY,
		rightarrowtail: uY,
		RightCeiling: cY,
		RightDoubleBracket: fY,
		RightDownTeeVector: dY,
		RightDownVectorBar: hY,
		RightDownVector: pY,
		RightFloor: gY,
		rightharpoondown: mY,
		rightharpoonup: vY,
		rightleftarrows: yY,
		rightleftharpoons: bY,
		rightrightarrows: wY,
		rightsquigarrow: xY,
		RightTeeArrow: SY,
		RightTee: _Y,
		RightTeeVector: kY,
		rightthreetimes: TY,
		RightTriangleBar: CY,
		RightTriangle: EY,
		RightTriangleEqual: LY,
		RightUpDownVector: AY,
		RightUpTeeVector: MY,
		RightUpVectorBar: NY,
		RightUpVector: $Y,
		RightVectorBar: PY,
		RightVector: OY,
		ring: RY,
		risingdotseq: DY,
		rlarr: zY,
		rlhar: IY,
		rlm: FY,
		rmoustache: HY,
		rmoust: qY,
		rnmid: BY,
		roang: WY,
		roarr: UY,
		robrk: VY,
		ropar: jY,
		ropf: GY,
		Ropf: KY,
		roplus: XY,
		rotimes: YY,
		RoundImplies: ZY,
		rpar: JY,
		rpargt: QY,
		rppolint: eZ,
		rrarr: tZ,
		Rrightarrow: nZ,
		rsaquo: rZ,
		rscr: iZ,
		Rscr: oZ,
		rsh: sZ,
		Rsh: lZ,
		rsqb: aZ,
		rsquo: uZ,
		rsquor: cZ,
		rthree: fZ,
		rtimes: dZ,
		rtri: hZ,
		rtrie: pZ,
		rtrif: gZ,
		rtriltri: mZ,
		RuleDelayed: vZ,
		ruluhar: yZ,
		rx: bZ,
		Sacute: wZ,
		sacute: xZ,
		sbquo: SZ,
		scap: _Z,
		Scaron: kZ,
		scaron: TZ,
		Sc: CZ,
		sc: EZ,
		sccue: LZ,
		sce: AZ,
		scE: MZ,
		Scedil: NZ,
		scedil: $Z,
		Scirc: PZ,
		scirc: OZ,
		scnap: RZ,
		scnE: DZ,
		scnsim: zZ,
		scpolint: IZ,
		scsim: FZ,
		Scy: HZ,
		scy: qZ,
		sdotb: BZ,
		sdot: WZ,
		sdote: UZ,
		searhk: VZ,
		searr: jZ,
		seArr: GZ,
		searrow: KZ,
		sect: XZ,
		semi: YZ,
		seswar: ZZ,
		setminus: JZ,
		setmn: QZ,
		sext: eJ,
		Sfr: tJ,
		sfr: nJ,
		sfrown: rJ,
		sharp: iJ,
		SHCHcy: oJ,
		shchcy: sJ,
		SHcy: lJ,
		shcy: aJ,
		ShortDownArrow: uJ,
		ShortLeftArrow: cJ,
		shortmid: fJ,
		shortparallel: dJ,
		ShortRightArrow: hJ,
		ShortUpArrow: pJ,
		shy: gJ,
		Sigma: mJ,
		sigma: vJ,
		sigmaf: yJ,
		sigmav: bJ,
		sim: wJ,
		simdot: xJ,
		sime: SJ,
		simeq: _J,
		simg: kJ,
		simgE: TJ,
		siml: CJ,
		simlE: EJ,
		simne: LJ,
		simplus: AJ,
		simrarr: MJ,
		slarr: NJ,
		SmallCircle: $J,
		smallsetminus: PJ,
		smashp: OJ,
		smeparsl: RJ,
		smid: DJ,
		smile: zJ,
		smt: IJ,
		smte: FJ,
		smtes: HJ,
		SOFTcy: qJ,
		softcy: BJ,
		solbar: WJ,
		solb: UJ,
		sol: VJ,
		Sopf: jJ,
		sopf: GJ,
		spades: KJ,
		spadesuit: XJ,
		spar: YJ,
		sqcap: ZJ,
		sqcaps: JJ,
		sqcup: QJ,
		sqcups: eQ,
		Sqrt: tQ,
		sqsub: nQ,
		sqsube: rQ,
		sqsubset: iQ,
		sqsubseteq: oQ,
		sqsup: sQ,
		sqsupe: lQ,
		sqsupset: aQ,
		sqsupseteq: uQ,
		square: cQ,
		Square: fQ,
		SquareIntersection: dQ,
		SquareSubset: hQ,
		SquareSubsetEqual: pQ,
		SquareSuperset: gQ,
		SquareSupersetEqual: mQ,
		SquareUnion: vQ,
		squarf: yQ,
		squ: bQ,
		squf: wQ,
		srarr: xQ,
		Sscr: SQ,
		sscr: _Q,
		ssetmn: kQ,
		ssmile: TQ,
		sstarf: CQ,
		Star: EQ,
		star: LQ,
		starf: AQ,
		straightepsilon: MQ,
		straightphi: NQ,
		strns: $Q,
		sub: PQ,
		Sub: OQ,
		subdot: RQ,
		subE: DQ,
		sube: zQ,
		subedot: IQ,
		submult: FQ,
		subnE: HQ,
		subne: qQ,
		subplus: BQ,
		subrarr: WQ,
		subset: UQ,
		Subset: VQ,
		subseteq: jQ,
		subseteqq: GQ,
		SubsetEqual: KQ,
		subsetneq: XQ,
		subsetneqq: YQ,
		subsim: ZQ,
		subsub: JQ,
		subsup: QQ,
		succapprox: eee,
		succ: tee,
		succcurlyeq: nee,
		Succeeds: ree,
		SucceedsEqual: iee,
		SucceedsSlantEqual: oee,
		SucceedsTilde: see,
		succeq: lee,
		succnapprox: aee,
		succneqq: uee,
		succnsim: cee,
		succsim: fee,
		SuchThat: dee,
		sum: hee,
		Sum: pee,
		sung: gee,
		sup1: mee,
		sup2: vee,
		sup3: yee,
		sup: bee,
		Sup: wee,
		supdot: xee,
		supdsub: See,
		supE: _ee,
		supe: kee,
		supedot: Tee,
		Superset: Cee,
		SupersetEqual: Eee,
		suphsol: Lee,
		suphsub: Aee,
		suplarr: Mee,
		supmult: Nee,
		supnE: $ee,
		supne: Pee,
		supplus: Oee,
		supset: Ree,
		Supset: Dee,
		supseteq: zee,
		supseteqq: Iee,
		supsetneq: Fee,
		supsetneqq: Hee,
		supsim: qee,
		supsub: Bee,
		supsup: Wee,
		swarhk: Uee,
		swarr: Vee,
		swArr: jee,
		swarrow: Gee,
		swnwar: Kee,
		szlig: Xee,
		Tab: Yee,
		target: Zee,
		Tau: Jee,
		tau: Qee,
		tbrk: ete,
		Tcaron: tte,
		tcaron: nte,
		Tcedil: rte,
		tcedil: ite,
		Tcy: ote,
		tcy: ste,
		tdot: lte,
		telrec: ate,
		Tfr: ute,
		tfr: cte,
		there4: fte,
		therefore: dte,
		Therefore: hte,
		Theta: pte,
		theta: gte,
		thetasym: mte,
		thetav: vte,
		thickapprox: yte,
		thicksim: bte,
		ThickSpace: wte,
		ThinSpace: xte,
		thinsp: Ste,
		thkap: _te,
		thksim: kte,
		THORN: Tte,
		thorn: Cte,
		tilde: Ete,
		Tilde: Lte,
		TildeEqual: Ate,
		TildeFullEqual: Mte,
		TildeTilde: Nte,
		timesbar: $te,
		timesb: Pte,
		times: Ote,
		timesd: Rte,
		tint: Dte,
		toea: zte,
		topbot: Ite,
		topcir: Fte,
		top: Hte,
		Topf: qte,
		topf: Bte,
		topfork: Wte,
		tosa: Ute,
		tprime: Vte,
		trade: jte,
		TRADE: Gte,
		triangle: Kte,
		triangledown: Xte,
		triangleleft: Yte,
		trianglelefteq: Zte,
		triangleq: Jte,
		triangleright: Qte,
		trianglerighteq: ene,
		tridot: tne,
		trie: nne,
		triminus: rne,
		TripleDot: ine,
		triplus: one,
		trisb: sne,
		tritime: lne,
		trpezium: ane,
		Tscr: une,
		tscr: cne,
		TScy: fne,
		tscy: dne,
		TSHcy: hne,
		tshcy: pne,
		Tstrok: gne,
		tstrok: mne,
		twixt: vne,
		twoheadleftarrow: yne,
		twoheadrightarrow: bne,
		Uacute: wne,
		uacute: xne,
		uarr: Sne,
		Uarr: _ne,
		uArr: kne,
		Uarrocir: Tne,
		Ubrcy: Cne,
		ubrcy: Ene,
		Ubreve: Lne,
		ubreve: Ane,
		Ucirc: Mne,
		ucirc: Nne,
		Ucy: $ne,
		ucy: Pne,
		udarr: One,
		Udblac: Rne,
		udblac: Dne,
		udhar: zne,
		ufisht: Ine,
		Ufr: Fne,
		ufr: Hne,
		Ugrave: qne,
		ugrave: Bne,
		uHar: Wne,
		uharl: Une,
		uharr: Vne,
		uhblk: jne,
		ulcorn: Gne,
		ulcorner: Kne,
		ulcrop: Xne,
		ultri: Yne,
		Umacr: Zne,
		umacr: Jne,
		uml: Qne,
		UnderBar: ere,
		UnderBrace: tre,
		UnderBracket: nre,
		UnderParenthesis: rre,
		Union: ire,
		UnionPlus: ore,
		Uogon: sre,
		uogon: lre,
		Uopf: are,
		uopf: ure,
		UpArrowBar: cre,
		uparrow: fre,
		UpArrow: dre,
		Uparrow: hre,
		UpArrowDownArrow: pre,
		updownarrow: gre,
		UpDownArrow: mre,
		Updownarrow: vre,
		UpEquilibrium: yre,
		upharpoonleft: bre,
		upharpoonright: wre,
		uplus: xre,
		UpperLeftArrow: Sre,
		UpperRightArrow: _re,
		upsi: kre,
		Upsi: Tre,
		upsih: Cre,
		Upsilon: Ere,
		upsilon: Lre,
		UpTeeArrow: Are,
		UpTee: Mre,
		upuparrows: Nre,
		urcorn: $re,
		urcorner: Pre,
		urcrop: Ore,
		Uring: Rre,
		uring: Dre,
		urtri: zre,
		Uscr: Ire,
		uscr: Fre,
		utdot: Hre,
		Utilde: qre,
		utilde: Bre,
		utri: Wre,
		utrif: Ure,
		uuarr: Vre,
		Uuml: jre,
		uuml: Gre,
		uwangle: Kre,
		vangrt: Xre,
		varepsilon: Yre,
		varkappa: Zre,
		varnothing: Jre,
		varphi: Qre,
		varpi: eie,
		varpropto: tie,
		varr: nie,
		vArr: rie,
		varrho: iie,
		varsigma: oie,
		varsubsetneq: sie,
		varsubsetneqq: lie,
		varsupsetneq: aie,
		varsupsetneqq: uie,
		vartheta: cie,
		vartriangleleft: fie,
		vartriangleright: die,
		vBar: hie,
		Vbar: pie,
		vBarv: gie,
		Vcy: mie,
		vcy: vie,
		vdash: yie,
		vDash: bie,
		Vdash: wie,
		VDash: xie,
		Vdashl: Sie,
		veebar: _ie,
		vee: kie,
		Vee: Tie,
		veeeq: Cie,
		vellip: Eie,
		verbar: Lie,
		Verbar: Aie,
		vert: Mie,
		Vert: Nie,
		VerticalBar: $ie,
		VerticalLine: Pie,
		VerticalSeparator: Oie,
		VerticalTilde: Rie,
		VeryThinSpace: Die,
		Vfr: zie,
		vfr: Iie,
		vltri: Fie,
		vnsub: Hie,
		vnsup: qie,
		Vopf: Bie,
		vopf: Wie,
		vprop: Uie,
		vrtri: Vie,
		Vscr: jie,
		vscr: Gie,
		vsubnE: Kie,
		vsubne: Xie,
		vsupnE: Yie,
		vsupne: Zie,
		Vvdash: Jie,
		vzigzag: Qie,
		Wcirc: eoe,
		wcirc: toe,
		wedbar: noe,
		wedge: roe,
		Wedge: ioe,
		wedgeq: ooe,
		weierp: soe,
		Wfr: loe,
		wfr: aoe,
		Wopf: uoe,
		wopf: coe,
		wp: foe,
		wr: doe,
		wreath: hoe,
		Wscr: poe,
		wscr: goe,
		xcap: moe,
		xcirc: voe,
		xcup: yoe,
		xdtri: boe,
		Xfr: woe,
		xfr: xoe,
		xharr: Soe,
		xhArr: _oe,
		Xi: koe,
		xi: Toe,
		xlarr: Coe,
		xlArr: Eoe,
		xmap: Loe,
		xnis: Aoe,
		xodot: Moe,
		Xopf: Noe,
		xopf: $oe,
		xoplus: Poe,
		xotime: Ooe,
		xrarr: Roe,
		xrArr: Doe,
		Xscr: zoe,
		xscr: Ioe,
		xsqcup: Foe,
		xuplus: Hoe,
		xutri: qoe,
		xvee: Boe,
		xwedge: Woe,
		Yacute: Uoe,
		yacute: Voe,
		YAcy: joe,
		yacy: Goe,
		Ycirc: Koe,
		ycirc: Xoe,
		Ycy: Yoe,
		ycy: Zoe,
		yen: Joe,
		Yfr: Qoe,
		yfr: ese,
		YIcy: tse,
		yicy: nse,
		Yopf: rse,
		yopf: ise,
		Yscr: ose,
		yscr: sse,
		YUcy: lse,
		yucy: ase,
		yuml: use,
		Yuml: cse,
		Zacute: fse,
		zacute: dse,
		Zcaron: hse,
		zcaron: pse,
		Zcy: gse,
		zcy: mse,
		Zdot: vse,
		zdot: yse,
		zeetrf: bse,
		ZeroWidthSpace: wse,
		Zeta: xse,
		zeta: Sse,
		zfr: _se,
		Zfr: kse,
		ZHcy: Tse,
		zhcy: Cse,
		zigrarr: Ese,
		zopf: Lse,
		Zopf: Ase,
		Zscr: Mse,
		zscr: Nse,
		zwj: $se,
		zwnj: Pse,
	},
	Ose = 'Á',
	Rse = 'á',
	Dse = 'Â',
	zse = 'â',
	Ise = '´',
	Fse = 'Æ',
	Hse = 'æ',
	qse = 'À',
	Bse = 'à',
	Wse = '&',
	Use = '&',
	Vse = 'Å',
	jse = 'å',
	Gse = 'Ã',
	Kse = 'ã',
	Xse = 'Ä',
	Yse = 'ä',
	Zse = '¦',
	Jse = 'Ç',
	Qse = 'ç',
	ele = '¸',
	tle = '¢',
	nle = '©',
	rle = '©',
	ile = '¤',
	ole = '°',
	sle = '÷',
	lle = 'É',
	ale = 'é',
	ule = 'Ê',
	cle = 'ê',
	fle = 'È',
	dle = 'è',
	hle = 'Ð',
	ple = 'ð',
	gle = 'Ë',
	mle = 'ë',
	vle = '½',
	yle = '¼',
	ble = '¾',
	wle = '>',
	xle = '>',
	Sle = 'Í',
	_le = 'í',
	kle = 'Î',
	Tle = 'î',
	Cle = '¡',
	Ele = 'Ì',
	Lle = 'ì',
	Ale = '¿',
	Mle = 'Ï',
	Nle = 'ï',
	$le = '«',
	Ple = '<',
	Ole = '<',
	Rle = '¯',
	Dle = 'µ',
	zle = '·',
	Ile = ' ',
	Fle = '¬',
	Hle = 'Ñ',
	qle = 'ñ',
	Ble = 'Ó',
	Wle = 'ó',
	Ule = 'Ô',
	Vle = 'ô',
	jle = 'Ò',
	Gle = 'ò',
	Kle = 'ª',
	Xle = 'º',
	Yle = 'Ø',
	Zle = 'ø',
	Jle = 'Õ',
	Qle = 'õ',
	eae = 'Ö',
	tae = 'ö',
	nae = '¶',
	rae = '±',
	iae = '£',
	oae = '"',
	sae = '"',
	lae = '»',
	aae = '®',
	uae = '®',
	cae = '§',
	fae = '­',
	dae = '¹',
	hae = '²',
	pae = '³',
	gae = 'ß',
	mae = 'Þ',
	vae = 'þ',
	yae = '×',
	bae = 'Ú',
	wae = 'ú',
	xae = 'Û',
	Sae = 'û',
	_ae = 'Ù',
	kae = 'ù',
	Tae = '¨',
	Cae = 'Ü',
	Eae = 'ü',
	Lae = 'Ý',
	Aae = 'ý',
	Mae = '¥',
	Nae = 'ÿ',
	$ae = {
		Aacute: Ose,
		aacute: Rse,
		Acirc: Dse,
		acirc: zse,
		acute: Ise,
		AElig: Fse,
		aelig: Hse,
		Agrave: qse,
		agrave: Bse,
		amp: Wse,
		AMP: Use,
		Aring: Vse,
		aring: jse,
		Atilde: Gse,
		atilde: Kse,
		Auml: Xse,
		auml: Yse,
		brvbar: Zse,
		Ccedil: Jse,
		ccedil: Qse,
		cedil: ele,
		cent: tle,
		copy: nle,
		COPY: rle,
		curren: ile,
		deg: ole,
		divide: sle,
		Eacute: lle,
		eacute: ale,
		Ecirc: ule,
		ecirc: cle,
		Egrave: fle,
		egrave: dle,
		ETH: hle,
		eth: ple,
		Euml: gle,
		euml: mle,
		frac12: vle,
		frac14: yle,
		frac34: ble,
		gt: wle,
		GT: xle,
		Iacute: Sle,
		iacute: _le,
		Icirc: kle,
		icirc: Tle,
		iexcl: Cle,
		Igrave: Ele,
		igrave: Lle,
		iquest: Ale,
		Iuml: Mle,
		iuml: Nle,
		laquo: $le,
		lt: Ple,
		LT: Ole,
		macr: Rle,
		micro: Dle,
		middot: zle,
		nbsp: Ile,
		not: Fle,
		Ntilde: Hle,
		ntilde: qle,
		Oacute: Ble,
		oacute: Wle,
		Ocirc: Ule,
		ocirc: Vle,
		Ograve: jle,
		ograve: Gle,
		ordf: Kle,
		ordm: Xle,
		Oslash: Yle,
		oslash: Zle,
		Otilde: Jle,
		otilde: Qle,
		Ouml: eae,
		ouml: tae,
		para: nae,
		plusmn: rae,
		pound: iae,
		quot: oae,
		QUOT: sae,
		raquo: lae,
		reg: aae,
		REG: uae,
		sect: cae,
		shy: fae,
		sup1: dae,
		sup2: hae,
		sup3: pae,
		szlig: gae,
		THORN: mae,
		thorn: vae,
		times: yae,
		Uacute: bae,
		uacute: wae,
		Ucirc: xae,
		ucirc: Sae,
		Ugrave: _ae,
		ugrave: kae,
		uml: Tae,
		Uuml: Cae,
		uuml: Eae,
		Yacute: Lae,
		yacute: Aae,
		yen: Mae,
		yuml: Nae,
	},
	Pae = '&',
	Oae = "'",
	Rae = '>',
	Dae = '<',
	zae = '"',
	Ew = { amp: Pae, apos: Oae, gt: Rae, lt: Dae, quot: zae };
var Xh = {};
const Iae = {
	0: 65533,
	128: 8364,
	130: 8218,
	131: 402,
	132: 8222,
	133: 8230,
	134: 8224,
	135: 8225,
	136: 710,
	137: 8240,
	138: 352,
	139: 8249,
	140: 338,
	142: 381,
	145: 8216,
	146: 8217,
	147: 8220,
	148: 8221,
	149: 8226,
	150: 8211,
	151: 8212,
	152: 732,
	153: 8482,
	154: 353,
	155: 8250,
	156: 339,
	158: 382,
	159: 376,
};
var Fae =
	(Ro && Ro.__importDefault) ||
	function (e) {
		return e && e.__esModule ? e : { default: e };
	};
Object.defineProperty(Xh, '__esModule', { value: !0 });
var Fv = Fae(Iae),
	Hae =
		String.fromCodePoint ||
		function (e) {
			var t = '';
			return (
				e > 65535 &&
					((e -= 65536),
					(t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
					(e = 56320 | (e & 1023))),
				(t += String.fromCharCode(e)),
				t
			);
		};
function qae(e) {
	return (e >= 55296 && e <= 57343) || e > 1114111
		? '�'
		: (e in Fv.default && (e = Fv.default[e]), Hae(e));
}
Xh.default = qae;
var Wc =
	(Ro && Ro.__importDefault) ||
	function (e) {
		return e && e.__esModule ? e : { default: e };
	};
Object.defineProperty(pi, '__esModule', { value: !0 });
pi.decodeHTML = pi.decodeHTMLStrict = pi.decodeXML = void 0;
var Xd = Wc(Cw),
	Bae = Wc($ae),
	Wae = Wc(Ew),
	Hv = Wc(Xh),
	Uae = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
pi.decodeXML = Lw(Wae.default);
pi.decodeHTMLStrict = Lw(Xd.default);
function Lw(e) {
	var t = Aw(e);
	return function (r) {
		return String(r).replace(Uae, t);
	};
}
var qv = function (e, t) {
	return e < t ? 1 : -1;
};
pi.decodeHTML = (function () {
	for (
		var e = Object.keys(Bae.default).sort(qv),
			t = Object.keys(Xd.default).sort(qv),
			r = 0,
			o = 0;
		r < t.length;
		r++
	)
		e[o] === t[r] ? ((t[r] += ';?'), o++) : (t[r] += ';');
	var s = new RegExp(
			'&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
			'g',
		),
		u = Aw(Xd.default);
	function f(d) {
		return d.substr(-1) !== ';' && (d += ';'), u(d);
	}
	return function (d) {
		return String(d).replace(s, f);
	};
})();
function Aw(e) {
	return function (r) {
		if (r.charAt(1) === '#') {
			var o = r.charAt(2);
			return o === 'X' || o === 'x'
				? Hv.default(parseInt(r.substr(3), 16))
				: Hv.default(parseInt(r.substr(2), 10));
		}
		return e[r.slice(1, -1)] || r;
	};
}
var Zn = {},
	Mw =
		(Ro && Ro.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(Zn, '__esModule', { value: !0 });
Zn.escapeUTF8 =
	Zn.escape =
	Zn.encodeNonAsciiHTML =
	Zn.encodeHTML =
	Zn.encodeXML =
		void 0;
var Vae = Mw(Ew),
	Nw = Pw(Vae.default),
	$w = Ow(Nw);
Zn.encodeXML = zw(Nw);
var jae = Mw(Cw),
	Yh = Pw(jae.default),
	Gae = Ow(Yh);
Zn.encodeHTML = Xae(Yh, Gae);
Zn.encodeNonAsciiHTML = zw(Yh);
function Pw(e) {
	return Object.keys(e)
		.sort()
		.reduce(function (t, r) {
			return (t[e[r]] = '&' + r + ';'), t;
		}, {});
}
function Ow(e) {
	for (var t = [], r = [], o = 0, s = Object.keys(e); o < s.length; o++) {
		var u = s[o];
		u.length === 1 ? t.push('\\' + u) : r.push(u);
	}
	t.sort();
	for (var f = 0; f < t.length - 1; f++) {
		for (
			var d = f;
			d < t.length - 1 && t[d].charCodeAt(1) + 1 === t[d + 1].charCodeAt(1);

		)
			d += 1;
		var h = 1 + d - f;
		h < 3 || t.splice(f, h, t[f] + '-' + t[d]);
	}
	return r.unshift('[' + t.join('') + ']'), new RegExp(r.join('|'), 'g');
}
var Rw =
		/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
	Kae =
		String.prototype.codePointAt != null
			? function (e) {
					return e.codePointAt(0);
				}
			: function (e) {
					return (
						(e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536
					);
				};
function Uc(e) {
	return (
		'&#x' +
		(e.length > 1 ? Kae(e) : e.charCodeAt(0)).toString(16).toUpperCase() +
		';'
	);
}
function Xae(e, t) {
	return function (r) {
		return r
			.replace(t, function (o) {
				return e[o];
			})
			.replace(Rw, Uc);
	};
}
var Dw = new RegExp($w.source + '|' + Rw.source, 'g');
function Yae(e) {
	return e.replace(Dw, Uc);
}
Zn.escape = Yae;
function Zae(e) {
	return e.replace($w, Uc);
}
Zn.escapeUTF8 = Zae;
function zw(e) {
	return function (t) {
		return t.replace(Dw, function (r) {
			return e[r] || Uc(r);
		});
	};
}
(function (e) {
	Object.defineProperty(e, '__esModule', { value: !0 }),
		(e.decodeXMLStrict =
			e.decodeHTML5Strict =
			e.decodeHTML4Strict =
			e.decodeHTML5 =
			e.decodeHTML4 =
			e.decodeHTMLStrict =
			e.decodeHTML =
			e.decodeXML =
			e.encodeHTML5 =
			e.encodeHTML4 =
			e.escapeUTF8 =
			e.escape =
			e.encodeNonAsciiHTML =
			e.encodeHTML =
			e.encodeXML =
			e.encode =
			e.decodeStrict =
			e.decode =
				void 0);
	var t = pi,
		r = Zn;
	function o(h, p) {
		return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(h);
	}
	e.decode = o;
	function s(h, p) {
		return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(h);
	}
	e.decodeStrict = s;
	function u(h, p) {
		return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(h);
	}
	e.encode = u;
	var f = Zn;
	Object.defineProperty(e, 'encodeXML', {
		enumerable: !0,
		get: function () {
			return f.encodeXML;
		},
	}),
		Object.defineProperty(e, 'encodeHTML', {
			enumerable: !0,
			get: function () {
				return f.encodeHTML;
			},
		}),
		Object.defineProperty(e, 'encodeNonAsciiHTML', {
			enumerable: !0,
			get: function () {
				return f.encodeNonAsciiHTML;
			},
		}),
		Object.defineProperty(e, 'escape', {
			enumerable: !0,
			get: function () {
				return f.escape;
			},
		}),
		Object.defineProperty(e, 'escapeUTF8', {
			enumerable: !0,
			get: function () {
				return f.escapeUTF8;
			},
		}),
		Object.defineProperty(e, 'encodeHTML4', {
			enumerable: !0,
			get: function () {
				return f.encodeHTML;
			},
		}),
		Object.defineProperty(e, 'encodeHTML5', {
			enumerable: !0,
			get: function () {
				return f.encodeHTML;
			},
		});
	var d = pi;
	Object.defineProperty(e, 'decodeXML', {
		enumerable: !0,
		get: function () {
			return d.decodeXML;
		},
	}),
		Object.defineProperty(e, 'decodeHTML', {
			enumerable: !0,
			get: function () {
				return d.decodeHTML;
			},
		}),
		Object.defineProperty(e, 'decodeHTMLStrict', {
			enumerable: !0,
			get: function () {
				return d.decodeHTMLStrict;
			},
		}),
		Object.defineProperty(e, 'decodeHTML4', {
			enumerable: !0,
			get: function () {
				return d.decodeHTML;
			},
		}),
		Object.defineProperty(e, 'decodeHTML5', {
			enumerable: !0,
			get: function () {
				return d.decodeHTML;
			},
		}),
		Object.defineProperty(e, 'decodeHTML4Strict', {
			enumerable: !0,
			get: function () {
				return d.decodeHTMLStrict;
			},
		}),
		Object.defineProperty(e, 'decodeHTML5Strict', {
			enumerable: !0,
			get: function () {
				return d.decodeHTMLStrict;
			},
		}),
		Object.defineProperty(e, 'decodeXMLStrict', {
			enumerable: !0,
			get: function () {
				return d.decodeXML;
			},
		});
})(Tw);
function Jae(e, t) {
	if (!(e instanceof t))
		throw new TypeError('Cannot call a class as a function');
}
function Qae(e, t) {
	for (var r = 0; r < t.length; r++) {
		var o = t[r];
		(o.enumerable = o.enumerable || !1),
			(o.configurable = !0),
			'value' in o && (o.writable = !0),
			Object.defineProperty(e, o.key, o);
	}
}
function eue(e, t, r) {
	return Qae(e.prototype, t), e;
}
function Iw(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = tue(e)) || t) {
			r && (e = r);
			var o = 0,
				s = function () {};
			return {
				s,
				n: function () {
					return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
				},
				e: function (p) {
					throw p;
				},
				f: s,
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var u = !0,
		f = !1,
		d;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var p = r.next();
			return (u = p.done), p;
		},
		e: function (p) {
			(f = !0), (d = p);
		},
		f: function () {
			try {
				!u && r.return != null && r.return();
			} finally {
				if (f) throw d;
			}
		},
	};
}
function tue(e, t) {
	if (e) {
		if (typeof e == 'string') return Bv(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === 'Object' && e.constructor && (r = e.constructor.name),
			r === 'Map' || r === 'Set')
		)
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return Bv(e, t);
	}
}
function Bv(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
	return o;
}
var nue = Tw,
	Wv = {
		fg: '#FFF',
		bg: '#000',
		newline: !1,
		escapeXML: !1,
		stream: !1,
		colors: rue(),
	};
function rue() {
	var e = {
		0: '#000',
		1: '#A00',
		2: '#0A0',
		3: '#A50',
		4: '#00A',
		5: '#A0A',
		6: '#0AA',
		7: '#AAA',
		8: '#555',
		9: '#F55',
		10: '#5F5',
		11: '#FF5',
		12: '#55F',
		13: '#F5F',
		14: '#5FF',
		15: '#FFF',
	};
	return (
		bu(0, 5).forEach(function (t) {
			bu(0, 5).forEach(function (r) {
				bu(0, 5).forEach(function (o) {
					return iue(t, r, o, e);
				});
			});
		}),
		bu(0, 23).forEach(function (t) {
			var r = t + 232,
				o = Fw(t * 10 + 8);
			e[r] = '#' + o + o + o;
		}),
		e
	);
}
function iue(e, t, r, o) {
	var s = 16 + e * 36 + t * 6 + r,
		u = e > 0 ? e * 40 + 55 : 0,
		f = t > 0 ? t * 40 + 55 : 0,
		d = r > 0 ? r * 40 + 55 : 0;
	o[s] = oue([u, f, d]);
}
function Fw(e) {
	for (var t = e.toString(16); t.length < 2; ) t = '0' + t;
	return t;
}
function oue(e) {
	var t = [],
		r = Iw(e),
		o;
	try {
		for (r.s(); !(o = r.n()).done; ) {
			var s = o.value;
			t.push(Fw(s));
		}
	} catch (u) {
		r.e(u);
	} finally {
		r.f();
	}
	return '#' + t.join('');
}
function Uv(e, t, r, o) {
	var s;
	return (
		t === 'text'
			? (s = uue(r, o))
			: t === 'display'
				? (s = lue(e, r, o))
				: t === 'xterm256Foreground'
					? (s = Ou(e, o.colors[r]))
					: t === 'xterm256Background'
						? (s = Ru(e, o.colors[r]))
						: t === 'rgb' && (s = sue(e, r)),
		s
	);
}
function sue(e, t) {
	t = t.substring(2).slice(0, -1);
	var r = +t.substr(0, 2),
		o = t.substring(5).split(';'),
		s = o
			.map(function (u) {
				return ('0' + Number(u).toString(16)).substr(-2);
			})
			.join('');
	return Pu(e, (r === 38 ? 'color:#' : 'background-color:#') + s);
}
function lue(e, t, r) {
	t = parseInt(t, 10);
	var o = {
			'-1': function () {
				return '<br/>';
			},
			0: function () {
				return e.length && Hw(e);
			},
			1: function () {
				return ji(e, 'b');
			},
			3: function () {
				return ji(e, 'i');
			},
			4: function () {
				return ji(e, 'u');
			},
			8: function () {
				return Pu(e, 'display:none');
			},
			9: function () {
				return ji(e, 'strike');
			},
			22: function () {
				return Pu(
					e,
					'font-weight:normal;text-decoration:none;font-style:normal',
				);
			},
			23: function () {
				return jv(e, 'i');
			},
			24: function () {
				return jv(e, 'u');
			},
			39: function () {
				return Ou(e, r.fg);
			},
			49: function () {
				return Ru(e, r.bg);
			},
			53: function () {
				return Pu(e, 'text-decoration:overline');
			},
		},
		s;
	return (
		o[t]
			? (s = o[t]())
			: 4 < t && t < 7
				? (s = ji(e, 'blink'))
				: 29 < t && t < 38
					? (s = Ou(e, r.colors[t - 30]))
					: 39 < t && t < 48
						? (s = Ru(e, r.colors[t - 40]))
						: 89 < t && t < 98
							? (s = Ou(e, r.colors[8 + (t - 90)]))
							: 99 < t && t < 108 && (s = Ru(e, r.colors[8 + (t - 100)])),
		s
	);
}
function Hw(e) {
	var t = e.slice(0);
	return (
		(e.length = 0),
		t
			.reverse()
			.map(function (r) {
				return '</' + r + '>';
			})
			.join('')
	);
}
function bu(e, t) {
	for (var r = [], o = e; o <= t; o++) r.push(o);
	return r;
}
function aue(e) {
	return function (t) {
		return (e === null || t.category !== e) && e !== 'all';
	};
}
function Vv(e) {
	e = parseInt(e, 10);
	var t = null;
	return (
		e === 0
			? (t = 'all')
			: e === 1
				? (t = 'bold')
				: 2 < e && e < 5
					? (t = 'underline')
					: 4 < e && e < 7
						? (t = 'blink')
						: e === 8
							? (t = 'hide')
							: e === 9
								? (t = 'strike')
								: (29 < e && e < 38) || e === 39 || (89 < e && e < 98)
									? (t = 'foreground-color')
									: ((39 < e && e < 48) || e === 49 || (99 < e && e < 108)) &&
										(t = 'background-color'),
		t
	);
}
function uue(e, t) {
	return t.escapeXML ? nue.encodeXML(e) : e;
}
function ji(e, t, r) {
	return (
		r || (r = ''),
		e.push(t),
		'<'.concat(t).concat(r ? ' style="'.concat(r, '"') : '', '>')
	);
}
function Pu(e, t) {
	return ji(e, 'span', t);
}
function Ou(e, t) {
	return ji(e, 'span', 'color:' + t);
}
function Ru(e, t) {
	return ji(e, 'span', 'background-color:' + t);
}
function jv(e, t) {
	var r;
	if ((e.slice(-1)[0] === t && (r = e.pop()), r)) return '</' + t + '>';
}
function cue(e, t, r) {
	var o = !1,
		s = 3;
	function u() {
		return '';
	}
	function f(O, U) {
		return r('xterm256Foreground', U), '';
	}
	function d(O, U) {
		return r('xterm256Background', U), '';
	}
	function h(O) {
		return t.newline ? r('display', -1) : r('text', O), '';
	}
	function p(O, U) {
		(o = !0),
			U.trim().length === 0 && (U = '0'),
			(U = U.trimRight(';').split(';'));
		var B = Iw(U),
			te;
		try {
			for (B.s(); !(te = B.n()).done; ) {
				var J = te.value;
				r('display', J);
			}
		} catch (K) {
			B.e(K);
		} finally {
			B.f();
		}
		return '';
	}
	function m(O) {
		return r('text', O), '';
	}
	function v(O) {
		return r('rgb', O), '';
	}
	var b = [
		{ pattern: /^\x08+/, sub: u },
		{ pattern: /^\x1b\[[012]?K/, sub: u },
		{ pattern: /^\x1b\[\(B/, sub: u },
		{ pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: v },
		{ pattern: /^\x1b\[38;5;(\d+)m/, sub: f },
		{ pattern: /^\x1b\[48;5;(\d+)m/, sub: d },
		{ pattern: /^\n/, sub: h },
		{ pattern: /^\r+\n/, sub: h },
		{ pattern: /^\r/, sub: h },
		{ pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: p },
		{ pattern: /^\x1b\[\d?J/, sub: u },
		{ pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: u },
		{ pattern: /^\x1b\[?[\d;]{0,3}/, sub: u },
		{ pattern: /^(([^\x1b\x08\r\n])+)/, sub: m },
	];
	function w(O, U) {
		(U > s && o) || ((o = !1), (e = e.replace(O.pattern, O.sub)));
	}
	var C = [],
		M = e,
		E = M.length;
	e: for (; E > 0; ) {
		for (var N = 0, A = 0, $ = b.length; A < $; N = ++A) {
			var L = b[N];
			if ((w(L, N), e.length !== E)) {
				E = e.length;
				continue e;
			}
		}
		if (e.length === E) break;
		C.push(0), (E = e.length);
	}
	return C;
}
function fue(e, t, r) {
	return (
		t !== 'text' &&
			((e = e.filter(aue(Vv(r)))),
			e.push({ token: t, data: r, category: Vv(r) })),
		e
	);
}
var due = (function () {
		function e(t) {
			Jae(this, e),
				(t = t || {}),
				t.colors && (t.colors = Object.assign({}, Wv.colors, t.colors)),
				(this.options = Object.assign({}, Wv, t)),
				(this.stack = []),
				(this.stickyStack = []);
		}
		return (
			eue(e, [
				{
					key: 'toHtml',
					value: function (r) {
						var o = this;
						r = typeof r == 'string' ? [r] : r;
						var s = this.stack,
							u = this.options,
							f = [];
						return (
							this.stickyStack.forEach(function (d) {
								var h = Uv(s, d.token, d.data, u);
								h && f.push(h);
							}),
							cue(r.join(''), u, function (d, h) {
								var p = Uv(s, d, h, u);
								p && f.push(p),
									u.stream && (o.stickyStack = fue(o.stickyStack, d, h));
							}),
							s.length && f.push(Hw(s)),
							f.join('')
						);
					},
				},
			]),
			e
		);
	})(),
	hue = due;
const pue = kw(hue);
function gue(e, t) {
	return t && e.endsWith(t);
}
async function qw(e, t, r) {
	const o = encodeURI(`${e}:${t}:${r}`);
	await fetch(`/__open-in-editor?file=${o}`);
}
function Zh(e) {
	return new pue({ fg: e ? '#FFF' : '#000', bg: e ? '#000' : '#FFF' });
}
function mue(e) {
	return e === null || (typeof e != 'function' && typeof e != 'object');
}
function Bw(e) {
	let t = e;
	if (
		(mue(e) &&
			(t = { message: String(t).split(/\n/g)[0], stack: String(t), name: '' }),
		!e)
	) {
		const r = new Error('unknown error');
		t = { message: r.message, stack: r.stack, name: '' };
	}
	return (
		(t.stacks = pA(t.stack || t.stackStr || '', { ignoreStackEntries: [] })), t
	);
}
var Jn = Uint8Array,
	ys = Uint16Array,
	vue = Int32Array,
	Ww = new Jn([
		0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
		5, 5, 5, 0, 0, 0, 0,
	]),
	Uw = new Jn([
		0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
		11, 11, 12, 12, 13, 13, 0, 0,
	]),
	yue = new Jn([
		16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
	]),
	Vw = function (e, t) {
		for (var r = new ys(31), o = 0; o < 31; ++o) r[o] = t += 1 << e[o - 1];
		for (var s = new vue(r[30]), o = 1; o < 30; ++o)
			for (var u = r[o]; u < r[o + 1]; ++u) s[u] = ((u - r[o]) << 5) | o;
		return { b: r, r: s };
	},
	jw = Vw(Ww, 2),
	Gw = jw.b,
	bue = jw.r;
(Gw[28] = 258), (bue[258] = 28);
var wue = Vw(Uw, 0),
	xue = wue.b,
	Yd = new ys(32768);
for (var Ct = 0; Ct < 32768; ++Ct) {
	var Di = ((Ct & 43690) >> 1) | ((Ct & 21845) << 1);
	(Di = ((Di & 52428) >> 2) | ((Di & 13107) << 2)),
		(Di = ((Di & 61680) >> 4) | ((Di & 3855) << 4)),
		(Yd[Ct] = (((Di & 65280) >> 8) | ((Di & 255) << 8)) >> 1);
}
var Hl = function (e, t, r) {
		for (var o = e.length, s = 0, u = new ys(t); s < o; ++s)
			e[s] && ++u[e[s] - 1];
		var f = new ys(t);
		for (s = 1; s < t; ++s) f[s] = (f[s - 1] + u[s - 1]) << 1;
		var d;
		if (r) {
			d = new ys(1 << t);
			var h = 15 - t;
			for (s = 0; s < o; ++s)
				if (e[s])
					for (
						var p = (s << 4) | e[s],
							m = t - e[s],
							v = f[e[s] - 1]++ << m,
							b = v | ((1 << m) - 1);
						v <= b;
						++v
					)
						d[Yd[v] >> h] = p;
		} else
			for (d = new ys(o), s = 0; s < o; ++s)
				e[s] && (d[s] = Yd[f[e[s] - 1]++] >> (15 - e[s]));
		return d;
	},
	ka = new Jn(288);
for (var Ct = 0; Ct < 144; ++Ct) ka[Ct] = 8;
for (var Ct = 144; Ct < 256; ++Ct) ka[Ct] = 9;
for (var Ct = 256; Ct < 280; ++Ct) ka[Ct] = 7;
for (var Ct = 280; Ct < 288; ++Ct) ka[Ct] = 8;
var Kw = new Jn(32);
for (var Ct = 0; Ct < 32; ++Ct) Kw[Ct] = 5;
var Sue = Hl(ka, 9, 1),
	_ue = Hl(Kw, 5, 1),
	ad = function (e) {
		for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
		return t;
	},
	vr = function (e, t, r) {
		var o = (t / 8) | 0;
		return ((e[o] | (e[o + 1] << 8)) >> (t & 7)) & r;
	},
	ud = function (e, t) {
		var r = (t / 8) | 0;
		return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (t & 7);
	},
	kue = function (e) {
		return ((e + 7) / 8) | 0;
	},
	Xw = function (e, t, r) {
		return (
			(t == null || t < 0) && (t = 0),
			(r == null || r > e.length) && (r = e.length),
			new Jn(e.subarray(t, r))
		);
	},
	Tue = [
		'unexpected EOF',
		'invalid block type',
		'invalid length/literal',
		'invalid distance',
		'stream finished',
		'no stream handler',
		,
		'no callback',
		'invalid UTF-8 data',
		'extra field too long',
		'date not in range 1980-2099',
		'filename too long',
		'stream finishing',
		'invalid zip data',
	],
	Fn = function (e, t, r) {
		var o = new Error(t || Tue[e]);
		if (
			((o.code = e),
			Error.captureStackTrace && Error.captureStackTrace(o, Fn),
			!r)
		)
			throw o;
		return o;
	},
	Jh = function (e, t, r, o) {
		var s = e.length,
			u = 0;
		if (!s || (t.f && !t.l)) return r || new Jn(0);
		var f = !r,
			d = f || t.i != 2,
			h = t.i;
		f && (r = new Jn(s * 3));
		var p = function (Ae) {
				var z = r.length;
				if (Ae > z) {
					var q = new Jn(Math.max(z * 2, Ae));
					q.set(r), (r = q);
				}
			},
			m = t.f || 0,
			v = t.p || 0,
			b = t.b || 0,
			w = t.l,
			C = t.d,
			M = t.m,
			E = t.n,
			N = s * 8;
		do {
			if (!w) {
				m = vr(e, v, 1);
				var A = vr(e, v + 1, 3);
				if (((v += 3), A))
					if (A == 1) (w = Sue), (C = _ue), (M = 9), (E = 5);
					else if (A == 2) {
						var U = vr(e, v, 31) + 257,
							B = vr(e, v + 10, 15) + 4,
							te = U + vr(e, v + 5, 31) + 1;
						v += 14;
						for (var J = new Jn(te), K = new Jn(19), ee = 0; ee < B; ++ee)
							K[yue[ee]] = vr(e, v + ee * 3, 7);
						v += B * 3;
						for (
							var Y = ad(K), I = (1 << Y) - 1, F = Hl(K, Y, 1), ee = 0;
							ee < te;

						) {
							var k = F[vr(e, v, I)];
							v += k & 15;
							var $ = k >> 4;
							if ($ < 16) J[ee++] = $;
							else {
								var W = 0,
									V = 0;
								for (
									$ == 16
										? ((V = 3 + vr(e, v, 3)), (v += 2), (W = J[ee - 1]))
										: $ == 17
											? ((V = 3 + vr(e, v, 7)), (v += 3))
											: $ == 18 && ((V = 11 + vr(e, v, 127)), (v += 7));
									V--;

								)
									J[ee++] = W;
							}
						}
						var ie = J.subarray(0, U),
							ye = J.subarray(U);
						(M = ad(ie)), (E = ad(ye)), (w = Hl(ie, M, 1)), (C = Hl(ye, E, 1));
					} else Fn(1);
				else {
					var $ = kue(v) + 4,
						L = e[$ - 4] | (e[$ - 3] << 8),
						O = $ + L;
					if (O > s) {
						h && Fn(0);
						break;
					}
					d && p(b + L),
						r.set(e.subarray($, O), b),
						(t.b = b += L),
						(t.p = v = O * 8),
						(t.f = m);
					continue;
				}
				if (v > N) {
					h && Fn(0);
					break;
				}
			}
			d && p(b + 131072);
			for (var Ne = (1 << M) - 1, We = (1 << E) - 1, Ve = v; ; Ve = v) {
				var W = w[ud(e, v) & Ne],
					nt = W >> 4;
				if (((v += W & 15), v > N)) {
					h && Fn(0);
					break;
				}
				if ((W || Fn(2), nt < 256)) r[b++] = nt;
				else if (nt == 256) {
					(Ve = v), (w = null);
					break;
				} else {
					var et = nt - 254;
					if (nt > 264) {
						var ee = nt - 257,
							Xe = Ww[ee];
						(et = vr(e, v, (1 << Xe) - 1) + Gw[ee]), (v += Xe);
					}
					var Le = C[ud(e, v) & We],
						Z = Le >> 4;
					Le || Fn(3), (v += Le & 15);
					var ye = xue[Z];
					if (Z > 3) {
						var Xe = Uw[Z];
						(ye += ud(e, v) & ((1 << Xe) - 1)), (v += Xe);
					}
					if (v > N) {
						h && Fn(0);
						break;
					}
					d && p(b + 131072);
					var ae = b + et;
					if (b < ye) {
						var he = u - ye,
							$e = Math.min(ye, ae);
						for (he + b < 0 && Fn(3); b < $e; ++b) r[b] = o[he + b];
					}
					for (; b < ae; ++b) r[b] = r[b - ye];
				}
			}
			(t.l = w),
				(t.p = Ve),
				(t.b = b),
				(t.f = m),
				w && ((m = 1), (t.m = M), (t.d = C), (t.n = E));
		} while (!m);
		return b != r.length && f ? Xw(r, 0, b) : r.subarray(0, b);
	},
	Cue = new Jn(0),
	Eue = function (e) {
		(e[0] != 31 || e[1] != 139 || e[2] != 8) && Fn(6, 'invalid gzip data');
		var t = e[3],
			r = 10;
		t & 4 && (r += (e[10] | (e[11] << 8)) + 2);
		for (var o = ((t >> 3) & 1) + ((t >> 4) & 1); o > 0; o -= !e[r++]);
		return r + (t & 2);
	},
	Lue = function (e) {
		var t = e.length;
		return (
			(e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0
		);
	},
	Aue = function (e, t) {
		return (
			((e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31) &&
				Fn(6, 'invalid zlib data'),
			((e[1] >> 5) & 1) == 1 &&
				Fn(
					6,
					'invalid zlib data: ' +
						(e[1] & 32 ? 'need' : 'unexpected') +
						' dictionary',
				),
			((e[1] >> 3) & 4) + 2
		);
	};
function Mue(e, t) {
	return Jh(e, { i: 2 }, t, t);
}
function Nue(e, t) {
	var r = Eue(e);
	return (
		r + 8 > e.length && Fn(6, 'invalid gzip data'),
		Jh(e.subarray(r, -8), { i: 2 }, new Jn(Lue(e)), t)
	);
}
function $ue(e, t) {
	return Jh(e.subarray(Aue(e), -4), { i: 2 }, t, t);
}
function Pue(e, t) {
	return e[0] == 31 && e[1] == 139 && e[2] == 8
		? Nue(e, t)
		: (e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31
			? Mue(e, t)
			: $ue(e, t);
}
var Zd = typeof TextDecoder < 'u' && new TextDecoder(),
	Oue = 0;
try {
	Zd.decode(Cue, { stream: !0 }), (Oue = 1);
} catch {}
var Rue = function (e) {
	for (var t = '', r = 0; ; ) {
		var o = e[r++],
			s = (o > 127) + (o > 223) + (o > 239);
		if (r + s > e.length) return { s: t, r: Xw(e, r - 1) };
		s
			? s == 3
				? ((o =
						(((o & 15) << 18) |
							((e[r++] & 63) << 12) |
							((e[r++] & 63) << 6) |
							(e[r++] & 63)) -
						65536),
					(t += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
				: s & 1
					? (t += String.fromCharCode(((o & 31) << 6) | (e[r++] & 63)))
					: (t += String.fromCharCode(
							((o & 15) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63),
						))
			: (t += String.fromCharCode(o));
	}
};
function Due(e, t) {
	var r;
	if (Zd) return Zd.decode(e);
	var o = Rue(e),
		s = o.s,
		r = o.r;
	return r.length && Fn(8), s;
}
const cd = () => {},
	hn = () => Promise.resolve();
function zue() {
	const e = Qn({
		state: new Kb(),
		waitForConnection: f,
		reconnect: s,
		ws: new EventTarget(),
	});
	(e.state.filesMap = Qn(e.state.filesMap)),
		(e.state.idMap = Qn(e.state.idMap));
	let t;
	const r = {
		getFiles: () => t.files,
		getPaths: () => t.paths,
		getConfig: () => t.config,
		getResolvedProjectNames: () => t.projects,
		getModuleGraph: async (d, h) => {
			var p;
			return (p = t.moduleGraph[d]) == null ? void 0 : p[h];
		},
		getUnhandledErrors: () => t.unhandledErrors,
		getTransformResult: hn,
		onDone: cd,
		onTaskUpdate: cd,
		writeFile: hn,
		rerun: hn,
		rerunTask: hn,
		updateSnapshot: hn,
		resolveSnapshotPath: hn,
		snapshotSaved: hn,
		onAfterSuiteRun: hn,
		onCancel: hn,
		getCountOfFailedTests: () => 0,
		sendLog: hn,
		resolveSnapshotRawPath: hn,
		readSnapshotFile: hn,
		saveSnapshotFile: hn,
		readTestFile: async (d) => t.sources[d],
		removeSnapshotFile: hn,
		onUnhandledError: cd,
		saveTestFile: hn,
		getProvidedContext: () => ({}),
		getTestFiles: hn,
	};
	e.rpc = r;
	const o = Promise.resolve();
	function s() {
		u();
	}
	async function u() {
		var m;
		const d = await fetch(window.METADATA_PATH),
			h =
				((m = d.headers.get('content-type')) == null
					? void 0
					: m.toLowerCase()) || '';
		if (h.includes('application/gzip') || h.includes('application/x-gzip')) {
			const v = new Uint8Array(await d.arrayBuffer()),
				b = Due(Pue(v));
			t = Bd(b);
		} else t = Bd(await d.text());
		const p = new Event('open');
		e.ws.dispatchEvent(p);
	}
	u();
	function f() {
		return o;
	}
	return e;
}
const vt = (function () {
		return kr
			? zue()
			: uE(wL, {
					reactive: (t, r) => (r === 'state' ? Qn(t) : Gr(t)),
					handlers: {
						onTaskUpdate(t) {
							Ce.resumeRun(t), (qc.value = 'running');
						},
						onFinished(t, r) {
							Ce.endRun(), (Wi.value = (r || []).map(Bw));
						},
						onFinishedReportCoverage() {
							const t = document.querySelector('iframe#vitest-ui-coverage');
							t instanceof HTMLIFrameElement &&
								t.contentWindow &&
								t.contentWindow.location.reload();
						},
					},
				});
	})(),
	Vc = Gr({}),
	Co = qe('CONNECTING'),
	Zt = ke(() => {
		const e = eo.value;
		return e ? lr(e) : void 0;
	}),
	Yw = ke(
		() =>
			Bh(Zt.value)
				.map((e) => (e == null ? void 0 : e.logs) || [])
				.flat() || [],
	);
function lr(e) {
	const t = vt.state.idMap.get(e);
	return t || void 0;
}
const Iue = ke(() => Co.value === 'OPEN'),
	fd = ke(() => Co.value === 'CONNECTING');
ke(() => Co.value === 'CLOSED');
function Fue() {
	return Qh(vt.state.getFiles());
}
function Zw(e) {
	delete e.result;
	const t = Ce.nodes.get(e.id);
	if (t && ((t.state = void 0), (t.duration = void 0), Sa(e)))
		for (const r of e.tasks) Zw(r);
}
function Hue(e) {
	const t = Ce.nodes;
	e.forEach((r) => {
		delete r.result,
			Bh(r).forEach((s) => {
				if ((delete s.result, t.has(s.id))) {
					const u = t.get(s.id);
					u && ((u.state = void 0), (u.duration = void 0));
				}
			});
		const o = t.get(r.id);
		o &&
			((o.state = void 0),
			(o.duration = void 0),
			Mn(o) && (o.collectDuration = void 0));
	});
}
function Qh(e) {
	return (
		Hue(e),
		Ce.startRun(),
		vt.rpc.rerun(
			e.map((t) => t.filepath),
			!0,
		)
	);
}
function que(e) {
	return Zw(e), Ce.startRun(), vt.rpc.rerunTask(e.id);
}
const Do = window.__vitest_browser_runner__;
window.__vitest_ui_api__ = vL;
Et(
	() => vt.ws,
	(e) => {
		(Co.value = kr ? 'OPEN' : 'CONNECTING'),
			e.addEventListener('open', async () => {
				(Co.value = 'OPEN'), vt.state.filesMap.clear();
				let [t, r, o, s] = await Promise.all([
					vt.rpc.getFiles(),
					vt.rpc.getConfig(),
					vt.rpc.getUnhandledErrors(),
					vt.rpc.getResolvedProjectNames(),
				]);
				r.standalone &&
					(t = (await vt.rpc.getTestFiles()).map(
						([{ name: f, root: d }, h]) => {
							const p = Fb(h, d, f);
							return (p.mode = 'skip'), p;
						},
					)),
					Ce.loadFiles(t, s),
					vt.state.collectFiles(t),
					Ce.startRun(),
					(Wi.value = (o || []).map(Bw)),
					(Vc.value = r);
			}),
			e.addEventListener('close', () => {
				setTimeout(() => {
					Co.value === 'CONNECTING' && (Co.value = 'CLOSED');
				}, 1e3);
			});
	},
	{ immediate: !0 },
);
const Bue = { 'text-2xl': '' },
	Wue = { 'text-lg': '', op50: '' },
	Uue = ct({
		__name: 'ConnectionOverlay',
		setup(e) {
			return (t, r) =>
				H(Iue)
					? Ke('', !0)
					: (oe(),
						ve(
							'div',
							{
								key: 0,
								fixed: '',
								'inset-0': '',
								p2: '',
								'z-10': '',
								'select-none': '',
								text: 'center sm',
								bg: 'overlay',
								'backdrop-blur-sm': '',
								'backdrop-saturate-0': '',
								onClick:
									r[0] ||
									(r[0] = (...o) => H(vt).reconnect && H(vt).reconnect(...o)),
							},
							[
								Q(
									'div',
									{
										'h-full': '',
										flex: '~ col gap-2',
										'items-center': '',
										'justify-center': '',
										class: it(H(fd) ? 'animate-pulse' : ''),
									},
									[
										Q(
											'div',
											{
												text: '5xl',
												class: it(
													H(fd)
														? 'i-carbon:renew animate-spin animate-reverse'
														: 'i-carbon-wifi-off',
												),
											},
											null,
											2,
										),
										Q(
											'div',
											Bue,
											He(H(fd) ? 'Connecting...' : 'Disconnected'),
											1,
										),
										Q(
											'div',
											Wue,
											' Check your terminal or start a new server with `' +
												He(
													H(Do)
														? `vitest --browser=${H(Do).config.browser.name}`
														: 'vitest --ui',
												) +
												'` ',
											1,
										),
									],
									2,
								),
							],
						));
		},
	}),
	Vue = ['aria-label', 'opacity', 'disabled', 'hover'],
	wi = ct({
		__name: 'IconButton',
		props: {
			icon: {},
			title: {},
			disabled: { type: Boolean },
			active: { type: Boolean },
		},
		setup(e) {
			return (t, r) => (
				oe(),
				ve(
					'button',
					{
						'aria-label': t.title,
						role: 'button',
						opacity: t.disabled ? 10 : 70,
						rounded: '',
						disabled: t.disabled,
						hover: t.disabled || t.active ? '' : 'bg-active op100',
						class: it([
							'w-1.4em h-1.4em flex',
							[{ 'bg-gray-500:35 op100': t.active }],
						]),
					},
					[
						vn(t.$slots, 'default', {}, () => [
							Q('span', { class: it(t.icon), ma: '', block: '' }, null, 2),
						]),
					],
					10,
					Vue,
				)
			);
		},
	}),
	jue = { h: 'full', flex: '~ col' },
	Gue = {
		p: '3',
		'h-10': '',
		flex: '~ gap-2',
		'items-center': '',
		'bg-header': '',
		border: 'b base',
	},
	Kue = {
		p: 'l3 y2 r2',
		flex: '~ gap-2',
		'items-center': '',
		'bg-header': '',
		border: 'b-2 base',
	},
	Xue = { class: 'pointer-events-none', 'text-sm': '' },
	Yue = { key: 0 },
	Zue = { id: 'tester-container', relative: '' },
	Jue = ['data-scale'],
	Gv = 20,
	Que = 100,
	ece = ct({
		__name: 'BrowserIframe',
		setup(e) {
			const t = {
				'small-mobile': [320, 568],
				'large-mobile': [414, 896],
				tablet: [834, 1112],
			};
			function r(p) {
				const m = t[p];
				return Ir.value[0] === m[0] && Ir.value[1] === m[1];
			}
			async function o(p) {
				Ir.value = t[p];
			}
			const { width: s, height: u } = jh(),
				f = ke(() => {
					const v =
							s.value * (mn.details.size / 100) * (mn.details.browser / 100) -
							Gv,
						b = u.value - Que;
					return { width: v, height: b };
				}),
				d = ke(() => {
					const [p, m] = Ir.value,
						{ width: v, height: b } = f.value,
						w = v > p ? 1 : v / p,
						C = b > m ? 1 : b / m;
					return Math.min(1, w, C);
				}),
				h = ke(() => {
					const p = f.value.width,
						m = Ir.value[0];
					return `${Math.trunc((p + Gv - m) / 2)}px`;
				});
			return (p, m) => {
				const v = wi,
					b = Kr('tooltip');
				return (
					oe(),
					ve('div', jue, [
						Q('div', Gue, [
							gt(
								Pe(
									v,
									{
										title: 'Show Navigation Panel',
										'rotate-180': '',
										icon: 'i-carbon:side-panel-close',
										onClick: m[0] || (m[0] = (w) => H(mL)()),
									},
									null,
									512,
								),
								[
									[Gi, H(mn).navigation <= 2],
									[b, 'Show Navigation Panel', void 0, { bottom: !0 }],
								],
							),
							m[6] ||
								(m[6] = Q(
									'div',
									{ class: 'i-carbon-content-delivery-network' },
									null,
									-1,
								)),
							m[7] ||
								(m[7] = Q(
									'span',
									{
										'pl-1': '',
										'font-bold': '',
										'text-sm': '',
										'flex-auto': '',
										'ws-nowrap': '',
										'overflow-hidden': '',
										truncate: '',
									},
									'Browser UI',
									-1,
								)),
							gt(
								Pe(
									v,
									{
										title: 'Hide Right Panel',
										icon: 'i-carbon:side-panel-close',
										'rotate-180': '',
										onClick: m[1] || (m[1] = (w) => H(pL)()),
									},
									null,
									512,
								),
								[
									[Gi, H(mn).details.main > 0],
									[b, 'Hide Right Panel', void 0, { bottom: !0 }],
								],
							),
							gt(
								Pe(
									v,
									{
										title: 'Show Right Panel',
										icon: 'i-carbon:side-panel-close',
										onClick: m[2] || (m[2] = (w) => H(gL)()),
									},
									null,
									512,
								),
								[
									[Gi, H(mn).details.main === 0],
									[b, 'Show Right Panel', void 0, { bottom: !0 }],
								],
							),
						]),
						Q('div', Kue, [
							gt(
								Pe(
									v,
									{
										title: 'Small mobile',
										icon: 'i-carbon:mobile',
										active: r('small-mobile'),
										onClick: m[3] || (m[3] = (w) => o('small-mobile')),
									},
									null,
									8,
									['active'],
								),
								[[b, 'Small mobile', void 0, { bottom: !0 }]],
							),
							gt(
								Pe(
									v,
									{
										title: 'Large mobile',
										icon: 'i-carbon:mobile-add',
										active: r('large-mobile'),
										onClick: m[4] || (m[4] = (w) => o('large-mobile')),
									},
									null,
									8,
									['active'],
								),
								[[b, 'Large mobile', void 0, { bottom: !0 }]],
							),
							gt(
								Pe(
									v,
									{
										title: 'Tablet',
										icon: 'i-carbon:tablet',
										active: r('tablet'),
										onClick: m[5] || (m[5] = (w) => o('tablet')),
									},
									null,
									8,
									['active'],
								),
								[[b, 'Tablet', void 0, { bottom: !0 }]],
							),
							Q('span', Xue, [
								pt(He(H(Ir)[0]) + 'x' + He(H(Ir)[1]) + 'px ', 1),
								H(d) < 1
									? (oe(),
										ve(
											'span',
											Yue,
											'(' + He((H(d) * 100).toFixed(0)) + '%)',
											1,
										))
									: Ke('', !0),
							]),
						]),
						Q('div', Zue, [
							Q(
								'div',
								{
									id: 'tester-ui',
									class:
										'flex h-full justify-center items-center font-light op70',
									'data-scale': H(d),
									style: Qt({
										'--viewport-width': `${H(Ir)[0]}px`,
										'--viewport-height': `${H(Ir)[1]}px`,
										'--tester-transform': `scale(${H(d)})`,
										'--tester-margin-left': H(h),
									}),
								},
								' Select a test to run ',
								12,
								Jue,
							),
						]),
					])
				);
			};
		},
	}),
	tce = Xr(ece, [['__scopeId', 'data-v-65565204']]),
	Jw = ct({
		__name: 'Modal',
		props: Kl(
			{ direction: { default: 'bottom' } },
			{ modelValue: { type: Boolean, default: !1 }, modelModifiers: {} },
		),
		emits: ['update:modelValue'],
		setup(e) {
			const t = Ac(e, 'modelValue'),
				r = ke(() => {
					switch (e.direction) {
						case 'bottom':
							return 'bottom-0 left-0 right-0 border-t';
						case 'top':
							return 'top-0 left-0 right-0 border-b';
						case 'left':
							return 'bottom-0 left-0 top-0 border-r';
						case 'right':
							return 'bottom-0 top-0 right-0 border-l';
						default:
							return '';
					}
				}),
				o = ke(() => {
					switch (e.direction) {
						case 'bottom':
							return 'translateY(100%)';
						case 'top':
							return 'translateY(-100%)';
						case 'left':
							return 'translateX(-100%)';
						case 'right':
							return 'translateX(100%)';
						default:
							return '';
					}
				}),
				s = () => (t.value = !1);
			return (u, f) => (
				oe(),
				ve(
					'div',
					{
						class: it([
							'fixed inset-0 z-40',
							t.value ? '' : 'pointer-events-none',
						]),
					},
					[
						Q(
							'div',
							{
								class: it([
									'bg-base inset-0 absolute transition-opacity duration-500 ease-out',
									t.value ? 'opacity-50' : 'opacity-0',
								]),
								onClick: s,
							},
							null,
							2,
						),
						Q(
							'div',
							{
								class: it([
									'bg-base border-base absolute transition-all duration-200 ease-out scrolls',
									[H(r)],
								]),
								style: Qt(t.value ? {} : { transform: H(o) }),
							},
							[vn(u.$slots, 'default')],
							6,
						),
					],
					2,
				)
			);
		},
	}),
	nce = {
		'w-350': '',
		'max-w-screen': '',
		'h-full': '',
		flex: '',
		'flex-col': '',
	},
	rce = { 'p-4': '', relative: '', border: 'base b' },
	ice = { op50: '', 'font-mono': '', 'text-sm': '' },
	oce = { op50: '', 'font-mono': '', 'text-sm': '' },
	sce = { class: 'scrolls', grid: '~ cols-1 rows-[min-content]', 'p-4': '' },
	lce = ['src', 'alt'],
	ace = { key: 1 },
	uce = ct({
		__name: 'ScreenshotError',
		props: { file: {}, name: {}, url: {} },
		emits: ['close'],
		setup(e, { emit: t }) {
			const r = t;
			return (
				tw('Escape', () => {
					r('close');
				}),
				(o, s) => {
					const u = wi;
					return (
						oe(),
						ve('div', nce, [
							Q('div', rce, [
								s[1] || (s[1] = Q('p', null, 'Screenshot error', -1)),
								Q('p', ice, He(o.file), 1),
								Q('p', oce, He(o.name), 1),
								Pe(u, {
									icon: 'i-carbon:close',
									title: 'Close',
									absolute: '',
									'top-5px': '',
									'right-5px': '',
									'text-2xl': '',
									onClick: s[0] || (s[0] = (f) => r('close')),
								}),
							]),
							Q('div', sce, [
								o.url
									? (oe(),
										ve(
											'img',
											{
												key: 0,
												src: o.url,
												alt: `Screenshot error for '${o.name}' test in file '${o.file}'`,
												border: 'base t r b l dotted red-500',
											},
											null,
											8,
											lce,
										))
									: (oe(),
										ve(
											'div',
											ace,
											' Something was wrong, the image cannot be resolved. ',
										)),
							]),
						])
					);
				}
			);
		},
	}),
	cce = Xr(uce, [['__scopeId', 'data-v-93900314']]);
function ql(e) {
	return e
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}
const Ta = $E(),
	fce = vE(Ta),
	dce = { class: 'scrolls scrolls-rounded task-error' },
	hce = ['onClickPassive'],
	pce = ['innerHTML'],
	gce = ct({
		__name: 'ViewReportError',
		props: { root: {}, filename: {}, error: {} },
		setup(e) {
			const t = e;
			function r(f) {
				return f.startsWith(t.root) ? f.slice(t.root.length) : f;
			}
			const o = ke(() => Zh(Ta.value)),
				s = ke(() => {
					var f;
					return !!((f = t.error) != null && f.diff);
				}),
				u = ke(() =>
					t.error.diff ? o.value.toHtml(ql(t.error.diff)) : void 0,
				);
			return (f, d) => {
				const h = Kr('tooltip');
				return (
					oe(),
					ve('div', dce, [
						Q('pre', null, [
							Q('b', null, He(f.error.name || f.error.nameStr), 1),
							pt(': ' + He(f.error.message), 1),
						]),
						(oe(!0),
						ve(
							ut,
							null,
							gi(
								f.error.stacks,
								(p, m) => (
									oe(),
									ve(
										'div',
										{
											key: m,
											class: 'op80 flex gap-x-2 items-center',
											'data-testid': 'stack',
										},
										[
											Q(
												'pre',
												null,
												' - ' +
													He(r(p.file)) +
													':' +
													He(p.line) +
													':' +
													He(p.column),
												1,
											),
											H(gue)(p.file, f.filename)
												? gt(
														(oe(),
														ve(
															'div',
															{
																key: 0,
																class:
																	'i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em',
																tabindex: '0',
																'aria-label': 'Open in Editor',
																onClickPassive: (v) =>
																	H(qw)(p.file, p.line, p.column),
															},
															null,
															40,
															hce,
														)),
														[[h, 'Open in Editor', void 0, { bottom: !0 }]],
													)
												: Ke('', !0),
										],
									)
								),
							),
							128,
						)),
						H(s)
							? (oe(),
								ve(
									'pre',
									{ key: 0, 'data-testid': 'diff', innerHTML: H(u) },
									null,
									8,
									pce,
								))
							: Ke('', !0),
					])
				);
			};
		},
	}),
	mce = Xr(gce, [['__scopeId', 'data-v-9dd6eaea']]),
	vce = { 'h-full': '', class: 'scrolls' },
	yce = ['id'],
	bce = { flex: '~ gap-2 items-center' },
	wce = {
		key: 0,
		class: 'scrolls scrolls-rounded task-error',
		'data-testid': 'task-error',
	},
	xce = ['innerHTML'],
	Sce = {
		key: 1,
		bg: 'green-500/10',
		text: 'green-500 sm',
		p: 'x4 y2',
		'm-2': '',
		rounded: '',
	},
	_ce = ct({
		__name: 'ViewReport',
		props: { file: {} },
		setup(e) {
			const t = e;
			function r(b, w) {
				var C;
				return ((C = b.result) == null ? void 0 : C.state) !== 'fail'
					? []
					: b.type === 'test'
						? [{ ...b, level: w }]
						: [{ ...b, level: w }, ...b.tasks.flatMap((M) => r(M, w + 1))];
			}
			function o(b, w) {
				var E, N, A;
				let C = '';
				(E = w.message) != null &&
					E.includes('\x1B') &&
					(C = `<b>${w.nameStr || w.name}</b>: ${b.toHtml(ql(w.message))}`);
				const M = (N = w.stackStr) == null ? void 0 : N.includes('\x1B');
				return (
					(M || ((A = w.stack) != null && A.includes('\x1B'))) &&
						(C.length > 0
							? (C += b.toHtml(ql(M ? w.stackStr : w.stack)))
							: (C = `<b>${w.nameStr || w.name}</b>: ${w.message}${b.toHtml(ql(M ? w.stackStr : w.stack))}`)),
					C.length > 0 ? C : null
				);
			}
			function s(b, w) {
				const C = Zh(b);
				return w.map((M) => {
					var A;
					const E = M.result;
					if (!E) return M;
					const N =
						(A = E.errors) == null
							? void 0
							: A.map(($) => o(C, $))
									.filter(($) => $ != null)
									.join('<br><br>');
					return N != null && N.length && (E.htmlError = N), M;
				});
			}
			const u = ke(() => {
				var E, N;
				const b = t.file,
					w =
						((E = b == null ? void 0 : b.tasks) == null
							? void 0
							: E.flatMap((A) => r(A, 0))) ?? [],
					C = b == null ? void 0 : b.result;
				if ((N = C == null ? void 0 : C.errors) == null ? void 0 : N[0]) {
					const A = {
						id: b.id,
						file: b,
						name: b.name,
						level: 0,
						type: 'suite',
						mode: 'run',
						meta: {},
						tasks: [],
						result: C,
					};
					w.unshift(A);
				}
				return w.length > 0 ? s(Ta.value, w) : w;
			});
			function f(b) {
				var C;
				const w = (C = b.meta) == null ? void 0 : C.failScreenshotPath;
				w && fetch(`/__open-in-editor?file=${encodeURIComponent(w)}`);
			}
			const d = qe(!1),
				h = qe(Date.now()),
				p = qe(),
				m = ke(() => {
					var C;
					const b = (C = p.value) == null ? void 0 : C.meta.failScreenshotPath,
						w = h.value;
					return b
						? `/__screenshot-error?file=${encodeURIComponent(b)}&t=${w}`
						: void 0;
				});
			function v(b) {
				(p.value = b), (h.value = Date.now()), (d.value = !0);
			}
			return (
				Et(
					() => [mw.value],
					([b]) => {
						if (b != null) {
							const w = document.querySelector(`[id='${b}'`);
							w != null &&
								Ot(() => {
									w.scrollIntoView();
								});
						}
					},
					{ flush: 'post' },
				),
				(b, w) => {
					const C = wi,
						M = mce,
						E = cce,
						N = Jw,
						A = Kr('tooltip');
					return (
						oe(),
						ve('div', vce, [
							H(u).length
								? (oe(!0),
									ve(
										ut,
										{ key: 0 },
										gi(H(u), ($) => {
											var L, O, U, B;
											return (
												oe(),
												ve(
													'div',
													{ id: $.id, key: $.id },
													[
														Q(
															'div',
															{
																bg: 'red-500/10',
																text: 'red-500 sm',
																p: 'x3 y2',
																'm-2': '',
																rounded: '',
																style: Qt({
																	'margin-left': `${(L = $.result) != null && L.htmlError ? 0.5 : 2 * $.level + 0.5}rem`,
																}),
															},
															[
																Q('div', bce, [
																	Q('span', null, He($.name), 1),
																	H(Do) &&
																	(O = $.meta) != null &&
																	O.failScreenshotPath
																		? (oe(),
																			ve(
																				ut,
																				{ key: 0 },
																				[
																					gt(
																						Pe(
																							C,
																							{
																								class: '!op-100',
																								icon: 'i-carbon:image',
																								title: 'View screenshot error',
																								onClick: (te) => v($),
																							},
																							null,
																							8,
																							['onClick'],
																						),
																						[
																							[
																								A,
																								'View screenshot error',
																								void 0,
																								{ bottom: !0 },
																							],
																						],
																					),
																					gt(
																						Pe(
																							C,
																							{
																								class: '!op-100',
																								icon: 'i-carbon:image-reference',
																								title:
																									'Open screenshot error in editor',
																								onClick: (te) => f($),
																							},
																							null,
																							8,
																							['onClick'],
																						),
																						[
																							[
																								A,
																								'Open screenshot error in editor',
																								void 0,
																								{ bottom: !0 },
																							],
																						],
																					),
																				],
																				64,
																			))
																		: Ke('', !0),
																]),
																(U = $.result) != null && U.htmlError
																	? (oe(),
																		ve('div', wce, [
																			Q(
																				'pre',
																				{ innerHTML: $.result.htmlError },
																				null,
																				8,
																				xce,
																			),
																		]))
																	: (B = $.result) != null && B.errors
																		? (oe(!0),
																			ve(
																				ut,
																				{ key: 1 },
																				gi($.result.errors, (te, J) => {
																					var K;
																					return (
																						oe(),
																						tt(
																							M,
																							{
																								key: J,
																								error: te,
																								filename:
																									(K = b.file) == null
																										? void 0
																										: K.name,
																								root: H(Vc).root,
																							},
																							null,
																							8,
																							['error', 'filename', 'root'],
																						)
																					);
																				}),
																				128,
																			))
																		: Ke('', !0),
															],
															4,
														),
													],
													8,
													yce,
												)
											);
										}),
										128,
									))
								: (oe(), ve('div', Sce, ' All tests passed in this file ')),
							H(Do)
								? (oe(),
									tt(
										N,
										{
											key: 2,
											modelValue: H(d),
											'onUpdate:modelValue':
												w[1] || (w[1] = ($) => (kt(d) ? (d.value = $) : null)),
											direction: 'right',
										},
										{
											default: rt(() => [
												H(p)
													? (oe(),
														tt(
															K0,
															{ key: 0 },
															{
																default: rt(() => [
																	Pe(
																		E,
																		{
																			file: H(p).file.filepath,
																			name: H(p).name,
																			url: H(m),
																			onClose:
																				w[0] || (w[0] = ($) => (d.value = !1)),
																		},
																		null,
																		8,
																		['file', 'name', 'url'],
																	),
																]),
																_: 1,
															},
														))
													: Ke('', !0),
											]),
											_: 1,
										},
										8,
										['modelValue'],
									))
								: Ke('', !0),
						])
					);
				}
			);
		},
	}),
	kce = Xr(_ce, [['__scopeId', 'data-v-363718dc']]),
	Tce = { border: 'b base', 'p-4': '' },
	Cce = ['innerHTML'],
	Ece = ct({
		__name: 'ViewConsoleOutputEntry',
		props: { taskName: {}, type: {}, time: {}, content: {} },
		setup(e) {
			function t(r) {
				return new Date(r).toLocaleTimeString();
			}
			return (r, o) => (
				oe(),
				ve('div', Tce, [
					Q(
						'div',
						{
							'text-xs': '',
							'mb-1': '',
							class: it(
								r.type === 'stderr' ? 'text-red-600 dark:text-red-300' : 'op30',
							),
						},
						He(t(r.time)) + ' | ' + He(r.taskName) + ' | ' + He(r.type),
						3,
					),
					Q('pre', { 'data-type': 'html', innerHTML: r.content }, null, 8, Cce),
				])
			);
		},
	}),
	Lce = {
		key: 0,
		'h-full': '',
		class: 'scrolls',
		flex: '',
		'flex-col': '',
		'data-testid': 'logs',
	},
	Ace = { key: 1, p6: '' },
	Mce = ct({
		__name: 'ViewConsoleOutput',
		setup(e) {
			const t = ke(() => {
				const o = Yw.value;
				if (o) {
					const s = Zh(Ta.value);
					return o.map(({ taskId: u, type: f, time: d, content: h }) => ({
						taskId: u,
						type: f,
						time: d,
						content: s.toHtml(ql(h)),
					}));
				}
			});
			function r(o) {
				const s = o && vt.state.idMap.get(o);
				return s && 'filepath' in s
					? s.name
					: (s ? XC(s).slice(1).join(' > ') : '-') || '-';
			}
			return (o, s) => {
				var f;
				const u = Ece;
				return (f = H(t)) != null && f.length
					? (oe(),
						ve('div', Lce, [
							(oe(!0),
							ve(
								ut,
								null,
								gi(
									H(t),
									({ taskId: d, type: h, time: p, content: m }) => (
										oe(),
										ve('div', { key: d, 'font-mono': '' }, [
											Pe(
												u,
												{ 'task-name': r(d), type: h, time: p, content: m },
												null,
												8,
												['task-name', 'type', 'time', 'content'],
											),
										])
									),
								),
								128,
							)),
						]))
					: (oe(),
						ve(
							'p',
							Ace,
							s[0] ||
								(s[0] = [
									pt(
										' Log something in your test and it would print here. (e.g. ',
									),
									Q('pre', { inline: '' }, 'console.log(foo)', -1),
									pt(') '),
								]),
						));
			};
		},
	});
var Qw = { exports: {} };
(function (e, t) {
	(function (r, o) {
		e.exports = o();
	})(Ro, function () {
		var r = navigator.userAgent,
			o = navigator.platform,
			s = /gecko\/\d/i.test(r),
			u = /MSIE \d/.test(r),
			f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(r),
			d = /Edge\/(\d+)/.exec(r),
			h = u || f || d,
			p = h && (u ? document.documentMode || 6 : +(d || f)[1]),
			m = !d && /WebKit\//.test(r),
			v = m && /Qt\/\d+\.\d+/.test(r),
			b = !d && /Chrome\/(\d+)/.exec(r),
			w = b && +b[1],
			C = /Opera\//.test(r),
			M = /Apple Computer/.test(navigator.vendor),
			E = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(r),
			N = /PhantomJS/.test(r),
			A = M && (/Mobile\/\w+/.test(r) || navigator.maxTouchPoints > 2),
			$ = /Android/.test(r),
			L = A || $ || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(r),
			O = A || /Mac/.test(o),
			U = /\bCrOS\b/.test(r),
			B = /win/i.test(o),
			te = C && r.match(/Version\/(\d*\.\d*)/);
		te && (te = Number(te[1])), te && te >= 15 && ((C = !1), (m = !0));
		var J = O && (v || (C && (te == null || te < 12.11))),
			K = s || (h && p >= 9);
		function ee(n) {
			return new RegExp('(^|\\s)' + n + '(?:$|\\s)\\s*');
		}
		var Y = function (n, i) {
			var a = n.className,
				l = ee(i).exec(a);
			if (l) {
				var c = a.slice(l.index + l[0].length);
				n.className = a.slice(0, l.index) + (c ? l[1] + c : '');
			}
		};
		function I(n) {
			for (var i = n.childNodes.length; i > 0; --i) n.removeChild(n.firstChild);
			return n;
		}
		function F(n, i) {
			return I(n).appendChild(i);
		}
		function k(n, i, a, l) {
			var c = document.createElement(n);
			if (
				(a && (c.className = a),
				l && (c.style.cssText = l),
				typeof i == 'string')
			)
				c.appendChild(document.createTextNode(i));
			else if (i) for (var g = 0; g < i.length; ++g) c.appendChild(i[g]);
			return c;
		}
		function W(n, i, a, l) {
			var c = k(n, i, a, l);
			return c.setAttribute('role', 'presentation'), c;
		}
		var V;
		document.createRange
			? (V = function (n, i, a, l) {
					var c = document.createRange();
					return c.setEnd(l || n, a), c.setStart(n, i), c;
				})
			: (V = function (n, i, a) {
					var l = document.body.createTextRange();
					try {
						l.moveToElementText(n.parentNode);
					} catch {
						return l;
					}
					return (
						l.collapse(!0),
						l.moveEnd('character', a),
						l.moveStart('character', i),
						l
					);
				});
		function ie(n, i) {
			if ((i.nodeType == 3 && (i = i.parentNode), n.contains))
				return n.contains(i);
			do if ((i.nodeType == 11 && (i = i.host), i == n)) return !0;
			while ((i = i.parentNode));
		}
		function ye(n) {
			var i = n.ownerDocument || n,
				a;
			try {
				a = n.activeElement;
			} catch {
				a = i.body || null;
			}
			for (; a && a.shadowRoot && a.shadowRoot.activeElement; )
				a = a.shadowRoot.activeElement;
			return a;
		}
		function Ne(n, i) {
			var a = n.className;
			ee(i).test(a) || (n.className += (a ? ' ' : '') + i);
		}
		function We(n, i) {
			for (var a = n.split(' '), l = 0; l < a.length; l++)
				a[l] && !ee(a[l]).test(i) && (i += ' ' + a[l]);
			return i;
		}
		var Ve = function (n) {
			n.select();
		};
		A
			? (Ve = function (n) {
					(n.selectionStart = 0), (n.selectionEnd = n.value.length);
				})
			: h &&
				(Ve = function (n) {
					try {
						n.select();
					} catch {}
				});
		function nt(n) {
			return n.display.wrapper.ownerDocument;
		}
		function et(n) {
			return Xe(n.display.wrapper);
		}
		function Xe(n) {
			return n.getRootNode ? n.getRootNode() : n.ownerDocument;
		}
		function Le(n) {
			return nt(n).defaultView;
		}
		function Z(n) {
			var i = Array.prototype.slice.call(arguments, 1);
			return function () {
				return n.apply(null, i);
			};
		}
		function ae(n, i, a) {
			i || (i = {});
			for (var l in n)
				n.hasOwnProperty(l) &&
					(a !== !1 || !i.hasOwnProperty(l)) &&
					(i[l] = n[l]);
			return i;
		}
		function he(n, i, a, l, c) {
			i == null && ((i = n.search(/[^\s\u00a0]/)), i == -1 && (i = n.length));
			for (var g = l || 0, y = c || 0; ; ) {
				var x = n.indexOf('	', g);
				if (x < 0 || x >= i) return y + (i - g);
				(y += x - g), (y += a - (y % a)), (g = x + 1);
			}
		}
		var $e = function () {
			(this.id = null),
				(this.f = null),
				(this.time = 0),
				(this.handler = Z(this.onTimeout, this));
		};
		($e.prototype.onTimeout = function (n) {
			(n.id = 0),
				n.time <= +new Date()
					? n.f()
					: setTimeout(n.handler, n.time - +new Date());
		}),
			($e.prototype.set = function (n, i) {
				this.f = i;
				var a = +new Date() + n;
				(!this.id || a < this.time) &&
					(clearTimeout(this.id),
					(this.id = setTimeout(this.handler, n)),
					(this.time = a));
			});
		function Ae(n, i) {
			for (var a = 0; a < n.length; ++a) if (n[a] == i) return a;
			return -1;
		}
		var z = 50,
			q = {
				toString: function () {
					return 'CodeMirror.Pass';
				},
			},
			X = { scroll: !1 },
			le = { origin: '*mouse' },
			fe = { origin: '+move' };
		function ue(n, i, a) {
			for (var l = 0, c = 0; ; ) {
				var g = n.indexOf('	', l);
				g == -1 && (g = n.length);
				var y = g - l;
				if (g == n.length || c + y >= i) return l + Math.min(y, i - c);
				if (((c += g - l), (c += a - (c % a)), (l = g + 1), c >= i)) return l;
			}
		}
		var Se = [''];
		function xe(n) {
			for (; Se.length <= n; ) Se.push(de(Se) + ' ');
			return Se[n];
		}
		function de(n) {
			return n[n.length - 1];
		}
		function pe(n, i) {
			for (var a = [], l = 0; l < n.length; l++) a[l] = i(n[l], l);
			return a;
		}
		function Be(n, i, a) {
			for (var l = 0, c = a(i); l < n.length && a(n[l]) <= c; ) l++;
			n.splice(l, 0, i);
		}
		function Ee() {}
		function De(n, i) {
			var a;
			return (
				Object.create
					? (a = Object.create(n))
					: ((Ee.prototype = n), (a = new Ee())),
				i && ae(i, a),
				a
			);
		}
		var Ue =
			/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
		function Qe(n) {
			return (
				/\w/.test(n) ||
				(n > '' && (n.toUpperCase() != n.toLowerCase() || Ue.test(n)))
			);
		}
		function ot(n, i) {
			return i
				? i.source.indexOf('\\w') > -1 && Qe(n)
					? !0
					: i.test(n)
				: Qe(n);
		}
		function lt(n) {
			for (var i in n) if (n.hasOwnProperty(i) && n[i]) return !1;
			return !0;
		}
		var At =
			/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
		function st(n) {
			return n.charCodeAt(0) >= 768 && At.test(n);
		}
		function Ut(n, i, a) {
			for (; (a < 0 ? i > 0 : i < n.length) && st(n.charAt(i)); ) i += a;
			return i;
		}
		function It(n, i, a) {
			for (var l = i > a ? -1 : 1; ; ) {
				if (i == a) return i;
				var c = (i + a) / 2,
					g = l < 0 ? Math.ceil(c) : Math.floor(c);
				if (g == i) return n(g) ? i : a;
				n(g) ? (a = g) : (i = g + l);
			}
		}
		function Pn(n, i, a, l) {
			if (!n) return l(i, a, 'ltr', 0);
			for (var c = !1, g = 0; g < n.length; ++g) {
				var y = n[g];
				((y.from < a && y.to > i) || (i == a && y.to == i)) &&
					(l(
						Math.max(y.from, i),
						Math.min(y.to, a),
						y.level == 1 ? 'rtl' : 'ltr',
						g,
					),
					(c = !0));
			}
			c || l(i, a, 'ltr');
		}
		var Nr = null;
		function Dt(n, i, a) {
			var l;
			Nr = null;
			for (var c = 0; c < n.length; ++c) {
				var g = n[c];
				if (g.from < i && g.to > i) return c;
				g.to == i && (g.from != g.to && a == 'before' ? (l = c) : (Nr = c)),
					g.from == i && (g.from != g.to && a != 'before' ? (l = c) : (Nr = c));
			}
			return l ?? Nr;
		}
		var On = (function () {
			var n =
					'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
				i =
					'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
			function a(_) {
				return _ <= 247
					? n.charAt(_)
					: 1424 <= _ && _ <= 1524
						? 'R'
						: 1536 <= _ && _ <= 1785
							? i.charAt(_ - 1536)
							: 1774 <= _ && _ <= 2220
								? 'r'
								: 8192 <= _ && _ <= 8203
									? 'w'
									: _ == 8204
										? 'b'
										: 'L';
			}
			var l = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
				c = /[stwN]/,
				g = /[LRr]/,
				y = /[Lb1n]/,
				x = /[1n]/;
			function S(_, P, D) {
				(this.level = _), (this.from = P), (this.to = D);
			}
			return function (_, P) {
				var D = P == 'ltr' ? 'L' : 'R';
				if (_.length == 0 || (P == 'ltr' && !l.test(_))) return !1;
				for (var G = _.length, j = [], re = 0; re < G; ++re)
					j.push(a(_.charCodeAt(re)));
				for (var ce = 0, me = D; ce < G; ++ce) {
					var be = j[ce];
					be == 'm' ? (j[ce] = me) : (me = be);
				}
				for (var Te = 0, we = D; Te < G; ++Te) {
					var Me = j[Te];
					Me == '1' && we == 'r'
						? (j[Te] = 'n')
						: g.test(Me) && ((we = Me), Me == 'r' && (j[Te] = 'R'));
				}
				for (var Ie = 1, Re = j[0]; Ie < G - 1; ++Ie) {
					var Ye = j[Ie];
					Ye == '+' && Re == '1' && j[Ie + 1] == '1'
						? (j[Ie] = '1')
						: Ye == ',' &&
							Re == j[Ie + 1] &&
							(Re == '1' || Re == 'n') &&
							(j[Ie] = Re),
						(Re = Ye);
				}
				for (var xt = 0; xt < G; ++xt) {
					var Xt = j[xt];
					if (Xt == ',') j[xt] = 'N';
					else if (Xt == '%') {
						var Lt = void 0;
						for (Lt = xt + 1; Lt < G && j[Lt] == '%'; ++Lt);
						for (
							var zn =
									(xt && j[xt - 1] == '!') || (Lt < G && j[Lt] == '1')
										? '1'
										: 'N',
								Sn = xt;
							Sn < Lt;
							++Sn
						)
							j[Sn] = zn;
						xt = Lt - 1;
					}
				}
				for (var Ft = 0, _n = D; Ft < G; ++Ft) {
					var tn = j[Ft];
					_n == 'L' && tn == '1' ? (j[Ft] = 'L') : g.test(tn) && (_n = tn);
				}
				for (var Wt = 0; Wt < G; ++Wt)
					if (c.test(j[Wt])) {
						var Ht = void 0;
						for (Ht = Wt + 1; Ht < G && c.test(j[Ht]); ++Ht);
						for (
							var Pt = (Wt ? j[Wt - 1] : D) == 'L',
								kn = (Ht < G ? j[Ht] : D) == 'L',
								cs = Pt == kn ? (Pt ? 'L' : 'R') : D,
								Pi = Wt;
							Pi < Ht;
							++Pi
						)
							j[Pi] = cs;
						Wt = Ht - 1;
					}
				for (var an = [], Dr, Yt = 0; Yt < G; )
					if (y.test(j[Yt])) {
						var Vf = Yt;
						for (++Yt; Yt < G && y.test(j[Yt]); ++Yt);
						an.push(new S(0, Vf, Yt));
					} else {
						var ii = Yt,
							mo = an.length,
							vo = P == 'rtl' ? 1 : 0;
						for (++Yt; Yt < G && j[Yt] != 'L'; ++Yt);
						for (var dn = ii; dn < Yt; )
							if (x.test(j[dn])) {
								ii < dn && (an.splice(mo, 0, new S(1, ii, dn)), (mo += vo));
								var fs = dn;
								for (++dn; dn < Yt && x.test(j[dn]); ++dn);
								an.splice(mo, 0, new S(2, fs, dn)), (mo += vo), (ii = dn);
							} else ++dn;
						ii < Yt && an.splice(mo, 0, new S(1, ii, Yt));
					}
				return (
					P == 'ltr' &&
						(an[0].level == 1 &&
							(Dr = _.match(/^\s+/)) &&
							((an[0].from = Dr[0].length),
							an.unshift(new S(0, 0, Dr[0].length))),
						de(an).level == 1 &&
							(Dr = _.match(/\s+$/)) &&
							((de(an).to -= Dr[0].length),
							an.push(new S(0, G - Dr[0].length, G)))),
					P == 'rtl' ? an.reverse() : an
				);
			};
		})();
		function Je(n, i) {
			var a = n.order;
			return a == null && (a = n.order = On(n.text, i)), a;
		}
		var Aa = [],
			ze = function (n, i, a) {
				if (n.addEventListener) n.addEventListener(i, a, !1);
				else if (n.attachEvent) n.attachEvent('on' + i, a);
				else {
					var l = n._handlers || (n._handlers = {});
					l[i] = (l[i] || Aa).concat(a);
				}
			};
		function Zr(n, i) {
			return (n._handlers && n._handlers[i]) || Aa;
		}
		function on(n, i, a) {
			if (n.removeEventListener) n.removeEventListener(i, a, !1);
			else if (n.detachEvent) n.detachEvent('on' + i, a);
			else {
				var l = n._handlers,
					c = l && l[i];
				if (c) {
					var g = Ae(c, a);
					g > -1 && (l[i] = c.slice(0, g).concat(c.slice(g + 1)));
				}
			}
		}
		function Mt(n, i) {
			var a = Zr(n, i);
			if (a.length)
				for (
					var l = Array.prototype.slice.call(arguments, 2), c = 0;
					c < a.length;
					++c
				)
					a[c].apply(null, l);
		}
		function Nt(n, i, a) {
			return (
				typeof i == 'string' &&
					(i = {
						type: i,
						preventDefault: function () {
							this.defaultPrevented = !0;
						},
					}),
				Mt(n, a || i.type, n, i),
				yn(i) || i.codemirrorIgnore
			);
		}
		function nr(n) {
			var i = n._handlers && n._handlers.cursorActivity;
			if (i)
				for (
					var a =
							n.curOp.cursorActivityHandlers ||
							(n.curOp.cursorActivityHandlers = []),
						l = 0;
					l < i.length;
					++l
				)
					Ae(a, i[l]) == -1 && a.push(i[l]);
		}
		function Rn(n, i) {
			return Zr(n, i).length > 0;
		}
		function ar(n) {
			(n.prototype.on = function (i, a) {
				ze(this, i, a);
			}),
				(n.prototype.off = function (i, a) {
					on(this, i, a);
				});
		}
		function sn(n) {
			n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
		}
		function Fo(n) {
			n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0);
		}
		function yn(n) {
			return n.defaultPrevented != null
				? n.defaultPrevented
				: n.returnValue == !1;
		}
		function xi(n) {
			sn(n), Fo(n);
		}
		function Ws(n) {
			return n.target || n.srcElement;
		}
		function ur(n) {
			var i = n.which;
			return (
				i == null &&
					(n.button & 1
						? (i = 1)
						: n.button & 2
							? (i = 3)
							: n.button & 4 && (i = 2)),
				O && n.ctrlKey && i == 1 && (i = 3),
				i
			);
		}
		var Zc = (function () {
				if (h && p < 9) return !1;
				var n = k('div');
				return 'draggable' in n || 'dragDrop' in n;
			})(),
			Ho;
		function Ma(n) {
			if (Ho == null) {
				var i = k('span', '​');
				F(n, k('span', [i, document.createTextNode('x')])),
					n.firstChild.offsetHeight != 0 &&
						(Ho = i.offsetWidth <= 1 && i.offsetHeight > 2 && !(h && p < 8));
			}
			var a = Ho
				? k('span', '​')
				: k(
						'span',
						' ',
						null,
						'display: inline-block; width: 1px; margin-right: -1px',
					);
			return a.setAttribute('cm-text', ''), a;
		}
		var Us;
		function Si(n) {
			if (Us != null) return Us;
			var i = F(n, document.createTextNode('AخA')),
				a = V(i, 0, 1).getBoundingClientRect(),
				l = V(i, 1, 2).getBoundingClientRect();
			return I(n), !a || a.left == a.right ? !1 : (Us = l.right - a.right < 3);
		}
		var rr =
				`

b`.split(/\n/).length != 3
					? function (n) {
							for (var i = 0, a = [], l = n.length; i <= l; ) {
								var c = n.indexOf(
									`
`,
									i,
								);
								c == -1 && (c = n.length);
								var g = n.slice(i, n.charAt(c - 1) == '\r' ? c - 1 : c),
									y = g.indexOf('\r');
								y != -1
									? (a.push(g.slice(0, y)), (i += y + 1))
									: (a.push(g), (i = c + 1));
							}
							return a;
						}
					: function (n) {
							return n.split(/\r\n?|\n/);
						},
			_i = window.getSelection
				? function (n) {
						try {
							return n.selectionStart != n.selectionEnd;
						} catch {
							return !1;
						}
					}
				: function (n) {
						var i;
						try {
							i = n.ownerDocument.selection.createRange();
						} catch {}
						return !i || i.parentElement() != n
							? !1
							: i.compareEndPoints('StartToEnd', i) != 0;
					},
			Na = (function () {
				var n = k('div');
				return 'oncopy' in n
					? !0
					: (n.setAttribute('oncopy', 'return;'),
						typeof n.oncopy == 'function');
			})(),
			cr = null;
		function Jc(n) {
			if (cr != null) return cr;
			var i = F(n, k('span', 'x')),
				a = i.getBoundingClientRect(),
				l = V(i, 0, 1).getBoundingClientRect();
			return (cr = Math.abs(a.left - l.left) > 1);
		}
		var qo = {},
			fr = {};
		function dr(n, i) {
			arguments.length > 2 &&
				(i.dependencies = Array.prototype.slice.call(arguments, 2)),
				(qo[n] = i);
		}
		function so(n, i) {
			fr[n] = i;
		}
		function Bo(n) {
			if (typeof n == 'string' && fr.hasOwnProperty(n)) n = fr[n];
			else if (n && typeof n.name == 'string' && fr.hasOwnProperty(n.name)) {
				var i = fr[n.name];
				typeof i == 'string' && (i = { name: i }),
					(n = De(i, n)),
					(n.name = i.name);
			} else {
				if (typeof n == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(n))
					return Bo('application/xml');
				if (typeof n == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(n))
					return Bo('application/json');
			}
			return typeof n == 'string' ? { name: n } : n || { name: 'null' };
		}
		function Wo(n, i) {
			i = Bo(i);
			var a = qo[i.name];
			if (!a) return Wo(n, 'text/plain');
			var l = a(n, i);
			if (ki.hasOwnProperty(i.name)) {
				var c = ki[i.name];
				for (var g in c)
					c.hasOwnProperty(g) &&
						(l.hasOwnProperty(g) && (l['_' + g] = l[g]), (l[g] = c[g]));
			}
			if (
				((l.name = i.name),
				i.helperType && (l.helperType = i.helperType),
				i.modeProps)
			)
				for (var y in i.modeProps) l[y] = i.modeProps[y];
			return l;
		}
		var ki = {};
		function Uo(n, i) {
			var a = ki.hasOwnProperty(n) ? ki[n] : (ki[n] = {});
			ae(i, a);
		}
		function $r(n, i) {
			if (i === !0) return i;
			if (n.copyState) return n.copyState(i);
			var a = {};
			for (var l in i) {
				var c = i[l];
				c instanceof Array && (c = c.concat([])), (a[l] = c);
			}
			return a;
		}
		function Vs(n, i) {
			for (var a; n.innerMode && ((a = n.innerMode(i)), !(!a || a.mode == n)); )
				(i = a.state), (n = a.mode);
			return a || { mode: n, state: i };
		}
		function Vo(n, i, a) {
			return n.startState ? n.startState(i, a) : !0;
		}
		var $t = function (n, i, a) {
			(this.pos = this.start = 0),
				(this.string = n),
				(this.tabSize = i || 8),
				(this.lastColumnPos = this.lastColumnValue = 0),
				(this.lineStart = 0),
				(this.lineOracle = a);
		};
		($t.prototype.eol = function () {
			return this.pos >= this.string.length;
		}),
			($t.prototype.sol = function () {
				return this.pos == this.lineStart;
			}),
			($t.prototype.peek = function () {
				return this.string.charAt(this.pos) || void 0;
			}),
			($t.prototype.next = function () {
				if (this.pos < this.string.length)
					return this.string.charAt(this.pos++);
			}),
			($t.prototype.eat = function (n) {
				var i = this.string.charAt(this.pos),
					a;
				if (
					(typeof n == 'string'
						? (a = i == n)
						: (a = i && (n.test ? n.test(i) : n(i))),
					a)
				)
					return ++this.pos, i;
			}),
			($t.prototype.eatWhile = function (n) {
				for (var i = this.pos; this.eat(n); );
				return this.pos > i;
			}),
			($t.prototype.eatSpace = function () {
				for (
					var n = this.pos;
					/[\s\u00a0]/.test(this.string.charAt(this.pos));

				)
					++this.pos;
				return this.pos > n;
			}),
			($t.prototype.skipToEnd = function () {
				this.pos = this.string.length;
			}),
			($t.prototype.skipTo = function (n) {
				var i = this.string.indexOf(n, this.pos);
				if (i > -1) return (this.pos = i), !0;
			}),
			($t.prototype.backUp = function (n) {
				this.pos -= n;
			}),
			($t.prototype.column = function () {
				return (
					this.lastColumnPos < this.start &&
						((this.lastColumnValue = he(
							this.string,
							this.start,
							this.tabSize,
							this.lastColumnPos,
							this.lastColumnValue,
						)),
						(this.lastColumnPos = this.start)),
					this.lastColumnValue -
						(this.lineStart ? he(this.string, this.lineStart, this.tabSize) : 0)
				);
			}),
			($t.prototype.indentation = function () {
				return (
					he(this.string, null, this.tabSize) -
					(this.lineStart ? he(this.string, this.lineStart, this.tabSize) : 0)
				);
			}),
			($t.prototype.match = function (n, i, a) {
				if (typeof n == 'string') {
					var l = function (y) {
							return a ? y.toLowerCase() : y;
						},
						c = this.string.substr(this.pos, n.length);
					if (l(c) == l(n)) return i !== !1 && (this.pos += n.length), !0;
				} else {
					var g = this.string.slice(this.pos).match(n);
					return g && g.index > 0
						? null
						: (g && i !== !1 && (this.pos += g[0].length), g);
				}
			}),
			($t.prototype.current = function () {
				return this.string.slice(this.start, this.pos);
			}),
			($t.prototype.hideFirstChars = function (n, i) {
				this.lineStart += n;
				try {
					return i();
				} finally {
					this.lineStart -= n;
				}
			}),
			($t.prototype.lookAhead = function (n) {
				var i = this.lineOracle;
				return i && i.lookAhead(n);
			}),
			($t.prototype.baseToken = function () {
				var n = this.lineOracle;
				return n && n.baseToken(this.pos);
			});
		function Oe(n, i) {
			if (((i -= n.first), i < 0 || i >= n.size))
				throw new Error(
					'There is no line ' + (i + n.first) + ' in the document.',
				);
			for (var a = n; !a.lines; )
				for (var l = 0; ; ++l) {
					var c = a.children[l],
						g = c.chunkSize();
					if (i < g) {
						a = c;
						break;
					}
					i -= g;
				}
			return a.lines[i];
		}
		function Jr(n, i, a) {
			var l = [],
				c = i.line;
			return (
				n.iter(i.line, a.line + 1, function (g) {
					var y = g.text;
					c == a.line && (y = y.slice(0, a.ch)),
						c == i.line && (y = y.slice(i.ch)),
						l.push(y),
						++c;
				}),
				l
			);
		}
		function js(n, i, a) {
			var l = [];
			return (
				n.iter(i, a, function (c) {
					l.push(c.text);
				}),
				l
			);
		}
		function jn(n, i) {
			var a = i - n.height;
			if (a) for (var l = n; l; l = l.parent) l.height += a;
		}
		function T(n) {
			if (n.parent == null) return null;
			for (
				var i = n.parent, a = Ae(i.lines, n), l = i.parent;
				l;
				i = l, l = l.parent
			)
				for (var c = 0; l.children[c] != i; ++c) a += l.children[c].chunkSize();
			return a + i.first;
		}
		function R(n, i) {
			var a = n.first;
			e: do {
				for (var l = 0; l < n.children.length; ++l) {
					var c = n.children[l],
						g = c.height;
					if (i < g) {
						n = c;
						continue e;
					}
					(i -= g), (a += c.chunkSize());
				}
				return a;
			} while (!n.lines);
			for (var y = 0; y < n.lines.length; ++y) {
				var x = n.lines[y],
					S = x.height;
				if (i < S) break;
				i -= S;
			}
			return a + y;
		}
		function se(n, i) {
			return i >= n.first && i < n.first + n.size;
		}
		function ge(n, i) {
			return String(n.lineNumberFormatter(i + n.firstLineNumber));
		}
		function ne(n, i, a) {
			if ((a === void 0 && (a = null), !(this instanceof ne)))
				return new ne(n, i, a);
			(this.line = n), (this.ch = i), (this.sticky = a);
		}
		function _e(n, i) {
			return n.line - i.line || n.ch - i.ch;
		}
		function ft(n, i) {
			return n.sticky == i.sticky && _e(n, i) == 0;
		}
		function Vt(n) {
			return ne(n.line, n.ch);
		}
		function bn(n, i) {
			return _e(n, i) < 0 ? i : n;
		}
		function jo(n, i) {
			return _e(n, i) < 0 ? n : i;
		}
		function gp(n, i) {
			return Math.max(n.first, Math.min(i, n.first + n.size - 1));
		}
		function Ge(n, i) {
			if (i.line < n.first) return ne(n.first, 0);
			var a = n.first + n.size - 1;
			return i.line > a
				? ne(a, Oe(n, a).text.length)
				: r1(i, Oe(n, i.line).text.length);
		}
		function r1(n, i) {
			var a = n.ch;
			return a == null || a > i ? ne(n.line, i) : a < 0 ? ne(n.line, 0) : n;
		}
		function mp(n, i) {
			for (var a = [], l = 0; l < i.length; l++) a[l] = Ge(n, i[l]);
			return a;
		}
		var $a = function (n, i) {
				(this.state = n), (this.lookAhead = i);
			},
			Pr = function (n, i, a, l) {
				(this.state = i),
					(this.doc = n),
					(this.line = a),
					(this.maxLookAhead = l || 0),
					(this.baseTokens = null),
					(this.baseTokenPos = 1);
			};
		(Pr.prototype.lookAhead = function (n) {
			var i = this.doc.getLine(this.line + n);
			return i != null && n > this.maxLookAhead && (this.maxLookAhead = n), i;
		}),
			(Pr.prototype.baseToken = function (n) {
				if (!this.baseTokens) return null;
				for (; this.baseTokens[this.baseTokenPos] <= n; )
					this.baseTokenPos += 2;
				var i = this.baseTokens[this.baseTokenPos + 1];
				return {
					type: i && i.replace(/( |^)overlay .*/, ''),
					size: this.baseTokens[this.baseTokenPos] - n,
				};
			}),
			(Pr.prototype.nextLine = function () {
				this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
			}),
			(Pr.fromSaved = function (n, i, a) {
				return i instanceof $a
					? new Pr(n, $r(n.mode, i.state), a, i.lookAhead)
					: new Pr(n, $r(n.mode, i), a);
			}),
			(Pr.prototype.save = function (n) {
				var i = n !== !1 ? $r(this.doc.mode, this.state) : this.state;
				return this.maxLookAhead > 0 ? new $a(i, this.maxLookAhead) : i;
			});
		function vp(n, i, a, l) {
			var c = [n.state.modeGen],
				g = {};
			_p(
				n,
				i.text,
				n.doc.mode,
				a,
				function (_, P) {
					return c.push(_, P);
				},
				g,
				l,
			);
			for (
				var y = a.state,
					x = function (_) {
						a.baseTokens = c;
						var P = n.state.overlays[_],
							D = 1,
							G = 0;
						(a.state = !0),
							_p(
								n,
								i.text,
								P.mode,
								a,
								function (j, re) {
									for (var ce = D; G < j; ) {
										var me = c[D];
										me > j && c.splice(D, 1, j, c[D + 1], me),
											(D += 2),
											(G = Math.min(j, me));
									}
									if (re)
										if (P.opaque)
											c.splice(ce, D - ce, j, 'overlay ' + re), (D = ce + 2);
										else
											for (; ce < D; ce += 2) {
												var be = c[ce + 1];
												c[ce + 1] = (be ? be + ' ' : '') + 'overlay ' + re;
											}
								},
								g,
							),
							(a.state = y),
							(a.baseTokens = null),
							(a.baseTokenPos = 1);
					},
					S = 0;
				S < n.state.overlays.length;
				++S
			)
				x(S);
			return { styles: c, classes: g.bgClass || g.textClass ? g : null };
		}
		function yp(n, i, a) {
			if (!i.styles || i.styles[0] != n.state.modeGen) {
				var l = Gs(n, T(i)),
					c =
						i.text.length > n.options.maxHighlightLength &&
						$r(n.doc.mode, l.state),
					g = vp(n, i, l);
				c && (l.state = c),
					(i.stateAfter = l.save(!c)),
					(i.styles = g.styles),
					g.classes
						? (i.styleClasses = g.classes)
						: i.styleClasses && (i.styleClasses = null),
					a === n.doc.highlightFrontier &&
						(n.doc.modeFrontier = Math.max(
							n.doc.modeFrontier,
							++n.doc.highlightFrontier,
						));
			}
			return i.styles;
		}
		function Gs(n, i, a) {
			var l = n.doc,
				c = n.display;
			if (!l.mode.startState) return new Pr(l, !0, i);
			var g = i1(n, i, a),
				y = g > l.first && Oe(l, g - 1).stateAfter,
				x = y ? Pr.fromSaved(l, y, g) : new Pr(l, Vo(l.mode), g);
			return (
				l.iter(g, i, function (S) {
					Qc(n, S.text, x);
					var _ = x.line;
					(S.stateAfter =
						_ == i - 1 || _ % 5 == 0 || (_ >= c.viewFrom && _ < c.viewTo)
							? x.save()
							: null),
						x.nextLine();
				}),
				a && (l.modeFrontier = x.line),
				x
			);
		}
		function Qc(n, i, a, l) {
			var c = n.doc.mode,
				g = new $t(i, n.options.tabSize, a);
			for (g.start = g.pos = l || 0, i == '' && bp(c, a.state); !g.eol(); )
				ef(c, g, a.state), (g.start = g.pos);
		}
		function bp(n, i) {
			if (n.blankLine) return n.blankLine(i);
			if (n.innerMode) {
				var a = Vs(n, i);
				if (a.mode.blankLine) return a.mode.blankLine(a.state);
			}
		}
		function ef(n, i, a, l) {
			for (var c = 0; c < 10; c++) {
				l && (l[0] = Vs(n, a).mode);
				var g = n.token(i, a);
				if (i.pos > i.start) return g;
			}
			throw new Error('Mode ' + n.name + ' failed to advance stream.');
		}
		var wp = function (n, i, a) {
			(this.start = n.start),
				(this.end = n.pos),
				(this.string = n.current()),
				(this.type = i || null),
				(this.state = a);
		};
		function xp(n, i, a, l) {
			var c = n.doc,
				g = c.mode,
				y;
			i = Ge(c, i);
			var x = Oe(c, i.line),
				S = Gs(n, i.line, a),
				_ = new $t(x.text, n.options.tabSize, S),
				P;
			for (l && (P = []); (l || _.pos < i.ch) && !_.eol(); )
				(_.start = _.pos),
					(y = ef(g, _, S.state)),
					l && P.push(new wp(_, y, $r(c.mode, S.state)));
			return l ? P : new wp(_, y, S.state);
		}
		function Sp(n, i) {
			if (n)
				for (;;) {
					var a = n.match(/(?:^|\s+)line-(background-)?(\S+)/);
					if (!a) break;
					n = n.slice(0, a.index) + n.slice(a.index + a[0].length);
					var l = a[1] ? 'bgClass' : 'textClass';
					i[l] == null
						? (i[l] = a[2])
						: new RegExp('(?:^|\\s)' + a[2] + '(?:$|\\s)').test(i[l]) ||
							(i[l] += ' ' + a[2]);
				}
			return n;
		}
		function _p(n, i, a, l, c, g, y) {
			var x = a.flattenSpans;
			x == null && (x = n.options.flattenSpans);
			var S = 0,
				_ = null,
				P = new $t(i, n.options.tabSize, l),
				D,
				G = n.options.addModeClass && [null];
			for (i == '' && Sp(bp(a, l.state), g); !P.eol(); ) {
				if (
					(P.pos > n.options.maxHighlightLength
						? ((x = !1),
							y && Qc(n, i, l, P.pos),
							(P.pos = i.length),
							(D = null))
						: (D = Sp(ef(a, P, l.state, G), g)),
					G)
				) {
					var j = G[0].name;
					j && (D = 'm-' + (D ? j + ' ' + D : j));
				}
				if (!x || _ != D) {
					for (; S < P.start; ) (S = Math.min(P.start, S + 5e3)), c(S, _);
					_ = D;
				}
				P.start = P.pos;
			}
			for (; S < P.pos; ) {
				var re = Math.min(P.pos, S + 5e3);
				c(re, _), (S = re);
			}
		}
		function i1(n, i, a) {
			for (
				var l,
					c,
					g = n.doc,
					y = a ? -1 : i - (n.doc.mode.innerMode ? 1e3 : 100),
					x = i;
				x > y;
				--x
			) {
				if (x <= g.first) return g.first;
				var S = Oe(g, x - 1),
					_ = S.stateAfter;
				if (
					_ &&
					(!a || x + (_ instanceof $a ? _.lookAhead : 0) <= g.modeFrontier)
				)
					return x;
				var P = he(S.text, null, n.options.tabSize);
				(c == null || l > P) && ((c = x - 1), (l = P));
			}
			return c;
		}
		function o1(n, i) {
			if (
				((n.modeFrontier = Math.min(n.modeFrontier, i)),
				!(n.highlightFrontier < i - 10))
			) {
				for (var a = n.first, l = i - 1; l > a; l--) {
					var c = Oe(n, l).stateAfter;
					if (c && (!(c instanceof $a) || l + c.lookAhead < i)) {
						a = l + 1;
						break;
					}
				}
				n.highlightFrontier = Math.min(n.highlightFrontier, a);
			}
		}
		var kp = !1,
			Qr = !1;
		function s1() {
			kp = !0;
		}
		function l1() {
			Qr = !0;
		}
		function Pa(n, i, a) {
			(this.marker = n), (this.from = i), (this.to = a);
		}
		function Ks(n, i) {
			if (n)
				for (var a = 0; a < n.length; ++a) {
					var l = n[a];
					if (l.marker == i) return l;
				}
		}
		function a1(n, i) {
			for (var a, l = 0; l < n.length; ++l)
				n[l] != i && (a || (a = [])).push(n[l]);
			return a;
		}
		function u1(n, i, a) {
			var l =
				a &&
				window.WeakSet &&
				(a.markedSpans || (a.markedSpans = new WeakSet()));
			l && n.markedSpans && l.has(n.markedSpans)
				? n.markedSpans.push(i)
				: ((n.markedSpans = n.markedSpans ? n.markedSpans.concat([i]) : [i]),
					l && l.add(n.markedSpans)),
				i.marker.attachLine(n);
		}
		function c1(n, i, a) {
			var l;
			if (n)
				for (var c = 0; c < n.length; ++c) {
					var g = n[c],
						y = g.marker,
						x = g.from == null || (y.inclusiveLeft ? g.from <= i : g.from < i);
					if (
						x ||
						(g.from == i &&
							y.type == 'bookmark' &&
							(!a || !g.marker.insertLeft))
					) {
						var S = g.to == null || (y.inclusiveRight ? g.to >= i : g.to > i);
						(l || (l = [])).push(new Pa(y, g.from, S ? null : g.to));
					}
				}
			return l;
		}
		function f1(n, i, a) {
			var l;
			if (n)
				for (var c = 0; c < n.length; ++c) {
					var g = n[c],
						y = g.marker,
						x = g.to == null || (y.inclusiveRight ? g.to >= i : g.to > i);
					if (
						x ||
						(g.from == i && y.type == 'bookmark' && (!a || g.marker.insertLeft))
					) {
						var S =
							g.from == null || (y.inclusiveLeft ? g.from <= i : g.from < i);
						(l || (l = [])).push(
							new Pa(y, S ? null : g.from - i, g.to == null ? null : g.to - i),
						);
					}
				}
			return l;
		}
		function tf(n, i) {
			if (i.full) return null;
			var a = se(n, i.from.line) && Oe(n, i.from.line).markedSpans,
				l = se(n, i.to.line) && Oe(n, i.to.line).markedSpans;
			if (!a && !l) return null;
			var c = i.from.ch,
				g = i.to.ch,
				y = _e(i.from, i.to) == 0,
				x = c1(a, c, y),
				S = f1(l, g, y),
				_ = i.text.length == 1,
				P = de(i.text).length + (_ ? c : 0);
			if (x)
				for (var D = 0; D < x.length; ++D) {
					var G = x[D];
					if (G.to == null) {
						var j = Ks(S, G.marker);
						j ? _ && (G.to = j.to == null ? null : j.to + P) : (G.to = c);
					}
				}
			if (S)
				for (var re = 0; re < S.length; ++re) {
					var ce = S[re];
					if ((ce.to != null && (ce.to += P), ce.from == null)) {
						var me = Ks(x, ce.marker);
						me || ((ce.from = P), _ && (x || (x = [])).push(ce));
					} else (ce.from += P), _ && (x || (x = [])).push(ce);
				}
			x && (x = Tp(x)), S && S != x && (S = Tp(S));
			var be = [x];
			if (!_) {
				var Te = i.text.length - 2,
					we;
				if (Te > 0 && x)
					for (var Me = 0; Me < x.length; ++Me)
						x[Me].to == null &&
							(we || (we = [])).push(new Pa(x[Me].marker, null, null));
				for (var Ie = 0; Ie < Te; ++Ie) be.push(we);
				be.push(S);
			}
			return be;
		}
		function Tp(n) {
			for (var i = 0; i < n.length; ++i) {
				var a = n[i];
				a.from != null &&
					a.from == a.to &&
					a.marker.clearWhenEmpty !== !1 &&
					n.splice(i--, 1);
			}
			return n.length ? n : null;
		}
		function d1(n, i, a) {
			var l = null;
			if (
				(n.iter(i.line, a.line + 1, function (j) {
					if (j.markedSpans)
						for (var re = 0; re < j.markedSpans.length; ++re) {
							var ce = j.markedSpans[re].marker;
							ce.readOnly &&
								(!l || Ae(l, ce) == -1) &&
								(l || (l = [])).push(ce);
						}
				}),
				!l)
			)
				return null;
			for (var c = [{ from: i, to: a }], g = 0; g < l.length; ++g)
				for (var y = l[g], x = y.find(0), S = 0; S < c.length; ++S) {
					var _ = c[S];
					if (!(_e(_.to, x.from) < 0 || _e(_.from, x.to) > 0)) {
						var P = [S, 1],
							D = _e(_.from, x.from),
							G = _e(_.to, x.to);
						(D < 0 || (!y.inclusiveLeft && !D)) &&
							P.push({ from: _.from, to: x.from }),
							(G > 0 || (!y.inclusiveRight && !G)) &&
								P.push({ from: x.to, to: _.to }),
							c.splice.apply(c, P),
							(S += P.length - 3);
					}
				}
			return c;
		}
		function Cp(n) {
			var i = n.markedSpans;
			if (i) {
				for (var a = 0; a < i.length; ++a) i[a].marker.detachLine(n);
				n.markedSpans = null;
			}
		}
		function Ep(n, i) {
			if (i) {
				for (var a = 0; a < i.length; ++a) i[a].marker.attachLine(n);
				n.markedSpans = i;
			}
		}
		function Oa(n) {
			return n.inclusiveLeft ? -1 : 0;
		}
		function Ra(n) {
			return n.inclusiveRight ? 1 : 0;
		}
		function nf(n, i) {
			var a = n.lines.length - i.lines.length;
			if (a != 0) return a;
			var l = n.find(),
				c = i.find(),
				g = _e(l.from, c.from) || Oa(n) - Oa(i);
			if (g) return -g;
			var y = _e(l.to, c.to) || Ra(n) - Ra(i);
			return y || i.id - n.id;
		}
		function Lp(n, i) {
			var a = Qr && n.markedSpans,
				l;
			if (a)
				for (var c = void 0, g = 0; g < a.length; ++g)
					(c = a[g]),
						c.marker.collapsed &&
							(i ? c.from : c.to) == null &&
							(!l || nf(l, c.marker) < 0) &&
							(l = c.marker);
			return l;
		}
		function Ap(n) {
			return Lp(n, !0);
		}
		function Da(n) {
			return Lp(n, !1);
		}
		function h1(n, i) {
			var a = Qr && n.markedSpans,
				l;
			if (a)
				for (var c = 0; c < a.length; ++c) {
					var g = a[c];
					g.marker.collapsed &&
						(g.from == null || g.from < i) &&
						(g.to == null || g.to > i) &&
						(!l || nf(l, g.marker) < 0) &&
						(l = g.marker);
				}
			return l;
		}
		function Mp(n, i, a, l, c) {
			var g = Oe(n, i),
				y = Qr && g.markedSpans;
			if (y)
				for (var x = 0; x < y.length; ++x) {
					var S = y[x];
					if (S.marker.collapsed) {
						var _ = S.marker.find(0),
							P = _e(_.from, a) || Oa(S.marker) - Oa(c),
							D = _e(_.to, l) || Ra(S.marker) - Ra(c);
						if (
							!((P >= 0 && D <= 0) || (P <= 0 && D >= 0)) &&
							((P <= 0 &&
								(S.marker.inclusiveRight && c.inclusiveLeft
									? _e(_.to, a) >= 0
									: _e(_.to, a) > 0)) ||
								(P >= 0 &&
									(S.marker.inclusiveRight && c.inclusiveLeft
										? _e(_.from, l) <= 0
										: _e(_.from, l) < 0)))
						)
							return !0;
					}
				}
		}
		function hr(n) {
			for (var i; (i = Ap(n)); ) n = i.find(-1, !0).line;
			return n;
		}
		function p1(n) {
			for (var i; (i = Da(n)); ) n = i.find(1, !0).line;
			return n;
		}
		function g1(n) {
			for (var i, a; (i = Da(n)); )
				(n = i.find(1, !0).line), (a || (a = [])).push(n);
			return a;
		}
		function rf(n, i) {
			var a = Oe(n, i),
				l = hr(a);
			return a == l ? i : T(l);
		}
		function Np(n, i) {
			if (i > n.lastLine()) return i;
			var a = Oe(n, i),
				l;
			if (!Ti(n, a)) return i;
			for (; (l = Da(a)); ) a = l.find(1, !0).line;
			return T(a) + 1;
		}
		function Ti(n, i) {
			var a = Qr && i.markedSpans;
			if (a) {
				for (var l = void 0, c = 0; c < a.length; ++c)
					if (((l = a[c]), !!l.marker.collapsed)) {
						if (l.from == null) return !0;
						if (
							!l.marker.widgetNode &&
							l.from == 0 &&
							l.marker.inclusiveLeft &&
							of(n, i, l)
						)
							return !0;
					}
			}
		}
		function of(n, i, a) {
			if (a.to == null) {
				var l = a.marker.find(1, !0);
				return of(n, l.line, Ks(l.line.markedSpans, a.marker));
			}
			if (a.marker.inclusiveRight && a.to == i.text.length) return !0;
			for (var c = void 0, g = 0; g < i.markedSpans.length; ++g)
				if (
					((c = i.markedSpans[g]),
					c.marker.collapsed &&
						!c.marker.widgetNode &&
						c.from == a.to &&
						(c.to == null || c.to != a.from) &&
						(c.marker.inclusiveLeft || a.marker.inclusiveRight) &&
						of(n, i, c))
				)
					return !0;
		}
		function ei(n) {
			n = hr(n);
			for (var i = 0, a = n.parent, l = 0; l < a.lines.length; ++l) {
				var c = a.lines[l];
				if (c == n) break;
				i += c.height;
			}
			for (var g = a.parent; g; a = g, g = a.parent)
				for (var y = 0; y < g.children.length; ++y) {
					var x = g.children[y];
					if (x == a) break;
					i += x.height;
				}
			return i;
		}
		function za(n) {
			if (n.height == 0) return 0;
			for (var i = n.text.length, a, l = n; (a = Ap(l)); ) {
				var c = a.find(0, !0);
				(l = c.from.line), (i += c.from.ch - c.to.ch);
			}
			for (l = n; (a = Da(l)); ) {
				var g = a.find(0, !0);
				(i -= l.text.length - g.from.ch),
					(l = g.to.line),
					(i += l.text.length - g.to.ch);
			}
			return i;
		}
		function sf(n) {
			var i = n.display,
				a = n.doc;
			(i.maxLine = Oe(a, a.first)),
				(i.maxLineLength = za(i.maxLine)),
				(i.maxLineChanged = !0),
				a.iter(function (l) {
					var c = za(l);
					c > i.maxLineLength && ((i.maxLineLength = c), (i.maxLine = l));
				});
		}
		var Go = function (n, i, a) {
			(this.text = n), Ep(this, i), (this.height = a ? a(this) : 1);
		};
		(Go.prototype.lineNo = function () {
			return T(this);
		}),
			ar(Go);
		function m1(n, i, a, l) {
			(n.text = i),
				n.stateAfter && (n.stateAfter = null),
				n.styles && (n.styles = null),
				n.order != null && (n.order = null),
				Cp(n),
				Ep(n, a);
			var c = l ? l(n) : 1;
			c != n.height && jn(n, c);
		}
		function v1(n) {
			(n.parent = null), Cp(n);
		}
		var y1 = {},
			b1 = {};
		function $p(n, i) {
			if (!n || /^\s*$/.test(n)) return null;
			var a = i.addModeClass ? b1 : y1;
			return a[n] || (a[n] = n.replace(/\S+/g, 'cm-$&'));
		}
		function Pp(n, i) {
			var a = W('span', null, null, m ? 'padding-right: .1px' : null),
				l = {
					pre: W('pre', [a], 'CodeMirror-line'),
					content: a,
					col: 0,
					pos: 0,
					cm: n,
					trailingSpace: !1,
					splitSpaces: n.getOption('lineWrapping'),
				};
			i.measure = {};
			for (var c = 0; c <= (i.rest ? i.rest.length : 0); c++) {
				var g = c ? i.rest[c - 1] : i.line,
					y = void 0;
				(l.pos = 0),
					(l.addToken = x1),
					Si(n.display.measure) &&
						(y = Je(g, n.doc.direction)) &&
						(l.addToken = _1(l.addToken, y)),
					(l.map = []);
				var x = i != n.display.externalMeasured && T(g);
				k1(g, l, yp(n, g, x)),
					g.styleClasses &&
						(g.styleClasses.bgClass &&
							(l.bgClass = We(g.styleClasses.bgClass, l.bgClass || '')),
						g.styleClasses.textClass &&
							(l.textClass = We(g.styleClasses.textClass, l.textClass || ''))),
					l.map.length == 0 &&
						l.map.push(0, 0, l.content.appendChild(Ma(n.display.measure))),
					c == 0
						? ((i.measure.map = l.map), (i.measure.cache = {}))
						: ((i.measure.maps || (i.measure.maps = [])).push(l.map),
							(i.measure.caches || (i.measure.caches = [])).push({}));
			}
			if (m) {
				var S = l.content.lastChild;
				(/\bcm-tab\b/.test(S.className) ||
					(S.querySelector && S.querySelector('.cm-tab'))) &&
					(l.content.className = 'cm-tab-wrap-hack');
			}
			return (
				Mt(n, 'renderLine', n, i.line, l.pre),
				l.pre.className &&
					(l.textClass = We(l.pre.className, l.textClass || '')),
				l
			);
		}
		function w1(n) {
			var i = k('span', '•', 'cm-invalidchar');
			return (
				(i.title = '\\u' + n.charCodeAt(0).toString(16)),
				i.setAttribute('aria-label', i.title),
				i
			);
		}
		function x1(n, i, a, l, c, g, y) {
			if (i) {
				var x = n.splitSpaces ? S1(i, n.trailingSpace) : i,
					S = n.cm.state.specialChars,
					_ = !1,
					P;
				if (!S.test(i))
					(n.col += i.length),
						(P = document.createTextNode(x)),
						n.map.push(n.pos, n.pos + i.length, P),
						h && p < 9 && (_ = !0),
						(n.pos += i.length);
				else {
					P = document.createDocumentFragment();
					for (var D = 0; ; ) {
						S.lastIndex = D;
						var G = S.exec(i),
							j = G ? G.index - D : i.length - D;
						if (j) {
							var re = document.createTextNode(x.slice(D, D + j));
							h && p < 9 ? P.appendChild(k('span', [re])) : P.appendChild(re),
								n.map.push(n.pos, n.pos + j, re),
								(n.col += j),
								(n.pos += j);
						}
						if (!G) break;
						D += j + 1;
						var ce = void 0;
						if (G[0] == '	') {
							var me = n.cm.options.tabSize,
								be = me - (n.col % me);
							(ce = P.appendChild(k('span', xe(be), 'cm-tab'))),
								ce.setAttribute('role', 'presentation'),
								ce.setAttribute('cm-text', '	'),
								(n.col += be);
						} else
							G[0] == '\r' ||
							G[0] ==
								`
`
								? ((ce = P.appendChild(
										k('span', G[0] == '\r' ? '␍' : '␤', 'cm-invalidchar'),
									)),
									ce.setAttribute('cm-text', G[0]),
									(n.col += 1))
								: ((ce = n.cm.options.specialCharPlaceholder(G[0])),
									ce.setAttribute('cm-text', G[0]),
									h && p < 9
										? P.appendChild(k('span', [ce]))
										: P.appendChild(ce),
									(n.col += 1));
						n.map.push(n.pos, n.pos + 1, ce), n.pos++;
					}
				}
				if (
					((n.trailingSpace = x.charCodeAt(i.length - 1) == 32),
					a || l || c || _ || g || y)
				) {
					var Te = a || '';
					l && (Te += l), c && (Te += c);
					var we = k('span', [P], Te, g);
					if (y)
						for (var Me in y)
							y.hasOwnProperty(Me) &&
								Me != 'style' &&
								Me != 'class' &&
								we.setAttribute(Me, y[Me]);
					return n.content.appendChild(we);
				}
				n.content.appendChild(P);
			}
		}
		function S1(n, i) {
			if (n.length > 1 && !/  /.test(n)) return n;
			for (var a = i, l = '', c = 0; c < n.length; c++) {
				var g = n.charAt(c);
				g == ' ' &&
					a &&
					(c == n.length - 1 || n.charCodeAt(c + 1) == 32) &&
					(g = ' '),
					(l += g),
					(a = g == ' ');
			}
			return l;
		}
		function _1(n, i) {
			return function (a, l, c, g, y, x, S) {
				c = c ? c + ' cm-force-border' : 'cm-force-border';
				for (var _ = a.pos, P = _ + l.length; ; ) {
					for (
						var D = void 0, G = 0;
						G < i.length && ((D = i[G]), !(D.to > _ && D.from <= _));
						G++
					);
					if (D.to >= P) return n(a, l, c, g, y, x, S);
					n(a, l.slice(0, D.to - _), c, g, null, x, S),
						(g = null),
						(l = l.slice(D.to - _)),
						(_ = D.to);
				}
			};
		}
		function Op(n, i, a, l) {
			var c = !l && a.widgetNode;
			c && n.map.push(n.pos, n.pos + i, c),
				!l &&
					n.cm.display.input.needsContentAttribute &&
					(c || (c = n.content.appendChild(document.createElement('span'))),
					c.setAttribute('cm-marker', a.id)),
				c && (n.cm.display.input.setUneditable(c), n.content.appendChild(c)),
				(n.pos += i),
				(n.trailingSpace = !1);
		}
		function k1(n, i, a) {
			var l = n.markedSpans,
				c = n.text,
				g = 0;
			if (!l) {
				for (var y = 1; y < a.length; y += 2)
					i.addToken(i, c.slice(g, (g = a[y])), $p(a[y + 1], i.cm.options));
				return;
			}
			for (
				var x = c.length, S = 0, _ = 1, P = '', D, G, j = 0, re, ce, me, be, Te;
				;

			) {
				if (j == S) {
					(re = ce = me = G = ''), (Te = null), (be = null), (j = 1 / 0);
					for (var we = [], Me = void 0, Ie = 0; Ie < l.length; ++Ie) {
						var Re = l[Ie],
							Ye = Re.marker;
						if (Ye.type == 'bookmark' && Re.from == S && Ye.widgetNode)
							we.push(Ye);
						else if (
							Re.from <= S &&
							(Re.to == null ||
								Re.to > S ||
								(Ye.collapsed && Re.to == S && Re.from == S))
						) {
							if (
								(Re.to != null &&
									Re.to != S &&
									j > Re.to &&
									((j = Re.to), (ce = '')),
								Ye.className && (re += ' ' + Ye.className),
								Ye.css && (G = (G ? G + ';' : '') + Ye.css),
								Ye.startStyle && Re.from == S && (me += ' ' + Ye.startStyle),
								Ye.endStyle &&
									Re.to == j &&
									(Me || (Me = [])).push(Ye.endStyle, Re.to),
								Ye.title && ((Te || (Te = {})).title = Ye.title),
								Ye.attributes)
							)
								for (var xt in Ye.attributes)
									(Te || (Te = {}))[xt] = Ye.attributes[xt];
							Ye.collapsed && (!be || nf(be.marker, Ye) < 0) && (be = Re);
						} else Re.from > S && j > Re.from && (j = Re.from);
					}
					if (Me)
						for (var Xt = 0; Xt < Me.length; Xt += 2)
							Me[Xt + 1] == j && (ce += ' ' + Me[Xt]);
					if (!be || be.from == S)
						for (var Lt = 0; Lt < we.length; ++Lt) Op(i, 0, we[Lt]);
					if (be && (be.from || 0) == S) {
						if (
							(Op(
								i,
								(be.to == null ? x + 1 : be.to) - S,
								be.marker,
								be.from == null,
							),
							be.to == null)
						)
							return;
						be.to == S && (be = !1);
					}
				}
				if (S >= x) break;
				for (var zn = Math.min(x, j); ; ) {
					if (P) {
						var Sn = S + P.length;
						if (!be) {
							var Ft = Sn > zn ? P.slice(0, zn - S) : P;
							i.addToken(
								i,
								Ft,
								D ? D + re : re,
								me,
								S + Ft.length == j ? ce : '',
								G,
								Te,
							);
						}
						if (Sn >= zn) {
							(P = P.slice(zn - S)), (S = zn);
							break;
						}
						(S = Sn), (me = '');
					}
					(P = c.slice(g, (g = a[_++]))), (D = $p(a[_++], i.cm.options));
				}
			}
		}
		function Rp(n, i, a) {
			(this.line = i),
				(this.rest = g1(i)),
				(this.size = this.rest ? T(de(this.rest)) - a + 1 : 1),
				(this.node = this.text = null),
				(this.hidden = Ti(n, i));
		}
		function Ia(n, i, a) {
			for (var l = [], c, g = i; g < a; g = c) {
				var y = new Rp(n.doc, Oe(n.doc, g), g);
				(c = g + y.size), l.push(y);
			}
			return l;
		}
		var Ko = null;
		function T1(n) {
			Ko
				? Ko.ops.push(n)
				: (n.ownsGroup = Ko = { ops: [n], delayedCallbacks: [] });
		}
		function C1(n) {
			var i = n.delayedCallbacks,
				a = 0;
			do {
				for (; a < i.length; a++) i[a].call(null);
				for (var l = 0; l < n.ops.length; l++) {
					var c = n.ops[l];
					if (c.cursorActivityHandlers)
						for (; c.cursorActivityCalled < c.cursorActivityHandlers.length; )
							c.cursorActivityHandlers[c.cursorActivityCalled++].call(
								null,
								c.cm,
							);
				}
			} while (a < i.length);
		}
		function E1(n, i) {
			var a = n.ownsGroup;
			if (a)
				try {
					C1(a);
				} finally {
					(Ko = null), i(a);
				}
		}
		var Xs = null;
		function jt(n, i) {
			var a = Zr(n, i);
			if (a.length) {
				var l = Array.prototype.slice.call(arguments, 2),
					c;
				Ko
					? (c = Ko.delayedCallbacks)
					: Xs
						? (c = Xs)
						: ((c = Xs = []), setTimeout(L1, 0));
				for (
					var g = function (x) {
							c.push(function () {
								return a[x].apply(null, l);
							});
						},
						y = 0;
					y < a.length;
					++y
				)
					g(y);
			}
		}
		function L1() {
			var n = Xs;
			Xs = null;
			for (var i = 0; i < n.length; ++i) n[i]();
		}
		function Dp(n, i, a, l) {
			for (var c = 0; c < i.changes.length; c++) {
				var g = i.changes[c];
				g == 'text'
					? M1(n, i)
					: g == 'gutter'
						? Ip(n, i, a, l)
						: g == 'class'
							? lf(n, i)
							: g == 'widget' && N1(n, i, l);
			}
			i.changes = null;
		}
		function Ys(n) {
			return (
				n.node == n.text &&
					((n.node = k('div', null, null, 'position: relative')),
					n.text.parentNode && n.text.parentNode.replaceChild(n.node, n.text),
					n.node.appendChild(n.text),
					h && p < 8 && (n.node.style.zIndex = 2)),
				n.node
			);
		}
		function A1(n, i) {
			var a = i.bgClass
				? i.bgClass + ' ' + (i.line.bgClass || '')
				: i.line.bgClass;
			if ((a && (a += ' CodeMirror-linebackground'), i.background))
				a
					? (i.background.className = a)
					: (i.background.parentNode.removeChild(i.background),
						(i.background = null));
			else if (a) {
				var l = Ys(i);
				(i.background = l.insertBefore(k('div', null, a), l.firstChild)),
					n.display.input.setUneditable(i.background);
			}
		}
		function zp(n, i) {
			var a = n.display.externalMeasured;
			return a && a.line == i.line
				? ((n.display.externalMeasured = null),
					(i.measure = a.measure),
					a.built)
				: Pp(n, i);
		}
		function M1(n, i) {
			var a = i.text.className,
				l = zp(n, i);
			i.text == i.node && (i.node = l.pre),
				i.text.parentNode.replaceChild(l.pre, i.text),
				(i.text = l.pre),
				l.bgClass != i.bgClass || l.textClass != i.textClass
					? ((i.bgClass = l.bgClass), (i.textClass = l.textClass), lf(n, i))
					: a && (i.text.className = a);
		}
		function lf(n, i) {
			A1(n, i),
				i.line.wrapClass
					? (Ys(i).className = i.line.wrapClass)
					: i.node != i.text && (i.node.className = '');
			var a = i.textClass
				? i.textClass + ' ' + (i.line.textClass || '')
				: i.line.textClass;
			i.text.className = a || '';
		}
		function Ip(n, i, a, l) {
			if (
				(i.gutter && (i.node.removeChild(i.gutter), (i.gutter = null)),
				i.gutterBackground &&
					(i.node.removeChild(i.gutterBackground), (i.gutterBackground = null)),
				i.line.gutterClass)
			) {
				var c = Ys(i);
				(i.gutterBackground = k(
					'div',
					null,
					'CodeMirror-gutter-background ' + i.line.gutterClass,
					'left: ' +
						(n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) +
						'px; width: ' +
						l.gutterTotalWidth +
						'px',
				)),
					n.display.input.setUneditable(i.gutterBackground),
					c.insertBefore(i.gutterBackground, i.text);
			}
			var g = i.line.gutterMarkers;
			if (n.options.lineNumbers || g) {
				var y = Ys(i),
					x = (i.gutter = k(
						'div',
						null,
						'CodeMirror-gutter-wrapper',
						'left: ' +
							(n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) +
							'px',
					));
				if (
					(x.setAttribute('aria-hidden', 'true'),
					n.display.input.setUneditable(x),
					y.insertBefore(x, i.text),
					i.line.gutterClass && (x.className += ' ' + i.line.gutterClass),
					n.options.lineNumbers &&
						(!g || !g['CodeMirror-linenumbers']) &&
						(i.lineNumber = x.appendChild(
							k(
								'div',
								ge(n.options, a),
								'CodeMirror-linenumber CodeMirror-gutter-elt',
								'left: ' +
									l.gutterLeft['CodeMirror-linenumbers'] +
									'px; width: ' +
									n.display.lineNumInnerWidth +
									'px',
							),
						)),
					g)
				)
					for (var S = 0; S < n.display.gutterSpecs.length; ++S) {
						var _ = n.display.gutterSpecs[S].className,
							P = g.hasOwnProperty(_) && g[_];
						P &&
							x.appendChild(
								k(
									'div',
									[P],
									'CodeMirror-gutter-elt',
									'left: ' +
										l.gutterLeft[_] +
										'px; width: ' +
										l.gutterWidth[_] +
										'px',
								),
							);
					}
			}
		}
		function N1(n, i, a) {
			i.alignable && (i.alignable = null);
			for (
				var l = ee('CodeMirror-linewidget'), c = i.node.firstChild, g = void 0;
				c;
				c = g
			)
				(g = c.nextSibling), l.test(c.className) && i.node.removeChild(c);
			Fp(n, i, a);
		}
		function $1(n, i, a, l) {
			var c = zp(n, i);
			return (
				(i.text = i.node = c.pre),
				c.bgClass && (i.bgClass = c.bgClass),
				c.textClass && (i.textClass = c.textClass),
				lf(n, i),
				Ip(n, i, a, l),
				Fp(n, i, l),
				i.node
			);
		}
		function Fp(n, i, a) {
			if ((Hp(n, i.line, i, a, !0), i.rest))
				for (var l = 0; l < i.rest.length; l++) Hp(n, i.rest[l], i, a, !1);
		}
		function Hp(n, i, a, l, c) {
			if (i.widgets)
				for (var g = Ys(a), y = 0, x = i.widgets; y < x.length; ++y) {
					var S = x[y],
						_ = k(
							'div',
							[S.node],
							'CodeMirror-linewidget' + (S.className ? ' ' + S.className : ''),
						);
					S.handleMouseEvents || _.setAttribute('cm-ignore-events', 'true'),
						P1(S, _, a, l),
						n.display.input.setUneditable(_),
						c && S.above
							? g.insertBefore(_, a.gutter || a.text)
							: g.appendChild(_),
						jt(S, 'redraw');
				}
		}
		function P1(n, i, a, l) {
			if (n.noHScroll) {
				(a.alignable || (a.alignable = [])).push(i);
				var c = l.wrapperWidth;
				(i.style.left = l.fixedPos + 'px'),
					n.coverGutter ||
						((c -= l.gutterTotalWidth),
						(i.style.paddingLeft = l.gutterTotalWidth + 'px')),
					(i.style.width = c + 'px');
			}
			n.coverGutter &&
				((i.style.zIndex = 5),
				(i.style.position = 'relative'),
				n.noHScroll || (i.style.marginLeft = -l.gutterTotalWidth + 'px'));
		}
		function Zs(n) {
			if (n.height != null) return n.height;
			var i = n.doc.cm;
			if (!i) return 0;
			if (!ie(document.body, n.node)) {
				var a = 'position: relative;';
				n.coverGutter &&
					(a += 'margin-left: -' + i.display.gutters.offsetWidth + 'px;'),
					n.noHScroll &&
						(a += 'width: ' + i.display.wrapper.clientWidth + 'px;'),
					F(i.display.measure, k('div', [n.node], null, a));
			}
			return (n.height = n.node.parentNode.offsetHeight);
		}
		function ti(n, i) {
			for (var a = Ws(i); a != n.wrapper; a = a.parentNode)
				if (
					!a ||
					(a.nodeType == 1 && a.getAttribute('cm-ignore-events') == 'true') ||
					(a.parentNode == n.sizer && a != n.mover)
				)
					return !0;
		}
		function Fa(n) {
			return n.lineSpace.offsetTop;
		}
		function af(n) {
			return n.mover.offsetHeight - n.lineSpace.offsetHeight;
		}
		function qp(n) {
			if (n.cachedPaddingH) return n.cachedPaddingH;
			var i = F(n.measure, k('pre', 'x', 'CodeMirror-line-like')),
				a = window.getComputedStyle
					? window.getComputedStyle(i)
					: i.currentStyle,
				l = { left: parseInt(a.paddingLeft), right: parseInt(a.paddingRight) };
			return !isNaN(l.left) && !isNaN(l.right) && (n.cachedPaddingH = l), l;
		}
		function Or(n) {
			return z - n.display.nativeBarWidth;
		}
		function lo(n) {
			return n.display.scroller.clientWidth - Or(n) - n.display.barWidth;
		}
		function uf(n) {
			return n.display.scroller.clientHeight - Or(n) - n.display.barHeight;
		}
		function O1(n, i, a) {
			var l = n.options.lineWrapping,
				c = l && lo(n);
			if (!i.measure.heights || (l && i.measure.width != c)) {
				var g = (i.measure.heights = []);
				if (l) {
					i.measure.width = c;
					for (
						var y = i.text.firstChild.getClientRects(), x = 0;
						x < y.length - 1;
						x++
					) {
						var S = y[x],
							_ = y[x + 1];
						Math.abs(S.bottom - _.bottom) > 2 &&
							g.push((S.bottom + _.top) / 2 - a.top);
					}
				}
				g.push(a.bottom - a.top);
			}
		}
		function Bp(n, i, a) {
			if (n.line == i) return { map: n.measure.map, cache: n.measure.cache };
			if (n.rest) {
				for (var l = 0; l < n.rest.length; l++)
					if (n.rest[l] == i)
						return { map: n.measure.maps[l], cache: n.measure.caches[l] };
				for (var c = 0; c < n.rest.length; c++)
					if (T(n.rest[c]) > a)
						return {
							map: n.measure.maps[c],
							cache: n.measure.caches[c],
							before: !0,
						};
			}
		}
		function R1(n, i) {
			i = hr(i);
			var a = T(i),
				l = (n.display.externalMeasured = new Rp(n.doc, i, a));
			l.lineN = a;
			var c = (l.built = Pp(n, l));
			return (l.text = c.pre), F(n.display.lineMeasure, c.pre), l;
		}
		function Wp(n, i, a, l) {
			return Rr(n, Xo(n, i), a, l);
		}
		function cf(n, i) {
			if (i >= n.display.viewFrom && i < n.display.viewTo)
				return n.display.view[co(n, i)];
			var a = n.display.externalMeasured;
			if (a && i >= a.lineN && i < a.lineN + a.size) return a;
		}
		function Xo(n, i) {
			var a = T(i),
				l = cf(n, a);
			l && !l.text
				? (l = null)
				: l && l.changes && (Dp(n, l, a, gf(n)), (n.curOp.forceUpdate = !0)),
				l || (l = R1(n, i));
			var c = Bp(l, i, a);
			return {
				line: i,
				view: l,
				rect: null,
				map: c.map,
				cache: c.cache,
				before: c.before,
				hasHeights: !1,
			};
		}
		function Rr(n, i, a, l, c) {
			i.before && (a = -1);
			var g = a + (l || ''),
				y;
			return (
				i.cache.hasOwnProperty(g)
					? (y = i.cache[g])
					: (i.rect || (i.rect = i.view.text.getBoundingClientRect()),
						i.hasHeights || (O1(n, i.view, i.rect), (i.hasHeights = !0)),
						(y = z1(n, i, a, l)),
						y.bogus || (i.cache[g] = y)),
				{
					left: y.left,
					right: y.right,
					top: c ? y.rtop : y.top,
					bottom: c ? y.rbottom : y.bottom,
				}
			);
		}
		var Up = { left: 0, right: 0, top: 0, bottom: 0 };
		function Vp(n, i, a) {
			for (var l, c, g, y, x, S, _ = 0; _ < n.length; _ += 3)
				if (
					((x = n[_]),
					(S = n[_ + 1]),
					i < x
						? ((c = 0), (g = 1), (y = 'left'))
						: i < S
							? ((c = i - x), (g = c + 1))
							: (_ == n.length - 3 || (i == S && n[_ + 3] > i)) &&
								((g = S - x), (c = g - 1), i >= S && (y = 'right')),
					c != null)
				) {
					if (
						((l = n[_ + 2]),
						x == S && a == (l.insertLeft ? 'left' : 'right') && (y = a),
						a == 'left' && c == 0)
					)
						for (; _ && n[_ - 2] == n[_ - 3] && n[_ - 1].insertLeft; )
							(l = n[(_ -= 3) + 2]), (y = 'left');
					if (a == 'right' && c == S - x)
						for (
							;
							_ < n.length - 3 && n[_ + 3] == n[_ + 4] && !n[_ + 5].insertLeft;

						)
							(l = n[(_ += 3) + 2]), (y = 'right');
					break;
				}
			return {
				node: l,
				start: c,
				end: g,
				collapse: y,
				coverStart: x,
				coverEnd: S,
			};
		}
		function D1(n, i) {
			var a = Up;
			if (i == 'left')
				for (var l = 0; l < n.length && (a = n[l]).left == a.right; l++);
			else
				for (var c = n.length - 1; c >= 0 && (a = n[c]).left == a.right; c--);
			return a;
		}
		function z1(n, i, a, l) {
			var c = Vp(i.map, a, l),
				g = c.node,
				y = c.start,
				x = c.end,
				S = c.collapse,
				_;
			if (g.nodeType == 3) {
				for (var P = 0; P < 4; P++) {
					for (; y && st(i.line.text.charAt(c.coverStart + y)); ) --y;
					for (
						;
						c.coverStart + x < c.coverEnd &&
						st(i.line.text.charAt(c.coverStart + x));

					)
						++x;
					if (
						(h && p < 9 && y == 0 && x == c.coverEnd - c.coverStart
							? (_ = g.parentNode.getBoundingClientRect())
							: (_ = D1(V(g, y, x).getClientRects(), l)),
						_.left || _.right || y == 0)
					)
						break;
					(x = y), (y = y - 1), (S = 'right');
				}
				h && p < 11 && (_ = I1(n.display.measure, _));
			} else {
				y > 0 && (S = l = 'right');
				var D;
				n.options.lineWrapping && (D = g.getClientRects()).length > 1
					? (_ = D[l == 'right' ? D.length - 1 : 0])
					: (_ = g.getBoundingClientRect());
			}
			if (h && p < 9 && !y && (!_ || (!_.left && !_.right))) {
				var G = g.parentNode.getClientRects()[0];
				G
					? (_ = {
							left: G.left,
							right: G.left + Zo(n.display),
							top: G.top,
							bottom: G.bottom,
						})
					: (_ = Up);
			}
			for (
				var j = _.top - i.rect.top,
					re = _.bottom - i.rect.top,
					ce = (j + re) / 2,
					me = i.view.measure.heights,
					be = 0;
				be < me.length - 1 && !(ce < me[be]);
				be++
			);
			var Te = be ? me[be - 1] : 0,
				we = me[be],
				Me = {
					left: (S == 'right' ? _.right : _.left) - i.rect.left,
					right: (S == 'left' ? _.left : _.right) - i.rect.left,
					top: Te,
					bottom: we,
				};
			return (
				!_.left && !_.right && (Me.bogus = !0),
				n.options.singleCursorHeightPerLine ||
					((Me.rtop = j), (Me.rbottom = re)),
				Me
			);
		}
		function I1(n, i) {
			if (
				!window.screen ||
				screen.logicalXDPI == null ||
				screen.logicalXDPI == screen.deviceXDPI ||
				!Jc(n)
			)
				return i;
			var a = screen.logicalXDPI / screen.deviceXDPI,
				l = screen.logicalYDPI / screen.deviceYDPI;
			return {
				left: i.left * a,
				right: i.right * a,
				top: i.top * l,
				bottom: i.bottom * l,
			};
		}
		function jp(n) {
			if (
				n.measure &&
				((n.measure.cache = {}), (n.measure.heights = null), n.rest)
			)
				for (var i = 0; i < n.rest.length; i++) n.measure.caches[i] = {};
		}
		function Gp(n) {
			(n.display.externalMeasure = null), I(n.display.lineMeasure);
			for (var i = 0; i < n.display.view.length; i++) jp(n.display.view[i]);
		}
		function Js(n) {
			Gp(n),
				(n.display.cachedCharWidth =
					n.display.cachedTextHeight =
					n.display.cachedPaddingH =
						null),
				n.options.lineWrapping || (n.display.maxLineChanged = !0),
				(n.display.lineNumChars = null);
		}
		function Kp(n) {
			return b && $
				? -(
						n.body.getBoundingClientRect().left -
						parseInt(getComputedStyle(n.body).marginLeft)
					)
				: n.defaultView.pageXOffset || (n.documentElement || n.body).scrollLeft;
		}
		function Xp(n) {
			return b && $
				? -(
						n.body.getBoundingClientRect().top -
						parseInt(getComputedStyle(n.body).marginTop)
					)
				: n.defaultView.pageYOffset || (n.documentElement || n.body).scrollTop;
		}
		function ff(n) {
			var i = hr(n),
				a = i.widgets,
				l = 0;
			if (a) for (var c = 0; c < a.length; ++c) a[c].above && (l += Zs(a[c]));
			return l;
		}
		function Ha(n, i, a, l, c) {
			if (!c) {
				var g = ff(i);
				(a.top += g), (a.bottom += g);
			}
			if (l == 'line') return a;
			l || (l = 'local');
			var y = ei(i);
			if (
				(l == 'local' ? (y += Fa(n.display)) : (y -= n.display.viewOffset),
				l == 'page' || l == 'window')
			) {
				var x = n.display.lineSpace.getBoundingClientRect();
				y += x.top + (l == 'window' ? 0 : Xp(nt(n)));
				var S = x.left + (l == 'window' ? 0 : Kp(nt(n)));
				(a.left += S), (a.right += S);
			}
			return (a.top += y), (a.bottom += y), a;
		}
		function Yp(n, i, a) {
			if (a == 'div') return i;
			var l = i.left,
				c = i.top;
			if (a == 'page') (l -= Kp(nt(n))), (c -= Xp(nt(n)));
			else if (a == 'local' || !a) {
				var g = n.display.sizer.getBoundingClientRect();
				(l += g.left), (c += g.top);
			}
			var y = n.display.lineSpace.getBoundingClientRect();
			return { left: l - y.left, top: c - y.top };
		}
		function qa(n, i, a, l, c) {
			return l || (l = Oe(n.doc, i.line)), Ha(n, l, Wp(n, l, i.ch, c), a);
		}
		function pr(n, i, a, l, c, g) {
			(l = l || Oe(n.doc, i.line)), c || (c = Xo(n, l));
			function y(re, ce) {
				var me = Rr(n, c, re, ce ? 'right' : 'left', g);
				return (
					ce ? (me.left = me.right) : (me.right = me.left), Ha(n, l, me, a)
				);
			}
			var x = Je(l, n.doc.direction),
				S = i.ch,
				_ = i.sticky;
			if (
				(S >= l.text.length
					? ((S = l.text.length), (_ = 'before'))
					: S <= 0 && ((S = 0), (_ = 'after')),
				!x)
			)
				return y(_ == 'before' ? S - 1 : S, _ == 'before');
			function P(re, ce, me) {
				var be = x[ce],
					Te = be.level == 1;
				return y(me ? re - 1 : re, Te != me);
			}
			var D = Dt(x, S, _),
				G = Nr,
				j = P(S, D, _ == 'before');
			return G != null && (j.other = P(S, G, _ != 'before')), j;
		}
		function Zp(n, i) {
			var a = 0;
			(i = Ge(n.doc, i)), n.options.lineWrapping || (a = Zo(n.display) * i.ch);
			var l = Oe(n.doc, i.line),
				c = ei(l) + Fa(n.display);
			return { left: a, right: a, top: c, bottom: c + l.height };
		}
		function df(n, i, a, l, c) {
			var g = ne(n, i, a);
			return (g.xRel = c), l && (g.outside = l), g;
		}
		function hf(n, i, a) {
			var l = n.doc;
			if (((a += n.display.viewOffset), a < 0))
				return df(l.first, 0, null, -1, -1);
			var c = R(l, a),
				g = l.first + l.size - 1;
			if (c > g)
				return df(l.first + l.size - 1, Oe(l, g).text.length, null, 1, 1);
			i < 0 && (i = 0);
			for (var y = Oe(l, c); ; ) {
				var x = F1(n, y, c, i, a),
					S = h1(y, x.ch + (x.xRel > 0 || x.outside > 0 ? 1 : 0));
				if (!S) return x;
				var _ = S.find(1);
				if (_.line == c) return _;
				y = Oe(l, (c = _.line));
			}
		}
		function Jp(n, i, a, l) {
			l -= ff(i);
			var c = i.text.length,
				g = It(
					function (y) {
						return Rr(n, a, y - 1).bottom <= l;
					},
					c,
					0,
				);
			return (
				(c = It(
					function (y) {
						return Rr(n, a, y).top > l;
					},
					g,
					c,
				)),
				{ begin: g, end: c }
			);
		}
		function Qp(n, i, a, l) {
			a || (a = Xo(n, i));
			var c = Ha(n, i, Rr(n, a, l), 'line').top;
			return Jp(n, i, a, c);
		}
		function pf(n, i, a, l) {
			return n.bottom <= a ? !1 : n.top > a ? !0 : (l ? n.left : n.right) > i;
		}
		function F1(n, i, a, l, c) {
			c -= ei(i);
			var g = Xo(n, i),
				y = ff(i),
				x = 0,
				S = i.text.length,
				_ = !0,
				P = Je(i, n.doc.direction);
			if (P) {
				var D = (n.options.lineWrapping ? q1 : H1)(n, i, a, g, P, l, c);
				(_ = D.level != 1),
					(x = _ ? D.from : D.to - 1),
					(S = _ ? D.to : D.from - 1);
			}
			var G = null,
				j = null,
				re = It(
					function (Ie) {
						var Re = Rr(n, g, Ie);
						return (
							(Re.top += y),
							(Re.bottom += y),
							pf(Re, l, c, !1)
								? (Re.top <= c && Re.left <= l && ((G = Ie), (j = Re)), !0)
								: !1
						);
					},
					x,
					S,
				),
				ce,
				me,
				be = !1;
			if (j) {
				var Te = l - j.left < j.right - l,
					we = Te == _;
				(re = G + (we ? 0 : 1)),
					(me = we ? 'after' : 'before'),
					(ce = Te ? j.left : j.right);
			} else {
				!_ && (re == S || re == x) && re++,
					(me =
						re == 0
							? 'after'
							: re == i.text.length
								? 'before'
								: Rr(n, g, re - (_ ? 1 : 0)).bottom + y <= c == _
									? 'after'
									: 'before');
				var Me = pr(n, ne(a, re, me), 'line', i, g);
				(ce = Me.left), (be = c < Me.top ? -1 : c >= Me.bottom ? 1 : 0);
			}
			return (re = Ut(i.text, re, 1)), df(a, re, me, be, l - ce);
		}
		function H1(n, i, a, l, c, g, y) {
			var x = It(
					function (D) {
						var G = c[D],
							j = G.level != 1;
						return pf(
							pr(
								n,
								ne(a, j ? G.to : G.from, j ? 'before' : 'after'),
								'line',
								i,
								l,
							),
							g,
							y,
							!0,
						);
					},
					0,
					c.length - 1,
				),
				S = c[x];
			if (x > 0) {
				var _ = S.level != 1,
					P = pr(
						n,
						ne(a, _ ? S.from : S.to, _ ? 'after' : 'before'),
						'line',
						i,
						l,
					);
				pf(P, g, y, !0) && P.top > y && (S = c[x - 1]);
			}
			return S;
		}
		function q1(n, i, a, l, c, g, y) {
			var x = Jp(n, i, l, y),
				S = x.begin,
				_ = x.end;
			/\s/.test(i.text.charAt(_ - 1)) && _--;
			for (var P = null, D = null, G = 0; G < c.length; G++) {
				var j = c[G];
				if (!(j.from >= _ || j.to <= S)) {
					var re = j.level != 1,
						ce = Rr(
							n,
							l,
							re ? Math.min(_, j.to) - 1 : Math.max(S, j.from),
						).right,
						me = ce < g ? g - ce + 1e9 : ce - g;
					(!P || D > me) && ((P = j), (D = me));
				}
			}
			return (
				P || (P = c[c.length - 1]),
				P.from < S && (P = { from: S, to: P.to, level: P.level }),
				P.to > _ && (P = { from: P.from, to: _, level: P.level }),
				P
			);
		}
		var ao;
		function Yo(n) {
			if (n.cachedTextHeight != null) return n.cachedTextHeight;
			if (ao == null) {
				ao = k('pre', null, 'CodeMirror-line-like');
				for (var i = 0; i < 49; ++i)
					ao.appendChild(document.createTextNode('x')), ao.appendChild(k('br'));
				ao.appendChild(document.createTextNode('x'));
			}
			F(n.measure, ao);
			var a = ao.offsetHeight / 50;
			return a > 3 && (n.cachedTextHeight = a), I(n.measure), a || 1;
		}
		function Zo(n) {
			if (n.cachedCharWidth != null) return n.cachedCharWidth;
			var i = k('span', 'xxxxxxxxxx'),
				a = k('pre', [i], 'CodeMirror-line-like');
			F(n.measure, a);
			var l = i.getBoundingClientRect(),
				c = (l.right - l.left) / 10;
			return c > 2 && (n.cachedCharWidth = c), c || 10;
		}
		function gf(n) {
			for (
				var i = n.display,
					a = {},
					l = {},
					c = i.gutters.clientLeft,
					g = i.gutters.firstChild,
					y = 0;
				g;
				g = g.nextSibling, ++y
			) {
				var x = n.display.gutterSpecs[y].className;
				(a[x] = g.offsetLeft + g.clientLeft + c), (l[x] = g.clientWidth);
			}
			return {
				fixedPos: mf(i),
				gutterTotalWidth: i.gutters.offsetWidth,
				gutterLeft: a,
				gutterWidth: l,
				wrapperWidth: i.wrapper.clientWidth,
			};
		}
		function mf(n) {
			return (
				n.scroller.getBoundingClientRect().left -
				n.sizer.getBoundingClientRect().left
			);
		}
		function eg(n) {
			var i = Yo(n.display),
				a = n.options.lineWrapping,
				l =
					a && Math.max(5, n.display.scroller.clientWidth / Zo(n.display) - 3);
			return function (c) {
				if (Ti(n.doc, c)) return 0;
				var g = 0;
				if (c.widgets)
					for (var y = 0; y < c.widgets.length; y++)
						c.widgets[y].height && (g += c.widgets[y].height);
				return a ? g + (Math.ceil(c.text.length / l) || 1) * i : g + i;
			};
		}
		function vf(n) {
			var i = n.doc,
				a = eg(n);
			i.iter(function (l) {
				var c = a(l);
				c != l.height && jn(l, c);
			});
		}
		function uo(n, i, a, l) {
			var c = n.display;
			if (!a && Ws(i).getAttribute('cm-not-content') == 'true') return null;
			var g,
				y,
				x = c.lineSpace.getBoundingClientRect();
			try {
				(g = i.clientX - x.left), (y = i.clientY - x.top);
			} catch {
				return null;
			}
			var S = hf(n, g, y),
				_;
			if (l && S.xRel > 0 && (_ = Oe(n.doc, S.line).text).length == S.ch) {
				var P = he(_, _.length, n.options.tabSize) - _.length;
				S = ne(
					S.line,
					Math.max(0, Math.round((g - qp(n.display).left) / Zo(n.display)) - P),
				);
			}
			return S;
		}
		function co(n, i) {
			if (i >= n.display.viewTo || ((i -= n.display.viewFrom), i < 0))
				return null;
			for (var a = n.display.view, l = 0; l < a.length; l++)
				if (((i -= a[l].size), i < 0)) return l;
		}
		function wn(n, i, a, l) {
			i == null && (i = n.doc.first),
				a == null && (a = n.doc.first + n.doc.size),
				l || (l = 0);
			var c = n.display;
			if (
				(l &&
					a < c.viewTo &&
					(c.updateLineNumbers == null || c.updateLineNumbers > i) &&
					(c.updateLineNumbers = i),
				(n.curOp.viewChanged = !0),
				i >= c.viewTo)
			)
				Qr && rf(n.doc, i) < c.viewTo && Ei(n);
			else if (a <= c.viewFrom)
				Qr && Np(n.doc, a + l) > c.viewFrom
					? Ei(n)
					: ((c.viewFrom += l), (c.viewTo += l));
			else if (i <= c.viewFrom && a >= c.viewTo) Ei(n);
			else if (i <= c.viewFrom) {
				var g = Ba(n, a, a + l, 1);
				g
					? ((c.view = c.view.slice(g.index)),
						(c.viewFrom = g.lineN),
						(c.viewTo += l))
					: Ei(n);
			} else if (a >= c.viewTo) {
				var y = Ba(n, i, i, -1);
				y ? ((c.view = c.view.slice(0, y.index)), (c.viewTo = y.lineN)) : Ei(n);
			} else {
				var x = Ba(n, i, i, -1),
					S = Ba(n, a, a + l, 1);
				x && S
					? ((c.view = c.view
							.slice(0, x.index)
							.concat(Ia(n, x.lineN, S.lineN))
							.concat(c.view.slice(S.index))),
						(c.viewTo += l))
					: Ei(n);
			}
			var _ = c.externalMeasured;
			_ &&
				(a < _.lineN
					? (_.lineN += l)
					: i < _.lineN + _.size && (c.externalMeasured = null));
		}
		function Ci(n, i, a) {
			n.curOp.viewChanged = !0;
			var l = n.display,
				c = n.display.externalMeasured;
			if (
				(c &&
					i >= c.lineN &&
					i < c.lineN + c.size &&
					(l.externalMeasured = null),
				!(i < l.viewFrom || i >= l.viewTo))
			) {
				var g = l.view[co(n, i)];
				if (g.node != null) {
					var y = g.changes || (g.changes = []);
					Ae(y, a) == -1 && y.push(a);
				}
			}
		}
		function Ei(n) {
			(n.display.viewFrom = n.display.viewTo = n.doc.first),
				(n.display.view = []),
				(n.display.viewOffset = 0);
		}
		function Ba(n, i, a, l) {
			var c = co(n, i),
				g,
				y = n.display.view;
			if (!Qr || a == n.doc.first + n.doc.size) return { index: c, lineN: a };
			for (var x = n.display.viewFrom, S = 0; S < c; S++) x += y[S].size;
			if (x != i) {
				if (l > 0) {
					if (c == y.length - 1) return null;
					(g = x + y[c].size - i), c++;
				} else g = x - i;
				(i += g), (a += g);
			}
			for (; rf(n.doc, a) != a; ) {
				if (c == (l < 0 ? 0 : y.length - 1)) return null;
				(a += l * y[c - (l < 0 ? 1 : 0)].size), (c += l);
			}
			return { index: c, lineN: a };
		}
		function B1(n, i, a) {
			var l = n.display,
				c = l.view;
			c.length == 0 || i >= l.viewTo || a <= l.viewFrom
				? ((l.view = Ia(n, i, a)), (l.viewFrom = i))
				: (l.viewFrom > i
						? (l.view = Ia(n, i, l.viewFrom).concat(l.view))
						: l.viewFrom < i && (l.view = l.view.slice(co(n, i))),
					(l.viewFrom = i),
					l.viewTo < a
						? (l.view = l.view.concat(Ia(n, l.viewTo, a)))
						: l.viewTo > a && (l.view = l.view.slice(0, co(n, a)))),
				(l.viewTo = a);
		}
		function tg(n) {
			for (var i = n.display.view, a = 0, l = 0; l < i.length; l++) {
				var c = i[l];
				!c.hidden && (!c.node || c.changes) && ++a;
			}
			return a;
		}
		function Qs(n) {
			n.display.input.showSelection(n.display.input.prepareSelection());
		}
		function ng(n, i) {
			i === void 0 && (i = !0);
			var a = n.doc,
				l = {},
				c = (l.cursors = document.createDocumentFragment()),
				g = (l.selection = document.createDocumentFragment()),
				y = n.options.$customCursor;
			y && (i = !0);
			for (var x = 0; x < a.sel.ranges.length; x++)
				if (!(!i && x == a.sel.primIndex)) {
					var S = a.sel.ranges[x];
					if (
						!(
							S.from().line >= n.display.viewTo ||
							S.to().line < n.display.viewFrom
						)
					) {
						var _ = S.empty();
						if (y) {
							var P = y(n, S);
							P && yf(n, P, c);
						} else (_ || n.options.showCursorWhenSelecting) && yf(n, S.head, c);
						_ || W1(n, S, g);
					}
				}
			return l;
		}
		function yf(n, i, a) {
			var l = pr(n, i, 'div', null, null, !n.options.singleCursorHeightPerLine),
				c = a.appendChild(k('div', ' ', 'CodeMirror-cursor'));
			if (
				((c.style.left = l.left + 'px'),
				(c.style.top = l.top + 'px'),
				(c.style.height =
					Math.max(0, l.bottom - l.top) * n.options.cursorHeight + 'px'),
				/\bcm-fat-cursor\b/.test(n.getWrapperElement().className))
			) {
				var g = qa(n, i, 'div', null, null),
					y = g.right - g.left;
				c.style.width = (y > 0 ? y : n.defaultCharWidth()) + 'px';
			}
			if (l.other) {
				var x = a.appendChild(
					k('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'),
				);
				(x.style.display = ''),
					(x.style.left = l.other.left + 'px'),
					(x.style.top = l.other.top + 'px'),
					(x.style.height = (l.other.bottom - l.other.top) * 0.85 + 'px');
			}
		}
		function Wa(n, i) {
			return n.top - i.top || n.left - i.left;
		}
		function W1(n, i, a) {
			var l = n.display,
				c = n.doc,
				g = document.createDocumentFragment(),
				y = qp(n.display),
				x = y.left,
				S = Math.max(l.sizerWidth, lo(n) - l.sizer.offsetLeft) - y.right,
				_ = c.direction == 'ltr';
			function P(we, Me, Ie, Re) {
				Me < 0 && (Me = 0),
					(Me = Math.round(Me)),
					(Re = Math.round(Re)),
					g.appendChild(
						k(
							'div',
							null,
							'CodeMirror-selected',
							'position: absolute; left: ' +
								we +
								`px;
                             top: ` +
								Me +
								'px; width: ' +
								(Ie ?? S - we) +
								`px;
                             height: ` +
								(Re - Me) +
								'px',
						),
					);
			}
			function D(we, Me, Ie) {
				var Re = Oe(c, we),
					Ye = Re.text.length,
					xt,
					Xt;
				function Lt(Ft, _n) {
					return qa(n, ne(we, Ft), 'div', Re, _n);
				}
				function zn(Ft, _n, tn) {
					var Wt = Qp(n, Re, null, Ft),
						Ht = (_n == 'ltr') == (tn == 'after') ? 'left' : 'right',
						Pt =
							tn == 'after'
								? Wt.begin
								: Wt.end - (/\s/.test(Re.text.charAt(Wt.end - 1)) ? 2 : 1);
					return Lt(Pt, Ht)[Ht];
				}
				var Sn = Je(Re, c.direction);
				return (
					Pn(Sn, Me || 0, Ie ?? Ye, function (Ft, _n, tn, Wt) {
						var Ht = tn == 'ltr',
							Pt = Lt(Ft, Ht ? 'left' : 'right'),
							kn = Lt(_n - 1, Ht ? 'right' : 'left'),
							cs = Me == null && Ft == 0,
							Pi = Ie == null && _n == Ye,
							an = Wt == 0,
							Dr = !Sn || Wt == Sn.length - 1;
						if (kn.top - Pt.top <= 3) {
							var Yt = (_ ? cs : Pi) && an,
								Vf = (_ ? Pi : cs) && Dr,
								ii = Yt ? x : (Ht ? Pt : kn).left,
								mo = Vf ? S : (Ht ? kn : Pt).right;
							P(ii, Pt.top, mo - ii, Pt.bottom);
						} else {
							var vo, dn, fs, jf;
							Ht
								? ((vo = _ && cs && an ? x : Pt.left),
									(dn = _ ? S : zn(Ft, tn, 'before')),
									(fs = _ ? x : zn(_n, tn, 'after')),
									(jf = _ && Pi && Dr ? S : kn.right))
								: ((vo = _ ? zn(Ft, tn, 'before') : x),
									(dn = !_ && cs && an ? S : Pt.right),
									(fs = !_ && Pi && Dr ? x : kn.left),
									(jf = _ ? zn(_n, tn, 'after') : S)),
								P(vo, Pt.top, dn - vo, Pt.bottom),
								Pt.bottom < kn.top && P(x, Pt.bottom, null, kn.top),
								P(fs, kn.top, jf - fs, kn.bottom);
						}
						(!xt || Wa(Pt, xt) < 0) && (xt = Pt),
							Wa(kn, xt) < 0 && (xt = kn),
							(!Xt || Wa(Pt, Xt) < 0) && (Xt = Pt),
							Wa(kn, Xt) < 0 && (Xt = kn);
					}),
					{ start: xt, end: Xt }
				);
			}
			var G = i.from(),
				j = i.to();
			if (G.line == j.line) D(G.line, G.ch, j.ch);
			else {
				var re = Oe(c, G.line),
					ce = Oe(c, j.line),
					me = hr(re) == hr(ce),
					be = D(G.line, G.ch, me ? re.text.length + 1 : null).end,
					Te = D(j.line, me ? 0 : null, j.ch).start;
				me &&
					(be.top < Te.top - 2
						? (P(be.right, be.top, null, be.bottom),
							P(x, Te.top, Te.left, Te.bottom))
						: P(be.right, be.top, Te.left - be.right, be.bottom)),
					be.bottom < Te.top && P(x, be.bottom, null, Te.top);
			}
			a.appendChild(g);
		}
		function bf(n) {
			if (n.state.focused) {
				var i = n.display;
				clearInterval(i.blinker);
				var a = !0;
				(i.cursorDiv.style.visibility = ''),
					n.options.cursorBlinkRate > 0
						? (i.blinker = setInterval(function () {
								n.hasFocus() || Jo(n),
									(i.cursorDiv.style.visibility = (a = !a) ? '' : 'hidden');
							}, n.options.cursorBlinkRate))
						: n.options.cursorBlinkRate < 0 &&
							(i.cursorDiv.style.visibility = 'hidden');
			}
		}
		function rg(n) {
			n.hasFocus() || (n.display.input.focus(), n.state.focused || xf(n));
		}
		function wf(n) {
			(n.state.delayingBlurEvent = !0),
				setTimeout(function () {
					n.state.delayingBlurEvent &&
						((n.state.delayingBlurEvent = !1), n.state.focused && Jo(n));
				}, 100);
		}
		function xf(n, i) {
			n.state.delayingBlurEvent &&
				!n.state.draggingText &&
				(n.state.delayingBlurEvent = !1),
				n.options.readOnly != 'nocursor' &&
					(n.state.focused ||
						(Mt(n, 'focus', n, i),
						(n.state.focused = !0),
						Ne(n.display.wrapper, 'CodeMirror-focused'),
						!n.curOp &&
							n.display.selForContextMenu != n.doc.sel &&
							(n.display.input.reset(),
							m &&
								setTimeout(function () {
									return n.display.input.reset(!0);
								}, 20)),
						n.display.input.receivedFocus()),
					bf(n));
		}
		function Jo(n, i) {
			n.state.delayingBlurEvent ||
				(n.state.focused &&
					(Mt(n, 'blur', n, i),
					(n.state.focused = !1),
					Y(n.display.wrapper, 'CodeMirror-focused')),
				clearInterval(n.display.blinker),
				setTimeout(function () {
					n.state.focused || (n.display.shift = !1);
				}, 150));
		}
		function Ua(n) {
			for (
				var i = n.display,
					a = i.lineDiv.offsetTop,
					l = Math.max(0, i.scroller.getBoundingClientRect().top),
					c = i.lineDiv.getBoundingClientRect().top,
					g = 0,
					y = 0;
				y < i.view.length;
				y++
			) {
				var x = i.view[y],
					S = n.options.lineWrapping,
					_ = void 0,
					P = 0;
				if (!x.hidden) {
					if (((c += x.line.height), h && p < 8)) {
						var D = x.node.offsetTop + x.node.offsetHeight;
						(_ = D - a), (a = D);
					} else {
						var G = x.node.getBoundingClientRect();
						(_ = G.bottom - G.top),
							!S &&
								x.text.firstChild &&
								(P =
									x.text.firstChild.getBoundingClientRect().right - G.left - 1);
					}
					var j = x.line.height - _;
					if (
						(j > 0.005 || j < -0.005) &&
						(c < l && (g -= j), jn(x.line, _), ig(x.line), x.rest)
					)
						for (var re = 0; re < x.rest.length; re++) ig(x.rest[re]);
					if (P > n.display.sizerWidth) {
						var ce = Math.ceil(P / Zo(n.display));
						ce > n.display.maxLineLength &&
							((n.display.maxLineLength = ce),
							(n.display.maxLine = x.line),
							(n.display.maxLineChanged = !0));
					}
				}
			}
			Math.abs(g) > 2 && (i.scroller.scrollTop += g);
		}
		function ig(n) {
			if (n.widgets)
				for (var i = 0; i < n.widgets.length; ++i) {
					var a = n.widgets[i],
						l = a.node.parentNode;
					l && (a.height = l.offsetHeight);
				}
		}
		function Va(n, i, a) {
			var l = a && a.top != null ? Math.max(0, a.top) : n.scroller.scrollTop;
			l = Math.floor(l - Fa(n));
			var c = a && a.bottom != null ? a.bottom : l + n.wrapper.clientHeight,
				g = R(i, l),
				y = R(i, c);
			if (a && a.ensure) {
				var x = a.ensure.from.line,
					S = a.ensure.to.line;
				x < g
					? ((g = x), (y = R(i, ei(Oe(i, x)) + n.wrapper.clientHeight)))
					: Math.min(S, i.lastLine()) >= y &&
						((g = R(i, ei(Oe(i, S)) - n.wrapper.clientHeight)), (y = S));
			}
			return { from: g, to: Math.max(y, g + 1) };
		}
		function U1(n, i) {
			if (!Nt(n, 'scrollCursorIntoView')) {
				var a = n.display,
					l = a.sizer.getBoundingClientRect(),
					c = null,
					g = a.wrapper.ownerDocument;
				if (
					(i.top + l.top < 0
						? (c = !0)
						: i.bottom + l.top >
								(g.defaultView.innerHeight || g.documentElement.clientHeight) &&
							(c = !1),
					c != null && !N)
				) {
					var y = k(
						'div',
						'​',
						null,
						`position: absolute;
                         top: ` +
							(i.top - a.viewOffset - Fa(n.display)) +
							`px;
                         height: ` +
							(i.bottom - i.top + Or(n) + a.barHeight) +
							`px;
                         left: ` +
							i.left +
							'px; width: ' +
							Math.max(2, i.right - i.left) +
							'px;',
					);
					n.display.lineSpace.appendChild(y),
						y.scrollIntoView(c),
						n.display.lineSpace.removeChild(y);
				}
			}
		}
		function V1(n, i, a, l) {
			l == null && (l = 0);
			var c;
			!n.options.lineWrapping &&
				i == a &&
				((a = i.sticky == 'before' ? ne(i.line, i.ch + 1, 'before') : i),
				(i = i.ch
					? ne(i.line, i.sticky == 'before' ? i.ch - 1 : i.ch, 'after')
					: i));
			for (var g = 0; g < 5; g++) {
				var y = !1,
					x = pr(n, i),
					S = !a || a == i ? x : pr(n, a);
				c = {
					left: Math.min(x.left, S.left),
					top: Math.min(x.top, S.top) - l,
					right: Math.max(x.left, S.left),
					bottom: Math.max(x.bottom, S.bottom) + l,
				};
				var _ = Sf(n, c),
					P = n.doc.scrollTop,
					D = n.doc.scrollLeft;
				if (
					(_.scrollTop != null &&
						(tl(n, _.scrollTop), Math.abs(n.doc.scrollTop - P) > 1 && (y = !0)),
					_.scrollLeft != null &&
						(fo(n, _.scrollLeft),
						Math.abs(n.doc.scrollLeft - D) > 1 && (y = !0)),
					!y)
				)
					break;
			}
			return c;
		}
		function j1(n, i) {
			var a = Sf(n, i);
			a.scrollTop != null && tl(n, a.scrollTop),
				a.scrollLeft != null && fo(n, a.scrollLeft);
		}
		function Sf(n, i) {
			var a = n.display,
				l = Yo(n.display);
			i.top < 0 && (i.top = 0);
			var c =
					n.curOp && n.curOp.scrollTop != null
						? n.curOp.scrollTop
						: a.scroller.scrollTop,
				g = uf(n),
				y = {};
			i.bottom - i.top > g && (i.bottom = i.top + g);
			var x = n.doc.height + af(a),
				S = i.top < l,
				_ = i.bottom > x - l;
			if (i.top < c) y.scrollTop = S ? 0 : i.top;
			else if (i.bottom > c + g) {
				var P = Math.min(i.top, (_ ? x : i.bottom) - g);
				P != c && (y.scrollTop = P);
			}
			var D = n.options.fixedGutter ? 0 : a.gutters.offsetWidth,
				G =
					n.curOp && n.curOp.scrollLeft != null
						? n.curOp.scrollLeft
						: a.scroller.scrollLeft - D,
				j = lo(n) - a.gutters.offsetWidth,
				re = i.right - i.left > j;
			return (
				re && (i.right = i.left + j),
				i.left < 10
					? (y.scrollLeft = 0)
					: i.left < G
						? (y.scrollLeft = Math.max(0, i.left + D - (re ? 0 : 10)))
						: i.right > j + G - 3 &&
							(y.scrollLeft = i.right + (re ? 0 : 10) - j),
				y
			);
		}
		function _f(n, i) {
			i != null &&
				(ja(n),
				(n.curOp.scrollTop =
					(n.curOp.scrollTop == null ? n.doc.scrollTop : n.curOp.scrollTop) +
					i));
		}
		function Qo(n) {
			ja(n);
			var i = n.getCursor();
			n.curOp.scrollToPos = {
				from: i,
				to: i,
				margin: n.options.cursorScrollMargin,
			};
		}
		function el(n, i, a) {
			(i != null || a != null) && ja(n),
				i != null && (n.curOp.scrollLeft = i),
				a != null && (n.curOp.scrollTop = a);
		}
		function G1(n, i) {
			ja(n), (n.curOp.scrollToPos = i);
		}
		function ja(n) {
			var i = n.curOp.scrollToPos;
			if (i) {
				n.curOp.scrollToPos = null;
				var a = Zp(n, i.from),
					l = Zp(n, i.to);
				og(n, a, l, i.margin);
			}
		}
		function og(n, i, a, l) {
			var c = Sf(n, {
				left: Math.min(i.left, a.left),
				top: Math.min(i.top, a.top) - l,
				right: Math.max(i.right, a.right),
				bottom: Math.max(i.bottom, a.bottom) + l,
			});
			el(n, c.scrollLeft, c.scrollTop);
		}
		function tl(n, i) {
			Math.abs(n.doc.scrollTop - i) < 2 ||
				(s || Tf(n, { top: i }), sg(n, i, !0), s && Tf(n), il(n, 100));
		}
		function sg(n, i, a) {
			(i = Math.max(
				0,
				Math.min(
					n.display.scroller.scrollHeight - n.display.scroller.clientHeight,
					i,
				),
			)),
				!(n.display.scroller.scrollTop == i && !a) &&
					((n.doc.scrollTop = i),
					n.display.scrollbars.setScrollTop(i),
					n.display.scroller.scrollTop != i &&
						(n.display.scroller.scrollTop = i));
		}
		function fo(n, i, a, l) {
			(i = Math.max(
				0,
				Math.min(
					i,
					n.display.scroller.scrollWidth - n.display.scroller.clientWidth,
				),
			)),
				!(
					(a ? i == n.doc.scrollLeft : Math.abs(n.doc.scrollLeft - i) < 2) && !l
				) &&
					((n.doc.scrollLeft = i),
					fg(n),
					n.display.scroller.scrollLeft != i &&
						(n.display.scroller.scrollLeft = i),
					n.display.scrollbars.setScrollLeft(i));
		}
		function nl(n) {
			var i = n.display,
				a = i.gutters.offsetWidth,
				l = Math.round(n.doc.height + af(n.display));
			return {
				clientHeight: i.scroller.clientHeight,
				viewHeight: i.wrapper.clientHeight,
				scrollWidth: i.scroller.scrollWidth,
				clientWidth: i.scroller.clientWidth,
				viewWidth: i.wrapper.clientWidth,
				barLeft: n.options.fixedGutter ? a : 0,
				docHeight: l,
				scrollHeight: l + Or(n) + i.barHeight,
				nativeBarWidth: i.nativeBarWidth,
				gutterWidth: a,
			};
		}
		var ho = function (n, i, a) {
			this.cm = a;
			var l = (this.vert = k(
					'div',
					[k('div', null, null, 'min-width: 1px')],
					'CodeMirror-vscrollbar',
				)),
				c = (this.horiz = k(
					'div',
					[k('div', null, null, 'height: 100%; min-height: 1px')],
					'CodeMirror-hscrollbar',
				));
			(l.tabIndex = c.tabIndex = -1),
				n(l),
				n(c),
				ze(l, 'scroll', function () {
					l.clientHeight && i(l.scrollTop, 'vertical');
				}),
				ze(c, 'scroll', function () {
					c.clientWidth && i(c.scrollLeft, 'horizontal');
				}),
				(this.checkedZeroWidth = !1),
				h &&
					p < 8 &&
					(this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
		};
		(ho.prototype.update = function (n) {
			var i = n.scrollWidth > n.clientWidth + 1,
				a = n.scrollHeight > n.clientHeight + 1,
				l = n.nativeBarWidth;
			if (a) {
				(this.vert.style.display = 'block'),
					(this.vert.style.bottom = i ? l + 'px' : '0');
				var c = n.viewHeight - (i ? l : 0);
				this.vert.firstChild.style.height =
					Math.max(0, n.scrollHeight - n.clientHeight + c) + 'px';
			} else
				(this.vert.scrollTop = 0),
					(this.vert.style.display = ''),
					(this.vert.firstChild.style.height = '0');
			if (i) {
				(this.horiz.style.display = 'block'),
					(this.horiz.style.right = a ? l + 'px' : '0'),
					(this.horiz.style.left = n.barLeft + 'px');
				var g = n.viewWidth - n.barLeft - (a ? l : 0);
				this.horiz.firstChild.style.width =
					Math.max(0, n.scrollWidth - n.clientWidth + g) + 'px';
			} else
				(this.horiz.style.display = ''),
					(this.horiz.firstChild.style.width = '0');
			return (
				!this.checkedZeroWidth &&
					n.clientHeight > 0 &&
					(l == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
				{ right: a ? l : 0, bottom: i ? l : 0 }
			);
		}),
			(ho.prototype.setScrollLeft = function (n) {
				this.horiz.scrollLeft != n && (this.horiz.scrollLeft = n),
					this.disableHoriz &&
						this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
			}),
			(ho.prototype.setScrollTop = function (n) {
				this.vert.scrollTop != n && (this.vert.scrollTop = n),
					this.disableVert &&
						this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
			}),
			(ho.prototype.zeroWidthHack = function () {
				var n = O && !E ? '12px' : '18px';
				(this.horiz.style.height = this.vert.style.width = n),
					(this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
					(this.disableHoriz = new $e()),
					(this.disableVert = new $e());
			}),
			(ho.prototype.enableZeroWidthBar = function (n, i, a) {
				n.style.visibility = '';
				function l() {
					var c = n.getBoundingClientRect(),
						g =
							a == 'vert'
								? document.elementFromPoint(c.right - 1, (c.top + c.bottom) / 2)
								: document.elementFromPoint(
										(c.right + c.left) / 2,
										c.bottom - 1,
									);
					g != n ? (n.style.visibility = 'hidden') : i.set(1e3, l);
				}
				i.set(1e3, l);
			}),
			(ho.prototype.clear = function () {
				var n = this.horiz.parentNode;
				n.removeChild(this.horiz), n.removeChild(this.vert);
			});
		var rl = function () {};
		(rl.prototype.update = function () {
			return { bottom: 0, right: 0 };
		}),
			(rl.prototype.setScrollLeft = function () {}),
			(rl.prototype.setScrollTop = function () {}),
			(rl.prototype.clear = function () {});
		function es(n, i) {
			i || (i = nl(n));
			var a = n.display.barWidth,
				l = n.display.barHeight;
			lg(n, i);
			for (
				var c = 0;
				(c < 4 && a != n.display.barWidth) || l != n.display.barHeight;
				c++
			)
				a != n.display.barWidth && n.options.lineWrapping && Ua(n),
					lg(n, nl(n)),
					(a = n.display.barWidth),
					(l = n.display.barHeight);
		}
		function lg(n, i) {
			var a = n.display,
				l = a.scrollbars.update(i);
			(a.sizer.style.paddingRight = (a.barWidth = l.right) + 'px'),
				(a.sizer.style.paddingBottom = (a.barHeight = l.bottom) + 'px'),
				(a.heightForcer.style.borderBottom = l.bottom + 'px solid transparent'),
				l.right && l.bottom
					? ((a.scrollbarFiller.style.display = 'block'),
						(a.scrollbarFiller.style.height = l.bottom + 'px'),
						(a.scrollbarFiller.style.width = l.right + 'px'))
					: (a.scrollbarFiller.style.display = ''),
				l.bottom &&
				n.options.coverGutterNextToScrollbar &&
				n.options.fixedGutter
					? ((a.gutterFiller.style.display = 'block'),
						(a.gutterFiller.style.height = l.bottom + 'px'),
						(a.gutterFiller.style.width = i.gutterWidth + 'px'))
					: (a.gutterFiller.style.display = '');
		}
		var ag = { native: ho, null: rl };
		function ug(n) {
			n.display.scrollbars &&
				(n.display.scrollbars.clear(),
				n.display.scrollbars.addClass &&
					Y(n.display.wrapper, n.display.scrollbars.addClass)),
				(n.display.scrollbars = new ag[n.options.scrollbarStyle](
					function (i) {
						n.display.wrapper.insertBefore(i, n.display.scrollbarFiller),
							ze(i, 'mousedown', function () {
								n.state.focused &&
									setTimeout(function () {
										return n.display.input.focus();
									}, 0);
							}),
							i.setAttribute('cm-not-content', 'true');
					},
					function (i, a) {
						a == 'horizontal' ? fo(n, i) : tl(n, i);
					},
					n,
				)),
				n.display.scrollbars.addClass &&
					Ne(n.display.wrapper, n.display.scrollbars.addClass);
		}
		var K1 = 0;
		function po(n) {
			(n.curOp = {
				cm: n,
				viewChanged: !1,
				startHeight: n.doc.height,
				forceUpdate: !1,
				updateInput: 0,
				typing: !1,
				changeObjs: null,
				cursorActivityHandlers: null,
				cursorActivityCalled: 0,
				selectionChanged: !1,
				updateMaxLine: !1,
				scrollLeft: null,
				scrollTop: null,
				scrollToPos: null,
				focus: !1,
				id: ++K1,
				markArrays: null,
			}),
				T1(n.curOp);
		}
		function go(n) {
			var i = n.curOp;
			i &&
				E1(i, function (a) {
					for (var l = 0; l < a.ops.length; l++) a.ops[l].cm.curOp = null;
					X1(a);
				});
		}
		function X1(n) {
			for (var i = n.ops, a = 0; a < i.length; a++) Y1(i[a]);
			for (var l = 0; l < i.length; l++) Z1(i[l]);
			for (var c = 0; c < i.length; c++) J1(i[c]);
			for (var g = 0; g < i.length; g++) Q1(i[g]);
			for (var y = 0; y < i.length; y++) eS(i[y]);
		}
		function Y1(n) {
			var i = n.cm,
				a = i.display;
			nS(i),
				n.updateMaxLine && sf(i),
				(n.mustUpdate =
					n.viewChanged ||
					n.forceUpdate ||
					n.scrollTop != null ||
					(n.scrollToPos &&
						(n.scrollToPos.from.line < a.viewFrom ||
							n.scrollToPos.to.line >= a.viewTo)) ||
					(a.maxLineChanged && i.options.lineWrapping)),
				(n.update =
					n.mustUpdate &&
					new Ga(
						i,
						n.mustUpdate && { top: n.scrollTop, ensure: n.scrollToPos },
						n.forceUpdate,
					));
		}
		function Z1(n) {
			n.updatedDisplay = n.mustUpdate && kf(n.cm, n.update);
		}
		function J1(n) {
			var i = n.cm,
				a = i.display;
			n.updatedDisplay && Ua(i),
				(n.barMeasure = nl(i)),
				a.maxLineChanged &&
					!i.options.lineWrapping &&
					((n.adjustWidthTo = Wp(i, a.maxLine, a.maxLine.text.length).left + 3),
					(i.display.sizerWidth = n.adjustWidthTo),
					(n.barMeasure.scrollWidth = Math.max(
						a.scroller.clientWidth,
						a.sizer.offsetLeft + n.adjustWidthTo + Or(i) + i.display.barWidth,
					)),
					(n.maxScrollLeft = Math.max(
						0,
						a.sizer.offsetLeft + n.adjustWidthTo - lo(i),
					))),
				(n.updatedDisplay || n.selectionChanged) &&
					(n.preparedSelection = a.input.prepareSelection());
		}
		function Q1(n) {
			var i = n.cm;
			n.adjustWidthTo != null &&
				((i.display.sizer.style.minWidth = n.adjustWidthTo + 'px'),
				n.maxScrollLeft < i.doc.scrollLeft &&
					fo(i, Math.min(i.display.scroller.scrollLeft, n.maxScrollLeft), !0),
				(i.display.maxLineChanged = !1));
			var a = n.focus && n.focus == ye(et(i));
			n.preparedSelection &&
				i.display.input.showSelection(n.preparedSelection, a),
				(n.updatedDisplay || n.startHeight != i.doc.height) &&
					es(i, n.barMeasure),
				n.updatedDisplay && Ef(i, n.barMeasure),
				n.selectionChanged && bf(i),
				i.state.focused && n.updateInput && i.display.input.reset(n.typing),
				a && rg(n.cm);
		}
		function eS(n) {
			var i = n.cm,
				a = i.display,
				l = i.doc;
			if (
				(n.updatedDisplay && cg(i, n.update),
				a.wheelStartX != null &&
					(n.scrollTop != null || n.scrollLeft != null || n.scrollToPos) &&
					(a.wheelStartX = a.wheelStartY = null),
				n.scrollTop != null && sg(i, n.scrollTop, n.forceScroll),
				n.scrollLeft != null && fo(i, n.scrollLeft, !0, !0),
				n.scrollToPos)
			) {
				var c = V1(
					i,
					Ge(l, n.scrollToPos.from),
					Ge(l, n.scrollToPos.to),
					n.scrollToPos.margin,
				);
				U1(i, c);
			}
			var g = n.maybeHiddenMarkers,
				y = n.maybeUnhiddenMarkers;
			if (g)
				for (var x = 0; x < g.length; ++x)
					g[x].lines.length || Mt(g[x], 'hide');
			if (y)
				for (var S = 0; S < y.length; ++S)
					y[S].lines.length && Mt(y[S], 'unhide');
			a.wrapper.offsetHeight && (l.scrollTop = i.display.scroller.scrollTop),
				n.changeObjs && Mt(i, 'changes', i, n.changeObjs),
				n.update && n.update.finish();
		}
		function Dn(n, i) {
			if (n.curOp) return i();
			po(n);
			try {
				return i();
			} finally {
				go(n);
			}
		}
		function Gt(n, i) {
			return function () {
				if (n.curOp) return i.apply(n, arguments);
				po(n);
				try {
					return i.apply(n, arguments);
				} finally {
					go(n);
				}
			};
		}
		function fn(n) {
			return function () {
				if (this.curOp) return n.apply(this, arguments);
				po(this);
				try {
					return n.apply(this, arguments);
				} finally {
					go(this);
				}
			};
		}
		function Kt(n) {
			return function () {
				var i = this.cm;
				if (!i || i.curOp) return n.apply(this, arguments);
				po(i);
				try {
					return n.apply(this, arguments);
				} finally {
					go(i);
				}
			};
		}
		function il(n, i) {
			n.doc.highlightFrontier < n.display.viewTo &&
				n.state.highlight.set(i, Z(tS, n));
		}
		function tS(n) {
			var i = n.doc;
			if (!(i.highlightFrontier >= n.display.viewTo)) {
				var a = +new Date() + n.options.workTime,
					l = Gs(n, i.highlightFrontier),
					c = [];
				i.iter(
					l.line,
					Math.min(i.first + i.size, n.display.viewTo + 500),
					function (g) {
						if (l.line >= n.display.viewFrom) {
							var y = g.styles,
								x =
									g.text.length > n.options.maxHighlightLength
										? $r(i.mode, l.state)
										: null,
								S = vp(n, g, l, !0);
							x && (l.state = x), (g.styles = S.styles);
							var _ = g.styleClasses,
								P = S.classes;
							P ? (g.styleClasses = P) : _ && (g.styleClasses = null);
							for (
								var D =
										!y ||
										y.length != g.styles.length ||
										(_ != P &&
											(!_ ||
												!P ||
												_.bgClass != P.bgClass ||
												_.textClass != P.textClass)),
									G = 0;
								!D && G < y.length;
								++G
							)
								D = y[G] != g.styles[G];
							D && c.push(l.line), (g.stateAfter = l.save()), l.nextLine();
						} else
							g.text.length <= n.options.maxHighlightLength && Qc(n, g.text, l),
								(g.stateAfter = l.line % 5 == 0 ? l.save() : null),
								l.nextLine();
						if (+new Date() > a) return il(n, n.options.workDelay), !0;
					},
				),
					(i.highlightFrontier = l.line),
					(i.modeFrontier = Math.max(i.modeFrontier, l.line)),
					c.length &&
						Dn(n, function () {
							for (var g = 0; g < c.length; g++) Ci(n, c[g], 'text');
						});
			}
		}
		var Ga = function (n, i, a) {
			var l = n.display;
			(this.viewport = i),
				(this.visible = Va(l, n.doc, i)),
				(this.editorIsHidden = !l.wrapper.offsetWidth),
				(this.wrapperHeight = l.wrapper.clientHeight),
				(this.wrapperWidth = l.wrapper.clientWidth),
				(this.oldDisplayWidth = lo(n)),
				(this.force = a),
				(this.dims = gf(n)),
				(this.events = []);
		};
		(Ga.prototype.signal = function (n, i) {
			Rn(n, i) && this.events.push(arguments);
		}),
			(Ga.prototype.finish = function () {
				for (var n = 0; n < this.events.length; n++)
					Mt.apply(null, this.events[n]);
			});
		function nS(n) {
			var i = n.display;
			!i.scrollbarsClipped &&
				i.scroller.offsetWidth &&
				((i.nativeBarWidth = i.scroller.offsetWidth - i.scroller.clientWidth),
				(i.heightForcer.style.height = Or(n) + 'px'),
				(i.sizer.style.marginBottom = -i.nativeBarWidth + 'px'),
				(i.sizer.style.borderRightWidth = Or(n) + 'px'),
				(i.scrollbarsClipped = !0));
		}
		function rS(n) {
			if (n.hasFocus()) return null;
			var i = ye(et(n));
			if (!i || !ie(n.display.lineDiv, i)) return null;
			var a = { activeElt: i };
			if (window.getSelection) {
				var l = Le(n).getSelection();
				l.anchorNode &&
					l.extend &&
					ie(n.display.lineDiv, l.anchorNode) &&
					((a.anchorNode = l.anchorNode),
					(a.anchorOffset = l.anchorOffset),
					(a.focusNode = l.focusNode),
					(a.focusOffset = l.focusOffset));
			}
			return a;
		}
		function iS(n) {
			if (
				!(!n || !n.activeElt || n.activeElt == ye(Xe(n.activeElt))) &&
				(n.activeElt.focus(),
				!/^(INPUT|TEXTAREA)$/.test(n.activeElt.nodeName) &&
					n.anchorNode &&
					ie(document.body, n.anchorNode) &&
					ie(document.body, n.focusNode))
			) {
				var i = n.activeElt.ownerDocument,
					a = i.defaultView.getSelection(),
					l = i.createRange();
				l.setEnd(n.anchorNode, n.anchorOffset),
					l.collapse(!1),
					a.removeAllRanges(),
					a.addRange(l),
					a.extend(n.focusNode, n.focusOffset);
			}
		}
		function kf(n, i) {
			var a = n.display,
				l = n.doc;
			if (i.editorIsHidden) return Ei(n), !1;
			if (
				!i.force &&
				i.visible.from >= a.viewFrom &&
				i.visible.to <= a.viewTo &&
				(a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo) &&
				a.renderedView == a.view &&
				tg(n) == 0
			)
				return !1;
			dg(n) && (Ei(n), (i.dims = gf(n)));
			var c = l.first + l.size,
				g = Math.max(i.visible.from - n.options.viewportMargin, l.first),
				y = Math.min(c, i.visible.to + n.options.viewportMargin);
			a.viewFrom < g &&
				g - a.viewFrom < 20 &&
				(g = Math.max(l.first, a.viewFrom)),
				a.viewTo > y && a.viewTo - y < 20 && (y = Math.min(c, a.viewTo)),
				Qr && ((g = rf(n.doc, g)), (y = Np(n.doc, y)));
			var x =
				g != a.viewFrom ||
				y != a.viewTo ||
				a.lastWrapHeight != i.wrapperHeight ||
				a.lastWrapWidth != i.wrapperWidth;
			B1(n, g, y),
				(a.viewOffset = ei(Oe(n.doc, a.viewFrom))),
				(n.display.mover.style.top = a.viewOffset + 'px');
			var S = tg(n);
			if (
				!x &&
				S == 0 &&
				!i.force &&
				a.renderedView == a.view &&
				(a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo)
			)
				return !1;
			var _ = rS(n);
			return (
				S > 4 && (a.lineDiv.style.display = 'none'),
				oS(n, a.updateLineNumbers, i.dims),
				S > 4 && (a.lineDiv.style.display = ''),
				(a.renderedView = a.view),
				iS(_),
				I(a.cursorDiv),
				I(a.selectionDiv),
				(a.gutters.style.height = a.sizer.style.minHeight = 0),
				x &&
					((a.lastWrapHeight = i.wrapperHeight),
					(a.lastWrapWidth = i.wrapperWidth),
					il(n, 400)),
				(a.updateLineNumbers = null),
				!0
			);
		}
		function cg(n, i) {
			for (var a = i.viewport, l = !0; ; l = !1) {
				if (!l || !n.options.lineWrapping || i.oldDisplayWidth == lo(n)) {
					if (
						(a &&
							a.top != null &&
							(a = {
								top: Math.min(n.doc.height + af(n.display) - uf(n), a.top),
							}),
						(i.visible = Va(n.display, n.doc, a)),
						i.visible.from >= n.display.viewFrom &&
							i.visible.to <= n.display.viewTo)
					)
						break;
				} else l && (i.visible = Va(n.display, n.doc, a));
				if (!kf(n, i)) break;
				Ua(n);
				var c = nl(n);
				Qs(n), es(n, c), Ef(n, c), (i.force = !1);
			}
			i.signal(n, 'update', n),
				(n.display.viewFrom != n.display.reportedViewFrom ||
					n.display.viewTo != n.display.reportedViewTo) &&
					(i.signal(
						n,
						'viewportChange',
						n,
						n.display.viewFrom,
						n.display.viewTo,
					),
					(n.display.reportedViewFrom = n.display.viewFrom),
					(n.display.reportedViewTo = n.display.viewTo));
		}
		function Tf(n, i) {
			var a = new Ga(n, i);
			if (kf(n, a)) {
				Ua(n), cg(n, a);
				var l = nl(n);
				Qs(n), es(n, l), Ef(n, l), a.finish();
			}
		}
		function oS(n, i, a) {
			var l = n.display,
				c = n.options.lineNumbers,
				g = l.lineDiv,
				y = g.firstChild;
			function x(re) {
				var ce = re.nextSibling;
				return (
					m && O && n.display.currentWheelTarget == re
						? (re.style.display = 'none')
						: re.parentNode.removeChild(re),
					ce
				);
			}
			for (var S = l.view, _ = l.viewFrom, P = 0; P < S.length; P++) {
				var D = S[P];
				if (!D.hidden)
					if (!D.node || D.node.parentNode != g) {
						var G = $1(n, D, _, a);
						g.insertBefore(G, y);
					} else {
						for (; y != D.node; ) y = x(y);
						var j = c && i != null && i <= _ && D.lineNumber;
						D.changes &&
							(Ae(D.changes, 'gutter') > -1 && (j = !1), Dp(n, D, _, a)),
							j &&
								(I(D.lineNumber),
								D.lineNumber.appendChild(
									document.createTextNode(ge(n.options, _)),
								)),
							(y = D.node.nextSibling);
					}
				_ += D.size;
			}
			for (; y; ) y = x(y);
		}
		function Cf(n) {
			var i = n.gutters.offsetWidth;
			(n.sizer.style.marginLeft = i + 'px'), jt(n, 'gutterChanged', n);
		}
		function Ef(n, i) {
			(n.display.sizer.style.minHeight = i.docHeight + 'px'),
				(n.display.heightForcer.style.top = i.docHeight + 'px'),
				(n.display.gutters.style.height =
					i.docHeight + n.display.barHeight + Or(n) + 'px');
		}
		function fg(n) {
			var i = n.display,
				a = i.view;
			if (
				!(!i.alignWidgets && (!i.gutters.firstChild || !n.options.fixedGutter))
			) {
				for (
					var l = mf(i) - i.scroller.scrollLeft + n.doc.scrollLeft,
						c = i.gutters.offsetWidth,
						g = l + 'px',
						y = 0;
					y < a.length;
					y++
				)
					if (!a[y].hidden) {
						n.options.fixedGutter &&
							(a[y].gutter && (a[y].gutter.style.left = g),
							a[y].gutterBackground && (a[y].gutterBackground.style.left = g));
						var x = a[y].alignable;
						if (x) for (var S = 0; S < x.length; S++) x[S].style.left = g;
					}
				n.options.fixedGutter && (i.gutters.style.left = l + c + 'px');
			}
		}
		function dg(n) {
			if (!n.options.lineNumbers) return !1;
			var i = n.doc,
				a = ge(n.options, i.first + i.size - 1),
				l = n.display;
			if (a.length != l.lineNumChars) {
				var c = l.measure.appendChild(
						k(
							'div',
							[k('div', a)],
							'CodeMirror-linenumber CodeMirror-gutter-elt',
						),
					),
					g = c.firstChild.offsetWidth,
					y = c.offsetWidth - g;
				return (
					(l.lineGutter.style.width = ''),
					(l.lineNumInnerWidth = Math.max(g, l.lineGutter.offsetWidth - y) + 1),
					(l.lineNumWidth = l.lineNumInnerWidth + y),
					(l.lineNumChars = l.lineNumInnerWidth ? a.length : -1),
					(l.lineGutter.style.width = l.lineNumWidth + 'px'),
					Cf(n.display),
					!0
				);
			}
			return !1;
		}
		function Lf(n, i) {
			for (var a = [], l = !1, c = 0; c < n.length; c++) {
				var g = n[c],
					y = null;
				if (
					(typeof g != 'string' && ((y = g.style), (g = g.className)),
					g == 'CodeMirror-linenumbers')
				)
					if (i) l = !0;
					else continue;
				a.push({ className: g, style: y });
			}
			return (
				i && !l && a.push({ className: 'CodeMirror-linenumbers', style: null }),
				a
			);
		}
		function hg(n) {
			var i = n.gutters,
				a = n.gutterSpecs;
			I(i), (n.lineGutter = null);
			for (var l = 0; l < a.length; ++l) {
				var c = a[l],
					g = c.className,
					y = c.style,
					x = i.appendChild(k('div', null, 'CodeMirror-gutter ' + g));
				y && (x.style.cssText = y),
					g == 'CodeMirror-linenumbers' &&
						((n.lineGutter = x),
						(x.style.width = (n.lineNumWidth || 1) + 'px'));
			}
			(i.style.display = a.length ? '' : 'none'), Cf(n);
		}
		function ol(n) {
			hg(n.display), wn(n), fg(n);
		}
		function sS(n, i, a, l) {
			var c = this;
			(this.input = a),
				(c.scrollbarFiller = k('div', null, 'CodeMirror-scrollbar-filler')),
				c.scrollbarFiller.setAttribute('cm-not-content', 'true'),
				(c.gutterFiller = k('div', null, 'CodeMirror-gutter-filler')),
				c.gutterFiller.setAttribute('cm-not-content', 'true'),
				(c.lineDiv = W('div', null, 'CodeMirror-code')),
				(c.selectionDiv = k(
					'div',
					null,
					null,
					'position: relative; z-index: 1',
				)),
				(c.cursorDiv = k('div', null, 'CodeMirror-cursors')),
				(c.measure = k('div', null, 'CodeMirror-measure')),
				(c.lineMeasure = k('div', null, 'CodeMirror-measure')),
				(c.lineSpace = W(
					'div',
					[c.measure, c.lineMeasure, c.selectionDiv, c.cursorDiv, c.lineDiv],
					null,
					'position: relative; outline: none',
				));
			var g = W('div', [c.lineSpace], 'CodeMirror-lines');
			(c.mover = k('div', [g], null, 'position: relative')),
				(c.sizer = k('div', [c.mover], 'CodeMirror-sizer')),
				(c.sizerWidth = null),
				(c.heightForcer = k(
					'div',
					null,
					null,
					'position: absolute; height: ' + z + 'px; width: 1px;',
				)),
				(c.gutters = k('div', null, 'CodeMirror-gutters')),
				(c.lineGutter = null),
				(c.scroller = k(
					'div',
					[c.sizer, c.heightForcer, c.gutters],
					'CodeMirror-scroll',
				)),
				c.scroller.setAttribute('tabIndex', '-1'),
				(c.wrapper = k(
					'div',
					[c.scrollbarFiller, c.gutterFiller, c.scroller],
					'CodeMirror',
				)),
				b && w >= 105 && (c.wrapper.style.clipPath = 'inset(0px)'),
				c.wrapper.setAttribute('translate', 'no'),
				h &&
					p < 8 &&
					((c.gutters.style.zIndex = -1), (c.scroller.style.paddingRight = 0)),
				!m && !(s && L) && (c.scroller.draggable = !0),
				n && (n.appendChild ? n.appendChild(c.wrapper) : n(c.wrapper)),
				(c.viewFrom = c.viewTo = i.first),
				(c.reportedViewFrom = c.reportedViewTo = i.first),
				(c.view = []),
				(c.renderedView = null),
				(c.externalMeasured = null),
				(c.viewOffset = 0),
				(c.lastWrapHeight = c.lastWrapWidth = 0),
				(c.updateLineNumbers = null),
				(c.nativeBarWidth = c.barHeight = c.barWidth = 0),
				(c.scrollbarsClipped = !1),
				(c.lineNumWidth = c.lineNumInnerWidth = c.lineNumChars = null),
				(c.alignWidgets = !1),
				(c.cachedCharWidth = c.cachedTextHeight = c.cachedPaddingH = null),
				(c.maxLine = null),
				(c.maxLineLength = 0),
				(c.maxLineChanged = !1),
				(c.wheelDX = c.wheelDY = c.wheelStartX = c.wheelStartY = null),
				(c.shift = !1),
				(c.selForContextMenu = null),
				(c.activeTouch = null),
				(c.gutterSpecs = Lf(l.gutters, l.lineNumbers)),
				hg(c),
				a.init(c);
		}
		var Ka = 0,
			ni = null;
		h ? (ni = -0.53) : s ? (ni = 15) : b ? (ni = -0.7) : M && (ni = -1 / 3);
		function pg(n) {
			var i = n.wheelDeltaX,
				a = n.wheelDeltaY;
			return (
				i == null && n.detail && n.axis == n.HORIZONTAL_AXIS && (i = n.detail),
				a == null && n.detail && n.axis == n.VERTICAL_AXIS
					? (a = n.detail)
					: a == null && (a = n.wheelDelta),
				{ x: i, y: a }
			);
		}
		function lS(n) {
			var i = pg(n);
			return (i.x *= ni), (i.y *= ni), i;
		}
		function gg(n, i) {
			b &&
				w == 102 &&
				(n.display.chromeScrollHack == null
					? (n.display.sizer.style.pointerEvents = 'none')
					: clearTimeout(n.display.chromeScrollHack),
				(n.display.chromeScrollHack = setTimeout(function () {
					(n.display.chromeScrollHack = null),
						(n.display.sizer.style.pointerEvents = '');
				}, 100)));
			var a = pg(i),
				l = a.x,
				c = a.y,
				g = ni;
			i.deltaMode === 0 && ((l = i.deltaX), (c = i.deltaY), (g = 1));
			var y = n.display,
				x = y.scroller,
				S = x.scrollWidth > x.clientWidth,
				_ = x.scrollHeight > x.clientHeight;
			if ((l && S) || (c && _)) {
				if (c && O && m) {
					e: for (var P = i.target, D = y.view; P != x; P = P.parentNode)
						for (var G = 0; G < D.length; G++)
							if (D[G].node == P) {
								n.display.currentWheelTarget = P;
								break e;
							}
				}
				if (l && !s && !C && g != null) {
					c && _ && tl(n, Math.max(0, x.scrollTop + c * g)),
						fo(n, Math.max(0, x.scrollLeft + l * g)),
						(!c || (c && _)) && sn(i),
						(y.wheelStartX = null);
					return;
				}
				if (c && g != null) {
					var j = c * g,
						re = n.doc.scrollTop,
						ce = re + y.wrapper.clientHeight;
					j < 0
						? (re = Math.max(0, re + j - 50))
						: (ce = Math.min(n.doc.height, ce + j + 50)),
						Tf(n, { top: re, bottom: ce });
				}
				Ka < 20 &&
					i.deltaMode !== 0 &&
					(y.wheelStartX == null
						? ((y.wheelStartX = x.scrollLeft),
							(y.wheelStartY = x.scrollTop),
							(y.wheelDX = l),
							(y.wheelDY = c),
							setTimeout(function () {
								if (y.wheelStartX != null) {
									var me = x.scrollLeft - y.wheelStartX,
										be = x.scrollTop - y.wheelStartY,
										Te =
											(be && y.wheelDY && be / y.wheelDY) ||
											(me && y.wheelDX && me / y.wheelDX);
									(y.wheelStartX = y.wheelStartY = null),
										Te && ((ni = (ni * Ka + Te) / (Ka + 1)), ++Ka);
								}
							}, 200))
						: ((y.wheelDX += l), (y.wheelDY += c)));
			}
		}
		var Gn = function (n, i) {
			(this.ranges = n), (this.primIndex = i);
		};
		(Gn.prototype.primary = function () {
			return this.ranges[this.primIndex];
		}),
			(Gn.prototype.equals = function (n) {
				if (n == this) return !0;
				if (
					n.primIndex != this.primIndex ||
					n.ranges.length != this.ranges.length
				)
					return !1;
				for (var i = 0; i < this.ranges.length; i++) {
					var a = this.ranges[i],
						l = n.ranges[i];
					if (!ft(a.anchor, l.anchor) || !ft(a.head, l.head)) return !1;
				}
				return !0;
			}),
			(Gn.prototype.deepCopy = function () {
				for (var n = [], i = 0; i < this.ranges.length; i++)
					n[i] = new dt(Vt(this.ranges[i].anchor), Vt(this.ranges[i].head));
				return new Gn(n, this.primIndex);
			}),
			(Gn.prototype.somethingSelected = function () {
				for (var n = 0; n < this.ranges.length; n++)
					if (!this.ranges[n].empty()) return !0;
				return !1;
			}),
			(Gn.prototype.contains = function (n, i) {
				i || (i = n);
				for (var a = 0; a < this.ranges.length; a++) {
					var l = this.ranges[a];
					if (_e(i, l.from()) >= 0 && _e(n, l.to()) <= 0) return a;
				}
				return -1;
			});
		var dt = function (n, i) {
			(this.anchor = n), (this.head = i);
		};
		(dt.prototype.from = function () {
			return jo(this.anchor, this.head);
		}),
			(dt.prototype.to = function () {
				return bn(this.anchor, this.head);
			}),
			(dt.prototype.empty = function () {
				return (
					this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
				);
			});
		function gr(n, i, a) {
			var l = n && n.options.selectionsMayTouch,
				c = i[a];
			i.sort(function (G, j) {
				return _e(G.from(), j.from());
			}),
				(a = Ae(i, c));
			for (var g = 1; g < i.length; g++) {
				var y = i[g],
					x = i[g - 1],
					S = _e(x.to(), y.from());
				if (l && !y.empty() ? S > 0 : S >= 0) {
					var _ = jo(x.from(), y.from()),
						P = bn(x.to(), y.to()),
						D = x.empty() ? y.from() == y.head : x.from() == x.head;
					g <= a && --a, i.splice(--g, 2, new dt(D ? P : _, D ? _ : P));
				}
			}
			return new Gn(i, a);
		}
		function Li(n, i) {
			return new Gn([new dt(n, i || n)], 0);
		}
		function Ai(n) {
			return n.text
				? ne(
						n.from.line + n.text.length - 1,
						de(n.text).length + (n.text.length == 1 ? n.from.ch : 0),
					)
				: n.to;
		}
		function mg(n, i) {
			if (_e(n, i.from) < 0) return n;
			if (_e(n, i.to) <= 0) return Ai(i);
			var a = n.line + i.text.length - (i.to.line - i.from.line) - 1,
				l = n.ch;
			return n.line == i.to.line && (l += Ai(i).ch - i.to.ch), ne(a, l);
		}
		function Af(n, i) {
			for (var a = [], l = 0; l < n.sel.ranges.length; l++) {
				var c = n.sel.ranges[l];
				a.push(new dt(mg(c.anchor, i), mg(c.head, i)));
			}
			return gr(n.cm, a, n.sel.primIndex);
		}
		function vg(n, i, a) {
			return n.line == i.line
				? ne(a.line, n.ch - i.ch + a.ch)
				: ne(a.line + (n.line - i.line), n.ch);
		}
		function aS(n, i, a) {
			for (var l = [], c = ne(n.first, 0), g = c, y = 0; y < i.length; y++) {
				var x = i[y],
					S = vg(x.from, c, g),
					_ = vg(Ai(x), c, g);
				if (((c = x.to), (g = _), a == 'around')) {
					var P = n.sel.ranges[y],
						D = _e(P.head, P.anchor) < 0;
					l[y] = new dt(D ? _ : S, D ? S : _);
				} else l[y] = new dt(S, S);
			}
			return new Gn(l, n.sel.primIndex);
		}
		function Mf(n) {
			(n.doc.mode = Wo(n.options, n.doc.modeOption)), sl(n);
		}
		function sl(n) {
			n.doc.iter(function (i) {
				i.stateAfter && (i.stateAfter = null), i.styles && (i.styles = null);
			}),
				(n.doc.modeFrontier = n.doc.highlightFrontier = n.doc.first),
				il(n, 100),
				n.state.modeGen++,
				n.curOp && wn(n);
		}
		function yg(n, i) {
			return (
				i.from.ch == 0 &&
				i.to.ch == 0 &&
				de(i.text) == '' &&
				(!n.cm || n.cm.options.wholeLineUpdateBefore)
			);
		}
		function Nf(n, i, a, l) {
			function c(Te) {
				return a ? a[Te] : null;
			}
			function g(Te, we, Me) {
				m1(Te, we, Me, l), jt(Te, 'change', Te, i);
			}
			function y(Te, we) {
				for (var Me = [], Ie = Te; Ie < we; ++Ie)
					Me.push(new Go(_[Ie], c(Ie), l));
				return Me;
			}
			var x = i.from,
				S = i.to,
				_ = i.text,
				P = Oe(n, x.line),
				D = Oe(n, S.line),
				G = de(_),
				j = c(_.length - 1),
				re = S.line - x.line;
			if (i.full)
				n.insert(0, y(0, _.length)), n.remove(_.length, n.size - _.length);
			else if (yg(n, i)) {
				var ce = y(0, _.length - 1);
				g(D, D.text, j),
					re && n.remove(x.line, re),
					ce.length && n.insert(x.line, ce);
			} else if (P == D)
				if (_.length == 1)
					g(P, P.text.slice(0, x.ch) + G + P.text.slice(S.ch), j);
				else {
					var me = y(1, _.length - 1);
					me.push(new Go(G + P.text.slice(S.ch), j, l)),
						g(P, P.text.slice(0, x.ch) + _[0], c(0)),
						n.insert(x.line + 1, me);
				}
			else if (_.length == 1)
				g(P, P.text.slice(0, x.ch) + _[0] + D.text.slice(S.ch), c(0)),
					n.remove(x.line + 1, re);
			else {
				g(P, P.text.slice(0, x.ch) + _[0], c(0)),
					g(D, G + D.text.slice(S.ch), j);
				var be = y(1, _.length - 1);
				re > 1 && n.remove(x.line + 1, re - 1), n.insert(x.line + 1, be);
			}
			jt(n, 'change', n, i);
		}
		function Mi(n, i, a) {
			function l(c, g, y) {
				if (c.linked)
					for (var x = 0; x < c.linked.length; ++x) {
						var S = c.linked[x];
						if (S.doc != g) {
							var _ = y && S.sharedHist;
							(a && !_) || (i(S.doc, _), l(S.doc, c, _));
						}
					}
			}
			l(n, null, !0);
		}
		function bg(n, i) {
			if (i.cm) throw new Error('This document is already in use.');
			(n.doc = i),
				(i.cm = n),
				vf(n),
				Mf(n),
				wg(n),
				(n.options.direction = i.direction),
				n.options.lineWrapping || sf(n),
				(n.options.mode = i.modeOption),
				wn(n);
		}
		function wg(n) {
			(n.doc.direction == 'rtl' ? Ne : Y)(n.display.lineDiv, 'CodeMirror-rtl');
		}
		function uS(n) {
			Dn(n, function () {
				wg(n), wn(n);
			});
		}
		function Xa(n) {
			(this.done = []),
				(this.undone = []),
				(this.undoDepth = n ? n.undoDepth : 1 / 0),
				(this.lastModTime = this.lastSelTime = 0),
				(this.lastOp = this.lastSelOp = null),
				(this.lastOrigin = this.lastSelOrigin = null),
				(this.generation = this.maxGeneration = n ? n.maxGeneration : 1);
		}
		function $f(n, i) {
			var a = { from: Vt(i.from), to: Ai(i), text: Jr(n, i.from, i.to) };
			return (
				_g(n, a, i.from.line, i.to.line + 1),
				Mi(
					n,
					function (l) {
						return _g(l, a, i.from.line, i.to.line + 1);
					},
					!0,
				),
				a
			);
		}
		function xg(n) {
			for (; n.length; ) {
				var i = de(n);
				if (i.ranges) n.pop();
				else break;
			}
		}
		function cS(n, i) {
			if (i) return xg(n.done), de(n.done);
			if (n.done.length && !de(n.done).ranges) return de(n.done);
			if (n.done.length > 1 && !n.done[n.done.length - 2].ranges)
				return n.done.pop(), de(n.done);
		}
		function Sg(n, i, a, l) {
			var c = n.history;
			c.undone.length = 0;
			var g = +new Date(),
				y,
				x;
			if (
				(c.lastOp == l ||
					(c.lastOrigin == i.origin &&
						i.origin &&
						((i.origin.charAt(0) == '+' &&
							c.lastModTime >
								g - (n.cm ? n.cm.options.historyEventDelay : 500)) ||
							i.origin.charAt(0) == '*'))) &&
				(y = cS(c, c.lastOp == l))
			)
				(x = de(y.changes)),
					_e(i.from, i.to) == 0 && _e(i.from, x.to) == 0
						? (x.to = Ai(i))
						: y.changes.push($f(n, i));
			else {
				var S = de(c.done);
				for (
					(!S || !S.ranges) && Ya(n.sel, c.done),
						y = { changes: [$f(n, i)], generation: c.generation },
						c.done.push(y);
					c.done.length > c.undoDepth;

				)
					c.done.shift(), c.done[0].ranges || c.done.shift();
			}
			c.done.push(a),
				(c.generation = ++c.maxGeneration),
				(c.lastModTime = c.lastSelTime = g),
				(c.lastOp = c.lastSelOp = l),
				(c.lastOrigin = c.lastSelOrigin = i.origin),
				x || Mt(n, 'historyAdded');
		}
		function fS(n, i, a, l) {
			var c = i.charAt(0);
			return (
				c == '*' ||
				(c == '+' &&
					a.ranges.length == l.ranges.length &&
					a.somethingSelected() == l.somethingSelected() &&
					new Date() - n.history.lastSelTime <=
						(n.cm ? n.cm.options.historyEventDelay : 500))
			);
		}
		function dS(n, i, a, l) {
			var c = n.history,
				g = l && l.origin;
			a == c.lastSelOp ||
			(g &&
				c.lastSelOrigin == g &&
				((c.lastModTime == c.lastSelTime && c.lastOrigin == g) ||
					fS(n, g, de(c.done), i)))
				? (c.done[c.done.length - 1] = i)
				: Ya(i, c.done),
				(c.lastSelTime = +new Date()),
				(c.lastSelOrigin = g),
				(c.lastSelOp = a),
				l && l.clearRedo !== !1 && xg(c.undone);
		}
		function Ya(n, i) {
			var a = de(i);
			(a && a.ranges && a.equals(n)) || i.push(n);
		}
		function _g(n, i, a, l) {
			var c = i['spans_' + n.id],
				g = 0;
			n.iter(Math.max(n.first, a), Math.min(n.first + n.size, l), function (y) {
				y.markedSpans &&
					((c || (c = i['spans_' + n.id] = {}))[g] = y.markedSpans),
					++g;
			});
		}
		function hS(n) {
			if (!n) return null;
			for (var i, a = 0; a < n.length; ++a)
				n[a].marker.explicitlyCleared
					? i || (i = n.slice(0, a))
					: i && i.push(n[a]);
			return i ? (i.length ? i : null) : n;
		}
		function pS(n, i) {
			var a = i['spans_' + n.id];
			if (!a) return null;
			for (var l = [], c = 0; c < i.text.length; ++c) l.push(hS(a[c]));
			return l;
		}
		function kg(n, i) {
			var a = pS(n, i),
				l = tf(n, i);
			if (!a) return l;
			if (!l) return a;
			for (var c = 0; c < a.length; ++c) {
				var g = a[c],
					y = l[c];
				if (g && y)
					e: for (var x = 0; x < y.length; ++x) {
						for (var S = y[x], _ = 0; _ < g.length; ++_)
							if (g[_].marker == S.marker) continue e;
						g.push(S);
					}
				else y && (a[c] = y);
			}
			return a;
		}
		function ts(n, i, a) {
			for (var l = [], c = 0; c < n.length; ++c) {
				var g = n[c];
				if (g.ranges) {
					l.push(a ? Gn.prototype.deepCopy.call(g) : g);
					continue;
				}
				var y = g.changes,
					x = [];
				l.push({ changes: x });
				for (var S = 0; S < y.length; ++S) {
					var _ = y[S],
						P = void 0;
					if ((x.push({ from: _.from, to: _.to, text: _.text }), i))
						for (var D in _)
							(P = D.match(/^spans_(\d+)$/)) &&
								Ae(i, Number(P[1])) > -1 &&
								((de(x)[D] = _[D]), delete _[D]);
				}
			}
			return l;
		}
		function Pf(n, i, a, l) {
			if (l) {
				var c = n.anchor;
				if (a) {
					var g = _e(i, c) < 0;
					g != _e(a, c) < 0 ? ((c = i), (i = a)) : g != _e(i, a) < 0 && (i = a);
				}
				return new dt(c, i);
			} else return new dt(a || i, i);
		}
		function Za(n, i, a, l, c) {
			c == null && (c = n.cm && (n.cm.display.shift || n.extend)),
				ln(n, new Gn([Pf(n.sel.primary(), i, a, c)], 0), l);
		}
		function Tg(n, i, a) {
			for (
				var l = [], c = n.cm && (n.cm.display.shift || n.extend), g = 0;
				g < n.sel.ranges.length;
				g++
			)
				l[g] = Pf(n.sel.ranges[g], i[g], null, c);
			var y = gr(n.cm, l, n.sel.primIndex);
			ln(n, y, a);
		}
		function Of(n, i, a, l) {
			var c = n.sel.ranges.slice(0);
			(c[i] = a), ln(n, gr(n.cm, c, n.sel.primIndex), l);
		}
		function Cg(n, i, a, l) {
			ln(n, Li(i, a), l);
		}
		function gS(n, i, a) {
			var l = {
				ranges: i.ranges,
				update: function (c) {
					this.ranges = [];
					for (var g = 0; g < c.length; g++)
						this.ranges[g] = new dt(Ge(n, c[g].anchor), Ge(n, c[g].head));
				},
				origin: a && a.origin,
			};
			return (
				Mt(n, 'beforeSelectionChange', n, l),
				n.cm && Mt(n.cm, 'beforeSelectionChange', n.cm, l),
				l.ranges != i.ranges ? gr(n.cm, l.ranges, l.ranges.length - 1) : i
			);
		}
		function Eg(n, i, a) {
			var l = n.history.done,
				c = de(l);
			c && c.ranges ? ((l[l.length - 1] = i), Ja(n, i, a)) : ln(n, i, a);
		}
		function ln(n, i, a) {
			Ja(n, i, a), dS(n, n.sel, n.cm ? n.cm.curOp.id : NaN, a);
		}
		function Ja(n, i, a) {
			(Rn(n, 'beforeSelectionChange') ||
				(n.cm && Rn(n.cm, 'beforeSelectionChange'))) &&
				(i = gS(n, i, a));
			var l =
				(a && a.bias) ||
				(_e(i.primary().head, n.sel.primary().head) < 0 ? -1 : 1);
			Lg(n, Mg(n, i, l, !0)),
				!(a && a.scroll === !1) &&
					n.cm &&
					n.cm.getOption('readOnly') != 'nocursor' &&
					Qo(n.cm);
		}
		function Lg(n, i) {
			i.equals(n.sel) ||
				((n.sel = i),
				n.cm &&
					((n.cm.curOp.updateInput = 1),
					(n.cm.curOp.selectionChanged = !0),
					nr(n.cm)),
				jt(n, 'cursorActivity', n));
		}
		function Ag(n) {
			Lg(n, Mg(n, n.sel, null, !1));
		}
		function Mg(n, i, a, l) {
			for (var c, g = 0; g < i.ranges.length; g++) {
				var y = i.ranges[g],
					x = i.ranges.length == n.sel.ranges.length && n.sel.ranges[g],
					S = Qa(n, y.anchor, x && x.anchor, a, l),
					_ = y.head == y.anchor ? S : Qa(n, y.head, x && x.head, a, l);
				(c || S != y.anchor || _ != y.head) &&
					(c || (c = i.ranges.slice(0, g)), (c[g] = new dt(S, _)));
			}
			return c ? gr(n.cm, c, i.primIndex) : i;
		}
		function ns(n, i, a, l, c) {
			var g = Oe(n, i.line);
			if (g.markedSpans)
				for (var y = 0; y < g.markedSpans.length; ++y) {
					var x = g.markedSpans[y],
						S = x.marker,
						_ = 'selectLeft' in S ? !S.selectLeft : S.inclusiveLeft,
						P = 'selectRight' in S ? !S.selectRight : S.inclusiveRight;
					if (
						(x.from == null || (_ ? x.from <= i.ch : x.from < i.ch)) &&
						(x.to == null || (P ? x.to >= i.ch : x.to > i.ch))
					) {
						if (c && (Mt(S, 'beforeCursorEnter'), S.explicitlyCleared))
							if (g.markedSpans) {
								--y;
								continue;
							} else break;
						if (!S.atomic) continue;
						if (a) {
							var D = S.find(l < 0 ? 1 : -1),
								G = void 0;
							if (
								((l < 0 ? P : _) &&
									(D = Ng(n, D, -l, D && D.line == i.line ? g : null)),
								D &&
									D.line == i.line &&
									(G = _e(D, a)) &&
									(l < 0 ? G < 0 : G > 0))
							)
								return ns(n, D, i, l, c);
						}
						var j = S.find(l < 0 ? -1 : 1);
						return (
							(l < 0 ? _ : P) && (j = Ng(n, j, l, j.line == i.line ? g : null)),
							j ? ns(n, j, i, l, c) : null
						);
					}
				}
			return i;
		}
		function Qa(n, i, a, l, c) {
			var g = l || 1,
				y =
					ns(n, i, a, g, c) ||
					(!c && ns(n, i, a, g, !0)) ||
					ns(n, i, a, -g, c) ||
					(!c && ns(n, i, a, -g, !0));
			return y || ((n.cantEdit = !0), ne(n.first, 0));
		}
		function Ng(n, i, a, l) {
			return a < 0 && i.ch == 0
				? i.line > n.first
					? Ge(n, ne(i.line - 1))
					: null
				: a > 0 && i.ch == (l || Oe(n, i.line)).text.length
					? i.line < n.first + n.size - 1
						? ne(i.line + 1, 0)
						: null
					: new ne(i.line, i.ch + a);
		}
		function $g(n) {
			n.setSelection(ne(n.firstLine(), 0), ne(n.lastLine()), X);
		}
		function Pg(n, i, a) {
			var l = {
				canceled: !1,
				from: i.from,
				to: i.to,
				text: i.text,
				origin: i.origin,
				cancel: function () {
					return (l.canceled = !0);
				},
			};
			return (
				a &&
					(l.update = function (c, g, y, x) {
						c && (l.from = Ge(n, c)),
							g && (l.to = Ge(n, g)),
							y && (l.text = y),
							x !== void 0 && (l.origin = x);
					}),
				Mt(n, 'beforeChange', n, l),
				n.cm && Mt(n.cm, 'beforeChange', n.cm, l),
				l.canceled
					? (n.cm && (n.cm.curOp.updateInput = 2), null)
					: { from: l.from, to: l.to, text: l.text, origin: l.origin }
			);
		}
		function rs(n, i, a) {
			if (n.cm) {
				if (!n.cm.curOp) return Gt(n.cm, rs)(n, i, a);
				if (n.cm.state.suppressEdits) return;
			}
			if (
				!(
					(Rn(n, 'beforeChange') || (n.cm && Rn(n.cm, 'beforeChange'))) &&
					((i = Pg(n, i, !0)), !i)
				)
			) {
				var l = kp && !a && d1(n, i.from, i.to);
				if (l)
					for (var c = l.length - 1; c >= 0; --c)
						Og(n, {
							from: l[c].from,
							to: l[c].to,
							text: c ? [''] : i.text,
							origin: i.origin,
						});
				else Og(n, i);
			}
		}
		function Og(n, i) {
			if (!(i.text.length == 1 && i.text[0] == '' && _e(i.from, i.to) == 0)) {
				var a = Af(n, i);
				Sg(n, i, a, n.cm ? n.cm.curOp.id : NaN), ll(n, i, a, tf(n, i));
				var l = [];
				Mi(n, function (c, g) {
					!g && Ae(l, c.history) == -1 && (Ig(c.history, i), l.push(c.history)),
						ll(c, i, null, tf(c, i));
				});
			}
		}
		function eu(n, i, a) {
			var l = n.cm && n.cm.state.suppressEdits;
			if (!(l && !a)) {
				for (
					var c = n.history,
						g,
						y = n.sel,
						x = i == 'undo' ? c.done : c.undone,
						S = i == 'undo' ? c.undone : c.done,
						_ = 0;
					_ < x.length &&
					((g = x[_]), !(a ? g.ranges && !g.equals(n.sel) : !g.ranges));
					_++
				);
				if (_ != x.length) {
					for (c.lastOrigin = c.lastSelOrigin = null; ; )
						if (((g = x.pop()), g.ranges)) {
							if ((Ya(g, S), a && !g.equals(n.sel))) {
								ln(n, g, { clearRedo: !1 });
								return;
							}
							y = g;
						} else if (l) {
							x.push(g);
							return;
						} else break;
					var P = [];
					Ya(y, S),
						S.push({ changes: P, generation: c.generation }),
						(c.generation = g.generation || ++c.maxGeneration);
					for (
						var D = Rn(n, 'beforeChange') || (n.cm && Rn(n.cm, 'beforeChange')),
							G = function (ce) {
								var me = g.changes[ce];
								if (((me.origin = i), D && !Pg(n, me, !1)))
									return (x.length = 0), {};
								P.push($f(n, me));
								var be = ce ? Af(n, me) : de(x);
								ll(n, me, be, kg(n, me)),
									!ce &&
										n.cm &&
										n.cm.scrollIntoView({ from: me.from, to: Ai(me) });
								var Te = [];
								Mi(n, function (we, Me) {
									!Me &&
										Ae(Te, we.history) == -1 &&
										(Ig(we.history, me), Te.push(we.history)),
										ll(we, me, null, kg(we, me));
								});
							},
							j = g.changes.length - 1;
						j >= 0;
						--j
					) {
						var re = G(j);
						if (re) return re.v;
					}
				}
			}
		}
		function Rg(n, i) {
			if (
				i != 0 &&
				((n.first += i),
				(n.sel = new Gn(
					pe(n.sel.ranges, function (c) {
						return new dt(
							ne(c.anchor.line + i, c.anchor.ch),
							ne(c.head.line + i, c.head.ch),
						);
					}),
					n.sel.primIndex,
				)),
				n.cm)
			) {
				wn(n.cm, n.first, n.first - i, i);
				for (var a = n.cm.display, l = a.viewFrom; l < a.viewTo; l++)
					Ci(n.cm, l, 'gutter');
			}
		}
		function ll(n, i, a, l) {
			if (n.cm && !n.cm.curOp) return Gt(n.cm, ll)(n, i, a, l);
			if (i.to.line < n.first) {
				Rg(n, i.text.length - 1 - (i.to.line - i.from.line));
				return;
			}
			if (!(i.from.line > n.lastLine())) {
				if (i.from.line < n.first) {
					var c = i.text.length - 1 - (n.first - i.from.line);
					Rg(n, c),
						(i = {
							from: ne(n.first, 0),
							to: ne(i.to.line + c, i.to.ch),
							text: [de(i.text)],
							origin: i.origin,
						});
				}
				var g = n.lastLine();
				i.to.line > g &&
					(i = {
						from: i.from,
						to: ne(g, Oe(n, g).text.length),
						text: [i.text[0]],
						origin: i.origin,
					}),
					(i.removed = Jr(n, i.from, i.to)),
					a || (a = Af(n, i)),
					n.cm ? mS(n.cm, i, l) : Nf(n, i, l),
					Ja(n, a, X),
					n.cantEdit && Qa(n, ne(n.firstLine(), 0)) && (n.cantEdit = !1);
			}
		}
		function mS(n, i, a) {
			var l = n.doc,
				c = n.display,
				g = i.from,
				y = i.to,
				x = !1,
				S = g.line;
			n.options.lineWrapping ||
				((S = T(hr(Oe(l, g.line)))),
				l.iter(S, y.line + 1, function (j) {
					if (j == c.maxLine) return (x = !0), !0;
				})),
				l.sel.contains(i.from, i.to) > -1 && nr(n),
				Nf(l, i, a, eg(n)),
				n.options.lineWrapping ||
					(l.iter(S, g.line + i.text.length, function (j) {
						var re = za(j);
						re > c.maxLineLength &&
							((c.maxLine = j),
							(c.maxLineLength = re),
							(c.maxLineChanged = !0),
							(x = !1));
					}),
					x && (n.curOp.updateMaxLine = !0)),
				o1(l, g.line),
				il(n, 400);
			var _ = i.text.length - (y.line - g.line) - 1;
			i.full
				? wn(n)
				: g.line == y.line && i.text.length == 1 && !yg(n.doc, i)
					? Ci(n, g.line, 'text')
					: wn(n, g.line, y.line + 1, _);
			var P = Rn(n, 'changes'),
				D = Rn(n, 'change');
			if (D || P) {
				var G = {
					from: g,
					to: y,
					text: i.text,
					removed: i.removed,
					origin: i.origin,
				};
				D && jt(n, 'change', n, G),
					P && (n.curOp.changeObjs || (n.curOp.changeObjs = [])).push(G);
			}
			n.display.selForContextMenu = null;
		}
		function is(n, i, a, l, c) {
			var g;
			l || (l = a),
				_e(l, a) < 0 && ((g = [l, a]), (a = g[0]), (l = g[1])),
				typeof i == 'string' && (i = n.splitLines(i)),
				rs(n, { from: a, to: l, text: i, origin: c });
		}
		function Dg(n, i, a, l) {
			a < n.line ? (n.line += l) : i < n.line && ((n.line = i), (n.ch = 0));
		}
		function zg(n, i, a, l) {
			for (var c = 0; c < n.length; ++c) {
				var g = n[c],
					y = !0;
				if (g.ranges) {
					g.copied || ((g = n[c] = g.deepCopy()), (g.copied = !0));
					for (var x = 0; x < g.ranges.length; x++)
						Dg(g.ranges[x].anchor, i, a, l), Dg(g.ranges[x].head, i, a, l);
					continue;
				}
				for (var S = 0; S < g.changes.length; ++S) {
					var _ = g.changes[S];
					if (a < _.from.line)
						(_.from = ne(_.from.line + l, _.from.ch)),
							(_.to = ne(_.to.line + l, _.to.ch));
					else if (i <= _.to.line) {
						y = !1;
						break;
					}
				}
				y || (n.splice(0, c + 1), (c = 0));
			}
		}
		function Ig(n, i) {
			var a = i.from.line,
				l = i.to.line,
				c = i.text.length - (l - a) - 1;
			zg(n.done, a, l, c), zg(n.undone, a, l, c);
		}
		function al(n, i, a, l) {
			var c = i,
				g = i;
			return (
				typeof i == 'number' ? (g = Oe(n, gp(n, i))) : (c = T(i)),
				c == null ? null : (l(g, c) && n.cm && Ci(n.cm, c, a), g)
			);
		}
		function ul(n) {
			(this.lines = n), (this.parent = null);
			for (var i = 0, a = 0; a < n.length; ++a)
				(n[a].parent = this), (i += n[a].height);
			this.height = i;
		}
		ul.prototype = {
			chunkSize: function () {
				return this.lines.length;
			},
			removeInner: function (n, i) {
				for (var a = n, l = n + i; a < l; ++a) {
					var c = this.lines[a];
					(this.height -= c.height), v1(c), jt(c, 'delete');
				}
				this.lines.splice(n, i);
			},
			collapse: function (n) {
				n.push.apply(n, this.lines);
			},
			insertInner: function (n, i, a) {
				(this.height += a),
					(this.lines = this.lines
						.slice(0, n)
						.concat(i)
						.concat(this.lines.slice(n)));
				for (var l = 0; l < i.length; ++l) i[l].parent = this;
			},
			iterN: function (n, i, a) {
				for (var l = n + i; n < l; ++n) if (a(this.lines[n])) return !0;
			},
		};
		function cl(n) {
			this.children = n;
			for (var i = 0, a = 0, l = 0; l < n.length; ++l) {
				var c = n[l];
				(i += c.chunkSize()), (a += c.height), (c.parent = this);
			}
			(this.size = i), (this.height = a), (this.parent = null);
		}
		cl.prototype = {
			chunkSize: function () {
				return this.size;
			},
			removeInner: function (n, i) {
				this.size -= i;
				for (var a = 0; a < this.children.length; ++a) {
					var l = this.children[a],
						c = l.chunkSize();
					if (n < c) {
						var g = Math.min(i, c - n),
							y = l.height;
						if (
							(l.removeInner(n, g),
							(this.height -= y - l.height),
							c == g && (this.children.splice(a--, 1), (l.parent = null)),
							(i -= g) == 0)
						)
							break;
						n = 0;
					} else n -= c;
				}
				if (
					this.size - i < 25 &&
					(this.children.length > 1 || !(this.children[0] instanceof ul))
				) {
					var x = [];
					this.collapse(x),
						(this.children = [new ul(x)]),
						(this.children[0].parent = this);
				}
			},
			collapse: function (n) {
				for (var i = 0; i < this.children.length; ++i)
					this.children[i].collapse(n);
			},
			insertInner: function (n, i, a) {
				(this.size += i.length), (this.height += a);
				for (var l = 0; l < this.children.length; ++l) {
					var c = this.children[l],
						g = c.chunkSize();
					if (n <= g) {
						if ((c.insertInner(n, i, a), c.lines && c.lines.length > 50)) {
							for (
								var y = (c.lines.length % 25) + 25, x = y;
								x < c.lines.length;

							) {
								var S = new ul(c.lines.slice(x, (x += 25)));
								(c.height -= S.height),
									this.children.splice(++l, 0, S),
									(S.parent = this);
							}
							(c.lines = c.lines.slice(0, y)), this.maybeSpill();
						}
						break;
					}
					n -= g;
				}
			},
			maybeSpill: function () {
				if (!(this.children.length <= 10)) {
					var n = this;
					do {
						var i = n.children.splice(n.children.length - 5, 5),
							a = new cl(i);
						if (n.parent) {
							(n.size -= a.size), (n.height -= a.height);
							var c = Ae(n.parent.children, n);
							n.parent.children.splice(c + 1, 0, a);
						} else {
							var l = new cl(n.children);
							(l.parent = n), (n.children = [l, a]), (n = l);
						}
						a.parent = n.parent;
					} while (n.children.length > 10);
					n.parent.maybeSpill();
				}
			},
			iterN: function (n, i, a) {
				for (var l = 0; l < this.children.length; ++l) {
					var c = this.children[l],
						g = c.chunkSize();
					if (n < g) {
						var y = Math.min(i, g - n);
						if (c.iterN(n, y, a)) return !0;
						if ((i -= y) == 0) break;
						n = 0;
					} else n -= g;
				}
			},
		};
		var fl = function (n, i, a) {
			if (a) for (var l in a) a.hasOwnProperty(l) && (this[l] = a[l]);
			(this.doc = n), (this.node = i);
		};
		(fl.prototype.clear = function () {
			var n = this.doc.cm,
				i = this.line.widgets,
				a = this.line,
				l = T(a);
			if (!(l == null || !i)) {
				for (var c = 0; c < i.length; ++c) i[c] == this && i.splice(c--, 1);
				i.length || (a.widgets = null);
				var g = Zs(this);
				jn(a, Math.max(0, a.height - g)),
					n &&
						(Dn(n, function () {
							Fg(n, a, -g), Ci(n, l, 'widget');
						}),
						jt(n, 'lineWidgetCleared', n, this, l));
			}
		}),
			(fl.prototype.changed = function () {
				var n = this,
					i = this.height,
					a = this.doc.cm,
					l = this.line;
				this.height = null;
				var c = Zs(this) - i;
				c &&
					(Ti(this.doc, l) || jn(l, l.height + c),
					a &&
						Dn(a, function () {
							(a.curOp.forceUpdate = !0),
								Fg(a, l, c),
								jt(a, 'lineWidgetChanged', a, n, T(l));
						}));
			}),
			ar(fl);
		function Fg(n, i, a) {
			ei(i) < ((n.curOp && n.curOp.scrollTop) || n.doc.scrollTop) && _f(n, a);
		}
		function vS(n, i, a, l) {
			var c = new fl(n, a, l),
				g = n.cm;
			return (
				g && c.noHScroll && (g.display.alignWidgets = !0),
				al(n, i, 'widget', function (y) {
					var x = y.widgets || (y.widgets = []);
					if (
						(c.insertAt == null
							? x.push(c)
							: x.splice(Math.min(x.length, Math.max(0, c.insertAt)), 0, c),
						(c.line = y),
						g && !Ti(n, y))
					) {
						var S = ei(y) < n.scrollTop;
						jn(y, y.height + Zs(c)),
							S && _f(g, c.height),
							(g.curOp.forceUpdate = !0);
					}
					return !0;
				}),
				g && jt(g, 'lineWidgetAdded', g, c, typeof i == 'number' ? i : T(i)),
				c
			);
		}
		var Hg = 0,
			Ni = function (n, i) {
				(this.lines = []), (this.type = i), (this.doc = n), (this.id = ++Hg);
			};
		(Ni.prototype.clear = function () {
			if (!this.explicitlyCleared) {
				var n = this.doc.cm,
					i = n && !n.curOp;
				if ((i && po(n), Rn(this, 'clear'))) {
					var a = this.find();
					a && jt(this, 'clear', a.from, a.to);
				}
				for (var l = null, c = null, g = 0; g < this.lines.length; ++g) {
					var y = this.lines[g],
						x = Ks(y.markedSpans, this);
					n && !this.collapsed
						? Ci(n, T(y), 'text')
						: n && (x.to != null && (c = T(y)), x.from != null && (l = T(y))),
						(y.markedSpans = a1(y.markedSpans, x)),
						x.from == null &&
							this.collapsed &&
							!Ti(this.doc, y) &&
							n &&
							jn(y, Yo(n.display));
				}
				if (n && this.collapsed && !n.options.lineWrapping)
					for (var S = 0; S < this.lines.length; ++S) {
						var _ = hr(this.lines[S]),
							P = za(_);
						P > n.display.maxLineLength &&
							((n.display.maxLine = _),
							(n.display.maxLineLength = P),
							(n.display.maxLineChanged = !0));
					}
				l != null && n && this.collapsed && wn(n, l, c + 1),
					(this.lines.length = 0),
					(this.explicitlyCleared = !0),
					this.atomic &&
						this.doc.cantEdit &&
						((this.doc.cantEdit = !1), n && Ag(n.doc)),
					n && jt(n, 'markerCleared', n, this, l, c),
					i && go(n),
					this.parent && this.parent.clear();
			}
		}),
			(Ni.prototype.find = function (n, i) {
				n == null && this.type == 'bookmark' && (n = 1);
				for (var a, l, c = 0; c < this.lines.length; ++c) {
					var g = this.lines[c],
						y = Ks(g.markedSpans, this);
					if (y.from != null && ((a = ne(i ? g : T(g), y.from)), n == -1))
						return a;
					if (y.to != null && ((l = ne(i ? g : T(g), y.to)), n == 1)) return l;
				}
				return a && { from: a, to: l };
			}),
			(Ni.prototype.changed = function () {
				var n = this,
					i = this.find(-1, !0),
					a = this,
					l = this.doc.cm;
				!i ||
					!l ||
					Dn(l, function () {
						var c = i.line,
							g = T(i.line),
							y = cf(l, g);
						if (
							(y &&
								(jp(y), (l.curOp.selectionChanged = l.curOp.forceUpdate = !0)),
							(l.curOp.updateMaxLine = !0),
							!Ti(a.doc, c) && a.height != null)
						) {
							var x = a.height;
							a.height = null;
							var S = Zs(a) - x;
							S && jn(c, c.height + S);
						}
						jt(l, 'markerChanged', l, n);
					});
			}),
			(Ni.prototype.attachLine = function (n) {
				if (!this.lines.length && this.doc.cm) {
					var i = this.doc.cm.curOp;
					(!i.maybeHiddenMarkers || Ae(i.maybeHiddenMarkers, this) == -1) &&
						(i.maybeUnhiddenMarkers || (i.maybeUnhiddenMarkers = [])).push(
							this,
						);
				}
				this.lines.push(n);
			}),
			(Ni.prototype.detachLine = function (n) {
				if (
					(this.lines.splice(Ae(this.lines, n), 1),
					!this.lines.length && this.doc.cm)
				) {
					var i = this.doc.cm.curOp;
					(i.maybeHiddenMarkers || (i.maybeHiddenMarkers = [])).push(this);
				}
			}),
			ar(Ni);
		function os(n, i, a, l, c) {
			if (l && l.shared) return yS(n, i, a, l, c);
			if (n.cm && !n.cm.curOp) return Gt(n.cm, os)(n, i, a, l, c);
			var g = new Ni(n, c),
				y = _e(i, a);
			if ((l && ae(l, g, !1), y > 0 || (y == 0 && g.clearWhenEmpty !== !1)))
				return g;
			if (
				(g.replacedWith &&
					((g.collapsed = !0),
					(g.widgetNode = W('span', [g.replacedWith], 'CodeMirror-widget')),
					l.handleMouseEvents ||
						g.widgetNode.setAttribute('cm-ignore-events', 'true'),
					l.insertLeft && (g.widgetNode.insertLeft = !0)),
				g.collapsed)
			) {
				if (
					Mp(n, i.line, i, a, g) ||
					(i.line != a.line && Mp(n, a.line, i, a, g))
				)
					throw new Error(
						'Inserting collapsed marker partially overlapping an existing one',
					);
				l1();
			}
			g.addToHistory &&
				Sg(n, { from: i, to: a, origin: 'markText' }, n.sel, NaN);
			var x = i.line,
				S = n.cm,
				_;
			if (
				(n.iter(x, a.line + 1, function (D) {
					S &&
						g.collapsed &&
						!S.options.lineWrapping &&
						hr(D) == S.display.maxLine &&
						(_ = !0),
						g.collapsed && x != i.line && jn(D, 0),
						u1(
							D,
							new Pa(g, x == i.line ? i.ch : null, x == a.line ? a.ch : null),
							n.cm && n.cm.curOp,
						),
						++x;
				}),
				g.collapsed &&
					n.iter(i.line, a.line + 1, function (D) {
						Ti(n, D) && jn(D, 0);
					}),
				g.clearOnEnter &&
					ze(g, 'beforeCursorEnter', function () {
						return g.clear();
					}),
				g.readOnly &&
					(s1(),
					(n.history.done.length || n.history.undone.length) &&
						n.clearHistory()),
				g.collapsed && ((g.id = ++Hg), (g.atomic = !0)),
				S)
			) {
				if ((_ && (S.curOp.updateMaxLine = !0), g.collapsed))
					wn(S, i.line, a.line + 1);
				else if (
					g.className ||
					g.startStyle ||
					g.endStyle ||
					g.css ||
					g.attributes ||
					g.title
				)
					for (var P = i.line; P <= a.line; P++) Ci(S, P, 'text');
				g.atomic && Ag(S.doc), jt(S, 'markerAdded', S, g);
			}
			return g;
		}
		var dl = function (n, i) {
			(this.markers = n), (this.primary = i);
			for (var a = 0; a < n.length; ++a) n[a].parent = this;
		};
		(dl.prototype.clear = function () {
			if (!this.explicitlyCleared) {
				this.explicitlyCleared = !0;
				for (var n = 0; n < this.markers.length; ++n) this.markers[n].clear();
				jt(this, 'clear');
			}
		}),
			(dl.prototype.find = function (n, i) {
				return this.primary.find(n, i);
			}),
			ar(dl);
		function yS(n, i, a, l, c) {
			(l = ae(l)), (l.shared = !1);
			var g = [os(n, i, a, l, c)],
				y = g[0],
				x = l.widgetNode;
			return (
				Mi(n, function (S) {
					x && (l.widgetNode = x.cloneNode(!0)),
						g.push(os(S, Ge(S, i), Ge(S, a), l, c));
					for (var _ = 0; _ < S.linked.length; ++_)
						if (S.linked[_].isParent) return;
					y = de(g);
				}),
				new dl(g, y)
			);
		}
		function qg(n) {
			return n.findMarks(
				ne(n.first, 0),
				n.clipPos(ne(n.lastLine())),
				function (i) {
					return i.parent;
				},
			);
		}
		function bS(n, i) {
			for (var a = 0; a < i.length; a++) {
				var l = i[a],
					c = l.find(),
					g = n.clipPos(c.from),
					y = n.clipPos(c.to);
				if (_e(g, y)) {
					var x = os(n, g, y, l.primary, l.primary.type);
					l.markers.push(x), (x.parent = l);
				}
			}
		}
		function wS(n) {
			for (
				var i = function (l) {
						var c = n[l],
							g = [c.primary.doc];
						Mi(c.primary.doc, function (S) {
							return g.push(S);
						});
						for (var y = 0; y < c.markers.length; y++) {
							var x = c.markers[y];
							Ae(g, x.doc) == -1 &&
								((x.parent = null), c.markers.splice(y--, 1));
						}
					},
					a = 0;
				a < n.length;
				a++
			)
				i(a);
		}
		var xS = 0,
			xn = function (n, i, a, l, c) {
				if (!(this instanceof xn)) return new xn(n, i, a, l, c);
				a == null && (a = 0),
					cl.call(this, [new ul([new Go('', null)])]),
					(this.first = a),
					(this.scrollTop = this.scrollLeft = 0),
					(this.cantEdit = !1),
					(this.cleanGeneration = 1),
					(this.modeFrontier = this.highlightFrontier = a);
				var g = ne(a, 0);
				(this.sel = Li(g)),
					(this.history = new Xa(null)),
					(this.id = ++xS),
					(this.modeOption = i),
					(this.lineSep = l),
					(this.direction = c == 'rtl' ? 'rtl' : 'ltr'),
					(this.extend = !1),
					typeof n == 'string' && (n = this.splitLines(n)),
					Nf(this, { from: g, to: g, text: n }),
					ln(this, Li(g), X);
			};
		(xn.prototype = De(cl.prototype, {
			constructor: xn,
			iter: function (n, i, a) {
				a
					? this.iterN(n - this.first, i - n, a)
					: this.iterN(this.first, this.first + this.size, n);
			},
			insert: function (n, i) {
				for (var a = 0, l = 0; l < i.length; ++l) a += i[l].height;
				this.insertInner(n - this.first, i, a);
			},
			remove: function (n, i) {
				this.removeInner(n - this.first, i);
			},
			getValue: function (n) {
				var i = js(this, this.first, this.first + this.size);
				return n === !1 ? i : i.join(n || this.lineSeparator());
			},
			setValue: Kt(function (n) {
				var i = ne(this.first, 0),
					a = this.first + this.size - 1;
				rs(
					this,
					{
						from: i,
						to: ne(a, Oe(this, a).text.length),
						text: this.splitLines(n),
						origin: 'setValue',
						full: !0,
					},
					!0,
				),
					this.cm && el(this.cm, 0, 0),
					ln(this, Li(i), X);
			}),
			replaceRange: function (n, i, a, l) {
				(i = Ge(this, i)), (a = a ? Ge(this, a) : i), is(this, n, i, a, l);
			},
			getRange: function (n, i, a) {
				var l = Jr(this, Ge(this, n), Ge(this, i));
				return a === !1
					? l
					: a === ''
						? l.join('')
						: l.join(a || this.lineSeparator());
			},
			getLine: function (n) {
				var i = this.getLineHandle(n);
				return i && i.text;
			},
			getLineHandle: function (n) {
				if (se(this, n)) return Oe(this, n);
			},
			getLineNumber: function (n) {
				return T(n);
			},
			getLineHandleVisualStart: function (n) {
				return typeof n == 'number' && (n = Oe(this, n)), hr(n);
			},
			lineCount: function () {
				return this.size;
			},
			firstLine: function () {
				return this.first;
			},
			lastLine: function () {
				return this.first + this.size - 1;
			},
			clipPos: function (n) {
				return Ge(this, n);
			},
			getCursor: function (n) {
				var i = this.sel.primary(),
					a;
				return (
					n == null || n == 'head'
						? (a = i.head)
						: n == 'anchor'
							? (a = i.anchor)
							: n == 'end' || n == 'to' || n === !1
								? (a = i.to())
								: (a = i.from()),
					a
				);
			},
			listSelections: function () {
				return this.sel.ranges;
			},
			somethingSelected: function () {
				return this.sel.somethingSelected();
			},
			setCursor: Kt(function (n, i, a) {
				Cg(this, Ge(this, typeof n == 'number' ? ne(n, i || 0) : n), null, a);
			}),
			setSelection: Kt(function (n, i, a) {
				Cg(this, Ge(this, n), Ge(this, i || n), a);
			}),
			extendSelection: Kt(function (n, i, a) {
				Za(this, Ge(this, n), i && Ge(this, i), a);
			}),
			extendSelections: Kt(function (n, i) {
				Tg(this, mp(this, n), i);
			}),
			extendSelectionsBy: Kt(function (n, i) {
				var a = pe(this.sel.ranges, n);
				Tg(this, mp(this, a), i);
			}),
			setSelections: Kt(function (n, i, a) {
				if (n.length) {
					for (var l = [], c = 0; c < n.length; c++)
						l[c] = new dt(
							Ge(this, n[c].anchor),
							Ge(this, n[c].head || n[c].anchor),
						);
					i == null && (i = Math.min(n.length - 1, this.sel.primIndex)),
						ln(this, gr(this.cm, l, i), a);
				}
			}),
			addSelection: Kt(function (n, i, a) {
				var l = this.sel.ranges.slice(0);
				l.push(new dt(Ge(this, n), Ge(this, i || n))),
					ln(this, gr(this.cm, l, l.length - 1), a);
			}),
			getSelection: function (n) {
				for (var i = this.sel.ranges, a, l = 0; l < i.length; l++) {
					var c = Jr(this, i[l].from(), i[l].to());
					a = a ? a.concat(c) : c;
				}
				return n === !1 ? a : a.join(n || this.lineSeparator());
			},
			getSelections: function (n) {
				for (var i = [], a = this.sel.ranges, l = 0; l < a.length; l++) {
					var c = Jr(this, a[l].from(), a[l].to());
					n !== !1 && (c = c.join(n || this.lineSeparator())), (i[l] = c);
				}
				return i;
			},
			replaceSelection: function (n, i, a) {
				for (var l = [], c = 0; c < this.sel.ranges.length; c++) l[c] = n;
				this.replaceSelections(l, i, a || '+input');
			},
			replaceSelections: Kt(function (n, i, a) {
				for (var l = [], c = this.sel, g = 0; g < c.ranges.length; g++) {
					var y = c.ranges[g];
					l[g] = {
						from: y.from(),
						to: y.to(),
						text: this.splitLines(n[g]),
						origin: a,
					};
				}
				for (
					var x = i && i != 'end' && aS(this, l, i), S = l.length - 1;
					S >= 0;
					S--
				)
					rs(this, l[S]);
				x ? Eg(this, x) : this.cm && Qo(this.cm);
			}),
			undo: Kt(function () {
				eu(this, 'undo');
			}),
			redo: Kt(function () {
				eu(this, 'redo');
			}),
			undoSelection: Kt(function () {
				eu(this, 'undo', !0);
			}),
			redoSelection: Kt(function () {
				eu(this, 'redo', !0);
			}),
			setExtending: function (n) {
				this.extend = n;
			},
			getExtending: function () {
				return this.extend;
			},
			historySize: function () {
				for (var n = this.history, i = 0, a = 0, l = 0; l < n.done.length; l++)
					n.done[l].ranges || ++i;
				for (var c = 0; c < n.undone.length; c++) n.undone[c].ranges || ++a;
				return { undo: i, redo: a };
			},
			clearHistory: function () {
				var n = this;
				(this.history = new Xa(this.history)),
					Mi(
						this,
						function (i) {
							return (i.history = n.history);
						},
						!0,
					);
			},
			markClean: function () {
				this.cleanGeneration = this.changeGeneration(!0);
			},
			changeGeneration: function (n) {
				return (
					n &&
						(this.history.lastOp =
							this.history.lastSelOp =
							this.history.lastOrigin =
								null),
					this.history.generation
				);
			},
			isClean: function (n) {
				return this.history.generation == (n || this.cleanGeneration);
			},
			getHistory: function () {
				return { done: ts(this.history.done), undone: ts(this.history.undone) };
			},
			setHistory: function (n) {
				var i = (this.history = new Xa(this.history));
				(i.done = ts(n.done.slice(0), null, !0)),
					(i.undone = ts(n.undone.slice(0), null, !0));
			},
			setGutterMarker: Kt(function (n, i, a) {
				return al(this, n, 'gutter', function (l) {
					var c = l.gutterMarkers || (l.gutterMarkers = {});
					return (c[i] = a), !a && lt(c) && (l.gutterMarkers = null), !0;
				});
			}),
			clearGutter: Kt(function (n) {
				var i = this;
				this.iter(function (a) {
					a.gutterMarkers &&
						a.gutterMarkers[n] &&
						al(i, a, 'gutter', function () {
							return (
								(a.gutterMarkers[n] = null),
								lt(a.gutterMarkers) && (a.gutterMarkers = null),
								!0
							);
						});
				});
			}),
			lineInfo: function (n) {
				var i;
				if (typeof n == 'number') {
					if (!se(this, n) || ((i = n), (n = Oe(this, n)), !n)) return null;
				} else if (((i = T(n)), i == null)) return null;
				return {
					line: i,
					handle: n,
					text: n.text,
					gutterMarkers: n.gutterMarkers,
					textClass: n.textClass,
					bgClass: n.bgClass,
					wrapClass: n.wrapClass,
					widgets: n.widgets,
				};
			},
			addLineClass: Kt(function (n, i, a) {
				return al(this, n, i == 'gutter' ? 'gutter' : 'class', function (l) {
					var c =
						i == 'text'
							? 'textClass'
							: i == 'background'
								? 'bgClass'
								: i == 'gutter'
									? 'gutterClass'
									: 'wrapClass';
					if (!l[c]) l[c] = a;
					else {
						if (ee(a).test(l[c])) return !1;
						l[c] += ' ' + a;
					}
					return !0;
				});
			}),
			removeLineClass: Kt(function (n, i, a) {
				return al(this, n, i == 'gutter' ? 'gutter' : 'class', function (l) {
					var c =
							i == 'text'
								? 'textClass'
								: i == 'background'
									? 'bgClass'
									: i == 'gutter'
										? 'gutterClass'
										: 'wrapClass',
						g = l[c];
					if (g)
						if (a == null) l[c] = null;
						else {
							var y = g.match(ee(a));
							if (!y) return !1;
							var x = y.index + y[0].length;
							l[c] =
								g.slice(0, y.index) +
									(!y.index || x == g.length ? '' : ' ') +
									g.slice(x) || null;
						}
					else return !1;
					return !0;
				});
			}),
			addLineWidget: Kt(function (n, i, a) {
				return vS(this, n, i, a);
			}),
			removeLineWidget: function (n) {
				n.clear();
			},
			markText: function (n, i, a) {
				return os(this, Ge(this, n), Ge(this, i), a, (a && a.type) || 'range');
			},
			setBookmark: function (n, i) {
				var a = {
					replacedWith: i && (i.nodeType == null ? i.widget : i),
					insertLeft: i && i.insertLeft,
					clearWhenEmpty: !1,
					shared: i && i.shared,
					handleMouseEvents: i && i.handleMouseEvents,
				};
				return (n = Ge(this, n)), os(this, n, n, a, 'bookmark');
			},
			findMarksAt: function (n) {
				n = Ge(this, n);
				var i = [],
					a = Oe(this, n.line).markedSpans;
				if (a)
					for (var l = 0; l < a.length; ++l) {
						var c = a[l];
						(c.from == null || c.from <= n.ch) &&
							(c.to == null || c.to >= n.ch) &&
							i.push(c.marker.parent || c.marker);
					}
				return i;
			},
			findMarks: function (n, i, a) {
				(n = Ge(this, n)), (i = Ge(this, i));
				var l = [],
					c = n.line;
				return (
					this.iter(n.line, i.line + 1, function (g) {
						var y = g.markedSpans;
						if (y)
							for (var x = 0; x < y.length; x++) {
								var S = y[x];
								!(
									(S.to != null && c == n.line && n.ch >= S.to) ||
									(S.from == null && c != n.line) ||
									(S.from != null && c == i.line && S.from >= i.ch)
								) &&
									(!a || a(S.marker)) &&
									l.push(S.marker.parent || S.marker);
							}
						++c;
					}),
					l
				);
			},
			getAllMarks: function () {
				var n = [];
				return (
					this.iter(function (i) {
						var a = i.markedSpans;
						if (a)
							for (var l = 0; l < a.length; ++l)
								a[l].from != null && n.push(a[l].marker);
					}),
					n
				);
			},
			posFromIndex: function (n) {
				var i,
					a = this.first,
					l = this.lineSeparator().length;
				return (
					this.iter(function (c) {
						var g = c.text.length + l;
						if (g > n) return (i = n), !0;
						(n -= g), ++a;
					}),
					Ge(this, ne(a, i))
				);
			},
			indexFromPos: function (n) {
				n = Ge(this, n);
				var i = n.ch;
				if (n.line < this.first || n.ch < 0) return 0;
				var a = this.lineSeparator().length;
				return (
					this.iter(this.first, n.line, function (l) {
						i += l.text.length + a;
					}),
					i
				);
			},
			copy: function (n) {
				var i = new xn(
					js(this, this.first, this.first + this.size),
					this.modeOption,
					this.first,
					this.lineSep,
					this.direction,
				);
				return (
					(i.scrollTop = this.scrollTop),
					(i.scrollLeft = this.scrollLeft),
					(i.sel = this.sel),
					(i.extend = !1),
					n &&
						((i.history.undoDepth = this.history.undoDepth),
						i.setHistory(this.getHistory())),
					i
				);
			},
			linkedDoc: function (n) {
				n || (n = {});
				var i = this.first,
					a = this.first + this.size;
				n.from != null && n.from > i && (i = n.from),
					n.to != null && n.to < a && (a = n.to);
				var l = new xn(
					js(this, i, a),
					n.mode || this.modeOption,
					i,
					this.lineSep,
					this.direction,
				);
				return (
					n.sharedHist && (l.history = this.history),
					(this.linked || (this.linked = [])).push({
						doc: l,
						sharedHist: n.sharedHist,
					}),
					(l.linked = [{ doc: this, isParent: !0, sharedHist: n.sharedHist }]),
					bS(l, qg(this)),
					l
				);
			},
			unlinkDoc: function (n) {
				if ((n instanceof Tt && (n = n.doc), this.linked))
					for (var i = 0; i < this.linked.length; ++i) {
						var a = this.linked[i];
						if (a.doc == n) {
							this.linked.splice(i, 1), n.unlinkDoc(this), wS(qg(this));
							break;
						}
					}
				if (n.history == this.history) {
					var l = [n.id];
					Mi(
						n,
						function (c) {
							return l.push(c.id);
						},
						!0,
					),
						(n.history = new Xa(null)),
						(n.history.done = ts(this.history.done, l)),
						(n.history.undone = ts(this.history.undone, l));
				}
			},
			iterLinkedDocs: function (n) {
				Mi(this, n);
			},
			getMode: function () {
				return this.mode;
			},
			getEditor: function () {
				return this.cm;
			},
			splitLines: function (n) {
				return this.lineSep ? n.split(this.lineSep) : rr(n);
			},
			lineSeparator: function () {
				return (
					this.lineSep ||
					`
`
				);
			},
			setDirection: Kt(function (n) {
				n != 'rtl' && (n = 'ltr'),
					n != this.direction &&
						((this.direction = n),
						this.iter(function (i) {
							return (i.order = null);
						}),
						this.cm && uS(this.cm));
			}),
		})),
			(xn.prototype.eachLine = xn.prototype.iter);
		var Bg = 0;
		function SS(n) {
			var i = this;
			if ((Wg(i), !(Nt(i, n) || ti(i.display, n)))) {
				sn(n), h && (Bg = +new Date());
				var a = uo(i, n, !0),
					l = n.dataTransfer.files;
				if (!(!a || i.isReadOnly()))
					if (l && l.length && window.FileReader && window.File)
						for (
							var c = l.length,
								g = Array(c),
								y = 0,
								x = function () {
									++y == c &&
										Gt(i, function () {
											a = Ge(i.doc, a);
											var j = {
												from: a,
												to: a,
												text: i.doc.splitLines(
													g
														.filter(function (re) {
															return re != null;
														})
														.join(i.doc.lineSeparator()),
												),
												origin: 'paste',
											};
											rs(i.doc, j),
												Eg(i.doc, Li(Ge(i.doc, a), Ge(i.doc, Ai(j))));
										})();
								},
								S = function (j, re) {
									if (
										i.options.allowDropFileTypes &&
										Ae(i.options.allowDropFileTypes, j.type) == -1
									) {
										x();
										return;
									}
									var ce = new FileReader();
									(ce.onerror = function () {
										return x();
									}),
										(ce.onload = function () {
											var me = ce.result;
											if (/[\x00-\x08\x0e-\x1f]{2}/.test(me)) {
												x();
												return;
											}
											(g[re] = me), x();
										}),
										ce.readAsText(j);
								},
								_ = 0;
							_ < l.length;
							_++
						)
							S(l[_], _);
					else {
						if (i.state.draggingText && i.doc.sel.contains(a) > -1) {
							i.state.draggingText(n),
								setTimeout(function () {
									return i.display.input.focus();
								}, 20);
							return;
						}
						try {
							var P = n.dataTransfer.getData('Text');
							if (P) {
								var D;
								if (
									(i.state.draggingText &&
										!i.state.draggingText.copy &&
										(D = i.listSelections()),
									Ja(i.doc, Li(a, a)),
									D)
								)
									for (var G = 0; G < D.length; ++G)
										is(i.doc, '', D[G].anchor, D[G].head, 'drag');
								i.replaceSelection(P, 'around', 'paste'),
									i.display.input.focus();
							}
						} catch {}
					}
			}
		}
		function _S(n, i) {
			if (h && (!n.state.draggingText || +new Date() - Bg < 100)) {
				xi(i);
				return;
			}
			if (
				!(Nt(n, i) || ti(n.display, i)) &&
				(i.dataTransfer.setData('Text', n.getSelection()),
				(i.dataTransfer.effectAllowed = 'copyMove'),
				i.dataTransfer.setDragImage && !M)
			) {
				var a = k('img', null, null, 'position: fixed; left: 0; top: 0;');
				(a.src =
					'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
					C &&
						((a.width = a.height = 1),
						n.display.wrapper.appendChild(a),
						(a._top = a.offsetTop)),
					i.dataTransfer.setDragImage(a, 0, 0),
					C && a.parentNode.removeChild(a);
			}
		}
		function kS(n, i) {
			var a = uo(n, i);
			if (a) {
				var l = document.createDocumentFragment();
				yf(n, a, l),
					n.display.dragCursor ||
						((n.display.dragCursor = k(
							'div',
							null,
							'CodeMirror-cursors CodeMirror-dragcursors',
						)),
						n.display.lineSpace.insertBefore(
							n.display.dragCursor,
							n.display.cursorDiv,
						)),
					F(n.display.dragCursor, l);
			}
		}
		function Wg(n) {
			n.display.dragCursor &&
				(n.display.lineSpace.removeChild(n.display.dragCursor),
				(n.display.dragCursor = null));
		}
		function Ug(n) {
			if (document.getElementsByClassName) {
				for (
					var i = document.getElementsByClassName('CodeMirror'), a = [], l = 0;
					l < i.length;
					l++
				) {
					var c = i[l].CodeMirror;
					c && a.push(c);
				}
				a.length &&
					a[0].operation(function () {
						for (var g = 0; g < a.length; g++) n(a[g]);
					});
			}
		}
		var Vg = !1;
		function TS() {
			Vg || (CS(), (Vg = !0));
		}
		function CS() {
			var n;
			ze(window, 'resize', function () {
				n == null &&
					(n = setTimeout(function () {
						(n = null), Ug(ES);
					}, 100));
			}),
				ze(window, 'blur', function () {
					return Ug(Jo);
				});
		}
		function ES(n) {
			var i = n.display;
			(i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
				(i.scrollbarsClipped = !1),
				n.setSize();
		}
		for (
			var $i = {
					3: 'Pause',
					8: 'Backspace',
					9: 'Tab',
					13: 'Enter',
					16: 'Shift',
					17: 'Ctrl',
					18: 'Alt',
					19: 'Pause',
					20: 'CapsLock',
					27: 'Esc',
					32: 'Space',
					33: 'PageUp',
					34: 'PageDown',
					35: 'End',
					36: 'Home',
					37: 'Left',
					38: 'Up',
					39: 'Right',
					40: 'Down',
					44: 'PrintScrn',
					45: 'Insert',
					46: 'Delete',
					59: ';',
					61: '=',
					91: 'Mod',
					92: 'Mod',
					93: 'Mod',
					106: '*',
					107: '=',
					109: '-',
					110: '.',
					111: '/',
					145: 'ScrollLock',
					173: '-',
					186: ';',
					187: '=',
					188: ',',
					189: '-',
					190: '.',
					191: '/',
					192: '`',
					219: '[',
					220: '\\',
					221: ']',
					222: "'",
					224: 'Mod',
					63232: 'Up',
					63233: 'Down',
					63234: 'Left',
					63235: 'Right',
					63272: 'Delete',
					63273: 'Home',
					63275: 'End',
					63276: 'PageUp',
					63277: 'PageDown',
					63302: 'Insert',
				},
				hl = 0;
			hl < 10;
			hl++
		)
			$i[hl + 48] = $i[hl + 96] = String(hl);
		for (var tu = 65; tu <= 90; tu++) $i[tu] = String.fromCharCode(tu);
		for (var pl = 1; pl <= 12; pl++) $i[pl + 111] = $i[pl + 63235] = 'F' + pl;
		var ri = {};
		(ri.basic = {
			Left: 'goCharLeft',
			Right: 'goCharRight',
			Up: 'goLineUp',
			Down: 'goLineDown',
			End: 'goLineEnd',
			Home: 'goLineStartSmart',
			PageUp: 'goPageUp',
			PageDown: 'goPageDown',
			Delete: 'delCharAfter',
			Backspace: 'delCharBefore',
			'Shift-Backspace': 'delCharBefore',
			Tab: 'defaultTab',
			'Shift-Tab': 'indentAuto',
			Enter: 'newlineAndIndent',
			Insert: 'toggleOverwrite',
			Esc: 'singleSelection',
		}),
			(ri.pcDefault = {
				'Ctrl-A': 'selectAll',
				'Ctrl-D': 'deleteLine',
				'Ctrl-Z': 'undo',
				'Shift-Ctrl-Z': 'redo',
				'Ctrl-Y': 'redo',
				'Ctrl-Home': 'goDocStart',
				'Ctrl-End': 'goDocEnd',
				'Ctrl-Up': 'goLineUp',
				'Ctrl-Down': 'goLineDown',
				'Ctrl-Left': 'goGroupLeft',
				'Ctrl-Right': 'goGroupRight',
				'Alt-Left': 'goLineStart',
				'Alt-Right': 'goLineEnd',
				'Ctrl-Backspace': 'delGroupBefore',
				'Ctrl-Delete': 'delGroupAfter',
				'Ctrl-S': 'save',
				'Ctrl-F': 'find',
				'Ctrl-G': 'findNext',
				'Shift-Ctrl-G': 'findPrev',
				'Shift-Ctrl-F': 'replace',
				'Shift-Ctrl-R': 'replaceAll',
				'Ctrl-[': 'indentLess',
				'Ctrl-]': 'indentMore',
				'Ctrl-U': 'undoSelection',
				'Shift-Ctrl-U': 'redoSelection',
				'Alt-U': 'redoSelection',
				fallthrough: 'basic',
			}),
			(ri.emacsy = {
				'Ctrl-F': 'goCharRight',
				'Ctrl-B': 'goCharLeft',
				'Ctrl-P': 'goLineUp',
				'Ctrl-N': 'goLineDown',
				'Ctrl-A': 'goLineStart',
				'Ctrl-E': 'goLineEnd',
				'Ctrl-V': 'goPageDown',
				'Shift-Ctrl-V': 'goPageUp',
				'Ctrl-D': 'delCharAfter',
				'Ctrl-H': 'delCharBefore',
				'Alt-Backspace': 'delWordBefore',
				'Ctrl-K': 'killLine',
				'Ctrl-T': 'transposeChars',
				'Ctrl-O': 'openLine',
			}),
			(ri.macDefault = {
				'Cmd-A': 'selectAll',
				'Cmd-D': 'deleteLine',
				'Cmd-Z': 'undo',
				'Shift-Cmd-Z': 'redo',
				'Cmd-Y': 'redo',
				'Cmd-Home': 'goDocStart',
				'Cmd-Up': 'goDocStart',
				'Cmd-End': 'goDocEnd',
				'Cmd-Down': 'goDocEnd',
				'Alt-Left': 'goGroupLeft',
				'Alt-Right': 'goGroupRight',
				'Cmd-Left': 'goLineLeft',
				'Cmd-Right': 'goLineRight',
				'Alt-Backspace': 'delGroupBefore',
				'Ctrl-Alt-Backspace': 'delGroupAfter',
				'Alt-Delete': 'delGroupAfter',
				'Cmd-S': 'save',
				'Cmd-F': 'find',
				'Cmd-G': 'findNext',
				'Shift-Cmd-G': 'findPrev',
				'Cmd-Alt-F': 'replace',
				'Shift-Cmd-Alt-F': 'replaceAll',
				'Cmd-[': 'indentLess',
				'Cmd-]': 'indentMore',
				'Cmd-Backspace': 'delWrappedLineLeft',
				'Cmd-Delete': 'delWrappedLineRight',
				'Cmd-U': 'undoSelection',
				'Shift-Cmd-U': 'redoSelection',
				'Ctrl-Up': 'goDocStart',
				'Ctrl-Down': 'goDocEnd',
				fallthrough: ['basic', 'emacsy'],
			}),
			(ri.default = O ? ri.macDefault : ri.pcDefault);
		function LS(n) {
			var i = n.split(/-(?!$)/);
			n = i[i.length - 1];
			for (var a, l, c, g, y = 0; y < i.length - 1; y++) {
				var x = i[y];
				if (/^(cmd|meta|m)$/i.test(x)) g = !0;
				else if (/^a(lt)?$/i.test(x)) a = !0;
				else if (/^(c|ctrl|control)$/i.test(x)) l = !0;
				else if (/^s(hift)?$/i.test(x)) c = !0;
				else throw new Error('Unrecognized modifier name: ' + x);
			}
			return (
				a && (n = 'Alt-' + n),
				l && (n = 'Ctrl-' + n),
				g && (n = 'Cmd-' + n),
				c && (n = 'Shift-' + n),
				n
			);
		}
		function AS(n) {
			var i = {};
			for (var a in n)
				if (n.hasOwnProperty(a)) {
					var l = n[a];
					if (/^(name|fallthrough|(de|at)tach)$/.test(a)) continue;
					if (l == '...') {
						delete n[a];
						continue;
					}
					for (var c = pe(a.split(' '), LS), g = 0; g < c.length; g++) {
						var y = void 0,
							x = void 0;
						g == c.length - 1
							? ((x = c.join(' ')), (y = l))
							: ((x = c.slice(0, g + 1).join(' ')), (y = '...'));
						var S = i[x];
						if (!S) i[x] = y;
						else if (S != y) throw new Error('Inconsistent bindings for ' + x);
					}
					delete n[a];
				}
			for (var _ in i) n[_] = i[_];
			return n;
		}
		function ss(n, i, a, l) {
			i = nu(i);
			var c = i.call ? i.call(n, l) : i[n];
			if (c === !1) return 'nothing';
			if (c === '...') return 'multi';
			if (c != null && a(c)) return 'handled';
			if (i.fallthrough) {
				if (Object.prototype.toString.call(i.fallthrough) != '[object Array]')
					return ss(n, i.fallthrough, a, l);
				for (var g = 0; g < i.fallthrough.length; g++) {
					var y = ss(n, i.fallthrough[g], a, l);
					if (y) return y;
				}
			}
		}
		function jg(n) {
			var i = typeof n == 'string' ? n : $i[n.keyCode];
			return i == 'Ctrl' || i == 'Alt' || i == 'Shift' || i == 'Mod';
		}
		function Gg(n, i, a) {
			var l = n;
			return (
				i.altKey && l != 'Alt' && (n = 'Alt-' + n),
				(J ? i.metaKey : i.ctrlKey) && l != 'Ctrl' && (n = 'Ctrl-' + n),
				(J ? i.ctrlKey : i.metaKey) && l != 'Mod' && (n = 'Cmd-' + n),
				!a && i.shiftKey && l != 'Shift' && (n = 'Shift-' + n),
				n
			);
		}
		function Kg(n, i) {
			if (C && n.keyCode == 34 && n.char) return !1;
			var a = $i[n.keyCode];
			return a == null || n.altGraphKey
				? !1
				: (n.keyCode == 3 && n.code && (a = n.code), Gg(a, n, i));
		}
		function nu(n) {
			return typeof n == 'string' ? ri[n] : n;
		}
		function ls(n, i) {
			for (var a = n.doc.sel.ranges, l = [], c = 0; c < a.length; c++) {
				for (var g = i(a[c]); l.length && _e(g.from, de(l).to) <= 0; ) {
					var y = l.pop();
					if (_e(y.from, g.from) < 0) {
						g.from = y.from;
						break;
					}
				}
				l.push(g);
			}
			Dn(n, function () {
				for (var x = l.length - 1; x >= 0; x--)
					is(n.doc, '', l[x].from, l[x].to, '+delete');
				Qo(n);
			});
		}
		function Rf(n, i, a) {
			var l = Ut(n.text, i + a, a);
			return l < 0 || l > n.text.length ? null : l;
		}
		function Df(n, i, a) {
			var l = Rf(n, i.ch, a);
			return l == null ? null : new ne(i.line, l, a < 0 ? 'after' : 'before');
		}
		function zf(n, i, a, l, c) {
			if (n) {
				i.doc.direction == 'rtl' && (c = -c);
				var g = Je(a, i.doc.direction);
				if (g) {
					var y = c < 0 ? de(g) : g[0],
						x = c < 0 == (y.level == 1),
						S = x ? 'after' : 'before',
						_;
					if (y.level > 0 || i.doc.direction == 'rtl') {
						var P = Xo(i, a);
						_ = c < 0 ? a.text.length - 1 : 0;
						var D = Rr(i, P, _).top;
						(_ = It(
							function (G) {
								return Rr(i, P, G).top == D;
							},
							c < 0 == (y.level == 1) ? y.from : y.to - 1,
							_,
						)),
							S == 'before' && (_ = Rf(a, _, 1));
					} else _ = c < 0 ? y.to : y.from;
					return new ne(l, _, S);
				}
			}
			return new ne(l, c < 0 ? a.text.length : 0, c < 0 ? 'before' : 'after');
		}
		function MS(n, i, a, l) {
			var c = Je(i, n.doc.direction);
			if (!c) return Df(i, a, l);
			a.ch >= i.text.length
				? ((a.ch = i.text.length), (a.sticky = 'before'))
				: a.ch <= 0 && ((a.ch = 0), (a.sticky = 'after'));
			var g = Dt(c, a.ch, a.sticky),
				y = c[g];
			if (
				n.doc.direction == 'ltr' &&
				y.level % 2 == 0 &&
				(l > 0 ? y.to > a.ch : y.from < a.ch)
			)
				return Df(i, a, l);
			var x = function (be, Te) {
					return Rf(i, be instanceof ne ? be.ch : be, Te);
				},
				S,
				_ = function (be) {
					return n.options.lineWrapping
						? ((S = S || Xo(n, i)), Qp(n, i, S, be))
						: { begin: 0, end: i.text.length };
				},
				P = _(a.sticky == 'before' ? x(a, -1) : a.ch);
			if (n.doc.direction == 'rtl' || y.level == 1) {
				var D = (y.level == 1) == l < 0,
					G = x(a, D ? 1 : -1);
				if (
					G != null &&
					(D ? G <= y.to && G <= P.end : G >= y.from && G >= P.begin)
				) {
					var j = D ? 'before' : 'after';
					return new ne(a.line, G, j);
				}
			}
			var re = function (be, Te, we) {
					for (
						var Me = function (xt, Xt) {
							return Xt
								? new ne(a.line, x(xt, 1), 'before')
								: new ne(a.line, xt, 'after');
						};
						be >= 0 && be < c.length;
						be += Te
					) {
						var Ie = c[be],
							Re = Te > 0 == (Ie.level != 1),
							Ye = Re ? we.begin : x(we.end, -1);
						if (
							(Ie.from <= Ye && Ye < Ie.to) ||
							((Ye = Re ? Ie.from : x(Ie.to, -1)),
							we.begin <= Ye && Ye < we.end)
						)
							return Me(Ye, Re);
					}
				},
				ce = re(g + l, l, P);
			if (ce) return ce;
			var me = l > 0 ? P.end : x(P.begin, -1);
			return me != null &&
				!(l > 0 && me == i.text.length) &&
				((ce = re(l > 0 ? 0 : c.length - 1, l, _(me))), ce)
				? ce
				: null;
		}
		var gl = {
			selectAll: $g,
			singleSelection: function (n) {
				return n.setSelection(n.getCursor('anchor'), n.getCursor('head'), X);
			},
			killLine: function (n) {
				return ls(n, function (i) {
					if (i.empty()) {
						var a = Oe(n.doc, i.head.line).text.length;
						return i.head.ch == a && i.head.line < n.lastLine()
							? { from: i.head, to: ne(i.head.line + 1, 0) }
							: { from: i.head, to: ne(i.head.line, a) };
					} else return { from: i.from(), to: i.to() };
				});
			},
			deleteLine: function (n) {
				return ls(n, function (i) {
					return {
						from: ne(i.from().line, 0),
						to: Ge(n.doc, ne(i.to().line + 1, 0)),
					};
				});
			},
			delLineLeft: function (n) {
				return ls(n, function (i) {
					return { from: ne(i.from().line, 0), to: i.from() };
				});
			},
			delWrappedLineLeft: function (n) {
				return ls(n, function (i) {
					var a = n.charCoords(i.head, 'div').top + 5,
						l = n.coordsChar({ left: 0, top: a }, 'div');
					return { from: l, to: i.from() };
				});
			},
			delWrappedLineRight: function (n) {
				return ls(n, function (i) {
					var a = n.charCoords(i.head, 'div').top + 5,
						l = n.coordsChar(
							{ left: n.display.lineDiv.offsetWidth + 100, top: a },
							'div',
						);
					return { from: i.from(), to: l };
				});
			},
			undo: function (n) {
				return n.undo();
			},
			redo: function (n) {
				return n.redo();
			},
			undoSelection: function (n) {
				return n.undoSelection();
			},
			redoSelection: function (n) {
				return n.redoSelection();
			},
			goDocStart: function (n) {
				return n.extendSelection(ne(n.firstLine(), 0));
			},
			goDocEnd: function (n) {
				return n.extendSelection(ne(n.lastLine()));
			},
			goLineStart: function (n) {
				return n.extendSelectionsBy(
					function (i) {
						return Xg(n, i.head.line);
					},
					{ origin: '+move', bias: 1 },
				);
			},
			goLineStartSmart: function (n) {
				return n.extendSelectionsBy(
					function (i) {
						return Yg(n, i.head);
					},
					{ origin: '+move', bias: 1 },
				);
			},
			goLineEnd: function (n) {
				return n.extendSelectionsBy(
					function (i) {
						return NS(n, i.head.line);
					},
					{ origin: '+move', bias: -1 },
				);
			},
			goLineRight: function (n) {
				return n.extendSelectionsBy(function (i) {
					var a = n.cursorCoords(i.head, 'div').top + 5;
					return n.coordsChar(
						{ left: n.display.lineDiv.offsetWidth + 100, top: a },
						'div',
					);
				}, fe);
			},
			goLineLeft: function (n) {
				return n.extendSelectionsBy(function (i) {
					var a = n.cursorCoords(i.head, 'div').top + 5;
					return n.coordsChar({ left: 0, top: a }, 'div');
				}, fe);
			},
			goLineLeftSmart: function (n) {
				return n.extendSelectionsBy(function (i) {
					var a = n.cursorCoords(i.head, 'div').top + 5,
						l = n.coordsChar({ left: 0, top: a }, 'div');
					return l.ch < n.getLine(l.line).search(/\S/) ? Yg(n, i.head) : l;
				}, fe);
			},
			goLineUp: function (n) {
				return n.moveV(-1, 'line');
			},
			goLineDown: function (n) {
				return n.moveV(1, 'line');
			},
			goPageUp: function (n) {
				return n.moveV(-1, 'page');
			},
			goPageDown: function (n) {
				return n.moveV(1, 'page');
			},
			goCharLeft: function (n) {
				return n.moveH(-1, 'char');
			},
			goCharRight: function (n) {
				return n.moveH(1, 'char');
			},
			goColumnLeft: function (n) {
				return n.moveH(-1, 'column');
			},
			goColumnRight: function (n) {
				return n.moveH(1, 'column');
			},
			goWordLeft: function (n) {
				return n.moveH(-1, 'word');
			},
			goGroupRight: function (n) {
				return n.moveH(1, 'group');
			},
			goGroupLeft: function (n) {
				return n.moveH(-1, 'group');
			},
			goWordRight: function (n) {
				return n.moveH(1, 'word');
			},
			delCharBefore: function (n) {
				return n.deleteH(-1, 'codepoint');
			},
			delCharAfter: function (n) {
				return n.deleteH(1, 'char');
			},
			delWordBefore: function (n) {
				return n.deleteH(-1, 'word');
			},
			delWordAfter: function (n) {
				return n.deleteH(1, 'word');
			},
			delGroupBefore: function (n) {
				return n.deleteH(-1, 'group');
			},
			delGroupAfter: function (n) {
				return n.deleteH(1, 'group');
			},
			indentAuto: function (n) {
				return n.indentSelection('smart');
			},
			indentMore: function (n) {
				return n.indentSelection('add');
			},
			indentLess: function (n) {
				return n.indentSelection('subtract');
			},
			insertTab: function (n) {
				return n.replaceSelection('	');
			},
			insertSoftTab: function (n) {
				for (
					var i = [], a = n.listSelections(), l = n.options.tabSize, c = 0;
					c < a.length;
					c++
				) {
					var g = a[c].from(),
						y = he(n.getLine(g.line), g.ch, l);
					i.push(xe(l - (y % l)));
				}
				n.replaceSelections(i);
			},
			defaultTab: function (n) {
				n.somethingSelected()
					? n.indentSelection('add')
					: n.execCommand('insertTab');
			},
			transposeChars: function (n) {
				return Dn(n, function () {
					for (var i = n.listSelections(), a = [], l = 0; l < i.length; l++)
						if (i[l].empty()) {
							var c = i[l].head,
								g = Oe(n.doc, c.line).text;
							if (g) {
								if (
									(c.ch == g.length && (c = new ne(c.line, c.ch - 1)), c.ch > 0)
								)
									(c = new ne(c.line, c.ch + 1)),
										n.replaceRange(
											g.charAt(c.ch - 1) + g.charAt(c.ch - 2),
											ne(c.line, c.ch - 2),
											c,
											'+transpose',
										);
								else if (c.line > n.doc.first) {
									var y = Oe(n.doc, c.line - 1).text;
									y &&
										((c = new ne(c.line, 1)),
										n.replaceRange(
											g.charAt(0) +
												n.doc.lineSeparator() +
												y.charAt(y.length - 1),
											ne(c.line - 1, y.length - 1),
											c,
											'+transpose',
										));
								}
							}
							a.push(new dt(c, c));
						}
					n.setSelections(a);
				});
			},
			newlineAndIndent: function (n) {
				return Dn(n, function () {
					for (var i = n.listSelections(), a = i.length - 1; a >= 0; a--)
						n.replaceRange(
							n.doc.lineSeparator(),
							i[a].anchor,
							i[a].head,
							'+input',
						);
					i = n.listSelections();
					for (var l = 0; l < i.length; l++)
						n.indentLine(i[l].from().line, null, !0);
					Qo(n);
				});
			},
			openLine: function (n) {
				return n.replaceSelection(
					`
`,
					'start',
				);
			},
			toggleOverwrite: function (n) {
				return n.toggleOverwrite();
			},
		};
		function Xg(n, i) {
			var a = Oe(n.doc, i),
				l = hr(a);
			return l != a && (i = T(l)), zf(!0, n, l, i, 1);
		}
		function NS(n, i) {
			var a = Oe(n.doc, i),
				l = p1(a);
			return l != a && (i = T(l)), zf(!0, n, a, i, -1);
		}
		function Yg(n, i) {
			var a = Xg(n, i.line),
				l = Oe(n.doc, a.line),
				c = Je(l, n.doc.direction);
			if (!c || c[0].level == 0) {
				var g = Math.max(a.ch, l.text.search(/\S/)),
					y = i.line == a.line && i.ch <= g && i.ch;
				return ne(a.line, y ? 0 : g, a.sticky);
			}
			return a;
		}
		function ru(n, i, a) {
			if (typeof i == 'string' && ((i = gl[i]), !i)) return !1;
			n.display.input.ensurePolled();
			var l = n.display.shift,
				c = !1;
			try {
				n.isReadOnly() && (n.state.suppressEdits = !0),
					a && (n.display.shift = !1),
					(c = i(n) != q);
			} finally {
				(n.display.shift = l), (n.state.suppressEdits = !1);
			}
			return c;
		}
		function $S(n, i, a) {
			for (var l = 0; l < n.state.keyMaps.length; l++) {
				var c = ss(i, n.state.keyMaps[l], a, n);
				if (c) return c;
			}
			return (
				(n.options.extraKeys && ss(i, n.options.extraKeys, a, n)) ||
				ss(i, n.options.keyMap, a, n)
			);
		}
		var PS = new $e();
		function ml(n, i, a, l) {
			var c = n.state.keySeq;
			if (c) {
				if (jg(i)) return 'handled';
				if (
					(/\'$/.test(i)
						? (n.state.keySeq = null)
						: PS.set(50, function () {
								n.state.keySeq == c &&
									((n.state.keySeq = null), n.display.input.reset());
							}),
					Zg(n, c + ' ' + i, a, l))
				)
					return !0;
			}
			return Zg(n, i, a, l);
		}
		function Zg(n, i, a, l) {
			var c = $S(n, i, l);
			return (
				c == 'multi' && (n.state.keySeq = i),
				c == 'handled' && jt(n, 'keyHandled', n, i, a),
				(c == 'handled' || c == 'multi') && (sn(a), bf(n)),
				!!c
			);
		}
		function Jg(n, i) {
			var a = Kg(i, !0);
			return a
				? i.shiftKey && !n.state.keySeq
					? ml(n, 'Shift-' + a, i, function (l) {
							return ru(n, l, !0);
						}) ||
						ml(n, a, i, function (l) {
							if (typeof l == 'string' ? /^go[A-Z]/.test(l) : l.motion)
								return ru(n, l);
						})
					: ml(n, a, i, function (l) {
							return ru(n, l);
						})
				: !1;
		}
		function OS(n, i, a) {
			return ml(n, "'" + a + "'", i, function (l) {
				return ru(n, l, !0);
			});
		}
		var If = null;
		function Qg(n) {
			var i = this;
			if (
				!(n.target && n.target != i.display.input.getField()) &&
				((i.curOp.focus = ye(et(i))), !Nt(i, n))
			) {
				h && p < 11 && n.keyCode == 27 && (n.returnValue = !1);
				var a = n.keyCode;
				i.display.shift = a == 16 || n.shiftKey;
				var l = Jg(i, n);
				C &&
					((If = l ? a : null),
					!l &&
						a == 88 &&
						!Na &&
						(O ? n.metaKey : n.ctrlKey) &&
						i.replaceSelection('', null, 'cut')),
					s &&
						!O &&
						!l &&
						a == 46 &&
						n.shiftKey &&
						!n.ctrlKey &&
						document.execCommand &&
						document.execCommand('cut'),
					a == 18 &&
						!/\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) &&
						RS(i);
			}
		}
		function RS(n) {
			var i = n.display.lineDiv;
			Ne(i, 'CodeMirror-crosshair');
			function a(l) {
				(l.keyCode == 18 || !l.altKey) &&
					(Y(i, 'CodeMirror-crosshair'),
					on(document, 'keyup', a),
					on(document, 'mouseover', a));
			}
			ze(document, 'keyup', a), ze(document, 'mouseover', a);
		}
		function em(n) {
			n.keyCode == 16 && (this.doc.sel.shift = !1), Nt(this, n);
		}
		function tm(n) {
			var i = this;
			if (
				!(n.target && n.target != i.display.input.getField()) &&
				!(
					ti(i.display, n) ||
					Nt(i, n) ||
					(n.ctrlKey && !n.altKey) ||
					(O && n.metaKey)
				)
			) {
				var a = n.keyCode,
					l = n.charCode;
				if (C && a == If) {
					(If = null), sn(n);
					return;
				}
				if (!(C && (!n.which || n.which < 10) && Jg(i, n))) {
					var c = String.fromCharCode(l ?? a);
					c != '\b' && (OS(i, n, c) || i.display.input.onKeyPress(n));
				}
			}
		}
		var DS = 400,
			Ff = function (n, i, a) {
				(this.time = n), (this.pos = i), (this.button = a);
			};
		Ff.prototype.compare = function (n, i, a) {
			return this.time + DS > n && _e(i, this.pos) == 0 && a == this.button;
		};
		var vl, yl;
		function zS(n, i) {
			var a = +new Date();
			return yl && yl.compare(a, n, i)
				? ((vl = yl = null), 'triple')
				: vl && vl.compare(a, n, i)
					? ((yl = new Ff(a, n, i)), (vl = null), 'double')
					: ((vl = new Ff(a, n, i)), (yl = null), 'single');
		}
		function nm(n) {
			var i = this,
				a = i.display;
			if (!(Nt(i, n) || (a.activeTouch && a.input.supportsTouch()))) {
				if ((a.input.ensurePolled(), (a.shift = n.shiftKey), ti(a, n))) {
					m ||
						((a.scroller.draggable = !1),
						setTimeout(function () {
							return (a.scroller.draggable = !0);
						}, 100));
					return;
				}
				if (!Hf(i, n)) {
					var l = uo(i, n),
						c = ur(n),
						g = l ? zS(l, c) : 'single';
					Le(i).focus(),
						c == 1 && i.state.selectingText && i.state.selectingText(n),
						!(l && IS(i, c, l, g, n)) &&
							(c == 1
								? l
									? HS(i, l, g, n)
									: Ws(n) == a.scroller && sn(n)
								: c == 2
									? (l && Za(i.doc, l),
										setTimeout(function () {
											return a.input.focus();
										}, 20))
									: c == 3 && (K ? i.display.input.onContextMenu(n) : wf(i)));
				}
			}
		}
		function IS(n, i, a, l, c) {
			var g = 'Click';
			return (
				l == 'double'
					? (g = 'Double' + g)
					: l == 'triple' && (g = 'Triple' + g),
				(g = (i == 1 ? 'Left' : i == 2 ? 'Middle' : 'Right') + g),
				ml(n, Gg(g, c), c, function (y) {
					if ((typeof y == 'string' && (y = gl[y]), !y)) return !1;
					var x = !1;
					try {
						n.isReadOnly() && (n.state.suppressEdits = !0), (x = y(n, a) != q);
					} finally {
						n.state.suppressEdits = !1;
					}
					return x;
				})
			);
		}
		function FS(n, i, a) {
			var l = n.getOption('configureMouse'),
				c = l ? l(n, i, a) : {};
			if (c.unit == null) {
				var g = U ? a.shiftKey && a.metaKey : a.altKey;
				c.unit = g
					? 'rectangle'
					: i == 'single'
						? 'char'
						: i == 'double'
							? 'word'
							: 'line';
			}
			return (
				(c.extend == null || n.doc.extend) &&
					(c.extend = n.doc.extend || a.shiftKey),
				c.addNew == null && (c.addNew = O ? a.metaKey : a.ctrlKey),
				c.moveOnDrag == null && (c.moveOnDrag = !(O ? a.altKey : a.ctrlKey)),
				c
			);
		}
		function HS(n, i, a, l) {
			h ? setTimeout(Z(rg, n), 0) : (n.curOp.focus = ye(et(n)));
			var c = FS(n, a, l),
				g = n.doc.sel,
				y;
			n.options.dragDrop &&
			Zc &&
			!n.isReadOnly() &&
			a == 'single' &&
			(y = g.contains(i)) > -1 &&
			(_e((y = g.ranges[y]).from(), i) < 0 || i.xRel > 0) &&
			(_e(y.to(), i) > 0 || i.xRel < 0)
				? qS(n, l, i, c)
				: BS(n, l, i, c);
		}
		function qS(n, i, a, l) {
			var c = n.display,
				g = !1,
				y = Gt(n, function (_) {
					m && (c.scroller.draggable = !1),
						(n.state.draggingText = !1),
						n.state.delayingBlurEvent &&
							(n.hasFocus() ? (n.state.delayingBlurEvent = !1) : wf(n)),
						on(c.wrapper.ownerDocument, 'mouseup', y),
						on(c.wrapper.ownerDocument, 'mousemove', x),
						on(c.scroller, 'dragstart', S),
						on(c.scroller, 'drop', y),
						g ||
							(sn(_),
							l.addNew || Za(n.doc, a, null, null, l.extend),
							(m && !M) || (h && p == 9)
								? setTimeout(function () {
										c.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
											c.input.focus();
									}, 20)
								: c.input.focus());
				}),
				x = function (_) {
					g =
						g ||
						Math.abs(i.clientX - _.clientX) + Math.abs(i.clientY - _.clientY) >=
							10;
				},
				S = function () {
					return (g = !0);
				};
			m && (c.scroller.draggable = !0),
				(n.state.draggingText = y),
				(y.copy = !l.moveOnDrag),
				ze(c.wrapper.ownerDocument, 'mouseup', y),
				ze(c.wrapper.ownerDocument, 'mousemove', x),
				ze(c.scroller, 'dragstart', S),
				ze(c.scroller, 'drop', y),
				(n.state.delayingBlurEvent = !0),
				setTimeout(function () {
					return c.input.focus();
				}, 20),
				c.scroller.dragDrop && c.scroller.dragDrop();
		}
		function rm(n, i, a) {
			if (a == 'char') return new dt(i, i);
			if (a == 'word') return n.findWordAt(i);
			if (a == 'line')
				return new dt(ne(i.line, 0), Ge(n.doc, ne(i.line + 1, 0)));
			var l = a(n, i);
			return new dt(l.from, l.to);
		}
		function BS(n, i, a, l) {
			h && wf(n);
			var c = n.display,
				g = n.doc;
			sn(i);
			var y,
				x,
				S = g.sel,
				_ = S.ranges;
			if (
				(l.addNew && !l.extend
					? ((x = g.sel.contains(a)), x > -1 ? (y = _[x]) : (y = new dt(a, a)))
					: ((y = g.sel.primary()), (x = g.sel.primIndex)),
				l.unit == 'rectangle')
			)
				l.addNew || (y = new dt(a, a)), (a = uo(n, i, !0, !0)), (x = -1);
			else {
				var P = rm(n, a, l.unit);
				l.extend ? (y = Pf(y, P.anchor, P.head, l.extend)) : (y = P);
			}
			l.addNew
				? x == -1
					? ((x = _.length),
						ln(g, gr(n, _.concat([y]), x), { scroll: !1, origin: '*mouse' }))
					: _.length > 1 && _[x].empty() && l.unit == 'char' && !l.extend
						? (ln(g, gr(n, _.slice(0, x).concat(_.slice(x + 1)), 0), {
								scroll: !1,
								origin: '*mouse',
							}),
							(S = g.sel))
						: Of(g, x, y, le)
				: ((x = 0), ln(g, new Gn([y], 0), le), (S = g.sel));
			var D = a;
			function G(we) {
				if (_e(D, we) != 0)
					if (((D = we), l.unit == 'rectangle')) {
						for (
							var Me = [],
								Ie = n.options.tabSize,
								Re = he(Oe(g, a.line).text, a.ch, Ie),
								Ye = he(Oe(g, we.line).text, we.ch, Ie),
								xt = Math.min(Re, Ye),
								Xt = Math.max(Re, Ye),
								Lt = Math.min(a.line, we.line),
								zn = Math.min(n.lastLine(), Math.max(a.line, we.line));
							Lt <= zn;
							Lt++
						) {
							var Sn = Oe(g, Lt).text,
								Ft = ue(Sn, xt, Ie);
							xt == Xt
								? Me.push(new dt(ne(Lt, Ft), ne(Lt, Ft)))
								: Sn.length > Ft &&
									Me.push(new dt(ne(Lt, Ft), ne(Lt, ue(Sn, Xt, Ie))));
						}
						Me.length || Me.push(new dt(a, a)),
							ln(g, gr(n, S.ranges.slice(0, x).concat(Me), x), {
								origin: '*mouse',
								scroll: !1,
							}),
							n.scrollIntoView(we);
					} else {
						var _n = y,
							tn = rm(n, we, l.unit),
							Wt = _n.anchor,
							Ht;
						_e(tn.anchor, Wt) > 0
							? ((Ht = tn.head), (Wt = jo(_n.from(), tn.anchor)))
							: ((Ht = tn.anchor), (Wt = bn(_n.to(), tn.head)));
						var Pt = S.ranges.slice(0);
						(Pt[x] = WS(n, new dt(Ge(g, Wt), Ht))), ln(g, gr(n, Pt, x), le);
					}
			}
			var j = c.wrapper.getBoundingClientRect(),
				re = 0;
			function ce(we) {
				var Me = ++re,
					Ie = uo(n, we, !0, l.unit == 'rectangle');
				if (Ie)
					if (_e(Ie, D) != 0) {
						(n.curOp.focus = ye(et(n))), G(Ie);
						var Re = Va(c, g);
						(Ie.line >= Re.to || Ie.line < Re.from) &&
							setTimeout(
								Gt(n, function () {
									re == Me && ce(we);
								}),
								150,
							);
					} else {
						var Ye = we.clientY < j.top ? -20 : we.clientY > j.bottom ? 20 : 0;
						Ye &&
							setTimeout(
								Gt(n, function () {
									re == Me && ((c.scroller.scrollTop += Ye), ce(we));
								}),
								50,
							);
					}
			}
			function me(we) {
				(n.state.selectingText = !1),
					(re = 1 / 0),
					we && (sn(we), c.input.focus()),
					on(c.wrapper.ownerDocument, 'mousemove', be),
					on(c.wrapper.ownerDocument, 'mouseup', Te),
					(g.history.lastSelOrigin = null);
			}
			var be = Gt(n, function (we) {
					we.buttons === 0 || !ur(we) ? me(we) : ce(we);
				}),
				Te = Gt(n, me);
			(n.state.selectingText = Te),
				ze(c.wrapper.ownerDocument, 'mousemove', be),
				ze(c.wrapper.ownerDocument, 'mouseup', Te);
		}
		function WS(n, i) {
			var a = i.anchor,
				l = i.head,
				c = Oe(n.doc, a.line);
			if (_e(a, l) == 0 && a.sticky == l.sticky) return i;
			var g = Je(c);
			if (!g) return i;
			var y = Dt(g, a.ch, a.sticky),
				x = g[y];
			if (x.from != a.ch && x.to != a.ch) return i;
			var S = y + ((x.from == a.ch) == (x.level != 1) ? 0 : 1);
			if (S == 0 || S == g.length) return i;
			var _;
			if (l.line != a.line)
				_ = (l.line - a.line) * (n.doc.direction == 'ltr' ? 1 : -1) > 0;
			else {
				var P = Dt(g, l.ch, l.sticky),
					D = P - y || (l.ch - a.ch) * (x.level == 1 ? -1 : 1);
				P == S - 1 || P == S ? (_ = D < 0) : (_ = D > 0);
			}
			var G = g[S + (_ ? -1 : 0)],
				j = _ == (G.level == 1),
				re = j ? G.from : G.to,
				ce = j ? 'after' : 'before';
			return a.ch == re && a.sticky == ce
				? i
				: new dt(new ne(a.line, re, ce), l);
		}
		function im(n, i, a, l) {
			var c, g;
			if (i.touches) (c = i.touches[0].clientX), (g = i.touches[0].clientY);
			else
				try {
					(c = i.clientX), (g = i.clientY);
				} catch {
					return !1;
				}
			if (c >= Math.floor(n.display.gutters.getBoundingClientRect().right))
				return !1;
			l && sn(i);
			var y = n.display,
				x = y.lineDiv.getBoundingClientRect();
			if (g > x.bottom || !Rn(n, a)) return yn(i);
			g -= x.top - y.viewOffset;
			for (var S = 0; S < n.display.gutterSpecs.length; ++S) {
				var _ = y.gutters.childNodes[S];
				if (_ && _.getBoundingClientRect().right >= c) {
					var P = R(n.doc, g),
						D = n.display.gutterSpecs[S];
					return Mt(n, a, n, P, D.className, i), yn(i);
				}
			}
		}
		function Hf(n, i) {
			return im(n, i, 'gutterClick', !0);
		}
		function om(n, i) {
			ti(n.display, i) ||
				US(n, i) ||
				Nt(n, i, 'contextmenu') ||
				K ||
				n.display.input.onContextMenu(i);
		}
		function US(n, i) {
			return Rn(n, 'gutterContextMenu')
				? im(n, i, 'gutterContextMenu', !1)
				: !1;
		}
		function sm(n) {
			(n.display.wrapper.className =
				n.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
				n.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
				Js(n);
		}
		var as = {
				toString: function () {
					return 'CodeMirror.Init';
				},
			},
			lm = {},
			iu = {};
		function VS(n) {
			var i = n.optionHandlers;
			function a(l, c, g, y) {
				(n.defaults[l] = c),
					g &&
						(i[l] = y
							? function (x, S, _) {
									_ != as && g(x, S, _);
								}
							: g);
			}
			(n.defineOption = a),
				(n.Init = as),
				a(
					'value',
					'',
					function (l, c) {
						return l.setValue(c);
					},
					!0,
				),
				a(
					'mode',
					null,
					function (l, c) {
						(l.doc.modeOption = c), Mf(l);
					},
					!0,
				),
				a('indentUnit', 2, Mf, !0),
				a('indentWithTabs', !1),
				a('smartIndent', !0),
				a(
					'tabSize',
					4,
					function (l) {
						sl(l), Js(l), wn(l);
					},
					!0,
				),
				a('lineSeparator', null, function (l, c) {
					if (((l.doc.lineSep = c), !!c)) {
						var g = [],
							y = l.doc.first;
						l.doc.iter(function (S) {
							for (var _ = 0; ; ) {
								var P = S.text.indexOf(c, _);
								if (P == -1) break;
								(_ = P + c.length), g.push(ne(y, P));
							}
							y++;
						});
						for (var x = g.length - 1; x >= 0; x--)
							is(l.doc, c, g[x], ne(g[x].line, g[x].ch + c.length));
					}
				}),
				a(
					'specialChars',
					/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
					function (l, c, g) {
						(l.state.specialChars = new RegExp(
							c.source + (c.test('	') ? '' : '|	'),
							'g',
						)),
							g != as && l.refresh();
					},
				),
				a(
					'specialCharPlaceholder',
					w1,
					function (l) {
						return l.refresh();
					},
					!0,
				),
				a('electricChars', !0),
				a(
					'inputStyle',
					L ? 'contenteditable' : 'textarea',
					function () {
						throw new Error(
							'inputStyle can not (yet) be changed in a running editor',
						);
					},
					!0,
				),
				a(
					'spellcheck',
					!1,
					function (l, c) {
						return (l.getInputField().spellcheck = c);
					},
					!0,
				),
				a(
					'autocorrect',
					!1,
					function (l, c) {
						return (l.getInputField().autocorrect = c);
					},
					!0,
				),
				a(
					'autocapitalize',
					!1,
					function (l, c) {
						return (l.getInputField().autocapitalize = c);
					},
					!0,
				),
				a('rtlMoveVisually', !B),
				a('wholeLineUpdateBefore', !0),
				a(
					'theme',
					'default',
					function (l) {
						sm(l), ol(l);
					},
					!0,
				),
				a('keyMap', 'default', function (l, c, g) {
					var y = nu(c),
						x = g != as && nu(g);
					x && x.detach && x.detach(l, y), y.attach && y.attach(l, x || null);
				}),
				a('extraKeys', null),
				a('configureMouse', null),
				a('lineWrapping', !1, GS, !0),
				a(
					'gutters',
					[],
					function (l, c) {
						(l.display.gutterSpecs = Lf(c, l.options.lineNumbers)), ol(l);
					},
					!0,
				),
				a(
					'fixedGutter',
					!0,
					function (l, c) {
						(l.display.gutters.style.left = c ? mf(l.display) + 'px' : '0'),
							l.refresh();
					},
					!0,
				),
				a(
					'coverGutterNextToScrollbar',
					!1,
					function (l) {
						return es(l);
					},
					!0,
				),
				a(
					'scrollbarStyle',
					'native',
					function (l) {
						ug(l),
							es(l),
							l.display.scrollbars.setScrollTop(l.doc.scrollTop),
							l.display.scrollbars.setScrollLeft(l.doc.scrollLeft);
					},
					!0,
				),
				a(
					'lineNumbers',
					!1,
					function (l, c) {
						(l.display.gutterSpecs = Lf(l.options.gutters, c)), ol(l);
					},
					!0,
				),
				a('firstLineNumber', 1, ol, !0),
				a(
					'lineNumberFormatter',
					function (l) {
						return l;
					},
					ol,
					!0,
				),
				a('showCursorWhenSelecting', !1, Qs, !0),
				a('resetSelectionOnContextMenu', !0),
				a('lineWiseCopyCut', !0),
				a('pasteLinesPerSelection', !0),
				a('selectionsMayTouch', !1),
				a('readOnly', !1, function (l, c) {
					c == 'nocursor' && (Jo(l), l.display.input.blur()),
						l.display.input.readOnlyChanged(c);
				}),
				a('screenReaderLabel', null, function (l, c) {
					(c = c === '' ? null : c),
						l.display.input.screenReaderLabelChanged(c);
				}),
				a(
					'disableInput',
					!1,
					function (l, c) {
						c || l.display.input.reset();
					},
					!0,
				),
				a('dragDrop', !0, jS),
				a('allowDropFileTypes', null),
				a('cursorBlinkRate', 530),
				a('cursorScrollMargin', 0),
				a('cursorHeight', 1, Qs, !0),
				a('singleCursorHeightPerLine', !0, Qs, !0),
				a('workTime', 100),
				a('workDelay', 100),
				a('flattenSpans', !0, sl, !0),
				a('addModeClass', !1, sl, !0),
				a('pollInterval', 100),
				a('undoDepth', 200, function (l, c) {
					return (l.doc.history.undoDepth = c);
				}),
				a('historyEventDelay', 1250),
				a(
					'viewportMargin',
					10,
					function (l) {
						return l.refresh();
					},
					!0,
				),
				a('maxHighlightLength', 1e4, sl, !0),
				a('moveInputWithCursor', !0, function (l, c) {
					c || l.display.input.resetPosition();
				}),
				a('tabindex', null, function (l, c) {
					return (l.display.input.getField().tabIndex = c || '');
				}),
				a('autofocus', null),
				a(
					'direction',
					'ltr',
					function (l, c) {
						return l.doc.setDirection(c);
					},
					!0,
				),
				a('phrases', null);
		}
		function jS(n, i, a) {
			var l = a && a != as;
			if (!i != !l) {
				var c = n.display.dragFunctions,
					g = i ? ze : on;
				g(n.display.scroller, 'dragstart', c.start),
					g(n.display.scroller, 'dragenter', c.enter),
					g(n.display.scroller, 'dragover', c.over),
					g(n.display.scroller, 'dragleave', c.leave),
					g(n.display.scroller, 'drop', c.drop);
			}
		}
		function GS(n) {
			n.options.lineWrapping
				? (Ne(n.display.wrapper, 'CodeMirror-wrap'),
					(n.display.sizer.style.minWidth = ''),
					(n.display.sizerWidth = null))
				: (Y(n.display.wrapper, 'CodeMirror-wrap'), sf(n)),
				vf(n),
				wn(n),
				Js(n),
				setTimeout(function () {
					return es(n);
				}, 100);
		}
		function Tt(n, i) {
			var a = this;
			if (!(this instanceof Tt)) return new Tt(n, i);
			(this.options = i = i ? ae(i) : {}), ae(lm, i, !1);
			var l = i.value;
			typeof l == 'string'
				? (l = new xn(l, i.mode, null, i.lineSeparator, i.direction))
				: i.mode && (l.modeOption = i.mode),
				(this.doc = l);
			var c = new Tt.inputStyles[i.inputStyle](this),
				g = (this.display = new sS(n, l, c, i));
			(g.wrapper.CodeMirror = this),
				sm(this),
				i.lineWrapping &&
					(this.display.wrapper.className += ' CodeMirror-wrap'),
				ug(this),
				(this.state = {
					keyMaps: [],
					overlays: [],
					modeGen: 0,
					overwrite: !1,
					delayingBlurEvent: !1,
					focused: !1,
					suppressEdits: !1,
					pasteIncoming: -1,
					cutIncoming: -1,
					selectingText: !1,
					draggingText: !1,
					highlight: new $e(),
					keySeq: null,
					specialChars: null,
				}),
				i.autofocus && !L && g.input.focus(),
				h &&
					p < 11 &&
					setTimeout(function () {
						return a.display.input.reset(!0);
					}, 20),
				KS(this),
				TS(),
				po(this),
				(this.curOp.forceUpdate = !0),
				bg(this, l),
				(i.autofocus && !L) || this.hasFocus()
					? setTimeout(function () {
							a.hasFocus() && !a.state.focused && xf(a);
						}, 20)
					: Jo(this);
			for (var y in iu) iu.hasOwnProperty(y) && iu[y](this, i[y], as);
			dg(this), i.finishInit && i.finishInit(this);
			for (var x = 0; x < qf.length; ++x) qf[x](this);
			go(this),
				m &&
					i.lineWrapping &&
					getComputedStyle(g.lineDiv).textRendering == 'optimizelegibility' &&
					(g.lineDiv.style.textRendering = 'auto');
		}
		(Tt.defaults = lm), (Tt.optionHandlers = iu);
		function KS(n) {
			var i = n.display;
			ze(i.scroller, 'mousedown', Gt(n, nm)),
				h && p < 11
					? ze(
							i.scroller,
							'dblclick',
							Gt(n, function (S) {
								if (!Nt(n, S)) {
									var _ = uo(n, S);
									if (!(!_ || Hf(n, S) || ti(n.display, S))) {
										sn(S);
										var P = n.findWordAt(_);
										Za(n.doc, P.anchor, P.head);
									}
								}
							}),
						)
					: ze(i.scroller, 'dblclick', function (S) {
							return Nt(n, S) || sn(S);
						}),
				ze(i.scroller, 'contextmenu', function (S) {
					return om(n, S);
				}),
				ze(i.input.getField(), 'contextmenu', function (S) {
					i.scroller.contains(S.target) || om(n, S);
				});
			var a,
				l = { end: 0 };
			function c() {
				i.activeTouch &&
					((a = setTimeout(function () {
						return (i.activeTouch = null);
					}, 1e3)),
					(l = i.activeTouch),
					(l.end = +new Date()));
			}
			function g(S) {
				if (S.touches.length != 1) return !1;
				var _ = S.touches[0];
				return _.radiusX <= 1 && _.radiusY <= 1;
			}
			function y(S, _) {
				if (_.left == null) return !0;
				var P = _.left - S.left,
					D = _.top - S.top;
				return P * P + D * D > 20 * 20;
			}
			ze(i.scroller, 'touchstart', function (S) {
				if (!Nt(n, S) && !g(S) && !Hf(n, S)) {
					i.input.ensurePolled(), clearTimeout(a);
					var _ = +new Date();
					(i.activeTouch = {
						start: _,
						moved: !1,
						prev: _ - l.end <= 300 ? l : null,
					}),
						S.touches.length == 1 &&
							((i.activeTouch.left = S.touches[0].pageX),
							(i.activeTouch.top = S.touches[0].pageY));
				}
			}),
				ze(i.scroller, 'touchmove', function () {
					i.activeTouch && (i.activeTouch.moved = !0);
				}),
				ze(i.scroller, 'touchend', function (S) {
					var _ = i.activeTouch;
					if (
						_ &&
						!ti(i, S) &&
						_.left != null &&
						!_.moved &&
						new Date() - _.start < 300
					) {
						var P = n.coordsChar(i.activeTouch, 'page'),
							D;
						!_.prev || y(_, _.prev)
							? (D = new dt(P, P))
							: !_.prev.prev || y(_, _.prev.prev)
								? (D = n.findWordAt(P))
								: (D = new dt(ne(P.line, 0), Ge(n.doc, ne(P.line + 1, 0)))),
							n.setSelection(D.anchor, D.head),
							n.focus(),
							sn(S);
					}
					c();
				}),
				ze(i.scroller, 'touchcancel', c),
				ze(i.scroller, 'scroll', function () {
					i.scroller.clientHeight &&
						(tl(n, i.scroller.scrollTop),
						fo(n, i.scroller.scrollLeft, !0),
						Mt(n, 'scroll', n));
				}),
				ze(i.scroller, 'mousewheel', function (S) {
					return gg(n, S);
				}),
				ze(i.scroller, 'DOMMouseScroll', function (S) {
					return gg(n, S);
				}),
				ze(i.wrapper, 'scroll', function () {
					return (i.wrapper.scrollTop = i.wrapper.scrollLeft = 0);
				}),
				(i.dragFunctions = {
					enter: function (S) {
						Nt(n, S) || xi(S);
					},
					over: function (S) {
						Nt(n, S) || (kS(n, S), xi(S));
					},
					start: function (S) {
						return _S(n, S);
					},
					drop: Gt(n, SS),
					leave: function (S) {
						Nt(n, S) || Wg(n);
					},
				});
			var x = i.input.getField();
			ze(x, 'keyup', function (S) {
				return em.call(n, S);
			}),
				ze(x, 'keydown', Gt(n, Qg)),
				ze(x, 'keypress', Gt(n, tm)),
				ze(x, 'focus', function (S) {
					return xf(n, S);
				}),
				ze(x, 'blur', function (S) {
					return Jo(n, S);
				});
		}
		var qf = [];
		Tt.defineInitHook = function (n) {
			return qf.push(n);
		};
		function bl(n, i, a, l) {
			var c = n.doc,
				g;
			a == null && (a = 'add'),
				a == 'smart' && (c.mode.indent ? (g = Gs(n, i).state) : (a = 'prev'));
			var y = n.options.tabSize,
				x = Oe(c, i),
				S = he(x.text, null, y);
			x.stateAfter && (x.stateAfter = null);
			var _ = x.text.match(/^\s*/)[0],
				P;
			if (!l && !/\S/.test(x.text)) (P = 0), (a = 'not');
			else if (
				a == 'smart' &&
				((P = c.mode.indent(g, x.text.slice(_.length), x.text)),
				P == q || P > 150)
			) {
				if (!l) return;
				a = 'prev';
			}
			a == 'prev'
				? i > c.first
					? (P = he(Oe(c, i - 1).text, null, y))
					: (P = 0)
				: a == 'add'
					? (P = S + n.options.indentUnit)
					: a == 'subtract'
						? (P = S - n.options.indentUnit)
						: typeof a == 'number' && (P = S + a),
				(P = Math.max(0, P));
			var D = '',
				G = 0;
			if (n.options.indentWithTabs)
				for (var j = Math.floor(P / y); j; --j) (G += y), (D += '	');
			if ((G < P && (D += xe(P - G)), D != _))
				return (
					is(c, D, ne(i, 0), ne(i, _.length), '+input'),
					(x.stateAfter = null),
					!0
				);
			for (var re = 0; re < c.sel.ranges.length; re++) {
				var ce = c.sel.ranges[re];
				if (ce.head.line == i && ce.head.ch < _.length) {
					var me = ne(i, _.length);
					Of(c, re, new dt(me, me));
					break;
				}
			}
		}
		var mr = null;
		function ou(n) {
			mr = n;
		}
		function Bf(n, i, a, l, c) {
			var g = n.doc;
			(n.display.shift = !1), l || (l = g.sel);
			var y = +new Date() - 200,
				x = c == 'paste' || n.state.pasteIncoming > y,
				S = rr(i),
				_ = null;
			if (x && l.ranges.length > 1)
				if (
					mr &&
					mr.text.join(`
`) == i
				) {
					if (l.ranges.length % mr.text.length == 0) {
						_ = [];
						for (var P = 0; P < mr.text.length; P++)
							_.push(g.splitLines(mr.text[P]));
					}
				} else
					S.length == l.ranges.length &&
						n.options.pasteLinesPerSelection &&
						(_ = pe(S, function (be) {
							return [be];
						}));
			for (var D = n.curOp.updateInput, G = l.ranges.length - 1; G >= 0; G--) {
				var j = l.ranges[G],
					re = j.from(),
					ce = j.to();
				j.empty() &&
					(a && a > 0
						? (re = ne(re.line, re.ch - a))
						: n.state.overwrite && !x
							? (ce = ne(
									ce.line,
									Math.min(Oe(g, ce.line).text.length, ce.ch + de(S).length),
								))
							: x &&
								mr &&
								mr.lineWise &&
								mr.text.join(`
`) ==
									S.join(`
`) &&
								(re = ce = ne(re.line, 0)));
				var me = {
					from: re,
					to: ce,
					text: _ ? _[G % _.length] : S,
					origin:
						c || (x ? 'paste' : n.state.cutIncoming > y ? 'cut' : '+input'),
				};
				rs(n.doc, me), jt(n, 'inputRead', n, me);
			}
			i && !x && um(n, i),
				Qo(n),
				n.curOp.updateInput < 2 && (n.curOp.updateInput = D),
				(n.curOp.typing = !0),
				(n.state.pasteIncoming = n.state.cutIncoming = -1);
		}
		function am(n, i) {
			var a = n.clipboardData && n.clipboardData.getData('Text');
			if (a)
				return (
					n.preventDefault(),
					!i.isReadOnly() &&
						!i.options.disableInput &&
						i.hasFocus() &&
						Dn(i, function () {
							return Bf(i, a, 0, null, 'paste');
						}),
					!0
				);
		}
		function um(n, i) {
			if (!(!n.options.electricChars || !n.options.smartIndent))
				for (var a = n.doc.sel, l = a.ranges.length - 1; l >= 0; l--) {
					var c = a.ranges[l];
					if (
						!(
							c.head.ch > 100 ||
							(l && a.ranges[l - 1].head.line == c.head.line)
						)
					) {
						var g = n.getModeAt(c.head),
							y = !1;
						if (g.electricChars) {
							for (var x = 0; x < g.electricChars.length; x++)
								if (i.indexOf(g.electricChars.charAt(x)) > -1) {
									y = bl(n, c.head.line, 'smart');
									break;
								}
						} else
							g.electricInput &&
								g.electricInput.test(
									Oe(n.doc, c.head.line).text.slice(0, c.head.ch),
								) &&
								(y = bl(n, c.head.line, 'smart'));
						y && jt(n, 'electricInput', n, c.head.line);
					}
				}
		}
		function cm(n) {
			for (var i = [], a = [], l = 0; l < n.doc.sel.ranges.length; l++) {
				var c = n.doc.sel.ranges[l].head.line,
					g = { anchor: ne(c, 0), head: ne(c + 1, 0) };
				a.push(g), i.push(n.getRange(g.anchor, g.head));
			}
			return { text: i, ranges: a };
		}
		function Wf(n, i, a, l) {
			n.setAttribute('autocorrect', a ? 'on' : 'off'),
				n.setAttribute('autocapitalize', l ? 'on' : 'off'),
				n.setAttribute('spellcheck', !!i);
		}
		function fm() {
			var n = k(
					'textarea',
					null,
					null,
					'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none',
				),
				i = k(
					'div',
					[n],
					null,
					'overflow: hidden; position: relative; width: 3px; height: 0px;',
				);
			return (
				m ? (n.style.width = '1000px') : n.setAttribute('wrap', 'off'),
				A && (n.style.border = '1px solid black'),
				i
			);
		}
		function XS(n) {
			var i = n.optionHandlers,
				a = (n.helpers = {});
			(n.prototype = {
				constructor: n,
				focus: function () {
					Le(this).focus(), this.display.input.focus();
				},
				setOption: function (l, c) {
					var g = this.options,
						y = g[l];
					(g[l] == c && l != 'mode') ||
						((g[l] = c),
						i.hasOwnProperty(l) && Gt(this, i[l])(this, c, y),
						Mt(this, 'optionChange', this, l));
				},
				getOption: function (l) {
					return this.options[l];
				},
				getDoc: function () {
					return this.doc;
				},
				addKeyMap: function (l, c) {
					this.state.keyMaps[c ? 'push' : 'unshift'](nu(l));
				},
				removeKeyMap: function (l) {
					for (var c = this.state.keyMaps, g = 0; g < c.length; ++g)
						if (c[g] == l || c[g].name == l) return c.splice(g, 1), !0;
				},
				addOverlay: fn(function (l, c) {
					var g = l.token ? l : n.getMode(this.options, l);
					if (g.startState) throw new Error('Overlays may not be stateful.');
					Be(
						this.state.overlays,
						{
							mode: g,
							modeSpec: l,
							opaque: c && c.opaque,
							priority: (c && c.priority) || 0,
						},
						function (y) {
							return y.priority;
						},
					),
						this.state.modeGen++,
						wn(this);
				}),
				removeOverlay: fn(function (l) {
					for (var c = this.state.overlays, g = 0; g < c.length; ++g) {
						var y = c[g].modeSpec;
						if (y == l || (typeof l == 'string' && y.name == l)) {
							c.splice(g, 1), this.state.modeGen++, wn(this);
							return;
						}
					}
				}),
				indentLine: fn(function (l, c, g) {
					typeof c != 'string' &&
						typeof c != 'number' &&
						(c == null
							? (c = this.options.smartIndent ? 'smart' : 'prev')
							: (c = c ? 'add' : 'subtract')),
						se(this.doc, l) && bl(this, l, c, g);
				}),
				indentSelection: fn(function (l) {
					for (var c = this.doc.sel.ranges, g = -1, y = 0; y < c.length; y++) {
						var x = c[y];
						if (x.empty())
							x.head.line > g &&
								(bl(this, x.head.line, l, !0),
								(g = x.head.line),
								y == this.doc.sel.primIndex && Qo(this));
						else {
							var S = x.from(),
								_ = x.to(),
								P = Math.max(g, S.line);
							g = Math.min(this.lastLine(), _.line - (_.ch ? 0 : 1)) + 1;
							for (var D = P; D < g; ++D) bl(this, D, l);
							var G = this.doc.sel.ranges;
							S.ch == 0 &&
								c.length == G.length &&
								G[y].from().ch > 0 &&
								Of(this.doc, y, new dt(S, G[y].to()), X);
						}
					}
				}),
				getTokenAt: function (l, c) {
					return xp(this, l, c);
				},
				getLineTokens: function (l, c) {
					return xp(this, ne(l), c, !0);
				},
				getTokenTypeAt: function (l) {
					l = Ge(this.doc, l);
					var c = yp(this, Oe(this.doc, l.line)),
						g = 0,
						y = (c.length - 1) / 2,
						x = l.ch,
						S;
					if (x == 0) S = c[2];
					else
						for (;;) {
							var _ = (g + y) >> 1;
							if ((_ ? c[_ * 2 - 1] : 0) >= x) y = _;
							else if (c[_ * 2 + 1] < x) g = _ + 1;
							else {
								S = c[_ * 2 + 2];
								break;
							}
						}
					var P = S ? S.indexOf('overlay ') : -1;
					return P < 0 ? S : P == 0 ? null : S.slice(0, P - 1);
				},
				getModeAt: function (l) {
					var c = this.doc.mode;
					return c.innerMode
						? n.innerMode(c, this.getTokenAt(l).state).mode
						: c;
				},
				getHelper: function (l, c) {
					return this.getHelpers(l, c)[0];
				},
				getHelpers: function (l, c) {
					var g = [];
					if (!a.hasOwnProperty(c)) return g;
					var y = a[c],
						x = this.getModeAt(l);
					if (typeof x[c] == 'string') y[x[c]] && g.push(y[x[c]]);
					else if (x[c])
						for (var S = 0; S < x[c].length; S++) {
							var _ = y[x[c][S]];
							_ && g.push(_);
						}
					else
						x.helperType && y[x.helperType]
							? g.push(y[x.helperType])
							: y[x.name] && g.push(y[x.name]);
					for (var P = 0; P < y._global.length; P++) {
						var D = y._global[P];
						D.pred(x, this) && Ae(g, D.val) == -1 && g.push(D.val);
					}
					return g;
				},
				getStateAfter: function (l, c) {
					var g = this.doc;
					return (
						(l = gp(g, l ?? g.first + g.size - 1)), Gs(this, l + 1, c).state
					);
				},
				cursorCoords: function (l, c) {
					var g,
						y = this.doc.sel.primary();
					return (
						l == null
							? (g = y.head)
							: typeof l == 'object'
								? (g = Ge(this.doc, l))
								: (g = l ? y.from() : y.to()),
						pr(this, g, c || 'page')
					);
				},
				charCoords: function (l, c) {
					return qa(this, Ge(this.doc, l), c || 'page');
				},
				coordsChar: function (l, c) {
					return (l = Yp(this, l, c || 'page')), hf(this, l.left, l.top);
				},
				lineAtHeight: function (l, c) {
					return (
						(l = Yp(this, { top: l, left: 0 }, c || 'page').top),
						R(this.doc, l + this.display.viewOffset)
					);
				},
				heightAtLine: function (l, c, g) {
					var y = !1,
						x;
					if (typeof l == 'number') {
						var S = this.doc.first + this.doc.size - 1;
						l < this.doc.first
							? (l = this.doc.first)
							: l > S && ((l = S), (y = !0)),
							(x = Oe(this.doc, l));
					} else x = l;
					return (
						Ha(this, x, { top: 0, left: 0 }, c || 'page', g || y).top +
						(y ? this.doc.height - ei(x) : 0)
					);
				},
				defaultTextHeight: function () {
					return Yo(this.display);
				},
				defaultCharWidth: function () {
					return Zo(this.display);
				},
				getViewport: function () {
					return { from: this.display.viewFrom, to: this.display.viewTo };
				},
				addWidget: function (l, c, g, y, x) {
					var S = this.display;
					l = pr(this, Ge(this.doc, l));
					var _ = l.bottom,
						P = l.left;
					if (
						((c.style.position = 'absolute'),
						c.setAttribute('cm-ignore-events', 'true'),
						this.display.input.setUneditable(c),
						S.sizer.appendChild(c),
						y == 'over')
					)
						_ = l.top;
					else if (y == 'above' || y == 'near') {
						var D = Math.max(S.wrapper.clientHeight, this.doc.height),
							G = Math.max(S.sizer.clientWidth, S.lineSpace.clientWidth);
						(y == 'above' || l.bottom + c.offsetHeight > D) &&
						l.top > c.offsetHeight
							? (_ = l.top - c.offsetHeight)
							: l.bottom + c.offsetHeight <= D && (_ = l.bottom),
							P + c.offsetWidth > G && (P = G - c.offsetWidth);
					}
					(c.style.top = _ + 'px'),
						(c.style.left = c.style.right = ''),
						x == 'right'
							? ((P = S.sizer.clientWidth - c.offsetWidth),
								(c.style.right = '0px'))
							: (x == 'left'
									? (P = 0)
									: x == 'middle' &&
										(P = (S.sizer.clientWidth - c.offsetWidth) / 2),
								(c.style.left = P + 'px')),
						g &&
							j1(this, {
								left: P,
								top: _,
								right: P + c.offsetWidth,
								bottom: _ + c.offsetHeight,
							});
				},
				triggerOnKeyDown: fn(Qg),
				triggerOnKeyPress: fn(tm),
				triggerOnKeyUp: em,
				triggerOnMouseDown: fn(nm),
				execCommand: function (l) {
					if (gl.hasOwnProperty(l)) return gl[l].call(null, this);
				},
				triggerElectric: fn(function (l) {
					um(this, l);
				}),
				findPosH: function (l, c, g, y) {
					var x = 1;
					c < 0 && ((x = -1), (c = -c));
					for (
						var S = Ge(this.doc, l), _ = 0;
						_ < c && ((S = Uf(this.doc, S, x, g, y)), !S.hitSide);
						++_
					);
					return S;
				},
				moveH: fn(function (l, c) {
					var g = this;
					this.extendSelectionsBy(function (y) {
						return g.display.shift || g.doc.extend || y.empty()
							? Uf(g.doc, y.head, l, c, g.options.rtlMoveVisually)
							: l < 0
								? y.from()
								: y.to();
					}, fe);
				}),
				deleteH: fn(function (l, c) {
					var g = this.doc.sel,
						y = this.doc;
					g.somethingSelected()
						? y.replaceSelection('', null, '+delete')
						: ls(this, function (x) {
								var S = Uf(y, x.head, l, c, !1);
								return l < 0
									? { from: S, to: x.head }
									: { from: x.head, to: S };
							});
				}),
				findPosV: function (l, c, g, y) {
					var x = 1,
						S = y;
					c < 0 && ((x = -1), (c = -c));
					for (var _ = Ge(this.doc, l), P = 0; P < c; ++P) {
						var D = pr(this, _, 'div');
						if (
							(S == null ? (S = D.left) : (D.left = S),
							(_ = dm(this, D, x, g)),
							_.hitSide)
						)
							break;
					}
					return _;
				},
				moveV: fn(function (l, c) {
					var g = this,
						y = this.doc,
						x = [],
						S = !this.display.shift && !y.extend && y.sel.somethingSelected();
					if (
						(y.extendSelectionsBy(function (P) {
							if (S) return l < 0 ? P.from() : P.to();
							var D = pr(g, P.head, 'div');
							P.goalColumn != null && (D.left = P.goalColumn), x.push(D.left);
							var G = dm(g, D, l, c);
							return (
								c == 'page' &&
									P == y.sel.primary() &&
									_f(g, qa(g, G, 'div').top - D.top),
								G
							);
						}, fe),
						x.length)
					)
						for (var _ = 0; _ < y.sel.ranges.length; _++)
							y.sel.ranges[_].goalColumn = x[_];
				}),
				findWordAt: function (l) {
					var c = this.doc,
						g = Oe(c, l.line).text,
						y = l.ch,
						x = l.ch;
					if (g) {
						var S = this.getHelper(l, 'wordChars');
						(l.sticky == 'before' || x == g.length) && y ? --y : ++x;
						for (
							var _ = g.charAt(y),
								P = ot(_, S)
									? function (D) {
											return ot(D, S);
										}
									: /\s/.test(_)
										? function (D) {
												return /\s/.test(D);
											}
										: function (D) {
												return !/\s/.test(D) && !ot(D);
											};
							y > 0 && P(g.charAt(y - 1));

						)
							--y;
						for (; x < g.length && P(g.charAt(x)); ) ++x;
					}
					return new dt(ne(l.line, y), ne(l.line, x));
				},
				toggleOverwrite: function (l) {
					(l != null && l == this.state.overwrite) ||
						((this.state.overwrite = !this.state.overwrite)
							? Ne(this.display.cursorDiv, 'CodeMirror-overwrite')
							: Y(this.display.cursorDiv, 'CodeMirror-overwrite'),
						Mt(this, 'overwriteToggle', this, this.state.overwrite));
				},
				hasFocus: function () {
					return this.display.input.getField() == ye(et(this));
				},
				isReadOnly: function () {
					return !!(this.options.readOnly || this.doc.cantEdit);
				},
				scrollTo: fn(function (l, c) {
					el(this, l, c);
				}),
				getScrollInfo: function () {
					var l = this.display.scroller;
					return {
						left: l.scrollLeft,
						top: l.scrollTop,
						height: l.scrollHeight - Or(this) - this.display.barHeight,
						width: l.scrollWidth - Or(this) - this.display.barWidth,
						clientHeight: uf(this),
						clientWidth: lo(this),
					};
				},
				scrollIntoView: fn(function (l, c) {
					l == null
						? ((l = { from: this.doc.sel.primary().head, to: null }),
							c == null && (c = this.options.cursorScrollMargin))
						: typeof l == 'number'
							? (l = { from: ne(l, 0), to: null })
							: l.from == null && (l = { from: l, to: null }),
						l.to || (l.to = l.from),
						(l.margin = c || 0),
						l.from.line != null
							? G1(this, l)
							: og(this, l.from, l.to, l.margin);
				}),
				setSize: fn(function (l, c) {
					var g = this,
						y = function (S) {
							return typeof S == 'number' || /^\d+$/.test(String(S))
								? S + 'px'
								: S;
						};
					l != null && (this.display.wrapper.style.width = y(l)),
						c != null && (this.display.wrapper.style.height = y(c)),
						this.options.lineWrapping && Gp(this);
					var x = this.display.viewFrom;
					this.doc.iter(x, this.display.viewTo, function (S) {
						if (S.widgets) {
							for (var _ = 0; _ < S.widgets.length; _++)
								if (S.widgets[_].noHScroll) {
									Ci(g, x, 'widget');
									break;
								}
						}
						++x;
					}),
						(this.curOp.forceUpdate = !0),
						Mt(this, 'refresh', this);
				}),
				operation: function (l) {
					return Dn(this, l);
				},
				startOperation: function () {
					return po(this);
				},
				endOperation: function () {
					return go(this);
				},
				refresh: fn(function () {
					var l = this.display.cachedTextHeight;
					wn(this),
						(this.curOp.forceUpdate = !0),
						Js(this),
						el(this, this.doc.scrollLeft, this.doc.scrollTop),
						Cf(this.display),
						(l == null ||
							Math.abs(l - Yo(this.display)) > 0.5 ||
							this.options.lineWrapping) &&
							vf(this),
						Mt(this, 'refresh', this);
				}),
				swapDoc: fn(function (l) {
					var c = this.doc;
					return (
						(c.cm = null),
						this.state.selectingText && this.state.selectingText(),
						bg(this, l),
						Js(this),
						this.display.input.reset(),
						el(this, l.scrollLeft, l.scrollTop),
						(this.curOp.forceScroll = !0),
						jt(this, 'swapDoc', this, c),
						c
					);
				}),
				phrase: function (l) {
					var c = this.options.phrases;
					return c && Object.prototype.hasOwnProperty.call(c, l) ? c[l] : l;
				},
				getInputField: function () {
					return this.display.input.getField();
				},
				getWrapperElement: function () {
					return this.display.wrapper;
				},
				getScrollerElement: function () {
					return this.display.scroller;
				},
				getGutterElement: function () {
					return this.display.gutters;
				},
			}),
				ar(n),
				(n.registerHelper = function (l, c, g) {
					a.hasOwnProperty(l) || (a[l] = n[l] = { _global: [] }), (a[l][c] = g);
				}),
				(n.registerGlobalHelper = function (l, c, g, y) {
					n.registerHelper(l, c, y), a[l]._global.push({ pred: g, val: y });
				});
		}
		function Uf(n, i, a, l, c) {
			var g = i,
				y = a,
				x = Oe(n, i.line),
				S = c && n.direction == 'rtl' ? -a : a;
			function _() {
				var Te = i.line + S;
				return Te < n.first || Te >= n.first + n.size
					? !1
					: ((i = new ne(Te, i.ch, i.sticky)), (x = Oe(n, Te)));
			}
			function P(Te) {
				var we;
				if (l == 'codepoint') {
					var Me = x.text.charCodeAt(i.ch + (a > 0 ? 0 : -1));
					if (isNaN(Me)) we = null;
					else {
						var Ie =
							a > 0 ? Me >= 55296 && Me < 56320 : Me >= 56320 && Me < 57343;
						we = new ne(
							i.line,
							Math.max(0, Math.min(x.text.length, i.ch + a * (Ie ? 2 : 1))),
							-a,
						);
					}
				} else c ? (we = MS(n.cm, x, i, a)) : (we = Df(x, i, a));
				if (we == null)
					if (!Te && _()) i = zf(c, n.cm, x, i.line, S);
					else return !1;
				else i = we;
				return !0;
			}
			if (l == 'char' || l == 'codepoint') P();
			else if (l == 'column') P(!0);
			else if (l == 'word' || l == 'group')
				for (
					var D = null,
						G = l == 'group',
						j = n.cm && n.cm.getHelper(i, 'wordChars'),
						re = !0;
					!(a < 0 && !P(!re));
					re = !1
				) {
					var ce =
							x.text.charAt(i.ch) ||
							`
`,
						me = ot(ce, j)
							? 'w'
							: G &&
								  ce ==
										`
`
								? 'n'
								: !G || /\s/.test(ce)
									? null
									: 'p';
					if ((G && !re && !me && (me = 's'), D && D != me)) {
						a < 0 && ((a = 1), P(), (i.sticky = 'after'));
						break;
					}
					if ((me && (D = me), a > 0 && !P(!re))) break;
				}
			var be = Qa(n, i, g, y, !0);
			return ft(g, be) && (be.hitSide = !0), be;
		}
		function dm(n, i, a, l) {
			var c = n.doc,
				g = i.left,
				y;
			if (l == 'page') {
				var x = Math.min(
						n.display.wrapper.clientHeight,
						Le(n).innerHeight || c(n).documentElement.clientHeight,
					),
					S = Math.max(x - 0.5 * Yo(n.display), 3);
				y = (a > 0 ? i.bottom : i.top) + a * S;
			} else l == 'line' && (y = a > 0 ? i.bottom + 3 : i.top - 3);
			for (var _; (_ = hf(n, g, y)), !!_.outside; ) {
				if (a < 0 ? y <= 0 : y >= c.height) {
					_.hitSide = !0;
					break;
				}
				y += a * 5;
			}
			return _;
		}
		var yt = function (n) {
			(this.cm = n),
				(this.lastAnchorNode =
					this.lastAnchorOffset =
					this.lastFocusNode =
					this.lastFocusOffset =
						null),
				(this.polling = new $e()),
				(this.composing = null),
				(this.gracePeriod = !1),
				(this.readDOMTimeout = null);
		};
		(yt.prototype.init = function (n) {
			var i = this,
				a = this,
				l = a.cm,
				c = (a.div = n.lineDiv);
			(c.contentEditable = !0),
				Wf(
					c,
					l.options.spellcheck,
					l.options.autocorrect,
					l.options.autocapitalize,
				);
			function g(x) {
				for (var S = x.target; S; S = S.parentNode) {
					if (S == c) return !0;
					if (/\bCodeMirror-(?:line)?widget\b/.test(S.className)) break;
				}
				return !1;
			}
			ze(c, 'paste', function (x) {
				!g(x) ||
					Nt(l, x) ||
					am(x, l) ||
					(p <= 11 &&
						setTimeout(
							Gt(l, function () {
								return i.updateFromDOM();
							}),
							20,
						));
			}),
				ze(c, 'compositionstart', function (x) {
					i.composing = { data: x.data, done: !1 };
				}),
				ze(c, 'compositionupdate', function (x) {
					i.composing || (i.composing = { data: x.data, done: !1 });
				}),
				ze(c, 'compositionend', function (x) {
					i.composing &&
						(x.data != i.composing.data && i.readFromDOMSoon(),
						(i.composing.done = !0));
				}),
				ze(c, 'touchstart', function () {
					return a.forceCompositionEnd();
				}),
				ze(c, 'input', function () {
					i.composing || i.readFromDOMSoon();
				});
			function y(x) {
				if (!(!g(x) || Nt(l, x))) {
					if (l.somethingSelected())
						ou({ lineWise: !1, text: l.getSelections() }),
							x.type == 'cut' && l.replaceSelection('', null, 'cut');
					else if (l.options.lineWiseCopyCut) {
						var S = cm(l);
						ou({ lineWise: !0, text: S.text }),
							x.type == 'cut' &&
								l.operation(function () {
									l.setSelections(S.ranges, 0, X),
										l.replaceSelection('', null, 'cut');
								});
					} else return;
					if (x.clipboardData) {
						x.clipboardData.clearData();
						var _ = mr.text.join(`
`);
						if (
							(x.clipboardData.setData('Text', _),
							x.clipboardData.getData('Text') == _)
						) {
							x.preventDefault();
							return;
						}
					}
					var P = fm(),
						D = P.firstChild;
					Wf(D),
						l.display.lineSpace.insertBefore(P, l.display.lineSpace.firstChild),
						(D.value = mr.text.join(`
`));
					var G = ye(Xe(c));
					Ve(D),
						setTimeout(function () {
							l.display.lineSpace.removeChild(P),
								G.focus(),
								G == c && a.showPrimarySelection();
						}, 50);
				}
			}
			ze(c, 'copy', y), ze(c, 'cut', y);
		}),
			(yt.prototype.screenReaderLabelChanged = function (n) {
				n
					? this.div.setAttribute('aria-label', n)
					: this.div.removeAttribute('aria-label');
			}),
			(yt.prototype.prepareSelection = function () {
				var n = ng(this.cm, !1);
				return (n.focus = ye(Xe(this.div)) == this.div), n;
			}),
			(yt.prototype.showSelection = function (n, i) {
				!n ||
					!this.cm.display.view.length ||
					((n.focus || i) && this.showPrimarySelection(),
					this.showMultipleSelections(n));
			}),
			(yt.prototype.getSelection = function () {
				return this.cm.display.wrapper.ownerDocument.getSelection();
			}),
			(yt.prototype.showPrimarySelection = function () {
				var n = this.getSelection(),
					i = this.cm,
					a = i.doc.sel.primary(),
					l = a.from(),
					c = a.to();
				if (
					i.display.viewTo == i.display.viewFrom ||
					l.line >= i.display.viewTo ||
					c.line < i.display.viewFrom
				) {
					n.removeAllRanges();
					return;
				}
				var g = su(i, n.anchorNode, n.anchorOffset),
					y = su(i, n.focusNode, n.focusOffset);
				if (
					!(
						g &&
						!g.bad &&
						y &&
						!y.bad &&
						_e(jo(g, y), l) == 0 &&
						_e(bn(g, y), c) == 0
					)
				) {
					var x = i.display.view,
						S = (l.line >= i.display.viewFrom && hm(i, l)) || {
							node: x[0].measure.map[2],
							offset: 0,
						},
						_ = c.line < i.display.viewTo && hm(i, c);
					if (!_) {
						var P = x[x.length - 1].measure,
							D = P.maps ? P.maps[P.maps.length - 1] : P.map;
						_ = {
							node: D[D.length - 1],
							offset: D[D.length - 2] - D[D.length - 3],
						};
					}
					if (!S || !_) {
						n.removeAllRanges();
						return;
					}
					var G = n.rangeCount && n.getRangeAt(0),
						j;
					try {
						j = V(S.node, S.offset, _.offset, _.node);
					} catch {}
					j &&
						(!s && i.state.focused
							? (n.collapse(S.node, S.offset),
								j.collapsed || (n.removeAllRanges(), n.addRange(j)))
							: (n.removeAllRanges(), n.addRange(j)),
						G && n.anchorNode == null
							? n.addRange(G)
							: s && this.startGracePeriod()),
						this.rememberSelection();
				}
			}),
			(yt.prototype.startGracePeriod = function () {
				var n = this;
				clearTimeout(this.gracePeriod),
					(this.gracePeriod = setTimeout(function () {
						(n.gracePeriod = !1),
							n.selectionChanged() &&
								n.cm.operation(function () {
									return (n.cm.curOp.selectionChanged = !0);
								});
					}, 20));
			}),
			(yt.prototype.showMultipleSelections = function (n) {
				F(this.cm.display.cursorDiv, n.cursors),
					F(this.cm.display.selectionDiv, n.selection);
			}),
			(yt.prototype.rememberSelection = function () {
				var n = this.getSelection();
				(this.lastAnchorNode = n.anchorNode),
					(this.lastAnchorOffset = n.anchorOffset),
					(this.lastFocusNode = n.focusNode),
					(this.lastFocusOffset = n.focusOffset);
			}),
			(yt.prototype.selectionInEditor = function () {
				var n = this.getSelection();
				if (!n.rangeCount) return !1;
				var i = n.getRangeAt(0).commonAncestorContainer;
				return ie(this.div, i);
			}),
			(yt.prototype.focus = function () {
				this.cm.options.readOnly != 'nocursor' &&
					((!this.selectionInEditor() || ye(Xe(this.div)) != this.div) &&
						this.showSelection(this.prepareSelection(), !0),
					this.div.focus());
			}),
			(yt.prototype.blur = function () {
				this.div.blur();
			}),
			(yt.prototype.getField = function () {
				return this.div;
			}),
			(yt.prototype.supportsTouch = function () {
				return !0;
			}),
			(yt.prototype.receivedFocus = function () {
				var n = this,
					i = this;
				this.selectionInEditor()
					? setTimeout(function () {
							return n.pollSelection();
						}, 20)
					: Dn(this.cm, function () {
							return (i.cm.curOp.selectionChanged = !0);
						});
				function a() {
					i.cm.state.focused &&
						(i.pollSelection(), i.polling.set(i.cm.options.pollInterval, a));
				}
				this.polling.set(this.cm.options.pollInterval, a);
			}),
			(yt.prototype.selectionChanged = function () {
				var n = this.getSelection();
				return (
					n.anchorNode != this.lastAnchorNode ||
					n.anchorOffset != this.lastAnchorOffset ||
					n.focusNode != this.lastFocusNode ||
					n.focusOffset != this.lastFocusOffset
				);
			}),
			(yt.prototype.pollSelection = function () {
				if (
					!(
						this.readDOMTimeout != null ||
						this.gracePeriod ||
						!this.selectionChanged()
					)
				) {
					var n = this.getSelection(),
						i = this.cm;
					if (
						$ &&
						b &&
						this.cm.display.gutterSpecs.length &&
						YS(n.anchorNode)
					) {
						this.cm.triggerOnKeyDown({
							type: 'keydown',
							keyCode: 8,
							preventDefault: Math.abs,
						}),
							this.blur(),
							this.focus();
						return;
					}
					if (!this.composing) {
						this.rememberSelection();
						var a = su(i, n.anchorNode, n.anchorOffset),
							l = su(i, n.focusNode, n.focusOffset);
						a &&
							l &&
							Dn(i, function () {
								ln(i.doc, Li(a, l), X),
									(a.bad || l.bad) && (i.curOp.selectionChanged = !0);
							});
					}
				}
			}),
			(yt.prototype.pollContent = function () {
				this.readDOMTimeout != null &&
					(clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
				var n = this.cm,
					i = n.display,
					a = n.doc.sel.primary(),
					l = a.from(),
					c = a.to();
				if (
					(l.ch == 0 &&
						l.line > n.firstLine() &&
						(l = ne(l.line - 1, Oe(n.doc, l.line - 1).length)),
					c.ch == Oe(n.doc, c.line).text.length &&
						c.line < n.lastLine() &&
						(c = ne(c.line + 1, 0)),
					l.line < i.viewFrom || c.line > i.viewTo - 1)
				)
					return !1;
				var g, y, x;
				l.line == i.viewFrom || (g = co(n, l.line)) == 0
					? ((y = T(i.view[0].line)), (x = i.view[0].node))
					: ((y = T(i.view[g].line)), (x = i.view[g - 1].node.nextSibling));
				var S = co(n, c.line),
					_,
					P;
				if (
					(S == i.view.length - 1
						? ((_ = i.viewTo - 1), (P = i.lineDiv.lastChild))
						: ((_ = T(i.view[S + 1].line) - 1),
							(P = i.view[S + 1].node.previousSibling)),
					!x)
				)
					return !1;
				for (
					var D = n.doc.splitLines(ZS(n, x, P, y, _)),
						G = Jr(n.doc, ne(y, 0), ne(_, Oe(n.doc, _).text.length));
					D.length > 1 && G.length > 1;

				)
					if (de(D) == de(G)) D.pop(), G.pop(), _--;
					else if (D[0] == G[0]) D.shift(), G.shift(), y++;
					else break;
				for (
					var j = 0,
						re = 0,
						ce = D[0],
						me = G[0],
						be = Math.min(ce.length, me.length);
					j < be && ce.charCodeAt(j) == me.charCodeAt(j);

				)
					++j;
				for (
					var Te = de(D),
						we = de(G),
						Me = Math.min(
							Te.length - (D.length == 1 ? j : 0),
							we.length - (G.length == 1 ? j : 0),
						);
					re < Me &&
					Te.charCodeAt(Te.length - re - 1) ==
						we.charCodeAt(we.length - re - 1);

				)
					++re;
				if (D.length == 1 && G.length == 1 && y == l.line)
					for (
						;
						j &&
						j > l.ch &&
						Te.charCodeAt(Te.length - re - 1) ==
							we.charCodeAt(we.length - re - 1);

					)
						j--, re++;
				(D[D.length - 1] = Te.slice(0, Te.length - re).replace(/^\u200b+/, '')),
					(D[0] = D[0].slice(j).replace(/\u200b+$/, ''));
				var Ie = ne(y, j),
					Re = ne(_, G.length ? de(G).length - re : 0);
				if (D.length > 1 || D[0] || _e(Ie, Re))
					return is(n.doc, D, Ie, Re, '+input'), !0;
			}),
			(yt.prototype.ensurePolled = function () {
				this.forceCompositionEnd();
			}),
			(yt.prototype.reset = function () {
				this.forceCompositionEnd();
			}),
			(yt.prototype.forceCompositionEnd = function () {
				this.composing &&
					(clearTimeout(this.readDOMTimeout),
					(this.composing = null),
					this.updateFromDOM(),
					this.div.blur(),
					this.div.focus());
			}),
			(yt.prototype.readFromDOMSoon = function () {
				var n = this;
				this.readDOMTimeout == null &&
					(this.readDOMTimeout = setTimeout(function () {
						if (((n.readDOMTimeout = null), n.composing))
							if (n.composing.done) n.composing = null;
							else return;
						n.updateFromDOM();
					}, 80));
			}),
			(yt.prototype.updateFromDOM = function () {
				var n = this;
				(this.cm.isReadOnly() || !this.pollContent()) &&
					Dn(this.cm, function () {
						return wn(n.cm);
					});
			}),
			(yt.prototype.setUneditable = function (n) {
				n.contentEditable = 'false';
			}),
			(yt.prototype.onKeyPress = function (n) {
				n.charCode == 0 ||
					this.composing ||
					(n.preventDefault(),
					this.cm.isReadOnly() ||
						Gt(this.cm, Bf)(
							this.cm,
							String.fromCharCode(n.charCode == null ? n.keyCode : n.charCode),
							0,
						));
			}),
			(yt.prototype.readOnlyChanged = function (n) {
				this.div.contentEditable = String(n != 'nocursor');
			}),
			(yt.prototype.onContextMenu = function () {}),
			(yt.prototype.resetPosition = function () {}),
			(yt.prototype.needsContentAttribute = !0);
		function hm(n, i) {
			var a = cf(n, i.line);
			if (!a || a.hidden) return null;
			var l = Oe(n.doc, i.line),
				c = Bp(a, l, i.line),
				g = Je(l, n.doc.direction),
				y = 'left';
			if (g) {
				var x = Dt(g, i.ch);
				y = x % 2 ? 'right' : 'left';
			}
			var S = Vp(c.map, i.ch, y);
			return (S.offset = S.collapse == 'right' ? S.end : S.start), S;
		}
		function YS(n) {
			for (var i = n; i; i = i.parentNode)
				if (/CodeMirror-gutter-wrapper/.test(i.className)) return !0;
			return !1;
		}
		function us(n, i) {
			return i && (n.bad = !0), n;
		}
		function ZS(n, i, a, l, c) {
			var g = '',
				y = !1,
				x = n.doc.lineSeparator(),
				S = !1;
			function _(j) {
				return function (re) {
					return re.id == j;
				};
			}
			function P() {
				y && ((g += x), S && (g += x), (y = S = !1));
			}
			function D(j) {
				j && (P(), (g += j));
			}
			function G(j) {
				if (j.nodeType == 1) {
					var re = j.getAttribute('cm-text');
					if (re) {
						D(re);
						return;
					}
					var ce = j.getAttribute('cm-marker'),
						me;
					if (ce) {
						var be = n.findMarks(ne(l, 0), ne(c + 1, 0), _(+ce));
						be.length &&
							(me = be[0].find(0)) &&
							D(Jr(n.doc, me.from, me.to).join(x));
						return;
					}
					if (j.getAttribute('contenteditable') == 'false') return;
					var Te = /^(pre|div|p|li|table|br)$/i.test(j.nodeName);
					if (!/^br$/i.test(j.nodeName) && j.textContent.length == 0) return;
					Te && P();
					for (var we = 0; we < j.childNodes.length; we++) G(j.childNodes[we]);
					/^(pre|p)$/i.test(j.nodeName) && (S = !0), Te && (y = !0);
				} else
					j.nodeType == 3 &&
						D(j.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
			}
			for (; G(i), i != a; ) (i = i.nextSibling), (S = !1);
			return g;
		}
		function su(n, i, a) {
			var l;
			if (i == n.display.lineDiv) {
				if (((l = n.display.lineDiv.childNodes[a]), !l))
					return us(n.clipPos(ne(n.display.viewTo - 1)), !0);
				(i = null), (a = 0);
			} else
				for (l = i; ; l = l.parentNode) {
					if (!l || l == n.display.lineDiv) return null;
					if (l.parentNode && l.parentNode == n.display.lineDiv) break;
				}
			for (var c = 0; c < n.display.view.length; c++) {
				var g = n.display.view[c];
				if (g.node == l) return JS(g, i, a);
			}
		}
		function JS(n, i, a) {
			var l = n.text.firstChild,
				c = !1;
			if (!i || !ie(l, i)) return us(ne(T(n.line), 0), !0);
			if (i == l && ((c = !0), (i = l.childNodes[a]), (a = 0), !i)) {
				var g = n.rest ? de(n.rest) : n.line;
				return us(ne(T(g), g.text.length), c);
			}
			var y = i.nodeType == 3 ? i : null,
				x = i;
			for (
				!y &&
				i.childNodes.length == 1 &&
				i.firstChild.nodeType == 3 &&
				((y = i.firstChild), a && (a = y.nodeValue.length));
				x.parentNode != l;

			)
				x = x.parentNode;
			var S = n.measure,
				_ = S.maps;
			function P(me, be, Te) {
				for (var we = -1; we < (_ ? _.length : 0); we++)
					for (
						var Me = we < 0 ? S.map : _[we], Ie = 0;
						Ie < Me.length;
						Ie += 3
					) {
						var Re = Me[Ie + 2];
						if (Re == me || Re == be) {
							var Ye = T(we < 0 ? n.line : n.rest[we]),
								xt = Me[Ie] + Te;
							return (
								(Te < 0 || Re != me) && (xt = Me[Ie + (Te ? 1 : 0)]), ne(Ye, xt)
							);
						}
					}
			}
			var D = P(y, x, a);
			if (D) return us(D, c);
			for (
				var G = x.nextSibling, j = y ? y.nodeValue.length - a : 0;
				G;
				G = G.nextSibling
			) {
				if (((D = P(G, G.firstChild, 0)), D))
					return us(ne(D.line, D.ch - j), c);
				j += G.textContent.length;
			}
			for (var re = x.previousSibling, ce = a; re; re = re.previousSibling) {
				if (((D = P(re, re.firstChild, -1)), D))
					return us(ne(D.line, D.ch + ce), c);
				ce += re.textContent.length;
			}
		}
		var zt = function (n) {
			(this.cm = n),
				(this.prevInput = ''),
				(this.pollingFast = !1),
				(this.polling = new $e()),
				(this.hasSelection = !1),
				(this.composing = null),
				(this.resetting = !1);
		};
		(zt.prototype.init = function (n) {
			var i = this,
				a = this,
				l = this.cm;
			this.createField(n);
			var c = this.textarea;
			n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
				A && (c.style.width = '0px'),
				ze(c, 'input', function () {
					h && p >= 9 && i.hasSelection && (i.hasSelection = null), a.poll();
				}),
				ze(c, 'paste', function (y) {
					Nt(l, y) ||
						am(y, l) ||
						((l.state.pasteIncoming = +new Date()), a.fastPoll());
				});
			function g(y) {
				if (!Nt(l, y)) {
					if (l.somethingSelected())
						ou({ lineWise: !1, text: l.getSelections() });
					else if (l.options.lineWiseCopyCut) {
						var x = cm(l);
						ou({ lineWise: !0, text: x.text }),
							y.type == 'cut'
								? l.setSelections(x.ranges, null, X)
								: ((a.prevInput = ''),
									(c.value = x.text.join(`
`)),
									Ve(c));
					} else return;
					y.type == 'cut' && (l.state.cutIncoming = +new Date());
				}
			}
			ze(c, 'cut', g),
				ze(c, 'copy', g),
				ze(n.scroller, 'paste', function (y) {
					if (!(ti(n, y) || Nt(l, y))) {
						if (!c.dispatchEvent) {
							(l.state.pasteIncoming = +new Date()), a.focus();
							return;
						}
						var x = new Event('paste');
						(x.clipboardData = y.clipboardData), c.dispatchEvent(x);
					}
				}),
				ze(n.lineSpace, 'selectstart', function (y) {
					ti(n, y) || sn(y);
				}),
				ze(c, 'compositionstart', function () {
					var y = l.getCursor('from');
					a.composing && a.composing.range.clear(),
						(a.composing = {
							start: y,
							range: l.markText(y, l.getCursor('to'), {
								className: 'CodeMirror-composing',
							}),
						});
				}),
				ze(c, 'compositionend', function () {
					a.composing &&
						(a.poll(), a.composing.range.clear(), (a.composing = null));
				});
		}),
			(zt.prototype.createField = function (n) {
				(this.wrapper = fm()), (this.textarea = this.wrapper.firstChild);
				var i = this.cm.options;
				Wf(this.textarea, i.spellcheck, i.autocorrect, i.autocapitalize);
			}),
			(zt.prototype.screenReaderLabelChanged = function (n) {
				n
					? this.textarea.setAttribute('aria-label', n)
					: this.textarea.removeAttribute('aria-label');
			}),
			(zt.prototype.prepareSelection = function () {
				var n = this.cm,
					i = n.display,
					a = n.doc,
					l = ng(n);
				if (n.options.moveInputWithCursor) {
					var c = pr(n, a.sel.primary().head, 'div'),
						g = i.wrapper.getBoundingClientRect(),
						y = i.lineDiv.getBoundingClientRect();
					(l.teTop = Math.max(
						0,
						Math.min(i.wrapper.clientHeight - 10, c.top + y.top - g.top),
					)),
						(l.teLeft = Math.max(
							0,
							Math.min(i.wrapper.clientWidth - 10, c.left + y.left - g.left),
						));
				}
				return l;
			}),
			(zt.prototype.showSelection = function (n) {
				var i = this.cm,
					a = i.display;
				F(a.cursorDiv, n.cursors),
					F(a.selectionDiv, n.selection),
					n.teTop != null &&
						((this.wrapper.style.top = n.teTop + 'px'),
						(this.wrapper.style.left = n.teLeft + 'px'));
			}),
			(zt.prototype.reset = function (n) {
				if (!(this.contextMenuPending || (this.composing && n))) {
					var i = this.cm;
					if (((this.resetting = !0), i.somethingSelected())) {
						this.prevInput = '';
						var a = i.getSelection();
						(this.textarea.value = a),
							i.state.focused && Ve(this.textarea),
							h && p >= 9 && (this.hasSelection = a);
					} else
						n ||
							((this.prevInput = this.textarea.value = ''),
							h && p >= 9 && (this.hasSelection = null));
					this.resetting = !1;
				}
			}),
			(zt.prototype.getField = function () {
				return this.textarea;
			}),
			(zt.prototype.supportsTouch = function () {
				return !1;
			}),
			(zt.prototype.focus = function () {
				if (
					this.cm.options.readOnly != 'nocursor' &&
					(!L || ye(Xe(this.textarea)) != this.textarea)
				)
					try {
						this.textarea.focus();
					} catch {}
			}),
			(zt.prototype.blur = function () {
				this.textarea.blur();
			}),
			(zt.prototype.resetPosition = function () {
				this.wrapper.style.top = this.wrapper.style.left = 0;
			}),
			(zt.prototype.receivedFocus = function () {
				this.slowPoll();
			}),
			(zt.prototype.slowPoll = function () {
				var n = this;
				this.pollingFast ||
					this.polling.set(this.cm.options.pollInterval, function () {
						n.poll(), n.cm.state.focused && n.slowPoll();
					});
			}),
			(zt.prototype.fastPoll = function () {
				var n = !1,
					i = this;
				i.pollingFast = !0;
				function a() {
					var l = i.poll();
					!l && !n
						? ((n = !0), i.polling.set(60, a))
						: ((i.pollingFast = !1), i.slowPoll());
				}
				i.polling.set(20, a);
			}),
			(zt.prototype.poll = function () {
				var n = this,
					i = this.cm,
					a = this.textarea,
					l = this.prevInput;
				if (
					this.contextMenuPending ||
					this.resetting ||
					!i.state.focused ||
					(_i(a) && !l && !this.composing) ||
					i.isReadOnly() ||
					i.options.disableInput ||
					i.state.keySeq
				)
					return !1;
				var c = a.value;
				if (c == l && !i.somethingSelected()) return !1;
				if (
					(h && p >= 9 && this.hasSelection === c) ||
					(O && /[\uf700-\uf7ff]/.test(c))
				)
					return i.display.input.reset(), !1;
				if (i.doc.sel == i.display.selForContextMenu) {
					var g = c.charCodeAt(0);
					if ((g == 8203 && !l && (l = '​'), g == 8666))
						return this.reset(), this.cm.execCommand('undo');
				}
				for (
					var y = 0, x = Math.min(l.length, c.length);
					y < x && l.charCodeAt(y) == c.charCodeAt(y);

				)
					++y;
				return (
					Dn(i, function () {
						Bf(
							i,
							c.slice(y),
							l.length - y,
							null,
							n.composing ? '*compose' : null,
						),
							c.length > 1e3 ||
							c.indexOf(`
`) > -1
								? (a.value = n.prevInput = '')
								: (n.prevInput = c),
							n.composing &&
								(n.composing.range.clear(),
								(n.composing.range = i.markText(
									n.composing.start,
									i.getCursor('to'),
									{ className: 'CodeMirror-composing' },
								)));
					}),
					!0
				);
			}),
			(zt.prototype.ensurePolled = function () {
				this.pollingFast && this.poll() && (this.pollingFast = !1);
			}),
			(zt.prototype.onKeyPress = function () {
				h && p >= 9 && (this.hasSelection = null), this.fastPoll();
			}),
			(zt.prototype.onContextMenu = function (n) {
				var i = this,
					a = i.cm,
					l = a.display,
					c = i.textarea;
				i.contextMenuPending && i.contextMenuPending();
				var g = uo(a, n),
					y = l.scroller.scrollTop;
				if (!g || C) return;
				var x = a.options.resetSelectionOnContextMenu;
				x && a.doc.sel.contains(g) == -1 && Gt(a, ln)(a.doc, Li(g), X);
				var S = c.style.cssText,
					_ = i.wrapper.style.cssText,
					P = i.wrapper.offsetParent.getBoundingClientRect();
				(i.wrapper.style.cssText = 'position: static'),
					(c.style.cssText =
						`position: absolute; width: 30px; height: 30px;
      top: ` +
						(n.clientY - P.top - 5) +
						'px; left: ' +
						(n.clientX - P.left - 5) +
						`px;
      z-index: 1000; background: ` +
						(h ? 'rgba(255, 255, 255, .05)' : 'transparent') +
						`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
				var D;
				m && (D = c.ownerDocument.defaultView.scrollY),
					l.input.focus(),
					m && c.ownerDocument.defaultView.scrollTo(null, D),
					l.input.reset(),
					a.somethingSelected() || (c.value = i.prevInput = ' '),
					(i.contextMenuPending = j),
					(l.selForContextMenu = a.doc.sel),
					clearTimeout(l.detectingSelectAll);
				function G() {
					if (c.selectionStart != null) {
						var ce = a.somethingSelected(),
							me = '​' + (ce ? c.value : '');
						(c.value = '⇚'),
							(c.value = me),
							(i.prevInput = ce ? '' : '​'),
							(c.selectionStart = 1),
							(c.selectionEnd = me.length),
							(l.selForContextMenu = a.doc.sel);
					}
				}
				function j() {
					if (
						i.contextMenuPending == j &&
						((i.contextMenuPending = !1),
						(i.wrapper.style.cssText = _),
						(c.style.cssText = S),
						h && p < 9 && l.scrollbars.setScrollTop((l.scroller.scrollTop = y)),
						c.selectionStart != null)
					) {
						(!h || (h && p < 9)) && G();
						var ce = 0,
							me = function () {
								l.selForContextMenu == a.doc.sel &&
								c.selectionStart == 0 &&
								c.selectionEnd > 0 &&
								i.prevInput == '​'
									? Gt(a, $g)(a)
									: ce++ < 10
										? (l.detectingSelectAll = setTimeout(me, 500))
										: ((l.selForContextMenu = null), l.input.reset());
							};
						l.detectingSelectAll = setTimeout(me, 200);
					}
				}
				if ((h && p >= 9 && G(), K)) {
					xi(n);
					var re = function () {
						on(window, 'mouseup', re), setTimeout(j, 20);
					};
					ze(window, 'mouseup', re);
				} else setTimeout(j, 50);
			}),
			(zt.prototype.readOnlyChanged = function (n) {
				n || this.reset(),
					(this.textarea.disabled = n == 'nocursor'),
					(this.textarea.readOnly = !!n);
			}),
			(zt.prototype.setUneditable = function () {}),
			(zt.prototype.needsContentAttribute = !1);
		function QS(n, i) {
			if (
				((i = i ? ae(i) : {}),
				(i.value = n.value),
				!i.tabindex && n.tabIndex && (i.tabindex = n.tabIndex),
				!i.placeholder && n.placeholder && (i.placeholder = n.placeholder),
				i.autofocus == null)
			) {
				var a = ye(Xe(n));
				i.autofocus =
					a == n || (n.getAttribute('autofocus') != null && a == document.body);
			}
			function l() {
				n.value = x.getValue();
			}
			var c;
			if (n.form && (ze(n.form, 'submit', l), !i.leaveSubmitMethodAlone)) {
				var g = n.form;
				c = g.submit;
				try {
					var y = (g.submit = function () {
						l(), (g.submit = c), g.submit(), (g.submit = y);
					});
				} catch {}
			}
			(i.finishInit = function (S) {
				(S.save = l),
					(S.getTextArea = function () {
						return n;
					}),
					(S.toTextArea = function () {
						(S.toTextArea = isNaN),
							l(),
							n.parentNode.removeChild(S.getWrapperElement()),
							(n.style.display = ''),
							n.form &&
								(on(n.form, 'submit', l),
								!i.leaveSubmitMethodAlone &&
									typeof n.form.submit == 'function' &&
									(n.form.submit = c));
					});
			}),
				(n.style.display = 'none');
			var x = Tt(function (S) {
				return n.parentNode.insertBefore(S, n.nextSibling);
			}, i);
			return x;
		}
		function e_(n) {
			(n.off = on),
				(n.on = ze),
				(n.wheelEventPixels = lS),
				(n.Doc = xn),
				(n.splitLines = rr),
				(n.countColumn = he),
				(n.findColumn = ue),
				(n.isWordChar = Qe),
				(n.Pass = q),
				(n.signal = Mt),
				(n.Line = Go),
				(n.changeEnd = Ai),
				(n.scrollbarModel = ag),
				(n.Pos = ne),
				(n.cmpPos = _e),
				(n.modes = qo),
				(n.mimeModes = fr),
				(n.resolveMode = Bo),
				(n.getMode = Wo),
				(n.modeExtensions = ki),
				(n.extendMode = Uo),
				(n.copyState = $r),
				(n.startState = Vo),
				(n.innerMode = Vs),
				(n.commands = gl),
				(n.keyMap = ri),
				(n.keyName = Kg),
				(n.isModifierKey = jg),
				(n.lookupKey = ss),
				(n.normalizeKeyMap = AS),
				(n.StringStream = $t),
				(n.SharedTextMarker = dl),
				(n.TextMarker = Ni),
				(n.LineWidget = fl),
				(n.e_preventDefault = sn),
				(n.e_stopPropagation = Fo),
				(n.e_stop = xi),
				(n.addClass = Ne),
				(n.contains = ie),
				(n.rmClass = Y),
				(n.keyNames = $i);
		}
		VS(Tt), XS(Tt);
		var t_ = 'iter insert remove copy getEditor constructor'.split(' ');
		for (var lu in xn.prototype)
			xn.prototype.hasOwnProperty(lu) &&
				Ae(t_, lu) < 0 &&
				(Tt.prototype[lu] = (function (n) {
					return function () {
						return n.apply(this.doc, arguments);
					};
				})(xn.prototype[lu]));
		return (
			ar(xn),
			(Tt.inputStyles = { textarea: zt, contenteditable: yt }),
			(Tt.defineMode = function (n) {
				!Tt.defaults.mode && n != 'null' && (Tt.defaults.mode = n),
					dr.apply(this, arguments);
			}),
			(Tt.defineMIME = so),
			Tt.defineMode('null', function () {
				return {
					token: function (n) {
						return n.skipToEnd();
					},
				};
			}),
			Tt.defineMIME('text/plain', 'null'),
			(Tt.defineExtension = function (n, i) {
				Tt.prototype[n] = i;
			}),
			(Tt.defineDocExtension = function (n, i) {
				xn.prototype[n] = i;
			}),
			(Tt.fromTextArea = QS),
			e_(Tt),
			(Tt.version = '5.65.18'),
			Tt
		);
	});
})(Qw);
var Bs = Qw.exports;
const Nce = kw(Bs);
var $ce = { exports: {} };
(function (e, t) {
	(function (r) {
		r(Bs);
	})(function (r) {
		r.defineMode('javascript', function (o, s) {
			var u = o.indentUnit,
				f = s.statementIndent,
				d = s.jsonld,
				h = s.json || d,
				p = s.trackScope !== !1,
				m = s.typescript,
				v = s.wordCharacters || /[\w$\xa1-\uffff]/,
				b = (function () {
					function T(Vt) {
						return { type: Vt, style: 'keyword' };
					}
					var R = T('keyword a'),
						se = T('keyword b'),
						ge = T('keyword c'),
						ne = T('keyword d'),
						_e = T('operator'),
						ft = { type: 'atom', style: 'atom' };
					return {
						if: T('if'),
						while: R,
						with: R,
						else: se,
						do: se,
						try: se,
						finally: se,
						return: ne,
						break: ne,
						continue: ne,
						new: T('new'),
						delete: ge,
						void: ge,
						throw: ge,
						debugger: T('debugger'),
						var: T('var'),
						const: T('var'),
						let: T('var'),
						function: T('function'),
						catch: T('catch'),
						for: T('for'),
						switch: T('switch'),
						case: T('case'),
						default: T('default'),
						in: _e,
						typeof: _e,
						instanceof: _e,
						true: ft,
						false: ft,
						null: ft,
						undefined: ft,
						NaN: ft,
						Infinity: ft,
						this: T('this'),
						class: T('class'),
						super: T('atom'),
						yield: ge,
						export: T('export'),
						import: T('import'),
						extends: ge,
						await: ge,
					};
				})(),
				w = /[+\-*&%=<>!?|~^@]/,
				C =
					/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
			function M(T) {
				for (var R = !1, se, ge = !1; (se = T.next()) != null; ) {
					if (!R) {
						if (se == '/' && !ge) return;
						se == '[' ? (ge = !0) : ge && se == ']' && (ge = !1);
					}
					R = !R && se == '\\';
				}
			}
			var E, N;
			function A(T, R, se) {
				return (E = T), (N = se), R;
			}
			function $(T, R) {
				var se = T.next();
				if (se == '"' || se == "'")
					return (R.tokenize = L(se)), R.tokenize(T, R);
				if (se == '.' && T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
					return A('number', 'number');
				if (se == '.' && T.match('..')) return A('spread', 'meta');
				if (/[\[\]{}\(\),;\:\.]/.test(se)) return A(se);
				if (se == '=' && T.eat('>')) return A('=>', 'operator');
				if (se == '0' && T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
					return A('number', 'number');
				if (/\d/.test(se))
					return (
						T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
						A('number', 'number')
					);
				if (se == '/')
					return T.eat('*')
						? ((R.tokenize = O), O(T, R))
						: T.eat('/')
							? (T.skipToEnd(), A('comment', 'comment'))
							: jn(T, R, 1)
								? (M(T),
									T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
									A('regexp', 'string-2'))
								: (T.eat('='), A('operator', 'operator', T.current()));
				if (se == '`') return (R.tokenize = U), U(T, R);
				if (se == '#' && T.peek() == '!')
					return T.skipToEnd(), A('meta', 'meta');
				if (se == '#' && T.eatWhile(v)) return A('variable', 'property');
				if (
					(se == '<' && T.match('!--')) ||
					(se == '-' && T.match('->') && !/\S/.test(T.string.slice(0, T.start)))
				)
					return T.skipToEnd(), A('comment', 'comment');
				if (w.test(se))
					return (
						(se != '>' || !R.lexical || R.lexical.type != '>') &&
							(T.eat('=')
								? (se == '!' || se == '=') && T.eat('=')
								: /[<>*+\-|&?]/.test(se) &&
									(T.eat(se), se == '>' && T.eat(se))),
						se == '?' && T.eat('.')
							? A('.')
							: A('operator', 'operator', T.current())
					);
				if (v.test(se)) {
					T.eatWhile(v);
					var ge = T.current();
					if (R.lastType != '.') {
						if (b.propertyIsEnumerable(ge)) {
							var ne = b[ge];
							return A(ne.type, ne.style, ge);
						}
						if (
							ge == 'async' &&
							T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
						)
							return A('async', 'keyword', ge);
					}
					return A('variable', 'variable', ge);
				}
			}
			function L(T) {
				return function (R, se) {
					var ge = !1,
						ne;
					if (d && R.peek() == '@' && R.match(C))
						return (se.tokenize = $), A('jsonld-keyword', 'meta');
					for (; (ne = R.next()) != null && !(ne == T && !ge); )
						ge = !ge && ne == '\\';
					return ge || (se.tokenize = $), A('string', 'string');
				};
			}
			function O(T, R) {
				for (var se = !1, ge; (ge = T.next()); ) {
					if (ge == '/' && se) {
						R.tokenize = $;
						break;
					}
					se = ge == '*';
				}
				return A('comment', 'comment');
			}
			function U(T, R) {
				for (var se = !1, ge; (ge = T.next()) != null; ) {
					if (!se && (ge == '`' || (ge == '$' && T.eat('{')))) {
						R.tokenize = $;
						break;
					}
					se = !se && ge == '\\';
				}
				return A('quasi', 'string-2', T.current());
			}
			var B = '([{}])';
			function te(T, R) {
				R.fatArrowAt && (R.fatArrowAt = null);
				var se = T.string.indexOf('=>', T.start);
				if (!(se < 0)) {
					if (m) {
						var ge = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
							T.string.slice(T.start, se),
						);
						ge && (se = ge.index);
					}
					for (var ne = 0, _e = !1, ft = se - 1; ft >= 0; --ft) {
						var Vt = T.string.charAt(ft),
							bn = B.indexOf(Vt);
						if (bn >= 0 && bn < 3) {
							if (!ne) {
								++ft;
								break;
							}
							if (--ne == 0) {
								Vt == '(' && (_e = !0);
								break;
							}
						} else if (bn >= 3 && bn < 6) ++ne;
						else if (v.test(Vt)) _e = !0;
						else if (/["'\/`]/.test(Vt))
							for (; ; --ft) {
								if (ft == 0) return;
								var jo = T.string.charAt(ft - 1);
								if (jo == Vt && T.string.charAt(ft - 2) != '\\') {
									ft--;
									break;
								}
							}
						else if (_e && !ne) {
							++ft;
							break;
						}
					}
					_e && !ne && (R.fatArrowAt = ft);
				}
			}
			var J = {
				atom: !0,
				number: !0,
				variable: !0,
				string: !0,
				regexp: !0,
				this: !0,
				import: !0,
				'jsonld-keyword': !0,
			};
			function K(T, R, se, ge, ne, _e) {
				(this.indented = T),
					(this.column = R),
					(this.type = se),
					(this.prev = ne),
					(this.info = _e),
					ge != null && (this.align = ge);
			}
			function ee(T, R) {
				if (!p) return !1;
				for (var se = T.localVars; se; se = se.next)
					if (se.name == R) return !0;
				for (var ge = T.context; ge; ge = ge.prev)
					for (var se = ge.vars; se; se = se.next) if (se.name == R) return !0;
			}
			function Y(T, R, se, ge, ne) {
				var _e = T.cc;
				for (
					I.state = T,
						I.stream = ne,
						I.marked = null,
						I.cc = _e,
						I.style = R,
						T.lexical.hasOwnProperty('align') || (T.lexical.align = !0);
					;

				) {
					var ft = _e.length ? _e.pop() : h ? Ae : he;
					if (ft(se, ge)) {
						for (; _e.length && _e[_e.length - 1].lex; ) _e.pop()();
						return I.marked
							? I.marked
							: se == 'variable' && ee(T, ge)
								? 'variable-2'
								: R;
					}
				}
			}
			var I = { state: null, column: null, marked: null, cc: null };
			function F() {
				for (var T = arguments.length - 1; T >= 0; T--) I.cc.push(arguments[T]);
			}
			function k() {
				return F.apply(null, arguments), !0;
			}
			function W(T, R) {
				for (var se = R; se; se = se.next) if (se.name == T) return !0;
				return !1;
			}
			function V(T) {
				var R = I.state;
				if (((I.marked = 'def'), !!p)) {
					if (R.context) {
						if (R.lexical.info == 'var' && R.context && R.context.block) {
							var se = ie(T, R.context);
							if (se != null) {
								R.context = se;
								return;
							}
						} else if (!W(T, R.localVars)) {
							R.localVars = new We(T, R.localVars);
							return;
						}
					}
					s.globalVars &&
						!W(T, R.globalVars) &&
						(R.globalVars = new We(T, R.globalVars));
				}
			}
			function ie(T, R) {
				if (R)
					if (R.block) {
						var se = ie(T, R.prev);
						return se ? (se == R.prev ? R : new Ne(se, R.vars, !0)) : null;
					} else
						return W(T, R.vars) ? R : new Ne(R.prev, new We(T, R.vars), !1);
				else return null;
			}
			function ye(T) {
				return (
					T == 'public' ||
					T == 'private' ||
					T == 'protected' ||
					T == 'abstract' ||
					T == 'readonly'
				);
			}
			function Ne(T, R, se) {
				(this.prev = T), (this.vars = R), (this.block = se);
			}
			function We(T, R) {
				(this.name = T), (this.next = R);
			}
			var Ve = new We('this', new We('arguments', null));
			function nt() {
				(I.state.context = new Ne(I.state.context, I.state.localVars, !1)),
					(I.state.localVars = Ve);
			}
			function et() {
				(I.state.context = new Ne(I.state.context, I.state.localVars, !0)),
					(I.state.localVars = null);
			}
			nt.lex = et.lex = !0;
			function Xe() {
				(I.state.localVars = I.state.context.vars),
					(I.state.context = I.state.context.prev);
			}
			Xe.lex = !0;
			function Le(T, R) {
				var se = function () {
					var ge = I.state,
						ne = ge.indented;
					if (ge.lexical.type == 'stat') ne = ge.lexical.indented;
					else
						for (
							var _e = ge.lexical;
							_e && _e.type == ')' && _e.align;
							_e = _e.prev
						)
							ne = _e.indented;
					ge.lexical = new K(ne, I.stream.column(), T, null, ge.lexical, R);
				};
				return (se.lex = !0), se;
			}
			function Z() {
				var T = I.state;
				T.lexical.prev &&
					(T.lexical.type == ')' && (T.indented = T.lexical.indented),
					(T.lexical = T.lexical.prev));
			}
			Z.lex = !0;
			function ae(T) {
				function R(se) {
					return se == T
						? k()
						: T == ';' || se == '}' || se == ')' || se == ']'
							? F()
							: k(R);
				}
				return R;
			}
			function he(T, R) {
				return T == 'var'
					? k(Le('vardef', R), Fo, ae(';'), Z)
					: T == 'keyword a'
						? k(Le('form'), q, he, Z)
						: T == 'keyword b'
							? k(Le('form'), he, Z)
							: T == 'keyword d'
								? I.stream.match(/^\s*$/, !1)
									? k()
									: k(Le('stat'), le, ae(';'), Z)
								: T == 'debugger'
									? k(ae(';'))
									: T == '{'
										? k(Le('}'), et, It, Z, Xe)
										: T == ';'
											? k()
											: T == 'if'
												? (I.state.lexical.info == 'else' &&
														I.state.cc[I.state.cc.length - 1] == Z &&
														I.state.cc.pop()(),
													k(Le('form'), q, he, Z, Ho))
												: T == 'function'
													? k(rr)
													: T == 'for'
														? k(Le('form'), et, Ma, he, Xe, Z)
														: T == 'class' || (m && R == 'interface')
															? ((I.marked = 'keyword'),
																k(Le('form', T == 'class' ? T : R), qo, Z))
															: T == 'variable'
																? m && R == 'declare'
																	? ((I.marked = 'keyword'), k(he))
																	: m &&
																		  (R == 'module' ||
																				R == 'enum' ||
																				R == 'type') &&
																		  I.stream.match(/^\s*\w/, !1)
																		? ((I.marked = 'keyword'),
																			R == 'enum'
																				? k(Oe)
																				: R == 'type'
																					? k(Na, ae('operator'), Je, ae(';'))
																					: k(
																							Le('form'),
																							yn,
																							ae('{'),
																							Le('}'),
																							It,
																							Z,
																							Z,
																						))
																		: m && R == 'namespace'
																			? ((I.marked = 'keyword'),
																				k(Le('form'), Ae, he, Z))
																			: m && R == 'abstract'
																				? ((I.marked = 'keyword'), k(he))
																				: k(Le('stat'), Ue)
																: T == 'switch'
																	? k(
																			Le('form'),
																			q,
																			ae('{'),
																			Le('}', 'switch'),
																			et,
																			It,
																			Z,
																			Z,
																			Xe,
																		)
																	: T == 'case'
																		? k(Ae, ae(':'))
																		: T == 'default'
																			? k(ae(':'))
																			: T == 'catch'
																				? k(Le('form'), nt, $e, he, Z, Xe)
																				: T == 'export'
																					? k(Le('stat'), Bo, Z)
																					: T == 'import'
																						? k(Le('stat'), ki, Z)
																						: T == 'async'
																							? k(he)
																							: R == '@'
																								? k(Ae, he)
																								: F(Le('stat'), Ae, ae(';'), Z);
			}
			function $e(T) {
				if (T == '(') return k(cr, ae(')'));
			}
			function Ae(T, R) {
				return X(T, R, !1);
			}
			function z(T, R) {
				return X(T, R, !0);
			}
			function q(T) {
				return T != '(' ? F() : k(Le(')'), le, ae(')'), Z);
			}
			function X(T, R, se) {
				if (I.state.fatArrowAt == I.stream.start) {
					var ge = se ? pe : de;
					if (T == '(') return k(nt, Le(')'), st(cr, ')'), Z, ae('=>'), ge, Xe);
					if (T == 'variable') return F(nt, yn, ae('=>'), ge, Xe);
				}
				var ne = se ? ue : fe;
				return J.hasOwnProperty(T)
					? k(ne)
					: T == 'function'
						? k(rr, ne)
						: T == 'class' || (m && R == 'interface')
							? ((I.marked = 'keyword'), k(Le('form'), Jc, Z))
							: T == 'keyword c' || T == 'async'
								? k(se ? z : Ae)
								: T == '('
									? k(Le(')'), le, ae(')'), Z, ne)
									: T == 'operator' || T == 'spread'
										? k(se ? z : Ae)
										: T == '['
											? k(Le(']'), $t, Z, ne)
											: T == '{'
												? Ut(ot, '}', null, ne)
												: T == 'quasi'
													? F(Se, ne)
													: T == 'new'
														? k(Be(se))
														: k();
			}
			function le(T) {
				return T.match(/[;\}\)\],]/) ? F() : F(Ae);
			}
			function fe(T, R) {
				return T == ',' ? k(le) : ue(T, R, !1);
			}
			function ue(T, R, se) {
				var ge = se == !1 ? fe : ue,
					ne = se == !1 ? Ae : z;
				if (T == '=>') return k(nt, se ? pe : de, Xe);
				if (T == 'operator')
					return /\+\+|--/.test(R) || (m && R == '!')
						? k(ge)
						: m && R == '<' && I.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
							? k(Le('>'), st(Je, '>'), Z, ge)
							: R == '?'
								? k(Ae, ae(':'), ne)
								: k(ne);
				if (T == 'quasi') return F(Se, ge);
				if (T != ';') {
					if (T == '(') return Ut(z, ')', 'call', ge);
					if (T == '.') return k(Qe, ge);
					if (T == '[') return k(Le(']'), le, ae(']'), Z, ge);
					if (m && R == 'as') return (I.marked = 'keyword'), k(Je, ge);
					if (T == 'regexp')
						return (
							(I.state.lastType = I.marked = 'operator'),
							I.stream.backUp(I.stream.pos - I.stream.start - 1),
							k(ne)
						);
				}
			}
			function Se(T, R) {
				return T != 'quasi'
					? F()
					: R.slice(R.length - 2) != '${'
						? k(Se)
						: k(le, xe);
			}
			function xe(T) {
				if (T == '}')
					return (I.marked = 'string-2'), (I.state.tokenize = U), k(Se);
			}
			function de(T) {
				return te(I.stream, I.state), F(T == '{' ? he : Ae);
			}
			function pe(T) {
				return te(I.stream, I.state), F(T == '{' ? he : z);
			}
			function Be(T) {
				return function (R) {
					return R == '.'
						? k(T ? De : Ee)
						: R == 'variable' && m
							? k(Rn, T ? ue : fe)
							: F(T ? z : Ae);
				};
			}
			function Ee(T, R) {
				if (R == 'target') return (I.marked = 'keyword'), k(fe);
			}
			function De(T, R) {
				if (R == 'target') return (I.marked = 'keyword'), k(ue);
			}
			function Ue(T) {
				return T == ':' ? k(Z, he) : F(fe, ae(';'), Z);
			}
			function Qe(T) {
				if (T == 'variable') return (I.marked = 'property'), k();
			}
			function ot(T, R) {
				if (T == 'async') return (I.marked = 'property'), k(ot);
				if (T == 'variable' || I.style == 'keyword') {
					if (((I.marked = 'property'), R == 'get' || R == 'set')) return k(lt);
					var se;
					return (
						m &&
							I.state.fatArrowAt == I.stream.start &&
							(se = I.stream.match(/^\s*:\s*/, !1)) &&
							(I.state.fatArrowAt = I.stream.pos + se[0].length),
						k(At)
					);
				} else {
					if (T == 'number' || T == 'string')
						return (I.marked = d ? 'property' : I.style + ' property'), k(At);
					if (T == 'jsonld-keyword') return k(At);
					if (m && ye(R)) return (I.marked = 'keyword'), k(ot);
					if (T == '[') return k(Ae, Pn, ae(']'), At);
					if (T == 'spread') return k(z, At);
					if (R == '*') return (I.marked = 'keyword'), k(ot);
					if (T == ':') return F(At);
				}
			}
			function lt(T) {
				return T != 'variable' ? F(At) : ((I.marked = 'property'), k(rr));
			}
			function At(T) {
				if (T == ':') return k(z);
				if (T == '(') return F(rr);
			}
			function st(T, R, se) {
				function ge(ne, _e) {
					if (se ? se.indexOf(ne) > -1 : ne == ',') {
						var ft = I.state.lexical;
						return (
							ft.info == 'call' && (ft.pos = (ft.pos || 0) + 1),
							k(function (Vt, bn) {
								return Vt == R || bn == R ? F() : F(T);
							}, ge)
						);
					}
					return ne == R || _e == R
						? k()
						: se && se.indexOf(';') > -1
							? F(T)
							: k(ae(R));
				}
				return function (ne, _e) {
					return ne == R || _e == R ? k() : F(T, ge);
				};
			}
			function Ut(T, R, se) {
				for (var ge = 3; ge < arguments.length; ge++) I.cc.push(arguments[ge]);
				return k(Le(R, se), st(T, R), Z);
			}
			function It(T) {
				return T == '}' ? k() : F(he, It);
			}
			function Pn(T, R) {
				if (m) {
					if (T == ':') return k(Je);
					if (R == '?') return k(Pn);
				}
			}
			function Nr(T, R) {
				if (m && (T == ':' || R == 'in')) return k(Je);
			}
			function Dt(T) {
				if (m && T == ':')
					return I.stream.match(/^\s*\w+\s+is\b/, !1) ? k(Ae, On, Je) : k(Je);
			}
			function On(T, R) {
				if (R == 'is') return (I.marked = 'keyword'), k();
			}
			function Je(T, R) {
				if (R == 'keyof' || R == 'typeof' || R == 'infer' || R == 'readonly')
					return (I.marked = 'keyword'), k(R == 'typeof' ? z : Je);
				if (T == 'variable' || R == 'void') return (I.marked = 'type'), k(nr);
				if (R == '|' || R == '&') return k(Je);
				if (T == 'string' || T == 'number' || T == 'atom') return k(nr);
				if (T == '[') return k(Le(']'), st(Je, ']', ','), Z, nr);
				if (T == '{') return k(Le('}'), ze, Z, nr);
				if (T == '(') return k(st(Nt, ')'), Aa, nr);
				if (T == '<') return k(st(Je, '>'), Je);
				if (T == 'quasi') return F(on, nr);
			}
			function Aa(T) {
				if (T == '=>') return k(Je);
			}
			function ze(T) {
				return T.match(/[\}\)\]]/)
					? k()
					: T == ',' || T == ';'
						? k(ze)
						: F(Zr, ze);
			}
			function Zr(T, R) {
				if (T == 'variable' || I.style == 'keyword')
					return (I.marked = 'property'), k(Zr);
				if (R == '?' || T == 'number' || T == 'string') return k(Zr);
				if (T == ':') return k(Je);
				if (T == '[') return k(ae('variable'), Nr, ae(']'), Zr);
				if (T == '(') return F(_i, Zr);
				if (!T.match(/[;\}\)\],]/)) return k();
			}
			function on(T, R) {
				return T != 'quasi'
					? F()
					: R.slice(R.length - 2) != '${'
						? k(on)
						: k(Je, Mt);
			}
			function Mt(T) {
				if (T == '}')
					return (I.marked = 'string-2'), (I.state.tokenize = U), k(on);
			}
			function Nt(T, R) {
				return (T == 'variable' && I.stream.match(/^\s*[?:]/, !1)) || R == '?'
					? k(Nt)
					: T == ':'
						? k(Je)
						: T == 'spread'
							? k(Nt)
							: F(Je);
			}
			function nr(T, R) {
				if (R == '<') return k(Le('>'), st(Je, '>'), Z, nr);
				if (R == '|' || T == '.' || R == '&') return k(Je);
				if (T == '[') return k(Je, ae(']'), nr);
				if (R == 'extends' || R == 'implements')
					return (I.marked = 'keyword'), k(Je);
				if (R == '?') return k(Je, ae(':'), Je);
			}
			function Rn(T, R) {
				if (R == '<') return k(Le('>'), st(Je, '>'), Z, nr);
			}
			function ar() {
				return F(Je, sn);
			}
			function sn(T, R) {
				if (R == '=') return k(Je);
			}
			function Fo(T, R) {
				return R == 'enum'
					? ((I.marked = 'keyword'), k(Oe))
					: F(yn, Pn, ur, Zc);
			}
			function yn(T, R) {
				if (m && ye(R)) return (I.marked = 'keyword'), k(yn);
				if (T == 'variable') return V(R), k();
				if (T == 'spread') return k(yn);
				if (T == '[') return Ut(Ws, ']');
				if (T == '{') return Ut(xi, '}');
			}
			function xi(T, R) {
				return T == 'variable' && !I.stream.match(/^\s*:/, !1)
					? (V(R), k(ur))
					: (T == 'variable' && (I.marked = 'property'),
						T == 'spread'
							? k(yn)
							: T == '}'
								? F()
								: T == '['
									? k(Ae, ae(']'), ae(':'), xi)
									: k(ae(':'), yn, ur));
			}
			function Ws() {
				return F(yn, ur);
			}
			function ur(T, R) {
				if (R == '=') return k(z);
			}
			function Zc(T) {
				if (T == ',') return k(Fo);
			}
			function Ho(T, R) {
				if (T == 'keyword b' && R == 'else')
					return k(Le('form', 'else'), he, Z);
			}
			function Ma(T, R) {
				if (R == 'await') return k(Ma);
				if (T == '(') return k(Le(')'), Us, Z);
			}
			function Us(T) {
				return T == 'var' ? k(Fo, Si) : T == 'variable' ? k(Si) : F(Si);
			}
			function Si(T, R) {
				return T == ')'
					? k()
					: T == ';'
						? k(Si)
						: R == 'in' || R == 'of'
							? ((I.marked = 'keyword'), k(Ae, Si))
							: F(Ae, Si);
			}
			function rr(T, R) {
				if (R == '*') return (I.marked = 'keyword'), k(rr);
				if (T == 'variable') return V(R), k(rr);
				if (T == '(') return k(nt, Le(')'), st(cr, ')'), Z, Dt, he, Xe);
				if (m && R == '<') return k(Le('>'), st(ar, '>'), Z, rr);
			}
			function _i(T, R) {
				if (R == '*') return (I.marked = 'keyword'), k(_i);
				if (T == 'variable') return V(R), k(_i);
				if (T == '(') return k(nt, Le(')'), st(cr, ')'), Z, Dt, Xe);
				if (m && R == '<') return k(Le('>'), st(ar, '>'), Z, _i);
			}
			function Na(T, R) {
				if (T == 'keyword' || T == 'variable')
					return (I.marked = 'type'), k(Na);
				if (R == '<') return k(Le('>'), st(ar, '>'), Z);
			}
			function cr(T, R) {
				return (
					R == '@' && k(Ae, cr),
					T == 'spread'
						? k(cr)
						: m && ye(R)
							? ((I.marked = 'keyword'), k(cr))
							: m && T == 'this'
								? k(Pn, ur)
								: F(yn, Pn, ur)
				);
			}
			function Jc(T, R) {
				return T == 'variable' ? qo(T, R) : fr(T, R);
			}
			function qo(T, R) {
				if (T == 'variable') return V(R), k(fr);
			}
			function fr(T, R) {
				if (R == '<') return k(Le('>'), st(ar, '>'), Z, fr);
				if (R == 'extends' || R == 'implements' || (m && T == ','))
					return (
						R == 'implements' && (I.marked = 'keyword'), k(m ? Je : Ae, fr)
					);
				if (T == '{') return k(Le('}'), dr, Z);
			}
			function dr(T, R) {
				if (
					T == 'async' ||
					(T == 'variable' &&
						(R == 'static' || R == 'get' || R == 'set' || (m && ye(R))) &&
						I.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
				)
					return (I.marked = 'keyword'), k(dr);
				if (T == 'variable' || I.style == 'keyword')
					return (I.marked = 'property'), k(so, dr);
				if (T == 'number' || T == 'string') return k(so, dr);
				if (T == '[') return k(Ae, Pn, ae(']'), so, dr);
				if (R == '*') return (I.marked = 'keyword'), k(dr);
				if (m && T == '(') return F(_i, dr);
				if (T == ';' || T == ',') return k(dr);
				if (T == '}') return k();
				if (R == '@') return k(Ae, dr);
			}
			function so(T, R) {
				if (R == '!' || R == '?') return k(so);
				if (T == ':') return k(Je, ur);
				if (R == '=') return k(z);
				var se = I.state.lexical.prev,
					ge = se && se.info == 'interface';
				return F(ge ? _i : rr);
			}
			function Bo(T, R) {
				return R == '*'
					? ((I.marked = 'keyword'), k(Vo, ae(';')))
					: R == 'default'
						? ((I.marked = 'keyword'), k(Ae, ae(';')))
						: T == '{'
							? k(st(Wo, '}'), Vo, ae(';'))
							: F(he);
			}
			function Wo(T, R) {
				if (R == 'as') return (I.marked = 'keyword'), k(ae('variable'));
				if (T == 'variable') return F(z, Wo);
			}
			function ki(T) {
				return T == 'string'
					? k()
					: T == '('
						? F(Ae)
						: T == '.'
							? F(fe)
							: F(Uo, $r, Vo);
			}
			function Uo(T, R) {
				return T == '{'
					? Ut(Uo, '}')
					: (T == 'variable' && V(R),
						R == '*' && (I.marked = 'keyword'),
						k(Vs));
			}
			function $r(T) {
				if (T == ',') return k(Uo, $r);
			}
			function Vs(T, R) {
				if (R == 'as') return (I.marked = 'keyword'), k(Uo);
			}
			function Vo(T, R) {
				if (R == 'from') return (I.marked = 'keyword'), k(Ae);
			}
			function $t(T) {
				return T == ']' ? k() : F(st(z, ']'));
			}
			function Oe() {
				return F(Le('form'), yn, ae('{'), Le('}'), st(Jr, '}'), Z, Z);
			}
			function Jr() {
				return F(yn, ur);
			}
			function js(T, R) {
				return (
					T.lastType == 'operator' ||
					T.lastType == ',' ||
					w.test(R.charAt(0)) ||
					/[,.]/.test(R.charAt(0))
				);
			}
			function jn(T, R, se) {
				return (
					(R.tokenize == $ &&
						/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
							R.lastType,
						)) ||
					(R.lastType == 'quasi' &&
						/\{\s*$/.test(T.string.slice(0, T.pos - (se || 0))))
				);
			}
			return {
				startState: function (T) {
					var R = {
						tokenize: $,
						lastType: 'sof',
						cc: [],
						lexical: new K((T || 0) - u, 0, 'block', !1),
						localVars: s.localVars,
						context: s.localVars && new Ne(null, null, !1),
						indented: T || 0,
					};
					return (
						s.globalVars &&
							typeof s.globalVars == 'object' &&
							(R.globalVars = s.globalVars),
						R
					);
				},
				token: function (T, R) {
					if (
						(T.sol() &&
							(R.lexical.hasOwnProperty('align') || (R.lexical.align = !1),
							(R.indented = T.indentation()),
							te(T, R)),
						R.tokenize != O && T.eatSpace())
					)
						return null;
					var se = R.tokenize(T, R);
					return E == 'comment'
						? se
						: ((R.lastType =
								E == 'operator' && (N == '++' || N == '--') ? 'incdec' : E),
							Y(R, se, E, N, T));
				},
				indent: function (T, R) {
					if (T.tokenize == O || T.tokenize == U) return r.Pass;
					if (T.tokenize != $) return 0;
					var se = R && R.charAt(0),
						ge = T.lexical,
						ne;
					if (!/^\s*else\b/.test(R))
						for (var _e = T.cc.length - 1; _e >= 0; --_e) {
							var ft = T.cc[_e];
							if (ft == Z) ge = ge.prev;
							else if (ft != Ho && ft != Xe) break;
						}
					for (
						;
						(ge.type == 'stat' || ge.type == 'form') &&
						(se == '}' ||
							((ne = T.cc[T.cc.length - 1]) &&
								(ne == fe || ne == ue) &&
								!/^[,\.=+\-*:?[\(]/.test(R)));

					)
						ge = ge.prev;
					f && ge.type == ')' && ge.prev.type == 'stat' && (ge = ge.prev);
					var Vt = ge.type,
						bn = se == Vt;
					return Vt == 'vardef'
						? ge.indented +
								(T.lastType == 'operator' || T.lastType == ','
									? ge.info.length + 1
									: 0)
						: Vt == 'form' && se == '{'
							? ge.indented
							: Vt == 'form'
								? ge.indented + u
								: Vt == 'stat'
									? ge.indented + (js(T, R) ? f || u : 0)
									: ge.info == 'switch' && !bn && s.doubleIndentSwitch != !1
										? ge.indented + (/^(?:case|default)\b/.test(R) ? u : 2 * u)
										: ge.align
											? ge.column + (bn ? 0 : 1)
											: ge.indented + (bn ? 0 : u);
				},
				electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
				blockCommentStart: h ? null : '/*',
				blockCommentEnd: h ? null : '*/',
				blockCommentContinue: h ? null : ' * ',
				lineComment: h ? null : '//',
				fold: 'brace',
				closeBrackets: '()[]{}\'\'""``',
				helperType: h ? 'json' : 'javascript',
				jsonldMode: d,
				jsonMode: h,
				expressionAllowed: jn,
				skipExpression: function (T) {
					Y(T, 'atom', 'atom', 'true', new r.StringStream('', 2, null));
				},
			};
		}),
			r.registerHelper('wordChars', 'javascript', /[\w$]/),
			r.defineMIME('text/javascript', 'javascript'),
			r.defineMIME('text/ecmascript', 'javascript'),
			r.defineMIME('application/javascript', 'javascript'),
			r.defineMIME('application/x-javascript', 'javascript'),
			r.defineMIME('application/ecmascript', 'javascript'),
			r.defineMIME('application/json', { name: 'javascript', json: !0 }),
			r.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
			r.defineMIME('application/manifest+json', {
				name: 'javascript',
				json: !0,
			}),
			r.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
			r.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
			r.defineMIME('application/typescript', {
				name: 'javascript',
				typescript: !0,
			});
	});
})();
var Pce = $ce.exports,
	Oce = { exports: {} };
(function (e, t) {
	(function (r) {
		r(Bs);
	})(function (r) {
		var o = {
				autoSelfClosers: {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					command: !0,
					embed: !0,
					frame: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0,
					menuitem: !0,
				},
				implicitlyClosed: {
					dd: !0,
					li: !0,
					optgroup: !0,
					option: !0,
					p: !0,
					rp: !0,
					rt: !0,
					tbody: !0,
					td: !0,
					tfoot: !0,
					th: !0,
					tr: !0,
				},
				contextGrabbers: {
					dd: { dd: !0, dt: !0 },
					dt: { dd: !0, dt: !0 },
					li: { li: !0 },
					option: { option: !0, optgroup: !0 },
					optgroup: { optgroup: !0 },
					p: {
						address: !0,
						article: !0,
						aside: !0,
						blockquote: !0,
						dir: !0,
						div: !0,
						dl: !0,
						fieldset: !0,
						footer: !0,
						form: !0,
						h1: !0,
						h2: !0,
						h3: !0,
						h4: !0,
						h5: !0,
						h6: !0,
						header: !0,
						hgroup: !0,
						hr: !0,
						menu: !0,
						nav: !0,
						ol: !0,
						p: !0,
						pre: !0,
						section: !0,
						table: !0,
						ul: !0,
					},
					rp: { rp: !0, rt: !0 },
					rt: { rp: !0, rt: !0 },
					tbody: { tbody: !0, tfoot: !0 },
					td: { td: !0, th: !0 },
					tfoot: { tbody: !0 },
					th: { td: !0, th: !0 },
					thead: { tbody: !0, tfoot: !0 },
					tr: { tr: !0 },
				},
				doNotIndent: { pre: !0 },
				allowUnquoted: !0,
				allowMissing: !0,
				caseFold: !0,
			},
			s = {
				autoSelfClosers: {},
				implicitlyClosed: {},
				contextGrabbers: {},
				doNotIndent: {},
				allowUnquoted: !1,
				allowMissing: !1,
				allowMissingTagName: !1,
				caseFold: !1,
			};
		r.defineMode('xml', function (u, f) {
			var d = u.indentUnit,
				h = {},
				p = f.htmlMode ? o : s;
			for (var m in p) h[m] = p[m];
			for (var m in f) h[m] = f[m];
			var v, b;
			function w(k, W) {
				function V(Ne) {
					return (W.tokenize = Ne), Ne(k, W);
				}
				var ie = k.next();
				if (ie == '<')
					return k.eat('!')
						? k.eat('[')
							? k.match('CDATA[')
								? V(E('atom', ']]>'))
								: null
							: k.match('--')
								? V(E('comment', '-->'))
								: k.match('DOCTYPE', !0, !0)
									? (k.eatWhile(/[\w\._\-]/), V(N(1)))
									: null
						: k.eat('?')
							? (k.eatWhile(/[\w\._\-]/),
								(W.tokenize = E('meta', '?>')),
								'meta')
							: ((v = k.eat('/') ? 'closeTag' : 'openTag'),
								(W.tokenize = C),
								'tag bracket');
				if (ie == '&') {
					var ye;
					return (
						k.eat('#')
							? k.eat('x')
								? (ye = k.eatWhile(/[a-fA-F\d]/) && k.eat(';'))
								: (ye = k.eatWhile(/[\d]/) && k.eat(';'))
							: (ye = k.eatWhile(/[\w\.\-:]/) && k.eat(';')),
						ye ? 'atom' : 'error'
					);
				} else return k.eatWhile(/[^&<]/), null;
			}
			w.isInText = !0;
			function C(k, W) {
				var V = k.next();
				if (V == '>' || (V == '/' && k.eat('>')))
					return (
						(W.tokenize = w),
						(v = V == '>' ? 'endTag' : 'selfcloseTag'),
						'tag bracket'
					);
				if (V == '=') return (v = 'equals'), null;
				if (V == '<') {
					(W.tokenize = w), (W.state = U), (W.tagName = W.tagStart = null);
					var ie = W.tokenize(k, W);
					return ie ? ie + ' tag error' : 'tag error';
				} else
					return /[\'\"]/.test(V)
						? ((W.tokenize = M(V)),
							(W.stringStartCol = k.column()),
							W.tokenize(k, W))
						: (k.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
			}
			function M(k) {
				var W = function (V, ie) {
					for (; !V.eol(); )
						if (V.next() == k) {
							ie.tokenize = C;
							break;
						}
					return 'string';
				};
				return (W.isInAttribute = !0), W;
			}
			function E(k, W) {
				return function (V, ie) {
					for (; !V.eol(); ) {
						if (V.match(W)) {
							ie.tokenize = w;
							break;
						}
						V.next();
					}
					return k;
				};
			}
			function N(k) {
				return function (W, V) {
					for (var ie; (ie = W.next()) != null; ) {
						if (ie == '<') return (V.tokenize = N(k + 1)), V.tokenize(W, V);
						if (ie == '>')
							if (k == 1) {
								V.tokenize = w;
								break;
							} else return (V.tokenize = N(k - 1)), V.tokenize(W, V);
					}
					return 'meta';
				};
			}
			function A(k) {
				return k && k.toLowerCase();
			}
			function $(k, W, V) {
				(this.prev = k.context),
					(this.tagName = W || ''),
					(this.indent = k.indented),
					(this.startOfLine = V),
					(h.doNotIndent.hasOwnProperty(W) ||
						(k.context && k.context.noIndent)) &&
						(this.noIndent = !0);
			}
			function L(k) {
				k.context && (k.context = k.context.prev);
			}
			function O(k, W) {
				for (var V; ; ) {
					if (
						!k.context ||
						((V = k.context.tagName),
						!h.contextGrabbers.hasOwnProperty(A(V)) ||
							!h.contextGrabbers[A(V)].hasOwnProperty(A(W)))
					)
						return;
					L(k);
				}
			}
			function U(k, W, V) {
				return k == 'openTag'
					? ((V.tagStart = W.column()), B)
					: k == 'closeTag'
						? te
						: U;
			}
			function B(k, W, V) {
				return k == 'word'
					? ((V.tagName = W.current()), (b = 'tag'), ee)
					: h.allowMissingTagName && k == 'endTag'
						? ((b = 'tag bracket'), ee(k, W, V))
						: ((b = 'error'), B);
			}
			function te(k, W, V) {
				if (k == 'word') {
					var ie = W.current();
					return (
						V.context &&
							V.context.tagName != ie &&
							h.implicitlyClosed.hasOwnProperty(A(V.context.tagName)) &&
							L(V),
						(V.context && V.context.tagName == ie) || h.matchClosing === !1
							? ((b = 'tag'), J)
							: ((b = 'tag error'), K)
					);
				} else
					return h.allowMissingTagName && k == 'endTag'
						? ((b = 'tag bracket'), J(k, W, V))
						: ((b = 'error'), K);
			}
			function J(k, W, V) {
				return k != 'endTag' ? ((b = 'error'), J) : (L(V), U);
			}
			function K(k, W, V) {
				return (b = 'error'), J(k, W, V);
			}
			function ee(k, W, V) {
				if (k == 'word') return (b = 'attribute'), Y;
				if (k == 'endTag' || k == 'selfcloseTag') {
					var ie = V.tagName,
						ye = V.tagStart;
					return (
						(V.tagName = V.tagStart = null),
						k == 'selfcloseTag' || h.autoSelfClosers.hasOwnProperty(A(ie))
							? O(V, ie)
							: (O(V, ie), (V.context = new $(V, ie, ye == V.indented))),
						U
					);
				}
				return (b = 'error'), ee;
			}
			function Y(k, W, V) {
				return k == 'equals'
					? I
					: (h.allowMissing || (b = 'error'), ee(k, W, V));
			}
			function I(k, W, V) {
				return k == 'string'
					? F
					: k == 'word' && h.allowUnquoted
						? ((b = 'string'), ee)
						: ((b = 'error'), ee(k, W, V));
			}
			function F(k, W, V) {
				return k == 'string' ? F : ee(k, W, V);
			}
			return {
				startState: function (k) {
					var W = {
						tokenize: w,
						state: U,
						indented: k || 0,
						tagName: null,
						tagStart: null,
						context: null,
					};
					return k != null && (W.baseIndent = k), W;
				},
				token: function (k, W) {
					if (
						(!W.tagName && k.sol() && (W.indented = k.indentation()),
						k.eatSpace())
					)
						return null;
					v = null;
					var V = W.tokenize(k, W);
					return (
						(V || v) &&
							V != 'comment' &&
							((b = null),
							(W.state = W.state(v || V, k, W)),
							b && (V = b == 'error' ? V + ' error' : b)),
						V
					);
				},
				indent: function (k, W, V) {
					var ie = k.context;
					if (k.tokenize.isInAttribute)
						return k.tagStart == k.indented
							? k.stringStartCol + 1
							: k.indented + d;
					if (ie && ie.noIndent) return r.Pass;
					if (k.tokenize != C && k.tokenize != w)
						return V ? V.match(/^(\s*)/)[0].length : 0;
					if (k.tagName)
						return h.multilineTagIndentPastTag !== !1
							? k.tagStart + k.tagName.length + 2
							: k.tagStart + d * (h.multilineTagIndentFactor || 1);
					if (h.alignCDATA && /<!\[CDATA\[/.test(W)) return 0;
					var ye = W && /^<(\/)?([\w_:\.-]*)/.exec(W);
					if (ye && ye[1])
						for (; ie; )
							if (ie.tagName == ye[2]) {
								ie = ie.prev;
								break;
							} else if (h.implicitlyClosed.hasOwnProperty(A(ie.tagName)))
								ie = ie.prev;
							else break;
					else if (ye)
						for (; ie; ) {
							var Ne = h.contextGrabbers[A(ie.tagName)];
							if (Ne && Ne.hasOwnProperty(A(ye[2]))) ie = ie.prev;
							else break;
						}
					for (; ie && ie.prev && !ie.startOfLine; ) ie = ie.prev;
					return ie ? ie.indent + d : k.baseIndent || 0;
				},
				electricInput: /<\/[\s\w:]+>$/,
				blockCommentStart: '<!--',
				blockCommentEnd: '-->',
				configuration: h.htmlMode ? 'html' : 'xml',
				helperType: h.htmlMode ? 'html' : 'xml',
				skipAttribute: function (k) {
					k.state == I && (k.state = ee);
				},
				xmlCurrentTag: function (k) {
					return k.tagName
						? { name: k.tagName, close: k.type == 'closeTag' }
						: null;
				},
				xmlCurrentContext: function (k) {
					for (var W = [], V = k.context; V; V = V.prev) W.push(V.tagName);
					return W.reverse();
				},
			};
		}),
			r.defineMIME('text/xml', 'xml'),
			r.defineMIME('application/xml', 'xml'),
			r.mimeModes.hasOwnProperty('text/html') ||
				r.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
	});
})();
var Rce = Oce.exports;
(function (e, t) {
	(function (r) {
		r(Bs, Rce, Pce);
	})(function (r) {
		function o(u, f, d, h) {
			(this.state = u), (this.mode = f), (this.depth = d), (this.prev = h);
		}
		function s(u) {
			return new o(
				r.copyState(u.mode, u.state),
				u.mode,
				u.depth,
				u.prev && s(u.prev),
			);
		}
		r.defineMode(
			'jsx',
			function (u, f) {
				var d = r.getMode(u, {
						name: 'xml',
						allowMissing: !0,
						multilineTagIndentPastTag: !1,
						allowMissingTagName: !0,
					}),
					h = r.getMode(u, (f && f.base) || 'javascript');
				function p(w) {
					var C = w.tagName;
					w.tagName = null;
					var M = d.indent(w, '', '');
					return (w.tagName = C), M;
				}
				function m(w, C) {
					return C.context.mode == d ? v(w, C, C.context) : b(w, C, C.context);
				}
				function v(w, C, M) {
					if (M.depth == 2)
						return (
							w.match(/^.*?\*\//) ? (M.depth = 1) : w.skipToEnd(), 'comment'
						);
					if (w.peek() == '{') {
						d.skipAttribute(M.state);
						var E = p(M.state),
							N = M.state.context;
						if (N && w.match(/^[^>]*>\s*$/, !1)) {
							for (; N.prev && !N.startOfLine; ) N = N.prev;
							N.startOfLine
								? (E -= u.indentUnit)
								: M.prev.state.lexical && (E = M.prev.state.lexical.indented);
						} else M.depth == 1 && (E += u.indentUnit);
						return (
							(C.context = new o(r.startState(h, E), h, 0, C.context)), null
						);
					}
					if (M.depth == 1) {
						if (w.peek() == '<')
							return (
								d.skipAttribute(M.state),
								(C.context = new o(
									r.startState(d, p(M.state)),
									d,
									0,
									C.context,
								)),
								null
							);
						if (w.match('//')) return w.skipToEnd(), 'comment';
						if (w.match('/*')) return (M.depth = 2), m(w, C);
					}
					var A = d.token(w, M.state),
						$ = w.current(),
						L;
					return (
						/\btag\b/.test(A)
							? />$/.test($)
								? M.state.context
									? (M.depth = 0)
									: (C.context = C.context.prev)
								: /^</.test($) && (M.depth = 1)
							: !A && (L = $.indexOf('{')) > -1 && w.backUp($.length - L),
						A
					);
				}
				function b(w, C, M) {
					if (
						w.peek() == '<' &&
						!w.match(/^<([^<>]|<[^>]*>)+,\s*>/, !1) &&
						h.expressionAllowed(w, M.state)
					)
						return (
							(C.context = new o(
								r.startState(d, h.indent(M.state, '', '')),
								d,
								0,
								C.context,
							)),
							h.skipExpression(M.state),
							null
						);
					var E = h.token(w, M.state);
					if (!E && M.depth != null) {
						var N = w.current();
						N == '{'
							? M.depth++
							: N == '}' && --M.depth == 0 && (C.context = C.context.prev);
					}
					return E;
				}
				return {
					startState: function () {
						return { context: new o(r.startState(h), h) };
					},
					copyState: function (w) {
						return { context: s(w.context) };
					},
					token: m,
					indent: function (w, C, M) {
						return w.context.mode.indent(w.context.state, C, M);
					},
					innerMode: function (w) {
						return w.context;
					},
				};
			},
			'xml',
			'javascript',
		),
			r.defineMIME('text/jsx', 'jsx'),
			r.defineMIME('text/typescript-jsx', {
				name: 'jsx',
				base: { name: 'javascript', typescript: !0 },
			});
	});
})();
(function (e, t) {
	(function (r) {
		r(Bs);
	})(function (r) {
		r.defineOption('placeholder', '', function (p, m, v) {
			var b = v && v != r.Init;
			if (m && !b)
				p.on('blur', f),
					p.on('change', d),
					p.on('swapDoc', d),
					r.on(
						p.getInputField(),
						'compositionupdate',
						(p.state.placeholderCompose = function () {
							u(p);
						}),
					),
					d(p);
			else if (!m && b) {
				p.off('blur', f),
					p.off('change', d),
					p.off('swapDoc', d),
					r.off(
						p.getInputField(),
						'compositionupdate',
						p.state.placeholderCompose,
					),
					o(p);
				var w = p.getWrapperElement();
				w.className = w.className.replace(' CodeMirror-empty', '');
			}
			m && !p.hasFocus() && f(p);
		});
		function o(p) {
			p.state.placeholder &&
				(p.state.placeholder.parentNode.removeChild(p.state.placeholder),
				(p.state.placeholder = null));
		}
		function s(p) {
			o(p);
			var m = (p.state.placeholder = document.createElement('pre'));
			(m.style.cssText = 'height: 0; overflow: visible'),
				(m.style.direction = p.getOption('direction')),
				(m.className = 'CodeMirror-placeholder CodeMirror-line-like');
			var v = p.getOption('placeholder');
			typeof v == 'string' && (v = document.createTextNode(v)),
				m.appendChild(v),
				p.display.lineSpace.insertBefore(m, p.display.lineSpace.firstChild);
		}
		function u(p) {
			setTimeout(function () {
				var m = !1;
				if (p.lineCount() == 1) {
					var v = p.getInputField();
					m =
						v.nodeName == 'TEXTAREA'
							? !p.getLine(0).length
							: !/[^\u200b]/.test(
									v.querySelector('.CodeMirror-line').textContent,
								);
				}
				m ? s(p) : o(p);
			}, 20);
		}
		function f(p) {
			h(p) && s(p);
		}
		function d(p) {
			var m = p.getWrapperElement(),
				v = h(p);
			(m.className =
				m.className.replace(' CodeMirror-empty', '') +
				(v ? ' CodeMirror-empty' : '')),
				v ? s(p) : o(p);
		}
		function h(p) {
			return p.lineCount() === 1 && p.getLine(0) === '';
		}
	});
})();
(function (e, t) {
	(function (r) {
		r(Bs);
	})(function (r) {
		function o(f, d, h) {
			(this.orientation = d),
				(this.scroll = h),
				(this.screen = this.total = this.size = 1),
				(this.pos = 0),
				(this.node = document.createElement('div')),
				(this.node.className = f + '-' + d),
				(this.inner = this.node.appendChild(document.createElement('div')));
			var p = this;
			r.on(this.inner, 'mousedown', function (v) {
				if (v.which != 1) return;
				r.e_preventDefault(v);
				var b = p.orientation == 'horizontal' ? 'pageX' : 'pageY',
					w = v[b],
					C = p.pos;
				function M() {
					r.off(document, 'mousemove', E), r.off(document, 'mouseup', M);
				}
				function E(N) {
					if (N.which != 1) return M();
					p.moveTo(C + (N[b] - w) * (p.total / p.size));
				}
				r.on(document, 'mousemove', E), r.on(document, 'mouseup', M);
			}),
				r.on(this.node, 'click', function (v) {
					r.e_preventDefault(v);
					var b = p.inner.getBoundingClientRect(),
						w;
					p.orientation == 'horizontal'
						? (w = v.clientX < b.left ? -1 : v.clientX > b.right ? 1 : 0)
						: (w = v.clientY < b.top ? -1 : v.clientY > b.bottom ? 1 : 0),
						p.moveTo(p.pos + w * p.screen);
				});
			function m(v) {
				var b =
						r.wheelEventPixels(v)[p.orientation == 'horizontal' ? 'x' : 'y'],
					w = p.pos;
				p.moveTo(p.pos + b), p.pos != w && r.e_preventDefault(v);
			}
			r.on(this.node, 'mousewheel', m), r.on(this.node, 'DOMMouseScroll', m);
		}
		(o.prototype.setPos = function (f, d) {
			return (
				f < 0 && (f = 0),
				f > this.total - this.screen && (f = this.total - this.screen),
				!d && f == this.pos
					? !1
					: ((this.pos = f),
						(this.inner.style[
							this.orientation == 'horizontal' ? 'left' : 'top'
						] = f * (this.size / this.total) + 'px'),
						!0)
			);
		}),
			(o.prototype.moveTo = function (f) {
				this.setPos(f) && this.scroll(f, this.orientation);
			});
		var s = 10;
		o.prototype.update = function (f, d, h) {
			var p = this.screen != d || this.total != f || this.size != h;
			p && ((this.screen = d), (this.total = f), (this.size = h));
			var m = this.screen * (this.size / this.total);
			m < s && ((this.size -= s - m), (m = s)),
				(this.inner.style[
					this.orientation == 'horizontal' ? 'width' : 'height'
				] = m + 'px'),
				this.setPos(this.pos, p);
		};
		function u(f, d, h) {
			(this.addClass = f),
				(this.horiz = new o(f, 'horizontal', h)),
				d(this.horiz.node),
				(this.vert = new o(f, 'vertical', h)),
				d(this.vert.node),
				(this.width = null);
		}
		(u.prototype.update = function (f) {
			if (this.width == null) {
				var d = window.getComputedStyle
					? window.getComputedStyle(this.horiz.node)
					: this.horiz.node.currentStyle;
				d && (this.width = parseInt(d.height));
			}
			var h = this.width || 0,
				p = f.scrollWidth > f.clientWidth + 1,
				m = f.scrollHeight > f.clientHeight + 1;
			return (
				(this.vert.node.style.display = m ? 'block' : 'none'),
				(this.horiz.node.style.display = p ? 'block' : 'none'),
				m &&
					(this.vert.update(
						f.scrollHeight,
						f.clientHeight,
						f.viewHeight - (p ? h : 0),
					),
					(this.vert.node.style.bottom = p ? h + 'px' : '0')),
				p &&
					(this.horiz.update(
						f.scrollWidth,
						f.clientWidth,
						f.viewWidth - (m ? h : 0) - f.barLeft,
					),
					(this.horiz.node.style.right = m ? h + 'px' : '0'),
					(this.horiz.node.style.left = f.barLeft + 'px')),
				{ right: m ? h : 0, bottom: p ? h : 0 }
			);
		}),
			(u.prototype.setScrollTop = function (f) {
				this.vert.setPos(f);
			}),
			(u.prototype.setScrollLeft = function (f) {
				this.horiz.setPos(f);
			}),
			(u.prototype.clear = function () {
				var f = this.horiz.node.parentNode;
				f.removeChild(this.horiz.node), f.removeChild(this.vert.node);
			}),
			(r.scrollbarModel.simple = function (f, d) {
				return new u('CodeMirror-simplescroll', f, d);
			}),
			(r.scrollbarModel.overlay = function (f, d) {
				return new u('CodeMirror-overlayscroll', f, d);
			});
	});
})();
const In = Gr();
function Dce(e, t, r = {}) {
	const o = Nce.fromTextArea(e.value, {
		theme: 'vars',
		...r,
		scrollbarStyle: 'simple',
	});
	let s = !1;
	return (
		o.on('change', () => {
			if (s) {
				s = !1;
				return;
			}
			t.value = o.getValue();
		}),
		Et(
			t,
			(u) => {
				if (u !== o.getValue()) {
					s = !0;
					const f = o.listSelections();
					o.replaceRange(
						u,
						o.posFromIndex(0),
						o.posFromIndex(Number.POSITIVE_INFINITY),
					),
						o.setSelections(f);
				}
			},
			{ immediate: !0 },
		),
		Ec(() => {
			In.value = void 0;
		}),
		Eh(o)
	);
}
async function zce(e) {
	var t;
	vw({
		file: e.file.id,
		line: ((t = e.location) == null ? void 0 : t.line) ?? 0,
		view: 'editor',
		test: null,
	});
}
const ex = ct({
		__name: 'CodeMirrorContainer',
		props: Kl(
			{ mode: {}, readOnly: { type: Boolean }, saving: { type: Boolean } },
			{ modelValue: {}, modelModifiers: {} },
		),
		emits: Kl(['save'], ['update:modelValue']),
		setup(e, { emit: t }) {
			const r = t,
				o = Ac(e, 'modelValue'),
				s = pk(),
				u = {
					js: 'javascript',
					mjs: 'javascript',
					cjs: 'javascript',
					ts: { name: 'javascript', typescript: !0 },
					mts: { name: 'javascript', typescript: !0 },
					cts: { name: 'javascript', typescript: !0 },
					jsx: { name: 'javascript', jsx: !0 },
					tsx: { name: 'javascript', typescript: !0, jsx: !0 },
				},
				f = qe();
			return (
				Hs(async () => {
					const d = Dce(f, o, {
						...s,
						mode: u[e.mode || ''] || e.mode,
						readOnly: e.readOnly ? !0 : void 0,
						extraKeys: {
							'Cmd-S': function (h) {
								h.getOption('readOnly') || r('save', h.getValue());
							},
							'Ctrl-S': function (h) {
								h.getOption('readOnly') || r('save', h.getValue());
							},
						},
					});
					d.setSize('100%', '100%'),
						d.clearHistory(),
						(In.value = d),
						setTimeout(() => In.value.refresh(), 100);
				}),
				(d, h) => (
					oe(),
					ve(
						'div',
						{
							relative: '',
							'font-mono': '',
							'text-sm': '',
							class: it([
								'codemirror-scrolls',
								d.saving ? 'codemirror-busy' : void 0,
							]),
						},
						[Q('textarea', { ref_key: 'el', ref: f }, null, 512)],
						2,
					)
				)
			);
		},
	}),
	Ice = ct({
		__name: 'ViewEditor',
		props: { file: {} },
		emits: ['draft'],
		setup(e, { emit: t }) {
			const r = e,
				o = t,
				s = qe(''),
				u = Gr(void 0),
				f = qe(!1),
				d = qe(!0),
				h = qe(!1),
				p = qe();
			Et(
				() => r.file,
				async () => {
					var B;
					if (!h.value) {
						d.value = !0;
						try {
							if (!r.file || !((B = r.file) != null && B.filepath)) {
								(s.value = ''),
									(u.value = s.value),
									(f.value = !1),
									(d.value = !1);
								return;
							}
							(s.value = (await vt.rpc.readTestFile(r.file.filepath)) || ''),
								(u.value = s.value),
								(f.value = !1);
						} catch (te) {
							console.error('cannot fetch file', te);
						}
						await Ot(), (d.value = !1);
					}
				},
				{ immediate: !0 },
			),
				Et(
					() => [d.value, h.value, r.file, gw.value],
					([B, te, J, K]) => {
						!B &&
							!te &&
							(K != null
								? Ot(() => {
										var I;
										const ee = p.value,
											Y = ee ?? { line: K ?? 0, ch: 0 };
										ee
											? (p.value = void 0)
											: ((I = In.value) == null || I.scrollIntoView(Y, 100),
												Ot(() => {
													var F, k;
													(F = In.value) == null || F.focus(),
														(k = In.value) == null || k.setCursor(Y);
												}));
									})
								: Ot(() => {
										var ee;
										(ee = In.value) == null || ee.focus();
									}));
					},
					{ flush: 'post' },
				);
			const m = ke(() => {
					var B, te;
					return (
						((te = (B = r.file) == null ? void 0 : B.filepath) == null
							? void 0
							: te.split(/\./g).pop()) || 'js'
					);
				}),
				v = qe(),
				b = ke(() => {
					var B;
					return (
						((B = r.file) == null
							? void 0
							: B.tasks.filter((te) => {
									var J;
									return (
										((J = te.result) == null ? void 0 : J.state) === 'fail'
									);
								})) || []
					);
				}),
				w = [],
				C = [],
				M = [],
				E = qe(!1);
			function N() {
				M.forEach(([B, te, J]) => {
					B.removeEventListener('click', te), J();
				}),
					(M.length = 0);
			}
			PE(v, () => {
				var B;
				(B = In.value) == null || B.refresh();
			});
			function A() {
				f.value = u.value !== In.value.getValue();
			}
			Et(
				f,
				(B) => {
					o('draft', B);
				},
				{ immediate: !0 },
			);
			function $(B) {
				const te = ((B == null ? void 0 : B.stacks) || []).filter((F) => {
						var k;
						return (
							F.file && F.file === ((k = r.file) == null ? void 0 : k.filepath)
						);
					}),
					J = te == null ? void 0 : te[0];
				if (!J) return;
				const K = document.createElement('div');
				K.className = 'op80 flex gap-x-2 items-center';
				const ee = document.createElement('pre');
				(ee.className = 'c-red-600 dark:c-red-400'),
					(ee.textContent = `${' '.repeat(J.column)}^ ${(B == null ? void 0 : B.nameStr) || B.name}: ${(B == null ? void 0 : B.message) || ''}`),
					K.appendChild(ee);
				const Y = document.createElement('span');
				(Y.className =
					'i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em'),
					(Y.tabIndex = 0),
					(Y.ariaLabel = 'Open in Editor'),
					Nb(Y, { content: 'Open in Editor', placement: 'bottom' }, !1);
				const I = async () => {
					await qw(J.file, J.line, J.column);
				};
				Y.addEventListener('click', I),
					K.appendChild(Y),
					M.push([Y, I, () => Hh(Y)]),
					C.push(In.value.addLineClass(J.line - 1, 'wrap', 'bg-red-500/10')),
					w.push(In.value.addLineWidget(J.line - 1, K));
			}
			const { pause: L, resume: O } = Et(
				[In, b, Ll],
				([B, te, J]) => {
					if (!B) {
						(w.length = 0), (C.length = 0), N();
						return;
					}
					J &&
						(B.off('changes', A),
						N(),
						w.forEach((K) => K.clear()),
						C.forEach((K) =>
							B == null ? void 0 : B.removeLineClass(K, 'wrap'),
						),
						(w.length = 0),
						(C.length = 0),
						setTimeout(() => {
							te.forEach((K) => {
								var ee, Y;
								(Y = (ee = K.result) == null ? void 0 : ee.errors) == null ||
									Y.forEach($);
							}),
								E.value || B.clearHistory(),
								B.on('changes', A);
						}, 100));
				},
				{ flush: 'post' },
			);
			Vh(
				() => [Ll.value, h.value, p.value],
				([B, te], J) => {
					var K;
					B &&
						!te &&
						J &&
						J[2] &&
						((K = In.value) == null || K.setCursor(J[2]));
				},
				{ debounce: 100, flush: 'post' },
			);
			async function U(B) {
				if (h.value) return;
				L(), (h.value = !0), await Ot();
				const te = In.value;
				te && (te.setOption('readOnly', !0), await Ot(), te.refresh()),
					(p.value = te == null ? void 0 : te.getCursor()),
					te == null || te.off('changes', A),
					N(),
					w.forEach((J) => J.clear()),
					C.forEach((J) =>
						te == null ? void 0 : te.removeLineClass(J, 'wrap'),
					),
					(w.length = 0),
					(C.length = 0);
				try {
					(E.value = !0),
						await vt.rpc.saveTestFile(r.file.filepath, B),
						(u.value = B),
						(f.value = !1);
				} catch (J) {
					console.error('error saving file', J);
				}
				E.value || te == null || te.clearHistory();
				try {
					await kv(Ll).toBe(!1, {
						flush: 'sync',
						timeout: 1e3,
						throwOnTimeout: !0,
					}),
						await kv(Ll).toBe(!0, {
							flush: 'sync',
							timeout: 1e3,
							throwOnTimeout: !1,
						});
				} catch {}
				b.value.forEach((J) => {
					var K, ee;
					(ee = (K = J.result) == null ? void 0 : K.errors) == null ||
						ee.forEach($);
				}),
					te == null || te.on('changes', A),
					(h.value = !1),
					await Ot(),
					te && (te.setOption('readOnly', !1), await Ot(), te.refresh()),
					O();
			}
			return (
				Ah(N),
				(B, te) => {
					const J = ex;
					return (
						oe(),
						tt(
							J,
							hi(
								{
									ref_key: 'editor',
									ref: v,
									modelValue: H(s),
									'onUpdate:modelValue':
										te[0] || (te[0] = (K) => (kt(s) ? (s.value = K) : null)),
									'h-full': '',
								},
								{ lineNumbers: !0, readOnly: H(kr), saving: H(h) },
								{ mode: H(m), 'data-testid': 'code-mirror', onSave: U },
							),
							null,
							16,
							['modelValue', 'mode'],
						)
					);
				}
			);
		},
	}),
	Fce = {
		'w-350': '',
		'max-w-screen': '',
		'h-full': '',
		flex: '',
		'flex-col': '',
	},
	Hce = { 'p-4': '', relative: '' },
	qce = { op50: '', 'font-mono': '', 'text-sm': '' },
	Bce = { key: 0, 'p-5': '' },
	Wce = {
		grid: '~ cols-2 rows-[min-content_auto]',
		'overflow-hidden': '',
		'flex-auto': '',
	},
	Uce = { key: 0 },
	Vce = { p: 'x3 y-1', 'bg-overlay': '', border: 'base b t' },
	jce = ct({
		__name: 'ModuleTransformResultView',
		props: { id: {}, projectName: {} },
		emits: ['close'],
		setup(e, { emit: t }) {
			const r = e,
				o = t,
				s = bE(() => vt.rpc.getTransformResult(r.projectName, r.id, !!Do)),
				u = ke(() => {
					var p;
					return ((p = r.id) == null ? void 0 : p.split(/\./g).pop()) || 'js';
				}),
				f = ke(() => {
					var p, m;
					return (
						((m = (p = s.value) == null ? void 0 : p.source) == null
							? void 0
							: m.trim()) || ''
					);
				}),
				d = ke(() => {
					var p, m;
					return (
						((m = (p = s.value) == null ? void 0 : p.code) == null
							? void 0
							: m.replace(/\/\/# sourceMappingURL=.*\n/, '').trim()) || ''
					);
				}),
				h = ke(() => {
					var p, m, v, b;
					return {
						mappings:
							((m = (p = s.value) == null ? void 0 : p.map) == null
								? void 0
								: m.mappings) ?? '',
						version:
							(b = (v = s.value) == null ? void 0 : v.map) == null
								? void 0
								: b.version,
					};
				});
			return (
				tw('Escape', () => {
					o('close');
				}),
				(p, m) => {
					const v = wi,
						b = ex;
					return (
						oe(),
						ve('div', Fce, [
							Q('div', Hce, [
								m[1] || (m[1] = Q('p', null, 'Module Info', -1)),
								Q('p', qce, He(p.id), 1),
								Pe(v, {
									icon: 'i-carbon-close',
									absolute: '',
									'top-5px': '',
									'right-5px': '',
									'text-2xl': '',
									onClick: m[0] || (m[0] = (w) => o('close')),
								}),
							]),
							H(s)
								? (oe(),
									ve(
										ut,
										{ key: 1 },
										[
											Q('div', Wce, [
												m[2] ||
													(m[2] = Q(
														'div',
														{
															p: 'x3 y-1',
															'bg-overlay': '',
															border: 'base b t r',
														},
														' Source ',
														-1,
													)),
												m[3] ||
													(m[3] = Q(
														'div',
														{
															p: 'x3 y-1',
															'bg-overlay': '',
															border: 'base b t',
														},
														' Transformed ',
														-1,
													)),
												Pe(
													b,
													hi(
														{
															'h-full': '',
															'model-value': H(f),
															'read-only': '',
														},
														{ lineNumbers: !0 },
														{ mode: H(u) },
													),
													null,
													16,
													['model-value', 'mode'],
												),
												Pe(
													b,
													hi(
														{
															'h-full': '',
															'model-value': H(d),
															'read-only': '',
														},
														{ lineNumbers: !0 },
														{ mode: H(u) },
													),
													null,
													16,
													['model-value', 'mode'],
												),
											]),
											H(h).mappings !== ''
												? (oe(),
													ve('div', Uce, [
														Q(
															'div',
															Vce,
															' Source map (v' + He(H(h).version) + ') ',
															1,
														),
														Pe(
															b,
															hi(
																{
																	'model-value': H(h).mappings,
																	'read-only': '',
																},
																{ lineNumbers: !0 },
																{ mode: H(u) },
															),
															null,
															16,
															['model-value', 'mode'],
														),
													]))
												: Ke('', !0),
										],
										64,
									))
								: (oe(),
									ve(
										'div',
										Bce,
										' No transform result found for this module. ',
									)),
						])
					);
				}
			);
		},
	});
function Gce(e, t) {
	let r;
	return (...o) => {
		r !== void 0 && clearTimeout(r), (r = setTimeout(() => e(...o), t));
	};
}
var Jd = 'http://www.w3.org/1999/xhtml';
const Kv = {
	svg: 'http://www.w3.org/2000/svg',
	xhtml: Jd,
	xlink: 'http://www.w3.org/1999/xlink',
	xml: 'http://www.w3.org/XML/1998/namespace',
	xmlns: 'http://www.w3.org/2000/xmlns/',
};
function jc(e) {
	var t = (e += ''),
		r = t.indexOf(':');
	return (
		r >= 0 && (t = e.slice(0, r)) !== 'xmlns' && (e = e.slice(r + 1)),
		Kv.hasOwnProperty(t) ? { space: Kv[t], local: e } : e
	);
}
function Kce(e) {
	return function () {
		var t = this.ownerDocument,
			r = this.namespaceURI;
		return r === Jd && t.documentElement.namespaceURI === Jd
			? t.createElement(e)
			: t.createElementNS(r, e);
	};
}
function Xce(e) {
	return function () {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function tx(e) {
	var t = jc(e);
	return (t.local ? Xce : Kce)(t);
}
function Yce() {}
function ep(e) {
	return e == null
		? Yce
		: function () {
				return this.querySelector(e);
			};
}
function Zce(e) {
	typeof e != 'function' && (e = ep(e));
	for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
		for (
			var u = t[s], f = u.length, d = (o[s] = new Array(f)), h, p, m = 0;
			m < f;
			++m
		)
			(h = u[m]) &&
				(p = e.call(h, h.__data__, m, u)) &&
				('__data__' in h && (p.__data__ = h.__data__), (d[m] = p));
	return new tr(o, this._parents);
}
function Jce(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Qce() {
	return [];
}
function nx(e) {
	return e == null
		? Qce
		: function () {
				return this.querySelectorAll(e);
			};
}
function efe(e) {
	return function () {
		return Jce(e.apply(this, arguments));
	};
}
function tfe(e) {
	typeof e == 'function' ? (e = efe(e)) : (e = nx(e));
	for (var t = this._groups, r = t.length, o = [], s = [], u = 0; u < r; ++u)
		for (var f = t[u], d = f.length, h, p = 0; p < d; ++p)
			(h = f[p]) && (o.push(e.call(h, h.__data__, p, f)), s.push(h));
	return new tr(o, s);
}
function rx(e) {
	return function () {
		return this.matches(e);
	};
}
function ix(e) {
	return function (t) {
		return t.matches(e);
	};
}
var nfe = Array.prototype.find;
function rfe(e) {
	return function () {
		return nfe.call(this.children, e);
	};
}
function ife() {
	return this.firstElementChild;
}
function ofe(e) {
	return this.select(e == null ? ife : rfe(typeof e == 'function' ? e : ix(e)));
}
var sfe = Array.prototype.filter;
function lfe() {
	return Array.from(this.children);
}
function afe(e) {
	return function () {
		return sfe.call(this.children, e);
	};
}
function ufe(e) {
	return this.selectAll(
		e == null ? lfe : afe(typeof e == 'function' ? e : ix(e)),
	);
}
function cfe(e) {
	typeof e != 'function' && (e = rx(e));
	for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
		for (var u = t[s], f = u.length, d = (o[s] = []), h, p = 0; p < f; ++p)
			(h = u[p]) && e.call(h, h.__data__, p, u) && d.push(h);
	return new tr(o, this._parents);
}
function ox(e) {
	return new Array(e.length);
}
function ffe() {
	return new tr(this._enter || this._groups.map(ox), this._parents);
}
function cc(e, t) {
	(this.ownerDocument = e.ownerDocument),
		(this.namespaceURI = e.namespaceURI),
		(this._next = null),
		(this._parent = e),
		(this.__data__ = t);
}
cc.prototype = {
	constructor: cc,
	appendChild: function (e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function (e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function (e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function (e) {
		return this._parent.querySelectorAll(e);
	},
};
function dfe(e) {
	return function () {
		return e;
	};
}
function hfe(e, t, r, o, s, u) {
	for (var f = 0, d, h = t.length, p = u.length; f < p; ++f)
		(d = t[f]) ? ((d.__data__ = u[f]), (o[f] = d)) : (r[f] = new cc(e, u[f]));
	for (; f < h; ++f) (d = t[f]) && (s[f] = d);
}
function pfe(e, t, r, o, s, u, f) {
	var d,
		h,
		p = new Map(),
		m = t.length,
		v = u.length,
		b = new Array(m),
		w;
	for (d = 0; d < m; ++d)
		(h = t[d]) &&
			((b[d] = w = f.call(h, h.__data__, d, t) + ''),
			p.has(w) ? (s[d] = h) : p.set(w, h));
	for (d = 0; d < v; ++d)
		(w = f.call(e, u[d], d, u) + ''),
			(h = p.get(w))
				? ((o[d] = h), (h.__data__ = u[d]), p.delete(w))
				: (r[d] = new cc(e, u[d]));
	for (d = 0; d < m; ++d) (h = t[d]) && p.get(b[d]) === h && (s[d] = h);
}
function gfe(e) {
	return e.__data__;
}
function mfe(e, t) {
	if (!arguments.length) return Array.from(this, gfe);
	var r = t ? pfe : hfe,
		o = this._parents,
		s = this._groups;
	typeof e != 'function' && (e = dfe(e));
	for (
		var u = s.length,
			f = new Array(u),
			d = new Array(u),
			h = new Array(u),
			p = 0;
		p < u;
		++p
	) {
		var m = o[p],
			v = s[p],
			b = v.length,
			w = vfe(e.call(m, m && m.__data__, p, o)),
			C = w.length,
			M = (d[p] = new Array(C)),
			E = (f[p] = new Array(C)),
			N = (h[p] = new Array(b));
		r(m, v, M, E, N, w, t);
		for (var A = 0, $ = 0, L, O; A < C; ++A)
			if ((L = M[A])) {
				for (A >= $ && ($ = A + 1); !(O = E[$]) && ++$ < C; );
				L._next = O || null;
			}
	}
	return (f = new tr(f, o)), (f._enter = d), (f._exit = h), f;
}
function vfe(e) {
	return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function yfe() {
	return new tr(this._exit || this._groups.map(ox), this._parents);
}
function bfe(e, t, r) {
	var o = this.enter(),
		s = this,
		u = this.exit();
	return (
		typeof e == 'function'
			? ((o = e(o)), o && (o = o.selection()))
			: (o = o.append(e + '')),
		t != null && ((s = t(s)), s && (s = s.selection())),
		r == null ? u.remove() : r(u),
		o && s ? o.merge(s).order() : s
	);
}
function wfe(e) {
	for (
		var t = e.selection ? e.selection() : e,
			r = this._groups,
			o = t._groups,
			s = r.length,
			u = o.length,
			f = Math.min(s, u),
			d = new Array(s),
			h = 0;
		h < f;
		++h
	)
		for (
			var p = r[h], m = o[h], v = p.length, b = (d[h] = new Array(v)), w, C = 0;
			C < v;
			++C
		)
			(w = p[C] || m[C]) && (b[C] = w);
	for (; h < s; ++h) d[h] = r[h];
	return new tr(d, this._parents);
}
function xfe() {
	for (var e = this._groups, t = -1, r = e.length; ++t < r; )
		for (var o = e[t], s = o.length - 1, u = o[s], f; --s >= 0; )
			(f = o[s]) &&
				(u &&
					f.compareDocumentPosition(u) ^ 4 &&
					u.parentNode.insertBefore(f, u),
				(u = f));
	return this;
}
function Sfe(e) {
	e || (e = _fe);
	function t(v, b) {
		return v && b ? e(v.__data__, b.__data__) : !v - !b;
	}
	for (
		var r = this._groups, o = r.length, s = new Array(o), u = 0;
		u < o;
		++u
	) {
		for (
			var f = r[u], d = f.length, h = (s[u] = new Array(d)), p, m = 0;
			m < d;
			++m
		)
			(p = f[m]) && (h[m] = p);
		h.sort(t);
	}
	return new tr(s, this._parents).order();
}
function _fe(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function kfe() {
	var e = arguments[0];
	return (arguments[0] = this), e.apply(null, arguments), this;
}
function Tfe() {
	return Array.from(this);
}
function Cfe() {
	for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
		for (var o = e[t], s = 0, u = o.length; s < u; ++s) {
			var f = o[s];
			if (f) return f;
		}
	return null;
}
function Efe() {
	let e = 0;
	for (const t of this) ++e;
	return e;
}
function Lfe() {
	return !this.node();
}
function Afe(e) {
	for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
		for (var s = t[r], u = 0, f = s.length, d; u < f; ++u)
			(d = s[u]) && e.call(d, d.__data__, u, s);
	return this;
}
function Mfe(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function Nfe(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function $fe(e, t) {
	return function () {
		this.setAttribute(e, t);
	};
}
function Pfe(e, t) {
	return function () {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Ofe(e, t) {
	return function () {
		var r = t.apply(this, arguments);
		r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
	};
}
function Rfe(e, t) {
	return function () {
		var r = t.apply(this, arguments);
		r == null
			? this.removeAttributeNS(e.space, e.local)
			: this.setAttributeNS(e.space, e.local, r);
	};
}
function Dfe(e, t) {
	var r = jc(e);
	if (arguments.length < 2) {
		var o = this.node();
		return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
	}
	return this.each(
		(t == null
			? r.local
				? Nfe
				: Mfe
			: typeof t == 'function'
				? r.local
					? Rfe
					: Ofe
				: r.local
					? Pfe
					: $fe)(r, t),
	);
}
function sx(e) {
	return (
		(e.ownerDocument && e.ownerDocument.defaultView) ||
		(e.document && e) ||
		e.defaultView
	);
}
function zfe(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function Ife(e, t, r) {
	return function () {
		this.style.setProperty(e, t, r);
	};
}
function Ffe(e, t, r) {
	return function () {
		var o = t.apply(this, arguments);
		o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
	};
}
function Hfe(e, t, r) {
	return arguments.length > 1
		? this.each(
				(t == null ? zfe : typeof t == 'function' ? Ffe : Ife)(e, t, r ?? ''),
			)
		: Ds(this.node(), e);
}
function Ds(e, t) {
	return (
		e.style.getPropertyValue(t) ||
		sx(e).getComputedStyle(e, null).getPropertyValue(t)
	);
}
function qfe(e) {
	return function () {
		delete this[e];
	};
}
function Bfe(e, t) {
	return function () {
		this[e] = t;
	};
}
function Wfe(e, t) {
	return function () {
		var r = t.apply(this, arguments);
		r == null ? delete this[e] : (this[e] = r);
	};
}
function Ufe(e, t) {
	return arguments.length > 1
		? this.each((t == null ? qfe : typeof t == 'function' ? Wfe : Bfe)(e, t))
		: this.node()[e];
}
function lx(e) {
	return e.trim().split(/^|\s+/);
}
function tp(e) {
	return e.classList || new ax(e);
}
function ax(e) {
	(this._node = e), (this._names = lx(e.getAttribute('class') || ''));
}
ax.prototype = {
	add: function (e) {
		var t = this._names.indexOf(e);
		t < 0 &&
			(this._names.push(e),
			this._node.setAttribute('class', this._names.join(' ')));
	},
	remove: function (e) {
		var t = this._names.indexOf(e);
		t >= 0 &&
			(this._names.splice(t, 1),
			this._node.setAttribute('class', this._names.join(' ')));
	},
	contains: function (e) {
		return this._names.indexOf(e) >= 0;
	},
};
function ux(e, t) {
	for (var r = tp(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function cx(e, t) {
	for (var r = tp(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function Vfe(e) {
	return function () {
		ux(this, e);
	};
}
function jfe(e) {
	return function () {
		cx(this, e);
	};
}
function Gfe(e, t) {
	return function () {
		(t.apply(this, arguments) ? ux : cx)(this, e);
	};
}
function Kfe(e, t) {
	var r = lx(e + '');
	if (arguments.length < 2) {
		for (var o = tp(this.node()), s = -1, u = r.length; ++s < u; )
			if (!o.contains(r[s])) return !1;
		return !0;
	}
	return this.each((typeof t == 'function' ? Gfe : t ? Vfe : jfe)(r, t));
}
function Xfe() {
	this.textContent = '';
}
function Yfe(e) {
	return function () {
		this.textContent = e;
	};
}
function Zfe(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.textContent = t ?? '';
	};
}
function Jfe(e) {
	return arguments.length
		? this.each(e == null ? Xfe : (typeof e == 'function' ? Zfe : Yfe)(e))
		: this.node().textContent;
}
function Qfe() {
	this.innerHTML = '';
}
function ede(e) {
	return function () {
		this.innerHTML = e;
	};
}
function tde(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? '';
	};
}
function nde(e) {
	return arguments.length
		? this.each(e == null ? Qfe : (typeof e == 'function' ? tde : ede)(e))
		: this.node().innerHTML;
}
function rde() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function ide() {
	return this.each(rde);
}
function ode() {
	this.previousSibling &&
		this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sde() {
	return this.each(ode);
}
function lde(e) {
	var t = typeof e == 'function' ? e : tx(e);
	return this.select(function () {
		return this.appendChild(t.apply(this, arguments));
	});
}
function ade() {
	return null;
}
function ude(e, t) {
	var r = typeof e == 'function' ? e : tx(e),
		o = t == null ? ade : typeof t == 'function' ? t : ep(t);
	return this.select(function () {
		return this.insertBefore(
			r.apply(this, arguments),
			o.apply(this, arguments) || null,
		);
	});
}
function cde() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function fde() {
	return this.each(cde);
}
function dde() {
	var e = this.cloneNode(!1),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hde() {
	var e = this.cloneNode(!0),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function pde(e) {
	return this.select(e ? hde : dde);
}
function gde(e) {
	return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function mde(e) {
	return function (t) {
		e.call(this, t, this.__data__);
	};
}
function vde(e) {
	return e
		.trim()
		.split(/^|\s+/)
		.map(function (t) {
			var r = '',
				o = t.indexOf('.');
			return (
				o >= 0 && ((r = t.slice(o + 1)), (t = t.slice(0, o))),
				{ type: t, name: r }
			);
		});
}
function yde(e) {
	return function () {
		var t = this.__on;
		if (t) {
			for (var r = 0, o = -1, s = t.length, u; r < s; ++r)
				(u = t[r]),
					(!e.type || u.type === e.type) && u.name === e.name
						? this.removeEventListener(u.type, u.listener, u.options)
						: (t[++o] = u);
			++o ? (t.length = o) : delete this.__on;
		}
	};
}
function bde(e, t, r) {
	return function () {
		var o = this.__on,
			s,
			u = mde(t);
		if (o) {
			for (var f = 0, d = o.length; f < d; ++f)
				if ((s = o[f]).type === e.type && s.name === e.name) {
					this.removeEventListener(s.type, s.listener, s.options),
						this.addEventListener(s.type, (s.listener = u), (s.options = r)),
						(s.value = t);
					return;
				}
		}
		this.addEventListener(e.type, u, r),
			(s = { type: e.type, name: e.name, value: t, listener: u, options: r }),
			o ? o.push(s) : (this.__on = [s]);
	};
}
function wde(e, t, r) {
	var o = vde(e + ''),
		s,
		u = o.length,
		f;
	if (arguments.length < 2) {
		var d = this.node().__on;
		if (d) {
			for (var h = 0, p = d.length, m; h < p; ++h)
				for (s = 0, m = d[h]; s < u; ++s)
					if ((f = o[s]).type === m.type && f.name === m.name) return m.value;
		}
		return;
	}
	for (d = t ? bde : yde, s = 0; s < u; ++s) this.each(d(o[s], t, r));
	return this;
}
function fx(e, t, r) {
	var o = sx(e),
		s = o.CustomEvent;
	typeof s == 'function'
		? (s = new s(t, r))
		: ((s = o.document.createEvent('Event')),
			r
				? (s.initEvent(t, r.bubbles, r.cancelable), (s.detail = r.detail))
				: s.initEvent(t, !1, !1)),
		e.dispatchEvent(s);
}
function xde(e, t) {
	return function () {
		return fx(this, e, t);
	};
}
function Sde(e, t) {
	return function () {
		return fx(this, e, t.apply(this, arguments));
	};
}
function _de(e, t) {
	return this.each((typeof t == 'function' ? Sde : xde)(e, t));
}
function* kde() {
	for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
		for (var o = e[t], s = 0, u = o.length, f; s < u; ++s)
			(f = o[s]) && (yield f);
}
var dx = [null];
function tr(e, t) {
	(this._groups = e), (this._parents = t);
}
function Ca() {
	return new tr([[document.documentElement]], dx);
}
function Tde() {
	return this;
}
tr.prototype = Ca.prototype = {
	constructor: tr,
	select: Zce,
	selectAll: tfe,
	selectChild: ofe,
	selectChildren: ufe,
	filter: cfe,
	data: mfe,
	enter: ffe,
	exit: yfe,
	join: bfe,
	merge: wfe,
	selection: Tde,
	order: xfe,
	sort: Sfe,
	call: kfe,
	nodes: Tfe,
	node: Cfe,
	size: Efe,
	empty: Lfe,
	each: Afe,
	attr: Dfe,
	style: Hfe,
	property: Ufe,
	classed: Kfe,
	text: Jfe,
	html: nde,
	raise: ide,
	lower: sde,
	append: lde,
	insert: ude,
	remove: fde,
	clone: pde,
	datum: gde,
	on: wde,
	dispatch: _de,
	[Symbol.iterator]: kde,
};
function Bn(e) {
	return typeof e == 'string'
		? new tr([[document.querySelector(e)]], [document.documentElement])
		: new tr([[e]], dx);
}
function Cde(e) {
	let t;
	for (; (t = e.sourceEvent); ) e = t;
	return e;
}
function ui(e, t) {
	if (((e = Cde(e)), t === void 0 && (t = e.currentTarget), t)) {
		var r = t.ownerSVGElement || t;
		if (r.createSVGPoint) {
			var o = r.createSVGPoint();
			return (
				(o.x = e.clientX),
				(o.y = e.clientY),
				(o = o.matrixTransform(t.getScreenCTM().inverse())),
				[o.x, o.y]
			);
		}
		if (t.getBoundingClientRect) {
			var s = t.getBoundingClientRect();
			return [
				e.clientX - s.left - t.clientLeft,
				e.clientY - s.top - t.clientTop,
			];
		}
	}
	return [e.pageX, e.pageY];
}
class En {
	constructor(t, r) {
		(this.x = t), (this.y = r);
	}
	static of([t, r]) {
		return new En(t, r);
	}
	add(t) {
		return new En(this.x + t.x, this.y + t.y);
	}
	subtract(t) {
		return new En(this.x - t.x, this.y - t.y);
	}
	multiply(t) {
		return new En(this.x * t, this.y * t);
	}
	divide(t) {
		return new En(this.x / t, this.y / t);
	}
	dot(t) {
		return this.x * t.x + this.y * t.y;
	}
	cross(t) {
		return this.x * t.y - t.x * this.y;
	}
	hadamard(t) {
		return new En(this.x * t.x, this.y * t.y);
	}
	length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
	normalize() {
		const t = this.length();
		return new En(this.x / t, this.y / t);
	}
	rotateByRadians(t) {
		const r = Math.cos(t),
			o = Math.sin(t);
		return new En(this.x * r - this.y * o, this.x * o + this.y * r);
	}
	rotateByDegrees(t) {
		return this.rotateByRadians((t * Math.PI) / 180);
	}
}
var Ede = { value: () => {} };
function Ea() {
	for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
		if (!(o = arguments[e] + '') || o in r || /[\s.]/.test(o))
			throw new Error('illegal type: ' + o);
		r[o] = [];
	}
	return new Du(r);
}
function Du(e) {
	this._ = e;
}
function Lde(e, t) {
	return e
		.trim()
		.split(/^|\s+/)
		.map(function (r) {
			var o = '',
				s = r.indexOf('.');
			if (
				(s >= 0 && ((o = r.slice(s + 1)), (r = r.slice(0, s))),
				r && !t.hasOwnProperty(r))
			)
				throw new Error('unknown type: ' + r);
			return { type: r, name: o };
		});
}
Du.prototype = Ea.prototype = {
	constructor: Du,
	on: function (e, t) {
		var r = this._,
			o = Lde(e + '', r),
			s,
			u = -1,
			f = o.length;
		if (arguments.length < 2) {
			for (; ++u < f; )
				if ((s = (e = o[u]).type) && (s = Ade(r[s], e.name))) return s;
			return;
		}
		if (t != null && typeof t != 'function')
			throw new Error('invalid callback: ' + t);
		for (; ++u < f; )
			if ((s = (e = o[u]).type)) r[s] = Xv(r[s], e.name, t);
			else if (t == null) for (s in r) r[s] = Xv(r[s], e.name, null);
		return this;
	},
	copy: function () {
		var e = {},
			t = this._;
		for (var r in t) e[r] = t[r].slice();
		return new Du(e);
	},
	call: function (e, t) {
		if ((s = arguments.length - 2) > 0)
			for (var r = new Array(s), o = 0, s, u; o < s; ++o)
				r[o] = arguments[o + 2];
		if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
		for (u = this._[e], o = 0, s = u.length; o < s; ++o) u[o].value.apply(t, r);
	},
	apply: function (e, t, r) {
		if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
		for (var o = this._[e], s = 0, u = o.length; s < u; ++s)
			o[s].value.apply(t, r);
	},
};
function Ade(e, t) {
	for (var r = 0, o = e.length, s; r < o; ++r)
		if ((s = e[r]).name === t) return s.value;
}
function Xv(e, t, r) {
	for (var o = 0, s = e.length; o < s; ++o)
		if (e[o].name === t) {
			(e[o] = Ede), (e = e.slice(0, o).concat(e.slice(o + 1)));
			break;
		}
	return r != null && e.push({ name: t, value: r }), e;
}
const Mde = { passive: !1 },
	la = { capture: !0, passive: !1 };
function dd(e) {
	e.stopImmediatePropagation();
}
function Ls(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function hx(e) {
	var t = e.document.documentElement,
		r = Bn(e).on('dragstart.drag', Ls, la);
	'onselectstart' in t
		? r.on('selectstart.drag', Ls, la)
		: ((t.__noselect = t.style.MozUserSelect),
			(t.style.MozUserSelect = 'none'));
}
function px(e, t) {
	var r = e.document.documentElement,
		o = Bn(e).on('dragstart.drag', null);
	t &&
		(o.on('click.drag', Ls, la),
		setTimeout(function () {
			o.on('click.drag', null);
		}, 0)),
		'onselectstart' in r
			? o.on('selectstart.drag', null)
			: ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
}
const wu = (e) => () => e;
function Qd(
	e,
	{
		sourceEvent: t,
		subject: r,
		target: o,
		identifier: s,
		active: u,
		x: f,
		y: d,
		dx: h,
		dy: p,
		dispatch: m,
	},
) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		subject: { value: r, enumerable: !0, configurable: !0 },
		target: { value: o, enumerable: !0, configurable: !0 },
		identifier: { value: s, enumerable: !0, configurable: !0 },
		active: { value: u, enumerable: !0, configurable: !0 },
		x: { value: f, enumerable: !0, configurable: !0 },
		y: { value: d, enumerable: !0, configurable: !0 },
		dx: { value: h, enumerable: !0, configurable: !0 },
		dy: { value: p, enumerable: !0, configurable: !0 },
		_: { value: m },
	});
}
Qd.prototype.on = function () {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function Nde(e) {
	return !e.ctrlKey && !e.button;
}
function $de() {
	return this.parentNode;
}
function Pde(e, t) {
	return t ?? { x: e.x, y: e.y };
}
function Ode() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Rde() {
	var e = Nde,
		t = $de,
		r = Pde,
		o = Ode,
		s = {},
		u = Ea('start', 'drag', 'end'),
		f = 0,
		d,
		h,
		p,
		m,
		v = 0;
	function b(L) {
		L.on('mousedown.drag', w)
			.filter(o)
			.on('touchstart.drag', E)
			.on('touchmove.drag', N, Mde)
			.on('touchend.drag touchcancel.drag', A)
			.style('touch-action', 'none')
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	function w(L, O) {
		if (!(m || !e.call(this, L, O))) {
			var U = $(this, t.call(this, L, O), L, O, 'mouse');
			U &&
				(Bn(L.view).on('mousemove.drag', C, la).on('mouseup.drag', M, la),
				hx(L.view),
				dd(L),
				(p = !1),
				(d = L.clientX),
				(h = L.clientY),
				U('start', L));
		}
	}
	function C(L) {
		if ((Ls(L), !p)) {
			var O = L.clientX - d,
				U = L.clientY - h;
			p = O * O + U * U > v;
		}
		s.mouse('drag', L);
	}
	function M(L) {
		Bn(L.view).on('mousemove.drag mouseup.drag', null),
			px(L.view, p),
			Ls(L),
			s.mouse('end', L);
	}
	function E(L, O) {
		if (e.call(this, L, O)) {
			var U = L.changedTouches,
				B = t.call(this, L, O),
				te = U.length,
				J,
				K;
			for (J = 0; J < te; ++J)
				(K = $(this, B, L, O, U[J].identifier, U[J])) &&
					(dd(L), K('start', L, U[J]));
		}
	}
	function N(L) {
		var O = L.changedTouches,
			U = O.length,
			B,
			te;
		for (B = 0; B < U; ++B)
			(te = s[O[B].identifier]) && (Ls(L), te('drag', L, O[B]));
	}
	function A(L) {
		var O = L.changedTouches,
			U = O.length,
			B,
			te;
		for (
			m && clearTimeout(m),
				m = setTimeout(function () {
					m = null;
				}, 500),
				B = 0;
			B < U;
			++B
		)
			(te = s[O[B].identifier]) && (dd(L), te('end', L, O[B]));
	}
	function $(L, O, U, B, te, J) {
		var K = u.copy(),
			ee = ui(J || U, O),
			Y,
			I,
			F;
		if (
			(F = r.call(
				L,
				new Qd('beforestart', {
					sourceEvent: U,
					target: b,
					identifier: te,
					active: f,
					x: ee[0],
					y: ee[1],
					dx: 0,
					dy: 0,
					dispatch: K,
				}),
				B,
			)) != null
		)
			return (
				(Y = F.x - ee[0] || 0),
				(I = F.y - ee[1] || 0),
				function k(W, V, ie) {
					var ye = ee,
						Ne;
					switch (W) {
						case 'start':
							(s[te] = k), (Ne = f++);
							break;
						case 'end':
							delete s[te], --f;
						case 'drag':
							(ee = ui(ie || V, O)), (Ne = f);
							break;
					}
					K.call(
						W,
						L,
						new Qd(W, {
							sourceEvent: V,
							subject: F,
							target: b,
							identifier: te,
							active: Ne,
							x: ee[0] + Y,
							y: ee[1] + I,
							dx: ee[0] - ye[0],
							dy: ee[1] - ye[1],
							dispatch: K,
						}),
						B,
					);
				}
			);
	}
	return (
		(b.filter = function (L) {
			return arguments.length
				? ((e = typeof L == 'function' ? L : wu(!!L)), b)
				: e;
		}),
		(b.container = function (L) {
			return arguments.length
				? ((t = typeof L == 'function' ? L : wu(L)), b)
				: t;
		}),
		(b.subject = function (L) {
			return arguments.length
				? ((r = typeof L == 'function' ? L : wu(L)), b)
				: r;
		}),
		(b.touchable = function (L) {
			return arguments.length
				? ((o = typeof L == 'function' ? L : wu(!!L)), b)
				: o;
		}),
		(b.on = function () {
			var L = u.on.apply(u, arguments);
			return L === u ? b : L;
		}),
		(b.clickDistance = function (L) {
			return arguments.length ? ((v = (L = +L) * L), b) : Math.sqrt(v);
		}),
		b
	);
}
function np(e, t, r) {
	(e.prototype = t.prototype = r), (r.constructor = e);
}
function gx(e, t) {
	var r = Object.create(e.prototype);
	for (var o in t) r[o] = t[o];
	return r;
}
function La() {}
var aa = 0.7,
	fc = 1 / aa,
	As = '\\s*([+-]?\\d+)\\s*',
	ua = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	Vr = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	Dde = /^#([0-9a-f]{3,8})$/,
	zde = new RegExp(`^rgb\\(${As},${As},${As}\\)$`),
	Ide = new RegExp(`^rgb\\(${Vr},${Vr},${Vr}\\)$`),
	Fde = new RegExp(`^rgba\\(${As},${As},${As},${ua}\\)$`),
	Hde = new RegExp(`^rgba\\(${Vr},${Vr},${Vr},${ua}\\)$`),
	qde = new RegExp(`^hsl\\(${ua},${Vr},${Vr}\\)$`),
	Bde = new RegExp(`^hsla\\(${ua},${Vr},${Vr},${ua}\\)$`),
	Yv = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074,
	};
np(La, ca, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Zv,
	formatHex: Zv,
	formatHex8: Wde,
	formatHsl: Ude,
	formatRgb: Jv,
	toString: Jv,
});
function Zv() {
	return this.rgb().formatHex();
}
function Wde() {
	return this.rgb().formatHex8();
}
function Ude() {
	return mx(this).formatHsl();
}
function Jv() {
	return this.rgb().formatRgb();
}
function ca(e) {
	var t, r;
	return (
		(e = (e + '').trim().toLowerCase()),
		(t = Dde.exec(e))
			? ((r = t[1].length),
				(t = parseInt(t[1], 16)),
				r === 6
					? Qv(t)
					: r === 3
						? new Un(
								((t >> 8) & 15) | ((t >> 4) & 240),
								((t >> 4) & 15) | (t & 240),
								((t & 15) << 4) | (t & 15),
								1,
							)
						: r === 8
							? xu(
									(t >> 24) & 255,
									(t >> 16) & 255,
									(t >> 8) & 255,
									(t & 255) / 255,
								)
							: r === 4
								? xu(
										((t >> 12) & 15) | ((t >> 8) & 240),
										((t >> 8) & 15) | ((t >> 4) & 240),
										((t >> 4) & 15) | (t & 240),
										(((t & 15) << 4) | (t & 15)) / 255,
									)
								: null)
			: (t = zde.exec(e))
				? new Un(t[1], t[2], t[3], 1)
				: (t = Ide.exec(e))
					? new Un(
							(t[1] * 255) / 100,
							(t[2] * 255) / 100,
							(t[3] * 255) / 100,
							1,
						)
					: (t = Fde.exec(e))
						? xu(t[1], t[2], t[3], t[4])
						: (t = Hde.exec(e))
							? xu(
									(t[1] * 255) / 100,
									(t[2] * 255) / 100,
									(t[3] * 255) / 100,
									t[4],
								)
							: (t = qde.exec(e))
								? ny(t[1], t[2] / 100, t[3] / 100, 1)
								: (t = Bde.exec(e))
									? ny(t[1], t[2] / 100, t[3] / 100, t[4])
									: Yv.hasOwnProperty(e)
										? Qv(Yv[e])
										: e === 'transparent'
											? new Un(NaN, NaN, NaN, 0)
											: null
	);
}
function Qv(e) {
	return new Un((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function xu(e, t, r, o) {
	return o <= 0 && (e = t = r = NaN), new Un(e, t, r, o);
}
function Vde(e) {
	return (
		e instanceof La || (e = ca(e)),
		e ? ((e = e.rgb()), new Un(e.r, e.g, e.b, e.opacity)) : new Un()
	);
}
function eh(e, t, r, o) {
	return arguments.length === 1 ? Vde(e) : new Un(e, t, r, o ?? 1);
}
function Un(e, t, r, o) {
	(this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +o);
}
np(
	Un,
	eh,
	gx(La, {
		brighter(e) {
			return (
				(e = e == null ? fc : Math.pow(fc, e)),
				new Un(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		darker(e) {
			return (
				(e = e == null ? aa : Math.pow(aa, e)),
				new Un(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		rgb() {
			return this;
		},
		clamp() {
			return new Un(No(this.r), No(this.g), No(this.b), dc(this.opacity));
		},
		displayable() {
			return (
				-0.5 <= this.r &&
				this.r < 255.5 &&
				-0.5 <= this.g &&
				this.g < 255.5 &&
				-0.5 <= this.b &&
				this.b < 255.5 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		hex: ey,
		formatHex: ey,
		formatHex8: jde,
		formatRgb: ty,
		toString: ty,
	}),
);
function ey() {
	return `#${Eo(this.r)}${Eo(this.g)}${Eo(this.b)}`;
}
function jde() {
	return `#${Eo(this.r)}${Eo(this.g)}${Eo(this.b)}${Eo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ty() {
	const e = dc(this.opacity);
	return `${e === 1 ? 'rgb(' : 'rgba('}${No(this.r)}, ${No(this.g)}, ${No(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function dc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function No(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Eo(e) {
	return (e = No(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function ny(e, t, r, o) {
	return (
		o <= 0
			? (e = t = r = NaN)
			: r <= 0 || r >= 1
				? (e = t = NaN)
				: t <= 0 && (e = NaN),
		new wr(e, t, r, o)
	);
}
function mx(e) {
	if (e instanceof wr) return new wr(e.h, e.s, e.l, e.opacity);
	if ((e instanceof La || (e = ca(e)), !e)) return new wr();
	if (e instanceof wr) return e;
	e = e.rgb();
	var t = e.r / 255,
		r = e.g / 255,
		o = e.b / 255,
		s = Math.min(t, r, o),
		u = Math.max(t, r, o),
		f = NaN,
		d = u - s,
		h = (u + s) / 2;
	return (
		d
			? (t === u
					? (f = (r - o) / d + (r < o) * 6)
					: r === u
						? (f = (o - t) / d + 2)
						: (f = (t - r) / d + 4),
				(d /= h < 0.5 ? u + s : 2 - u - s),
				(f *= 60))
			: (d = h > 0 && h < 1 ? 0 : f),
		new wr(f, d, h, e.opacity)
	);
}
function Gde(e, t, r, o) {
	return arguments.length === 1 ? mx(e) : new wr(e, t, r, o ?? 1);
}
function wr(e, t, r, o) {
	(this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +o);
}
np(
	wr,
	Gde,
	gx(La, {
		brighter(e) {
			return (
				(e = e == null ? fc : Math.pow(fc, e)),
				new wr(this.h, this.s, this.l * e, this.opacity)
			);
		},
		darker(e) {
			return (
				(e = e == null ? aa : Math.pow(aa, e)),
				new wr(this.h, this.s, this.l * e, this.opacity)
			);
		},
		rgb() {
			var e = (this.h % 360) + (this.h < 0) * 360,
				t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
				r = this.l,
				o = r + (r < 0.5 ? r : 1 - r) * t,
				s = 2 * r - o;
			return new Un(
				hd(e >= 240 ? e - 240 : e + 120, s, o),
				hd(e, s, o),
				hd(e < 120 ? e + 240 : e - 120, s, o),
				this.opacity,
			);
		},
		clamp() {
			return new wr(ry(this.h), Su(this.s), Su(this.l), dc(this.opacity));
		},
		displayable() {
			return (
				((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
				0 <= this.l &&
				this.l <= 1 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		formatHsl() {
			const e = dc(this.opacity);
			return `${e === 1 ? 'hsl(' : 'hsla('}${ry(this.h)}, ${Su(this.s) * 100}%, ${Su(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
		},
	}),
);
function ry(e) {
	return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Su(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function hd(e, t, r) {
	return (
		(e < 60
			? t + ((r - t) * e) / 60
			: e < 180
				? r
				: e < 240
					? t + ((r - t) * (240 - e)) / 60
					: t) * 255
	);
}
const vx = (e) => () => e;
function Kde(e, t) {
	return function (r) {
		return e + r * t;
	};
}
function Xde(e, t, r) {
	return (
		(e = Math.pow(e, r)),
		(t = Math.pow(t, r) - e),
		(r = 1 / r),
		function (o) {
			return Math.pow(e + o * t, r);
		}
	);
}
function Yde(e) {
	return (e = +e) == 1
		? yx
		: function (t, r) {
				return r - t ? Xde(t, r, e) : vx(isNaN(t) ? r : t);
			};
}
function yx(e, t) {
	var r = t - e;
	return r ? Kde(e, r) : vx(isNaN(e) ? t : e);
}
const iy = (function e(t) {
	var r = Yde(t);
	function o(s, u) {
		var f = r((s = eh(s)).r, (u = eh(u)).r),
			d = r(s.g, u.g),
			h = r(s.b, u.b),
			p = yx(s.opacity, u.opacity);
		return function (m) {
			return (
				(s.r = f(m)), (s.g = d(m)), (s.b = h(m)), (s.opacity = p(m)), s + ''
			);
		};
	}
	return (o.gamma = e), o;
})(1);
function Ui(e, t) {
	return (
		(e = +e),
		(t = +t),
		function (r) {
			return e * (1 - r) + t * r;
		}
	);
}
var th = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	pd = new RegExp(th.source, 'g');
function Zde(e) {
	return function () {
		return e;
	};
}
function Jde(e) {
	return function (t) {
		return e(t) + '';
	};
}
function Qde(e, t) {
	var r = (th.lastIndex = pd.lastIndex = 0),
		o,
		s,
		u,
		f = -1,
		d = [],
		h = [];
	for (e = e + '', t = t + ''; (o = th.exec(e)) && (s = pd.exec(t)); )
		(u = s.index) > r &&
			((u = t.slice(r, u)), d[f] ? (d[f] += u) : (d[++f] = u)),
			(o = o[0]) === (s = s[0])
				? d[f]
					? (d[f] += s)
					: (d[++f] = s)
				: ((d[++f] = null), h.push({ i: f, x: Ui(o, s) })),
			(r = pd.lastIndex);
	return (
		r < t.length && ((u = t.slice(r)), d[f] ? (d[f] += u) : (d[++f] = u)),
		d.length < 2
			? h[0]
				? Jde(h[0].x)
				: Zde(t)
			: ((t = h.length),
				function (p) {
					for (var m = 0, v; m < t; ++m) d[(v = h[m]).i] = v.x(p);
					return d.join('');
				})
	);
}
var oy = 180 / Math.PI,
	nh = {
		translateX: 0,
		translateY: 0,
		rotate: 0,
		skewX: 0,
		scaleX: 1,
		scaleY: 1,
	};
function bx(e, t, r, o, s, u) {
	var f, d, h;
	return (
		(f = Math.sqrt(e * e + t * t)) && ((e /= f), (t /= f)),
		(h = e * r + t * o) && ((r -= e * h), (o -= t * h)),
		(d = Math.sqrt(r * r + o * o)) && ((r /= d), (o /= d), (h /= d)),
		e * o < t * r && ((e = -e), (t = -t), (h = -h), (f = -f)),
		{
			translateX: s,
			translateY: u,
			rotate: Math.atan2(t, e) * oy,
			skewX: Math.atan(h) * oy,
			scaleX: f,
			scaleY: d,
		}
	);
}
var _u;
function ehe(e) {
	const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(
		e + '',
	);
	return t.isIdentity ? nh : bx(t.a, t.b, t.c, t.d, t.e, t.f);
}
function the(e) {
	return e == null ||
		(_u || (_u = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
		_u.setAttribute('transform', e),
		!(e = _u.transform.baseVal.consolidate()))
		? nh
		: ((e = e.matrix), bx(e.a, e.b, e.c, e.d, e.e, e.f));
}
function wx(e, t, r, o) {
	function s(p) {
		return p.length ? p.pop() + ' ' : '';
	}
	function u(p, m, v, b, w, C) {
		if (p !== v || m !== b) {
			var M = w.push('translate(', null, t, null, r);
			C.push({ i: M - 4, x: Ui(p, v) }, { i: M - 2, x: Ui(m, b) });
		} else (v || b) && w.push('translate(' + v + t + b + r);
	}
	function f(p, m, v, b) {
		p !== m
			? (p - m > 180 ? (m += 360) : m - p > 180 && (p += 360),
				b.push({ i: v.push(s(v) + 'rotate(', null, o) - 2, x: Ui(p, m) }))
			: m && v.push(s(v) + 'rotate(' + m + o);
	}
	function d(p, m, v, b) {
		p !== m
			? b.push({ i: v.push(s(v) + 'skewX(', null, o) - 2, x: Ui(p, m) })
			: m && v.push(s(v) + 'skewX(' + m + o);
	}
	function h(p, m, v, b, w, C) {
		if (p !== v || m !== b) {
			var M = w.push(s(w) + 'scale(', null, ',', null, ')');
			C.push({ i: M - 4, x: Ui(p, v) }, { i: M - 2, x: Ui(m, b) });
		} else (v !== 1 || b !== 1) && w.push(s(w) + 'scale(' + v + ',' + b + ')');
	}
	return function (p, m) {
		var v = [],
			b = [];
		return (
			(p = e(p)),
			(m = e(m)),
			u(p.translateX, p.translateY, m.translateX, m.translateY, v, b),
			f(p.rotate, m.rotate, v, b),
			d(p.skewX, m.skewX, v, b),
			h(p.scaleX, p.scaleY, m.scaleX, m.scaleY, v, b),
			(p = m = null),
			function (w) {
				for (var C = -1, M = b.length, E; ++C < M; ) v[(E = b[C]).i] = E.x(w);
				return v.join('');
			}
		);
	};
}
var nhe = wx(ehe, 'px, ', 'px)', 'deg)'),
	rhe = wx(the, ', ', ')', ')'),
	ihe = 1e-12;
function sy(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ohe(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function she(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const lhe = (function e(t, r, o) {
	function s(u, f) {
		var d = u[0],
			h = u[1],
			p = u[2],
			m = f[0],
			v = f[1],
			b = f[2],
			w = m - d,
			C = v - h,
			M = w * w + C * C,
			E,
			N;
		if (M < ihe)
			(N = Math.log(b / p) / t),
				(E = function (B) {
					return [d + B * w, h + B * C, p * Math.exp(t * B * N)];
				});
		else {
			var A = Math.sqrt(M),
				$ = (b * b - p * p + o * M) / (2 * p * r * A),
				L = (b * b - p * p - o * M) / (2 * b * r * A),
				O = Math.log(Math.sqrt($ * $ + 1) - $),
				U = Math.log(Math.sqrt(L * L + 1) - L);
			(N = (U - O) / t),
				(E = function (B) {
					var te = B * N,
						J = sy(O),
						K = (p / (r * A)) * (J * she(t * te + O) - ohe(O));
					return [d + K * w, h + K * C, (p * J) / sy(t * te + O)];
				});
		}
		return (E.duration = (N * 1e3 * t) / Math.SQRT2), E;
	}
	return (
		(s.rho = function (u) {
			var f = Math.max(0.001, +u),
				d = f * f,
				h = d * d;
			return e(f, d, h);
		}),
		s
	);
})(Math.SQRT2, 2, 4);
var zs = 0,
	Al = 0,
	kl = 0,
	xx = 1e3,
	hc,
	Ml,
	pc = 0,
	zo = 0,
	Gc = 0,
	fa = typeof performance == 'object' && performance.now ? performance : Date,
	Sx =
		typeof window == 'object' && window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: function (e) {
					setTimeout(e, 17);
				};
function rp() {
	return zo || (Sx(ahe), (zo = fa.now() + Gc));
}
function ahe() {
	zo = 0;
}
function gc() {
	this._call = this._time = this._next = null;
}
gc.prototype = ip.prototype = {
	constructor: gc,
	restart: function (e, t, r) {
		if (typeof e != 'function')
			throw new TypeError('callback is not a function');
		(r = (r == null ? rp() : +r) + (t == null ? 0 : +t)),
			!this._next &&
				Ml !== this &&
				(Ml ? (Ml._next = this) : (hc = this), (Ml = this)),
			(this._call = e),
			(this._time = r),
			rh();
	},
	stop: function () {
		this._call && ((this._call = null), (this._time = 1 / 0), rh());
	},
};
function ip(e, t, r) {
	var o = new gc();
	return o.restart(e, t, r), o;
}
function uhe() {
	rp(), ++zs;
	for (var e = hc, t; e; )
		(t = zo - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
	--zs;
}
function ly() {
	(zo = (pc = fa.now()) + Gc), (zs = Al = 0);
	try {
		uhe();
	} finally {
		(zs = 0), fhe(), (zo = 0);
	}
}
function che() {
	var e = fa.now(),
		t = e - pc;
	t > xx && ((Gc -= t), (pc = e));
}
function fhe() {
	for (var e, t = hc, r, o = 1 / 0; t; )
		t._call
			? (o > t._time && (o = t._time), (e = t), (t = t._next))
			: ((r = t._next), (t._next = null), (t = e ? (e._next = r) : (hc = r)));
	(Ml = e), rh(o);
}
function rh(e) {
	if (!zs) {
		Al && (Al = clearTimeout(Al));
		var t = e - zo;
		t > 24
			? (e < 1 / 0 && (Al = setTimeout(ly, e - fa.now() - Gc)),
				kl && (kl = clearInterval(kl)))
			: (kl || ((pc = fa.now()), (kl = setInterval(che, xx))),
				(zs = 1),
				Sx(ly));
	}
}
function ay(e, t, r) {
	var o = new gc();
	return (
		(t = t == null ? 0 : +t),
		o.restart(
			(s) => {
				o.stop(), e(s + t);
			},
			t,
			r,
		),
		o
	);
}
var dhe = Ea('start', 'end', 'cancel', 'interrupt'),
	hhe = [],
	_x = 0,
	uy = 1,
	ih = 2,
	zu = 3,
	cy = 4,
	oh = 5,
	Iu = 6;
function Kc(e, t, r, o, s, u) {
	var f = e.__transition;
	if (!f) e.__transition = {};
	else if (r in f) return;
	phe(e, r, {
		name: t,
		index: o,
		group: s,
		on: dhe,
		tween: hhe,
		time: u.time,
		delay: u.delay,
		duration: u.duration,
		ease: u.ease,
		timer: null,
		state: _x,
	});
}
function op(e, t) {
	var r = Mr(e, t);
	if (r.state > _x) throw new Error('too late; already scheduled');
	return r;
}
function Yr(e, t) {
	var r = Mr(e, t);
	if (r.state > zu) throw new Error('too late; already running');
	return r;
}
function Mr(e, t) {
	var r = e.__transition;
	if (!r || !(r = r[t])) throw new Error('transition not found');
	return r;
}
function phe(e, t, r) {
	var o = e.__transition,
		s;
	(o[t] = r), (r.timer = ip(u, 0, r.time));
	function u(p) {
		(r.state = uy),
			r.timer.restart(f, r.delay, r.time),
			r.delay <= p && f(p - r.delay);
	}
	function f(p) {
		var m, v, b, w;
		if (r.state !== uy) return h();
		for (m in o)
			if (((w = o[m]), w.name === r.name)) {
				if (w.state === zu) return ay(f);
				w.state === cy
					? ((w.state = Iu),
						w.timer.stop(),
						w.on.call('interrupt', e, e.__data__, w.index, w.group),
						delete o[m])
					: +m < t &&
						((w.state = Iu),
						w.timer.stop(),
						w.on.call('cancel', e, e.__data__, w.index, w.group),
						delete o[m]);
			}
		if (
			(ay(function () {
				r.state === zu &&
					((r.state = cy), r.timer.restart(d, r.delay, r.time), d(p));
			}),
			(r.state = ih),
			r.on.call('start', e, e.__data__, r.index, r.group),
			r.state === ih)
		) {
			for (
				r.state = zu, s = new Array((b = r.tween.length)), m = 0, v = -1;
				m < b;
				++m
			)
				(w = r.tween[m].value.call(e, e.__data__, r.index, r.group)) &&
					(s[++v] = w);
			s.length = v + 1;
		}
	}
	function d(p) {
		for (
			var m =
					p < r.duration
						? r.ease.call(null, p / r.duration)
						: (r.timer.restart(h), (r.state = oh), 1),
				v = -1,
				b = s.length;
			++v < b;

		)
			s[v].call(e, m);
		r.state === oh && (r.on.call('end', e, e.__data__, r.index, r.group), h());
	}
	function h() {
		(r.state = Iu), r.timer.stop(), delete o[t];
		for (var p in o) return;
		delete e.__transition;
	}
}
function Fu(e, t) {
	var r = e.__transition,
		o,
		s,
		u = !0,
		f;
	if (r) {
		t = t == null ? null : t + '';
		for (f in r) {
			if ((o = r[f]).name !== t) {
				u = !1;
				continue;
			}
			(s = o.state > ih && o.state < oh),
				(o.state = Iu),
				o.timer.stop(),
				o.on.call(s ? 'interrupt' : 'cancel', e, e.__data__, o.index, o.group),
				delete r[f];
		}
		u && delete e.__transition;
	}
}
function ghe(e) {
	return this.each(function () {
		Fu(this, e);
	});
}
function mhe(e, t) {
	var r, o;
	return function () {
		var s = Yr(this, e),
			u = s.tween;
		if (u !== r) {
			o = r = u;
			for (var f = 0, d = o.length; f < d; ++f)
				if (o[f].name === t) {
					(o = o.slice()), o.splice(f, 1);
					break;
				}
		}
		s.tween = o;
	};
}
function vhe(e, t, r) {
	var o, s;
	if (typeof r != 'function') throw new Error();
	return function () {
		var u = Yr(this, e),
			f = u.tween;
		if (f !== o) {
			s = (o = f).slice();
			for (var d = { name: t, value: r }, h = 0, p = s.length; h < p; ++h)
				if (s[h].name === t) {
					s[h] = d;
					break;
				}
			h === p && s.push(d);
		}
		u.tween = s;
	};
}
function yhe(e, t) {
	var r = this._id;
	if (((e += ''), arguments.length < 2)) {
		for (var o = Mr(this.node(), r).tween, s = 0, u = o.length, f; s < u; ++s)
			if ((f = o[s]).name === e) return f.value;
		return null;
	}
	return this.each((t == null ? mhe : vhe)(r, e, t));
}
function sp(e, t, r) {
	var o = e._id;
	return (
		e.each(function () {
			var s = Yr(this, o);
			(s.value || (s.value = {}))[t] = r.apply(this, arguments);
		}),
		function (s) {
			return Mr(s, o).value[t];
		}
	);
}
function kx(e, t) {
	var r;
	return (
		typeof t == 'number'
			? Ui
			: t instanceof ca
				? iy
				: (r = ca(t))
					? ((t = r), iy)
					: Qde
	)(e, t);
}
function bhe(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function whe(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function xhe(e, t, r) {
	var o,
		s = r + '',
		u;
	return function () {
		var f = this.getAttribute(e);
		return f === s ? null : f === o ? u : (u = t((o = f), r));
	};
}
function She(e, t, r) {
	var o,
		s = r + '',
		u;
	return function () {
		var f = this.getAttributeNS(e.space, e.local);
		return f === s ? null : f === o ? u : (u = t((o = f), r));
	};
}
function _he(e, t, r) {
	var o, s, u;
	return function () {
		var f,
			d = r(this),
			h;
		return d == null
			? void this.removeAttribute(e)
			: ((f = this.getAttribute(e)),
				(h = d + ''),
				f === h
					? null
					: f === o && h === s
						? u
						: ((s = h), (u = t((o = f), d))));
	};
}
function khe(e, t, r) {
	var o, s, u;
	return function () {
		var f,
			d = r(this),
			h;
		return d == null
			? void this.removeAttributeNS(e.space, e.local)
			: ((f = this.getAttributeNS(e.space, e.local)),
				(h = d + ''),
				f === h
					? null
					: f === o && h === s
						? u
						: ((s = h), (u = t((o = f), d))));
	};
}
function The(e, t) {
	var r = jc(e),
		o = r === 'transform' ? rhe : kx;
	return this.attrTween(
		e,
		typeof t == 'function'
			? (r.local ? khe : _he)(r, o, sp(this, 'attr.' + e, t))
			: t == null
				? (r.local ? whe : bhe)(r)
				: (r.local ? She : xhe)(r, o, t),
	);
}
function Che(e, t) {
	return function (r) {
		this.setAttribute(e, t.call(this, r));
	};
}
function Ehe(e, t) {
	return function (r) {
		this.setAttributeNS(e.space, e.local, t.call(this, r));
	};
}
function Lhe(e, t) {
	var r, o;
	function s() {
		var u = t.apply(this, arguments);
		return u !== o && (r = (o = u) && Ehe(e, u)), r;
	}
	return (s._value = t), s;
}
function Ahe(e, t) {
	var r, o;
	function s() {
		var u = t.apply(this, arguments);
		return u !== o && (r = (o = u) && Che(e, u)), r;
	}
	return (s._value = t), s;
}
function Mhe(e, t) {
	var r = 'attr.' + e;
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != 'function') throw new Error();
	var o = jc(e);
	return this.tween(r, (o.local ? Lhe : Ahe)(o, t));
}
function Nhe(e, t) {
	return function () {
		op(this, e).delay = +t.apply(this, arguments);
	};
}
function $he(e, t) {
	return (
		(t = +t),
		function () {
			op(this, e).delay = t;
		}
	);
}
function Phe(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? Nhe : $he)(t, e))
		: Mr(this.node(), t).delay;
}
function Ohe(e, t) {
	return function () {
		Yr(this, e).duration = +t.apply(this, arguments);
	};
}
function Rhe(e, t) {
	return (
		(t = +t),
		function () {
			Yr(this, e).duration = t;
		}
	);
}
function Dhe(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? Ohe : Rhe)(t, e))
		: Mr(this.node(), t).duration;
}
function zhe(e, t) {
	if (typeof t != 'function') throw new Error();
	return function () {
		Yr(this, e).ease = t;
	};
}
function Ihe(e) {
	var t = this._id;
	return arguments.length ? this.each(zhe(t, e)) : Mr(this.node(), t).ease;
}
function Fhe(e, t) {
	return function () {
		var r = t.apply(this, arguments);
		if (typeof r != 'function') throw new Error();
		Yr(this, e).ease = r;
	};
}
function Hhe(e) {
	if (typeof e != 'function') throw new Error();
	return this.each(Fhe(this._id, e));
}
function qhe(e) {
	typeof e != 'function' && (e = rx(e));
	for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
		for (var u = t[s], f = u.length, d = (o[s] = []), h, p = 0; p < f; ++p)
			(h = u[p]) && e.call(h, h.__data__, p, u) && d.push(h);
	return new vi(o, this._parents, this._name, this._id);
}
function Bhe(e) {
	if (e._id !== this._id) throw new Error();
	for (
		var t = this._groups,
			r = e._groups,
			o = t.length,
			s = r.length,
			u = Math.min(o, s),
			f = new Array(o),
			d = 0;
		d < u;
		++d
	)
		for (
			var h = t[d], p = r[d], m = h.length, v = (f[d] = new Array(m)), b, w = 0;
			w < m;
			++w
		)
			(b = h[w] || p[w]) && (v[w] = b);
	for (; d < o; ++d) f[d] = t[d];
	return new vi(f, this._parents, this._name, this._id);
}
function Whe(e) {
	return (e + '')
		.trim()
		.split(/^|\s+/)
		.every(function (t) {
			var r = t.indexOf('.');
			return r >= 0 && (t = t.slice(0, r)), !t || t === 'start';
		});
}
function Uhe(e, t, r) {
	var o,
		s,
		u = Whe(t) ? op : Yr;
	return function () {
		var f = u(this, e),
			d = f.on;
		d !== o && (s = (o = d).copy()).on(t, r), (f.on = s);
	};
}
function Vhe(e, t) {
	var r = this._id;
	return arguments.length < 2
		? Mr(this.node(), r).on.on(e)
		: this.each(Uhe(r, e, t));
}
function jhe(e) {
	return function () {
		var t = this.parentNode;
		for (var r in this.__transition) if (+r !== e) return;
		t && t.removeChild(this);
	};
}
function Ghe() {
	return this.on('end.remove', jhe(this._id));
}
function Khe(e) {
	var t = this._name,
		r = this._id;
	typeof e != 'function' && (e = ep(e));
	for (var o = this._groups, s = o.length, u = new Array(s), f = 0; f < s; ++f)
		for (
			var d = o[f], h = d.length, p = (u[f] = new Array(h)), m, v, b = 0;
			b < h;
			++b
		)
			(m = d[b]) &&
				(v = e.call(m, m.__data__, b, d)) &&
				('__data__' in m && (v.__data__ = m.__data__),
				(p[b] = v),
				Kc(p[b], t, r, b, p, Mr(m, r)));
	return new vi(u, this._parents, t, r);
}
function Xhe(e) {
	var t = this._name,
		r = this._id;
	typeof e != 'function' && (e = nx(e));
	for (var o = this._groups, s = o.length, u = [], f = [], d = 0; d < s; ++d)
		for (var h = o[d], p = h.length, m, v = 0; v < p; ++v)
			if ((m = h[v])) {
				for (
					var b = e.call(m, m.__data__, v, h),
						w,
						C = Mr(m, r),
						M = 0,
						E = b.length;
					M < E;
					++M
				)
					(w = b[M]) && Kc(w, t, r, M, b, C);
				u.push(b), f.push(m);
			}
	return new vi(u, f, t, r);
}
var Yhe = Ca.prototype.constructor;
function Zhe() {
	return new Yhe(this._groups, this._parents);
}
function Jhe(e, t) {
	var r, o, s;
	return function () {
		var u = Ds(this, e),
			f = (this.style.removeProperty(e), Ds(this, e));
		return u === f ? null : u === r && f === o ? s : (s = t((r = u), (o = f)));
	};
}
function Tx(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function Qhe(e, t, r) {
	var o,
		s = r + '',
		u;
	return function () {
		var f = Ds(this, e);
		return f === s ? null : f === o ? u : (u = t((o = f), r));
	};
}
function epe(e, t, r) {
	var o, s, u;
	return function () {
		var f = Ds(this, e),
			d = r(this),
			h = d + '';
		return (
			d == null && (h = d = (this.style.removeProperty(e), Ds(this, e))),
			f === h ? null : f === o && h === s ? u : ((s = h), (u = t((o = f), d)))
		);
	};
}
function tpe(e, t) {
	var r,
		o,
		s,
		u = 'style.' + t,
		f = 'end.' + u,
		d;
	return function () {
		var h = Yr(this, e),
			p = h.on,
			m = h.value[u] == null ? d || (d = Tx(t)) : void 0;
		(p !== r || s !== m) && (o = (r = p).copy()).on(f, (s = m)), (h.on = o);
	};
}
function npe(e, t, r) {
	var o = (e += '') == 'transform' ? nhe : kx;
	return t == null
		? this.styleTween(e, Jhe(e, o)).on('end.style.' + e, Tx(e))
		: typeof t == 'function'
			? this.styleTween(e, epe(e, o, sp(this, 'style.' + e, t))).each(
					tpe(this._id, e),
				)
			: this.styleTween(e, Qhe(e, o, t), r).on('end.style.' + e, null);
}
function rpe(e, t, r) {
	return function (o) {
		this.style.setProperty(e, t.call(this, o), r);
	};
}
function ipe(e, t, r) {
	var o, s;
	function u() {
		var f = t.apply(this, arguments);
		return f !== s && (o = (s = f) && rpe(e, f, r)), o;
	}
	return (u._value = t), u;
}
function ope(e, t, r) {
	var o = 'style.' + (e += '');
	if (arguments.length < 2) return (o = this.tween(o)) && o._value;
	if (t == null) return this.tween(o, null);
	if (typeof t != 'function') throw new Error();
	return this.tween(o, ipe(e, t, r ?? ''));
}
function spe(e) {
	return function () {
		this.textContent = e;
	};
}
function lpe(e) {
	return function () {
		var t = e(this);
		this.textContent = t ?? '';
	};
}
function ape(e) {
	return this.tween(
		'text',
		typeof e == 'function'
			? lpe(sp(this, 'text', e))
			: spe(e == null ? '' : e + ''),
	);
}
function upe(e) {
	return function (t) {
		this.textContent = e.call(this, t);
	};
}
function cpe(e) {
	var t, r;
	function o() {
		var s = e.apply(this, arguments);
		return s !== r && (t = (r = s) && upe(s)), t;
	}
	return (o._value = e), o;
}
function fpe(e) {
	var t = 'text';
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != 'function') throw new Error();
	return this.tween(t, cpe(e));
}
function dpe() {
	for (
		var e = this._name,
			t = this._id,
			r = Cx(),
			o = this._groups,
			s = o.length,
			u = 0;
		u < s;
		++u
	)
		for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
			if ((h = f[p])) {
				var m = Mr(h, t);
				Kc(h, e, r, p, f, {
					time: m.time + m.delay + m.duration,
					delay: 0,
					duration: m.duration,
					ease: m.ease,
				});
			}
	return new vi(o, this._parents, e, r);
}
function hpe() {
	var e,
		t,
		r = this,
		o = r._id,
		s = r.size();
	return new Promise(function (u, f) {
		var d = { value: f },
			h = {
				value: function () {
					--s === 0 && u();
				},
			};
		r.each(function () {
			var p = Yr(this, o),
				m = p.on;
			m !== e &&
				((t = (e = m).copy()),
				t._.cancel.push(d),
				t._.interrupt.push(d),
				t._.end.push(h)),
				(p.on = t);
		}),
			s === 0 && u();
	});
}
var ppe = 0;
function vi(e, t, r, o) {
	(this._groups = e), (this._parents = t), (this._name = r), (this._id = o);
}
function Cx() {
	return ++ppe;
}
var si = Ca.prototype;
vi.prototype = {
	constructor: vi,
	select: Khe,
	selectAll: Xhe,
	selectChild: si.selectChild,
	selectChildren: si.selectChildren,
	filter: qhe,
	merge: Bhe,
	selection: Zhe,
	transition: dpe,
	call: si.call,
	nodes: si.nodes,
	node: si.node,
	size: si.size,
	empty: si.empty,
	each: si.each,
	on: Vhe,
	attr: The,
	attrTween: Mhe,
	style: npe,
	styleTween: ope,
	text: ape,
	textTween: fpe,
	remove: Ghe,
	tween: yhe,
	delay: Phe,
	duration: Dhe,
	ease: Ihe,
	easeVarying: Hhe,
	end: hpe,
	[Symbol.iterator]: si[Symbol.iterator],
};
function gpe(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var mpe = { time: null, delay: 0, duration: 250, ease: gpe };
function vpe(e, t) {
	for (var r; !(r = e.__transition) || !(r = r[t]); )
		if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
	return r;
}
function ype(e) {
	var t, r;
	e instanceof vi
		? ((t = e._id), (e = e._name))
		: ((t = Cx()), ((r = mpe).time = rp()), (e = e == null ? null : e + ''));
	for (var o = this._groups, s = o.length, u = 0; u < s; ++u)
		for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
			(h = f[p]) && Kc(h, e, t, p, f, r || vpe(h, t));
	return new vi(o, this._parents, e, t);
}
Ca.prototype.interrupt = ghe;
Ca.prototype.transition = ype;
const ku = (e) => () => e;
function bpe(e, { sourceEvent: t, target: r, transform: o, dispatch: s }) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		target: { value: r, enumerable: !0, configurable: !0 },
		transform: { value: o, enumerable: !0, configurable: !0 },
		_: { value: s },
	});
}
function di(e, t, r) {
	(this.k = e), (this.x = t), (this.y = r);
}
di.prototype = {
	constructor: di,
	scale: function (e) {
		return e === 1 ? this : new di(this.k * e, this.x, this.y);
	},
	translate: function (e, t) {
		return (e === 0) & (t === 0)
			? this
			: new di(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function (e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function (e) {
		return e * this.k + this.x;
	},
	applyY: function (e) {
		return e * this.k + this.y;
	},
	invert: function (e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function (e) {
		return (e - this.x) / this.k;
	},
	invertY: function (e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function (e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function (e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function () {
		return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
	},
};
var lp = new di(1, 0, 0);
di.prototype;
function gd(e) {
	e.stopImmediatePropagation();
}
function Tl(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function wpe(e) {
	return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function xpe() {
	var e = this;
	return e instanceof SVGElement
		? ((e = e.ownerSVGElement || e),
			e.hasAttribute('viewBox')
				? ((e = e.viewBox.baseVal),
					[
						[e.x, e.y],
						[e.x + e.width, e.y + e.height],
					])
				: [
						[0, 0],
						[e.width.baseVal.value, e.height.baseVal.value],
					])
		: [
				[0, 0],
				[e.clientWidth, e.clientHeight],
			];
}
function fy() {
	return this.__zoom || lp;
}
function Spe(e) {
	return (
		-e.deltaY *
		(e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
		(e.ctrlKey ? 10 : 1)
	);
}
function _pe() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function kpe(e, t, r) {
	var o = e.invertX(t[0][0]) - r[0][0],
		s = e.invertX(t[1][0]) - r[1][0],
		u = e.invertY(t[0][1]) - r[0][1],
		f = e.invertY(t[1][1]) - r[1][1];
	return e.translate(
		s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
		f > u ? (u + f) / 2 : Math.min(0, u) || Math.max(0, f),
	);
}
function Tpe() {
	var e = wpe,
		t = xpe,
		r = kpe,
		o = Spe,
		s = _pe,
		u = [0, 1 / 0],
		f = [
			[-1 / 0, -1 / 0],
			[1 / 0, 1 / 0],
		],
		d = 250,
		h = lhe,
		p = Ea('start', 'zoom', 'end'),
		m,
		v,
		b,
		w = 500,
		C = 150,
		M = 0,
		E = 10;
	function N(F) {
		F.property('__zoom', fy)
			.on('wheel.zoom', te, { passive: !1 })
			.on('mousedown.zoom', J)
			.on('dblclick.zoom', K)
			.filter(s)
			.on('touchstart.zoom', ee)
			.on('touchmove.zoom', Y)
			.on('touchend.zoom touchcancel.zoom', I)
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	(N.transform = function (F, k, W, V) {
		var ie = F.selection ? F.selection() : F;
		ie.property('__zoom', fy),
			F !== ie
				? O(F, k, W, V)
				: ie.interrupt().each(function () {
						U(this, arguments)
							.event(V)
							.start()
							.zoom(null, typeof k == 'function' ? k.apply(this, arguments) : k)
							.end();
					});
	}),
		(N.scaleBy = function (F, k, W, V) {
			N.scaleTo(
				F,
				function () {
					var ie = this.__zoom.k,
						ye = typeof k == 'function' ? k.apply(this, arguments) : k;
					return ie * ye;
				},
				W,
				V,
			);
		}),
		(N.scaleTo = function (F, k, W, V) {
			N.transform(
				F,
				function () {
					var ie = t.apply(this, arguments),
						ye = this.__zoom,
						Ne =
							W == null
								? L(ie)
								: typeof W == 'function'
									? W.apply(this, arguments)
									: W,
						We = ye.invert(Ne),
						Ve = typeof k == 'function' ? k.apply(this, arguments) : k;
					return r($(A(ye, Ve), Ne, We), ie, f);
				},
				W,
				V,
			);
		}),
		(N.translateBy = function (F, k, W, V) {
			N.transform(
				F,
				function () {
					return r(
						this.__zoom.translate(
							typeof k == 'function' ? k.apply(this, arguments) : k,
							typeof W == 'function' ? W.apply(this, arguments) : W,
						),
						t.apply(this, arguments),
						f,
					);
				},
				null,
				V,
			);
		}),
		(N.translateTo = function (F, k, W, V, ie) {
			N.transform(
				F,
				function () {
					var ye = t.apply(this, arguments),
						Ne = this.__zoom,
						We =
							V == null
								? L(ye)
								: typeof V == 'function'
									? V.apply(this, arguments)
									: V;
					return r(
						lp
							.translate(We[0], We[1])
							.scale(Ne.k)
							.translate(
								typeof k == 'function' ? -k.apply(this, arguments) : -k,
								typeof W == 'function' ? -W.apply(this, arguments) : -W,
							),
						ye,
						f,
					);
				},
				V,
				ie,
			);
		});
	function A(F, k) {
		return (
			(k = Math.max(u[0], Math.min(u[1], k))),
			k === F.k ? F : new di(k, F.x, F.y)
		);
	}
	function $(F, k, W) {
		var V = k[0] - W[0] * F.k,
			ie = k[1] - W[1] * F.k;
		return V === F.x && ie === F.y ? F : new di(F.k, V, ie);
	}
	function L(F) {
		return [(+F[0][0] + +F[1][0]) / 2, (+F[0][1] + +F[1][1]) / 2];
	}
	function O(F, k, W, V) {
		F.on('start.zoom', function () {
			U(this, arguments).event(V).start();
		})
			.on('interrupt.zoom end.zoom', function () {
				U(this, arguments).event(V).end();
			})
			.tween('zoom', function () {
				var ie = this,
					ye = arguments,
					Ne = U(ie, ye).event(V),
					We = t.apply(ie, ye),
					Ve = W == null ? L(We) : typeof W == 'function' ? W.apply(ie, ye) : W,
					nt = Math.max(We[1][0] - We[0][0], We[1][1] - We[0][1]),
					et = ie.__zoom,
					Xe = typeof k == 'function' ? k.apply(ie, ye) : k,
					Le = h(
						et.invert(Ve).concat(nt / et.k),
						Xe.invert(Ve).concat(nt / Xe.k),
					);
				return function (Z) {
					if (Z === 1) Z = Xe;
					else {
						var ae = Le(Z),
							he = nt / ae[2];
						Z = new di(he, Ve[0] - ae[0] * he, Ve[1] - ae[1] * he);
					}
					Ne.zoom(null, Z);
				};
			});
	}
	function U(F, k, W) {
		return (!W && F.__zooming) || new B(F, k);
	}
	function B(F, k) {
		(this.that = F),
			(this.args = k),
			(this.active = 0),
			(this.sourceEvent = null),
			(this.extent = t.apply(F, k)),
			(this.taps = 0);
	}
	B.prototype = {
		event: function (F) {
			return F && (this.sourceEvent = F), this;
		},
		start: function () {
			return (
				++this.active === 1 &&
					((this.that.__zooming = this), this.emit('start')),
				this
			);
		},
		zoom: function (F, k) {
			return (
				this.mouse &&
					F !== 'mouse' &&
					(this.mouse[1] = k.invert(this.mouse[0])),
				this.touch0 &&
					F !== 'touch' &&
					(this.touch0[1] = k.invert(this.touch0[0])),
				this.touch1 &&
					F !== 'touch' &&
					(this.touch1[1] = k.invert(this.touch1[0])),
				(this.that.__zoom = k),
				this.emit('zoom'),
				this
			);
		},
		end: function () {
			return (
				--this.active === 0 && (delete this.that.__zooming, this.emit('end')),
				this
			);
		},
		emit: function (F) {
			var k = Bn(this.that).datum();
			p.call(
				F,
				this.that,
				new bpe(F, {
					sourceEvent: this.sourceEvent,
					target: N,
					type: F,
					transform: this.that.__zoom,
					dispatch: p,
				}),
				k,
			);
		},
	};
	function te(F, ...k) {
		if (!e.apply(this, arguments)) return;
		var W = U(this, k).event(F),
			V = this.__zoom,
			ie = Math.max(
				u[0],
				Math.min(u[1], V.k * Math.pow(2, o.apply(this, arguments))),
			),
			ye = ui(F);
		if (W.wheel)
			(W.mouse[0][0] !== ye[0] || W.mouse[0][1] !== ye[1]) &&
				(W.mouse[1] = V.invert((W.mouse[0] = ye))),
				clearTimeout(W.wheel);
		else {
			if (V.k === ie) return;
			(W.mouse = [ye, V.invert(ye)]), Fu(this), W.start();
		}
		Tl(F),
			(W.wheel = setTimeout(Ne, C)),
			W.zoom('mouse', r($(A(V, ie), W.mouse[0], W.mouse[1]), W.extent, f));
		function Ne() {
			(W.wheel = null), W.end();
		}
	}
	function J(F, ...k) {
		if (b || !e.apply(this, arguments)) return;
		var W = F.currentTarget,
			V = U(this, k, !0).event(F),
			ie = Bn(F.view).on('mousemove.zoom', Ve, !0).on('mouseup.zoom', nt, !0),
			ye = ui(F, W),
			Ne = F.clientX,
			We = F.clientY;
		hx(F.view),
			gd(F),
			(V.mouse = [ye, this.__zoom.invert(ye)]),
			Fu(this),
			V.start();
		function Ve(et) {
			if ((Tl(et), !V.moved)) {
				var Xe = et.clientX - Ne,
					Le = et.clientY - We;
				V.moved = Xe * Xe + Le * Le > M;
			}
			V.event(et).zoom(
				'mouse',
				r($(V.that.__zoom, (V.mouse[0] = ui(et, W)), V.mouse[1]), V.extent, f),
			);
		}
		function nt(et) {
			ie.on('mousemove.zoom mouseup.zoom', null),
				px(et.view, V.moved),
				Tl(et),
				V.event(et).end();
		}
	}
	function K(F, ...k) {
		if (e.apply(this, arguments)) {
			var W = this.__zoom,
				V = ui(F.changedTouches ? F.changedTouches[0] : F, this),
				ie = W.invert(V),
				ye = W.k * (F.shiftKey ? 0.5 : 2),
				Ne = r($(A(W, ye), V, ie), t.apply(this, k), f);
			Tl(F),
				d > 0
					? Bn(this).transition().duration(d).call(O, Ne, V, F)
					: Bn(this).call(N.transform, Ne, V, F);
		}
	}
	function ee(F, ...k) {
		if (e.apply(this, arguments)) {
			var W = F.touches,
				V = W.length,
				ie = U(this, k, F.changedTouches.length === V).event(F),
				ye,
				Ne,
				We,
				Ve;
			for (gd(F), Ne = 0; Ne < V; ++Ne)
				(We = W[Ne]),
					(Ve = ui(We, this)),
					(Ve = [Ve, this.__zoom.invert(Ve), We.identifier]),
					ie.touch0
						? !ie.touch1 &&
							ie.touch0[2] !== Ve[2] &&
							((ie.touch1 = Ve), (ie.taps = 0))
						: ((ie.touch0 = Ve), (ye = !0), (ie.taps = 1 + !!m));
			m && (m = clearTimeout(m)),
				ye &&
					(ie.taps < 2 &&
						((v = Ve[0]),
						(m = setTimeout(function () {
							m = null;
						}, w))),
					Fu(this),
					ie.start());
		}
	}
	function Y(F, ...k) {
		if (this.__zooming) {
			var W = U(this, k).event(F),
				V = F.changedTouches,
				ie = V.length,
				ye,
				Ne,
				We,
				Ve;
			for (Tl(F), ye = 0; ye < ie; ++ye)
				(Ne = V[ye]),
					(We = ui(Ne, this)),
					W.touch0 && W.touch0[2] === Ne.identifier
						? (W.touch0[0] = We)
						: W.touch1 && W.touch1[2] === Ne.identifier && (W.touch1[0] = We);
			if (((Ne = W.that.__zoom), W.touch1)) {
				var nt = W.touch0[0],
					et = W.touch0[1],
					Xe = W.touch1[0],
					Le = W.touch1[1],
					Z = (Z = Xe[0] - nt[0]) * Z + (Z = Xe[1] - nt[1]) * Z,
					ae = (ae = Le[0] - et[0]) * ae + (ae = Le[1] - et[1]) * ae;
				(Ne = A(Ne, Math.sqrt(Z / ae))),
					(We = [(nt[0] + Xe[0]) / 2, (nt[1] + Xe[1]) / 2]),
					(Ve = [(et[0] + Le[0]) / 2, (et[1] + Le[1]) / 2]);
			} else if (W.touch0) (We = W.touch0[0]), (Ve = W.touch0[1]);
			else return;
			W.zoom('touch', r($(Ne, We, Ve), W.extent, f));
		}
	}
	function I(F, ...k) {
		if (this.__zooming) {
			var W = U(this, k).event(F),
				V = F.changedTouches,
				ie = V.length,
				ye,
				Ne;
			for (
				gd(F),
					b && clearTimeout(b),
					b = setTimeout(function () {
						b = null;
					}, w),
					ye = 0;
				ye < ie;
				++ye
			)
				(Ne = V[ye]),
					W.touch0 && W.touch0[2] === Ne.identifier
						? delete W.touch0
						: W.touch1 && W.touch1[2] === Ne.identifier && delete W.touch1;
			if (
				(W.touch1 && !W.touch0 && ((W.touch0 = W.touch1), delete W.touch1),
				W.touch0)
			)
				W.touch0[1] = this.__zoom.invert(W.touch0[0]);
			else if (
				(W.end(),
				W.taps === 2 &&
					((Ne = ui(Ne, this)), Math.hypot(v[0] - Ne[0], v[1] - Ne[1]) < E))
			) {
				var We = Bn(this).on('dblclick.zoom');
				We && We.apply(this, arguments);
			}
		}
	}
	return (
		(N.wheelDelta = function (F) {
			return arguments.length
				? ((o = typeof F == 'function' ? F : ku(+F)), N)
				: o;
		}),
		(N.filter = function (F) {
			return arguments.length
				? ((e = typeof F == 'function' ? F : ku(!!F)), N)
				: e;
		}),
		(N.touchable = function (F) {
			return arguments.length
				? ((s = typeof F == 'function' ? F : ku(!!F)), N)
				: s;
		}),
		(N.extent = function (F) {
			return arguments.length
				? ((t =
						typeof F == 'function'
							? F
							: ku([
									[+F[0][0], +F[0][1]],
									[+F[1][0], +F[1][1]],
								])),
					N)
				: t;
		}),
		(N.scaleExtent = function (F) {
			return arguments.length
				? ((u[0] = +F[0]), (u[1] = +F[1]), N)
				: [u[0], u[1]];
		}),
		(N.translateExtent = function (F) {
			return arguments.length
				? ((f[0][0] = +F[0][0]),
					(f[1][0] = +F[1][0]),
					(f[0][1] = +F[0][1]),
					(f[1][1] = +F[1][1]),
					N)
				: [
						[f[0][0], f[0][1]],
						[f[1][0], f[1][1]],
					];
		}),
		(N.constrain = function (F) {
			return arguments.length ? ((r = F), N) : r;
		}),
		(N.duration = function (F) {
			return arguments.length ? ((d = +F), N) : d;
		}),
		(N.interpolate = function (F) {
			return arguments.length ? ((h = F), N) : h;
		}),
		(N.on = function () {
			var F = p.on.apply(p, arguments);
			return F === p ? N : F;
		}),
		(N.clickDistance = function (F) {
			return arguments.length ? ((M = (F = +F) * F), N) : Math.sqrt(M);
		}),
		(N.tapDistance = function (F) {
			return arguments.length ? ((E = +F), N) : E;
		}),
		N
	);
}
function Cpe(e) {
	const t = +this._x.call(null, e),
		r = +this._y.call(null, e);
	return Ex(this.cover(t, r), t, r, e);
}
function Ex(e, t, r, o) {
	if (isNaN(t) || isNaN(r)) return e;
	var s,
		u = e._root,
		f = { data: o },
		d = e._x0,
		h = e._y0,
		p = e._x1,
		m = e._y1,
		v,
		b,
		w,
		C,
		M,
		E,
		N,
		A;
	if (!u) return (e._root = f), e;
	for (; u.length; )
		if (
			((M = t >= (v = (d + p) / 2)) ? (d = v) : (p = v),
			(E = r >= (b = (h + m) / 2)) ? (h = b) : (m = b),
			(s = u),
			!(u = u[(N = (E << 1) | M)]))
		)
			return (s[N] = f), e;
	if (
		((w = +e._x.call(null, u.data)),
		(C = +e._y.call(null, u.data)),
		t === w && r === C)
	)
		return (f.next = u), s ? (s[N] = f) : (e._root = f), e;
	do
		(s = s ? (s[N] = new Array(4)) : (e._root = new Array(4))),
			(M = t >= (v = (d + p) / 2)) ? (d = v) : (p = v),
			(E = r >= (b = (h + m) / 2)) ? (h = b) : (m = b);
	while ((N = (E << 1) | M) === (A = ((C >= b) << 1) | (w >= v)));
	return (s[A] = u), (s[N] = f), e;
}
function Epe(e) {
	var t,
		r,
		o = e.length,
		s,
		u,
		f = new Array(o),
		d = new Array(o),
		h = 1 / 0,
		p = 1 / 0,
		m = -1 / 0,
		v = -1 / 0;
	for (r = 0; r < o; ++r)
		isNaN((s = +this._x.call(null, (t = e[r])))) ||
			isNaN((u = +this._y.call(null, t))) ||
			((f[r] = s),
			(d[r] = u),
			s < h && (h = s),
			s > m && (m = s),
			u < p && (p = u),
			u > v && (v = u));
	if (h > m || p > v) return this;
	for (this.cover(h, p).cover(m, v), r = 0; r < o; ++r)
		Ex(this, f[r], d[r], e[r]);
	return this;
}
function Lpe(e, t) {
	if (isNaN((e = +e)) || isNaN((t = +t))) return this;
	var r = this._x0,
		o = this._y0,
		s = this._x1,
		u = this._y1;
	if (isNaN(r)) (s = (r = Math.floor(e)) + 1), (u = (o = Math.floor(t)) + 1);
	else {
		for (
			var f = s - r || 1, d = this._root, h, p;
			r > e || e >= s || o > t || t >= u;

		)
			switch (
				((p = ((t < o) << 1) | (e < r)),
				(h = new Array(4)),
				(h[p] = d),
				(d = h),
				(f *= 2),
				p)
			) {
				case 0:
					(s = r + f), (u = o + f);
					break;
				case 1:
					(r = s - f), (u = o + f);
					break;
				case 2:
					(s = r + f), (o = u - f);
					break;
				case 3:
					(r = s - f), (o = u - f);
					break;
			}
		this._root && this._root.length && (this._root = d);
	}
	return (this._x0 = r), (this._y0 = o), (this._x1 = s), (this._y1 = u), this;
}
function Ape() {
	var e = [];
	return (
		this.visit(function (t) {
			if (!t.length)
				do e.push(t.data);
				while ((t = t.next));
		}),
		e
	);
}
function Mpe(e) {
	return arguments.length
		? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
		: isNaN(this._x0)
			? void 0
			: [
					[this._x0, this._y0],
					[this._x1, this._y1],
				];
}
function An(e, t, r, o, s) {
	(this.node = e), (this.x0 = t), (this.y0 = r), (this.x1 = o), (this.y1 = s);
}
function Npe(e, t, r) {
	var o,
		s = this._x0,
		u = this._y0,
		f,
		d,
		h,
		p,
		m = this._x1,
		v = this._y1,
		b = [],
		w = this._root,
		C,
		M;
	for (
		w && b.push(new An(w, s, u, m, v)),
			r == null
				? (r = 1 / 0)
				: ((s = e - r), (u = t - r), (m = e + r), (v = t + r), (r *= r));
		(C = b.pop());

	)
		if (
			!(
				!(w = C.node) ||
				(f = C.x0) > m ||
				(d = C.y0) > v ||
				(h = C.x1) < s ||
				(p = C.y1) < u
			)
		)
			if (w.length) {
				var E = (f + h) / 2,
					N = (d + p) / 2;
				b.push(
					new An(w[3], E, N, h, p),
					new An(w[2], f, N, E, p),
					new An(w[1], E, d, h, N),
					new An(w[0], f, d, E, N),
				),
					(M = ((t >= N) << 1) | (e >= E)) &&
						((C = b[b.length - 1]),
						(b[b.length - 1] = b[b.length - 1 - M]),
						(b[b.length - 1 - M] = C));
			} else {
				var A = e - +this._x.call(null, w.data),
					$ = t - +this._y.call(null, w.data),
					L = A * A + $ * $;
				if (L < r) {
					var O = Math.sqrt((r = L));
					(s = e - O), (u = t - O), (m = e + O), (v = t + O), (o = w.data);
				}
			}
	return o;
}
function $pe(e) {
	if (
		isNaN((m = +this._x.call(null, e))) ||
		isNaN((v = +this._y.call(null, e)))
	)
		return this;
	var t,
		r = this._root,
		o,
		s,
		u,
		f = this._x0,
		d = this._y0,
		h = this._x1,
		p = this._y1,
		m,
		v,
		b,
		w,
		C,
		M,
		E,
		N;
	if (!r) return this;
	if (r.length)
		for (;;) {
			if (
				((C = m >= (b = (f + h) / 2)) ? (f = b) : (h = b),
				(M = v >= (w = (d + p) / 2)) ? (d = w) : (p = w),
				(t = r),
				!(r = r[(E = (M << 1) | C)]))
			)
				return this;
			if (!r.length) break;
			(t[(E + 1) & 3] || t[(E + 2) & 3] || t[(E + 3) & 3]) &&
				((o = t), (N = E));
		}
	for (; r.data !== e; ) if (((s = r), !(r = r.next))) return this;
	return (
		(u = r.next) && delete r.next,
		s
			? (u ? (s.next = u) : delete s.next, this)
			: t
				? (u ? (t[E] = u) : delete t[E],
					(r = t[0] || t[1] || t[2] || t[3]) &&
						r === (t[3] || t[2] || t[1] || t[0]) &&
						!r.length &&
						(o ? (o[N] = r) : (this._root = r)),
					this)
				: ((this._root = u), this)
	);
}
function Ppe(e) {
	for (var t = 0, r = e.length; t < r; ++t) this.remove(e[t]);
	return this;
}
function Ope() {
	return this._root;
}
function Rpe() {
	var e = 0;
	return (
		this.visit(function (t) {
			if (!t.length)
				do ++e;
				while ((t = t.next));
		}),
		e
	);
}
function Dpe(e) {
	var t = [],
		r,
		o = this._root,
		s,
		u,
		f,
		d,
		h;
	for (
		o && t.push(new An(o, this._x0, this._y0, this._x1, this._y1));
		(r = t.pop());

	)
		if (
			!e((o = r.node), (u = r.x0), (f = r.y0), (d = r.x1), (h = r.y1)) &&
			o.length
		) {
			var p = (u + d) / 2,
				m = (f + h) / 2;
			(s = o[3]) && t.push(new An(s, p, m, d, h)),
				(s = o[2]) && t.push(new An(s, u, m, p, h)),
				(s = o[1]) && t.push(new An(s, p, f, d, m)),
				(s = o[0]) && t.push(new An(s, u, f, p, m));
		}
	return this;
}
function zpe(e) {
	var t = [],
		r = [],
		o;
	for (
		this._root &&
		t.push(new An(this._root, this._x0, this._y0, this._x1, this._y1));
		(o = t.pop());

	) {
		var s = o.node;
		if (s.length) {
			var u,
				f = o.x0,
				d = o.y0,
				h = o.x1,
				p = o.y1,
				m = (f + h) / 2,
				v = (d + p) / 2;
			(u = s[0]) && t.push(new An(u, f, d, m, v)),
				(u = s[1]) && t.push(new An(u, m, d, h, v)),
				(u = s[2]) && t.push(new An(u, f, v, m, p)),
				(u = s[3]) && t.push(new An(u, m, v, h, p));
		}
		r.push(o);
	}
	for (; (o = r.pop()); ) e(o.node, o.x0, o.y0, o.x1, o.y1);
	return this;
}
function Ipe(e) {
	return e[0];
}
function Fpe(e) {
	return arguments.length ? ((this._x = e), this) : this._x;
}
function Hpe(e) {
	return e[1];
}
function qpe(e) {
	return arguments.length ? ((this._y = e), this) : this._y;
}
function ap(e, t, r) {
	var o = new up(t ?? Ipe, r ?? Hpe, NaN, NaN, NaN, NaN);
	return e == null ? o : o.addAll(e);
}
function up(e, t, r, o, s, u) {
	(this._x = e),
		(this._y = t),
		(this._x0 = r),
		(this._y0 = o),
		(this._x1 = s),
		(this._y1 = u),
		(this._root = void 0);
}
function dy(e) {
	for (var t = { data: e.data }, r = t; (e = e.next); )
		r = r.next = { data: e.data };
	return t;
}
var $n = (ap.prototype = up.prototype);
$n.copy = function () {
	var e = new up(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
		t = this._root,
		r,
		o;
	if (!t) return e;
	if (!t.length) return (e._root = dy(t)), e;
	for (r = [{ source: t, target: (e._root = new Array(4)) }]; (t = r.pop()); )
		for (var s = 0; s < 4; ++s)
			(o = t.source[s]) &&
				(o.length
					? r.push({ source: o, target: (t.target[s] = new Array(4)) })
					: (t.target[s] = dy(o)));
	return e;
};
$n.add = Cpe;
$n.addAll = Epe;
$n.cover = Lpe;
$n.data = Ape;
$n.extent = Mpe;
$n.find = Npe;
$n.remove = $pe;
$n.removeAll = Ppe;
$n.root = Ope;
$n.size = Rpe;
$n.visit = Dpe;
$n.visitAfter = zpe;
$n.x = Fpe;
$n.y = qpe;
function Nn(e) {
	return function () {
		return e;
	};
}
function Ki(e) {
	return (e() - 0.5) * 1e-6;
}
function Bpe(e) {
	return e.x + e.vx;
}
function Wpe(e) {
	return e.y + e.vy;
}
function Upe(e) {
	var t,
		r,
		o,
		s = 1,
		u = 1;
	typeof e != 'function' && (e = Nn(e == null ? 1 : +e));
	function f() {
		for (var p, m = t.length, v, b, w, C, M, E, N = 0; N < u; ++N)
			for (v = ap(t, Bpe, Wpe).visitAfter(d), p = 0; p < m; ++p)
				(b = t[p]),
					(M = r[b.index]),
					(E = M * M),
					(w = b.x + b.vx),
					(C = b.y + b.vy),
					v.visit(A);
		function A($, L, O, U, B) {
			var te = $.data,
				J = $.r,
				K = M + J;
			if (te) {
				if (te.index > b.index) {
					var ee = w - te.x - te.vx,
						Y = C - te.y - te.vy,
						I = ee * ee + Y * Y;
					I < K * K &&
						(ee === 0 && ((ee = Ki(o)), (I += ee * ee)),
						Y === 0 && ((Y = Ki(o)), (I += Y * Y)),
						(I = ((K - (I = Math.sqrt(I))) / I) * s),
						(b.vx += (ee *= I) * (K = (J *= J) / (E + J))),
						(b.vy += (Y *= I) * K),
						(te.vx -= ee * (K = 1 - K)),
						(te.vy -= Y * K));
				}
				return;
			}
			return L > w + K || U < w - K || O > C + K || B < C - K;
		}
	}
	function d(p) {
		if (p.data) return (p.r = r[p.data.index]);
		for (var m = (p.r = 0); m < 4; ++m) p[m] && p[m].r > p.r && (p.r = p[m].r);
	}
	function h() {
		if (t) {
			var p,
				m = t.length,
				v;
			for (r = new Array(m), p = 0; p < m; ++p)
				(v = t[p]), (r[v.index] = +e(v, p, t));
		}
	}
	return (
		(f.initialize = function (p, m) {
			(t = p), (o = m), h();
		}),
		(f.iterations = function (p) {
			return arguments.length ? ((u = +p), f) : u;
		}),
		(f.strength = function (p) {
			return arguments.length ? ((s = +p), f) : s;
		}),
		(f.radius = function (p) {
			return arguments.length
				? ((e = typeof p == 'function' ? p : Nn(+p)), h(), f)
				: e;
		}),
		f
	);
}
function Vpe(e) {
	return e.index;
}
function hy(e, t) {
	var r = e.get(t);
	if (!r) throw new Error('node not found: ' + t);
	return r;
}
function jpe(e) {
	var t = Vpe,
		r = v,
		o,
		s = Nn(30),
		u,
		f,
		d,
		h,
		p,
		m = 1;
	e == null && (e = []);
	function v(E) {
		return 1 / Math.min(d[E.source.index], d[E.target.index]);
	}
	function b(E) {
		for (var N = 0, A = e.length; N < m; ++N)
			for (var $ = 0, L, O, U, B, te, J, K; $ < A; ++$)
				(L = e[$]),
					(O = L.source),
					(U = L.target),
					(B = U.x + U.vx - O.x - O.vx || Ki(p)),
					(te = U.y + U.vy - O.y - O.vy || Ki(p)),
					(J = Math.sqrt(B * B + te * te)),
					(J = ((J - u[$]) / J) * E * o[$]),
					(B *= J),
					(te *= J),
					(U.vx -= B * (K = h[$])),
					(U.vy -= te * K),
					(O.vx += B * (K = 1 - K)),
					(O.vy += te * K);
	}
	function w() {
		if (f) {
			var E,
				N = f.length,
				A = e.length,
				$ = new Map(f.map((O, U) => [t(O, U, f), O])),
				L;
			for (E = 0, d = new Array(N); E < A; ++E)
				(L = e[E]),
					(L.index = E),
					typeof L.source != 'object' && (L.source = hy($, L.source)),
					typeof L.target != 'object' && (L.target = hy($, L.target)),
					(d[L.source.index] = (d[L.source.index] || 0) + 1),
					(d[L.target.index] = (d[L.target.index] || 0) + 1);
			for (E = 0, h = new Array(A); E < A; ++E)
				(L = e[E]),
					(h[E] = d[L.source.index] / (d[L.source.index] + d[L.target.index]));
			(o = new Array(A)), C(), (u = new Array(A)), M();
		}
	}
	function C() {
		if (f) for (var E = 0, N = e.length; E < N; ++E) o[E] = +r(e[E], E, e);
	}
	function M() {
		if (f) for (var E = 0, N = e.length; E < N; ++E) u[E] = +s(e[E], E, e);
	}
	return (
		(b.initialize = function (E, N) {
			(f = E), (p = N), w();
		}),
		(b.links = function (E) {
			return arguments.length ? ((e = E), w(), b) : e;
		}),
		(b.id = function (E) {
			return arguments.length ? ((t = E), b) : t;
		}),
		(b.iterations = function (E) {
			return arguments.length ? ((m = +E), b) : m;
		}),
		(b.strength = function (E) {
			return arguments.length
				? ((r = typeof E == 'function' ? E : Nn(+E)), C(), b)
				: r;
		}),
		(b.distance = function (E) {
			return arguments.length
				? ((s = typeof E == 'function' ? E : Nn(+E)), M(), b)
				: s;
		}),
		b
	);
}
const Gpe = 1664525,
	Kpe = 1013904223,
	py = 4294967296;
function Xpe() {
	let e = 1;
	return () => (e = (Gpe * e + Kpe) % py) / py;
}
function Ype(e) {
	return e.x;
}
function Zpe(e) {
	return e.y;
}
var Jpe = 10,
	Qpe = Math.PI * (3 - Math.sqrt(5));
function ege(e) {
	var t,
		r = 1,
		o = 0.001,
		s = 1 - Math.pow(o, 1 / 300),
		u = 0,
		f = 0.6,
		d = new Map(),
		h = ip(v),
		p = Ea('tick', 'end'),
		m = Xpe();
	e == null && (e = []);
	function v() {
		b(), p.call('tick', t), r < o && (h.stop(), p.call('end', t));
	}
	function b(M) {
		var E,
			N = e.length,
			A;
		M === void 0 && (M = 1);
		for (var $ = 0; $ < M; ++$)
			for (
				r += (u - r) * s,
					d.forEach(function (L) {
						L(r);
					}),
					E = 0;
				E < N;
				++E
			)
				(A = e[E]),
					A.fx == null ? (A.x += A.vx *= f) : ((A.x = A.fx), (A.vx = 0)),
					A.fy == null ? (A.y += A.vy *= f) : ((A.y = A.fy), (A.vy = 0));
		return t;
	}
	function w() {
		for (var M = 0, E = e.length, N; M < E; ++M) {
			if (
				((N = e[M]),
				(N.index = M),
				N.fx != null && (N.x = N.fx),
				N.fy != null && (N.y = N.fy),
				isNaN(N.x) || isNaN(N.y))
			) {
				var A = Jpe * Math.sqrt(0.5 + M),
					$ = M * Qpe;
				(N.x = A * Math.cos($)), (N.y = A * Math.sin($));
			}
			(isNaN(N.vx) || isNaN(N.vy)) && (N.vx = N.vy = 0);
		}
	}
	function C(M) {
		return M.initialize && M.initialize(e, m), M;
	}
	return (
		w(),
		(t = {
			tick: b,
			restart: function () {
				return h.restart(v), t;
			},
			stop: function () {
				return h.stop(), t;
			},
			nodes: function (M) {
				return arguments.length ? ((e = M), w(), d.forEach(C), t) : e;
			},
			alpha: function (M) {
				return arguments.length ? ((r = +M), t) : r;
			},
			alphaMin: function (M) {
				return arguments.length ? ((o = +M), t) : o;
			},
			alphaDecay: function (M) {
				return arguments.length ? ((s = +M), t) : +s;
			},
			alphaTarget: function (M) {
				return arguments.length ? ((u = +M), t) : u;
			},
			velocityDecay: function (M) {
				return arguments.length ? ((f = 1 - M), t) : 1 - f;
			},
			randomSource: function (M) {
				return arguments.length ? ((m = M), d.forEach(C), t) : m;
			},
			force: function (M, E) {
				return arguments.length > 1
					? (E == null ? d.delete(M) : d.set(M, C(E)), t)
					: d.get(M);
			},
			find: function (M, E, N) {
				var A = 0,
					$ = e.length,
					L,
					O,
					U,
					B,
					te;
				for (N == null ? (N = 1 / 0) : (N *= N), A = 0; A < $; ++A)
					(B = e[A]),
						(L = M - B.x),
						(O = E - B.y),
						(U = L * L + O * O),
						U < N && ((te = B), (N = U));
				return te;
			},
			on: function (M, E) {
				return arguments.length > 1 ? (p.on(M, E), t) : p.on(M);
			},
		})
	);
}
function tge() {
	var e,
		t,
		r,
		o,
		s = Nn(-30),
		u,
		f = 1,
		d = 1 / 0,
		h = 0.81;
	function p(w) {
		var C,
			M = e.length,
			E = ap(e, Ype, Zpe).visitAfter(v);
		for (o = w, C = 0; C < M; ++C) (t = e[C]), E.visit(b);
	}
	function m() {
		if (e) {
			var w,
				C = e.length,
				M;
			for (u = new Array(C), w = 0; w < C; ++w)
				(M = e[w]), (u[M.index] = +s(M, w, e));
		}
	}
	function v(w) {
		var C = 0,
			M,
			E,
			N = 0,
			A,
			$,
			L;
		if (w.length) {
			for (A = $ = L = 0; L < 4; ++L)
				(M = w[L]) &&
					(E = Math.abs(M.value)) &&
					((C += M.value), (N += E), (A += E * M.x), ($ += E * M.y));
			(w.x = A / N), (w.y = $ / N);
		} else {
			(M = w), (M.x = M.data.x), (M.y = M.data.y);
			do C += u[M.data.index];
			while ((M = M.next));
		}
		w.value = C;
	}
	function b(w, C, M, E) {
		if (!w.value) return !0;
		var N = w.x - t.x,
			A = w.y - t.y,
			$ = E - C,
			L = N * N + A * A;
		if (($ * $) / h < L)
			return (
				L < d &&
					(N === 0 && ((N = Ki(r)), (L += N * N)),
					A === 0 && ((A = Ki(r)), (L += A * A)),
					L < f && (L = Math.sqrt(f * L)),
					(t.vx += (N * w.value * o) / L),
					(t.vy += (A * w.value * o) / L)),
				!0
			);
		if (w.length || L >= d) return;
		(w.data !== t || w.next) &&
			(N === 0 && ((N = Ki(r)), (L += N * N)),
			A === 0 && ((A = Ki(r)), (L += A * A)),
			L < f && (L = Math.sqrt(f * L)));
		do
			w.data !== t &&
				(($ = (u[w.data.index] * o) / L), (t.vx += N * $), (t.vy += A * $));
		while ((w = w.next));
	}
	return (
		(p.initialize = function (w, C) {
			(e = w), (r = C), m();
		}),
		(p.strength = function (w) {
			return arguments.length
				? ((s = typeof w == 'function' ? w : Nn(+w)), m(), p)
				: s;
		}),
		(p.distanceMin = function (w) {
			return arguments.length ? ((f = w * w), p) : Math.sqrt(f);
		}),
		(p.distanceMax = function (w) {
			return arguments.length ? ((d = w * w), p) : Math.sqrt(d);
		}),
		(p.theta = function (w) {
			return arguments.length ? ((h = w * w), p) : Math.sqrt(h);
		}),
		p
	);
}
function nge(e) {
	var t = Nn(0.1),
		r,
		o,
		s;
	typeof e != 'function' && (e = Nn(e == null ? 0 : +e));
	function u(d) {
		for (var h = 0, p = r.length, m; h < p; ++h)
			(m = r[h]), (m.vx += (s[h] - m.x) * o[h] * d);
	}
	function f() {
		if (r) {
			var d,
				h = r.length;
			for (o = new Array(h), s = new Array(h), d = 0; d < h; ++d)
				o[d] = isNaN((s[d] = +e(r[d], d, r))) ? 0 : +t(r[d], d, r);
		}
	}
	return (
		(u.initialize = function (d) {
			(r = d), f();
		}),
		(u.strength = function (d) {
			return arguments.length
				? ((t = typeof d == 'function' ? d : Nn(+d)), f(), u)
				: t;
		}),
		(u.x = function (d) {
			return arguments.length
				? ((e = typeof d == 'function' ? d : Nn(+d)), f(), u)
				: e;
		}),
		u
	);
}
function rge(e) {
	var t = Nn(0.1),
		r,
		o,
		s;
	typeof e != 'function' && (e = Nn(e == null ? 0 : +e));
	function u(d) {
		for (var h = 0, p = r.length, m; h < p; ++h)
			(m = r[h]), (m.vy += (s[h] - m.y) * o[h] * d);
	}
	function f() {
		if (r) {
			var d,
				h = r.length;
			for (o = new Array(h), s = new Array(h), d = 0; d < h; ++d)
				o[d] = isNaN((s[d] = +e(r[d], d, r))) ? 0 : +t(r[d], d, r);
		}
	}
	return (
		(u.initialize = function (d) {
			(r = d), f();
		}),
		(u.strength = function (d) {
			return arguments.length
				? ((t = typeof d == 'function' ? d : Nn(+d)), f(), u)
				: t;
		}),
		(u.y = function (d) {
			return arguments.length
				? ((e = typeof d == 'function' ? d : Nn(+d)), f(), u)
				: e;
		}),
		u
	);
}
var ige = Object.defineProperty,
	oge = (e, t, r) =>
		t in e
			? ige(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	qt = (e, t, r) => oge(e, typeof t != 'symbol' ? t + '' : t, r);
function sge() {
	return {
		drag: { end: 0, start: 0.1 },
		filter: { link: 1, type: 0.1, unlinked: { include: 0.1, exclude: 0.1 } },
		focus: { acquire: () => 0.1, release: () => 0.1 },
		initialize: 1,
		labels: { links: { hide: 0, show: 0 }, nodes: { hide: 0, show: 0 } },
		resize: 0.5,
	};
}
function gy(e) {
	if (typeof e == 'object' && e !== null) {
		if (typeof Object.getPrototypeOf == 'function') {
			const t = Object.getPrototypeOf(e);
			return t === Object.prototype || t === null;
		}
		return Object.prototype.toString.call(e) === '[object Object]';
	}
	return !1;
}
function Xi(...e) {
	return e.reduce((t, r) => {
		if (Array.isArray(r))
			throw new TypeError(
				'Arguments provided to deepmerge must be objects, not arrays.',
			);
		return (
			Object.keys(r).forEach((o) => {
				['__proto__', 'constructor', 'prototype'].includes(o) ||
					(Array.isArray(t[o]) && Array.isArray(r[o])
						? (t[o] = Xi.options.mergeArrays
								? Array.from(new Set(t[o].concat(r[o])))
								: r[o])
						: gy(t[o]) && gy(r[o])
							? (t[o] = Xi(t[o], r[o]))
							: (t[o] = r[o]));
			}),
			t
		);
	}, {});
}
const Lx = { mergeArrays: !0 };
Xi.options = Lx;
Xi.withOptions = (e, ...t) => {
	Xi.options = { mergeArrays: !0, ...e };
	const r = Xi(...t);
	return (Xi.options = Lx), r;
};
function lge() {
	return {
		centering: { enabled: !0, strength: 0.1 },
		charge: { enabled: !0, strength: -1 },
		collision: { enabled: !0, strength: 1, radiusMultiplier: 2 },
		link: { enabled: !0, strength: 1, length: 128 },
	};
}
function age() {
	return {
		includeUnlinked: !0,
		linkFilter: () => !0,
		nodeTypeFilter: void 0,
		showLinkLabels: !0,
		showNodeLabels: !0,
	};
}
function Ax(e) {
	e.preventDefault(), e.stopPropagation();
}
function Mx(e) {
	return typeof e == 'number';
}
function ro(e, t) {
	return Mx(e.nodeRadius) ? e.nodeRadius : e.nodeRadius(t);
}
function uge(e) {
	return `${e.source.id}-${e.target.id}`;
}
function Nx(e) {
	return `link-arrow-${e}`.replace(/[()]/g, '~');
}
function cge(e) {
	return `url(#${Nx(e.color)})`;
}
function fge(e) {
	return {
		size: e,
		padding: (t, r) => ro(r, t) + 2 * e,
		ref: [e / 2, e / 2],
		path: [
			[0, 0],
			[0, e],
			[e, e / 2],
		],
		viewBox: [0, 0, e, e].join(','),
	};
}
const $x = { Arrow: (e) => fge(e) },
	dge = (e, t, r) => [t / 2, r / 2],
	Px = (e, t, r) => [my(0, t), my(0, r)];
function my(e, t) {
	return Math.random() * (t - e) + e;
}
function hge(e) {
	const t = Object.fromEntries(e.nodes.map((r) => [r.id, [r.x, r.y]]));
	return (r, o, s) => {
		const [u, f] = t[r.id] ?? [];
		return !u || !f ? Px(r, o, s) : [u, f];
	};
}
const sh = { Centered: dge, Randomized: Px, Stable: hge };
function pge() {
	return {
		autoResize: !1,
		callbacks: {},
		hooks: {},
		initial: age(),
		nodeRadius: 16,
		marker: $x.Arrow(4),
		modifiers: {},
		positionInitializer: sh.Centered,
		simulation: { alphas: sge(), forces: lge() },
		zoom: { initial: 1, min: 0.1, max: 2 },
	};
}
function gge(e = {}) {
	return Xi.withOptions({ mergeArrays: !1 }, pge(), e);
}
function mge({
	applyZoom: e,
	container: t,
	onDoubleClick: r,
	onPointerMoved: o,
	onPointerUp: s,
	offset: [u, f],
	scale: d,
	zoom: h,
}) {
	const p = t
		.classed('graph', !0)
		.append('svg')
		.attr('height', '100%')
		.attr('width', '100%')
		.call(h)
		.on('contextmenu', (m) => Ax(m))
		.on('dblclick', (m) => (r == null ? void 0 : r(m)))
		.on('dblclick.zoom', null)
		.on('pointermove', (m) => (o == null ? void 0 : o(m)))
		.on('pointerup', (m) => (s == null ? void 0 : s(m)))
		.style('cursor', 'grab');
	return e && p.call(h.transform, lp.translate(u, f).scale(d)), p.append('g');
}
function vge({ canvas: e, scale: t, xOffset: r, yOffset: o }) {
	e == null || e.attr('transform', `translate(${r},${o})scale(${t})`);
}
function yge({ config: e, onDragStart: t, onDragEnd: r }) {
	var o, s;
	const u = Rde()
		.filter((f) =>
			f.type === 'mousedown'
				? f.button === 0
				: f.type === 'touchstart'
					? f.touches.length === 1
					: !1,
		)
		.on('start', (f, d) => {
			f.active === 0 && t(f, d),
				Bn(f.sourceEvent.target).classed('grabbed', !0),
				(d.fx = d.x),
				(d.fy = d.y);
		})
		.on('drag', (f, d) => {
			(d.fx = f.x), (d.fy = f.y);
		})
		.on('end', (f, d) => {
			f.active === 0 && r(f, d),
				Bn(f.sourceEvent.target).classed('grabbed', !1),
				(d.fx = void 0),
				(d.fy = void 0);
		});
	return (s = (o = e.modifiers).drag) == null || s.call(o, u), u;
}
function bge({
	graph: e,
	filter: t,
	focusedNode: r,
	includeUnlinked: o,
	linkFilter: s,
}) {
	const u = e.links.filter(
			(h) => t.includes(h.source.type) && t.includes(h.target.type) && s(h),
		),
		f = (h) =>
			u.find((p) => p.source.id === h.id || p.target.id === h.id) !== void 0,
		d = e.nodes.filter((h) => t.includes(h.type) && (o || f(h)));
	return r === void 0 || !t.includes(r.type)
		? { nodes: d, links: u }
		: wge({ nodes: d, links: u }, r);
}
function wge(e, t) {
	const r = [...xge(e, t), ...Sge(e, t)],
		o = r.flatMap((s) => [s.source, s.target]);
	return { nodes: [...new Set([...o, t])], links: [...new Set(r)] };
}
function xge(e, t) {
	return Ox(e, t, (r, o) => r.target.id === o.id);
}
function Sge(e, t) {
	return Ox(e, t, (r, o) => r.source.id === o.id);
}
function Ox(e, t, r) {
	const o = new Set(e.links),
		s = new Set([t]),
		u = [];
	for (; o.size > 0; ) {
		const f = [...o].filter((d) => [...s].some((h) => r(d, h)));
		if (f.length === 0) return u;
		f.forEach((d) => {
			s.add(d.source), s.add(d.target), u.push(d), o.delete(d);
		});
	}
	return u;
}
function lh(e) {
	return e.x ?? 0;
}
function ah(e) {
	return e.y ?? 0;
}
function cp({ source: e, target: t }) {
	const r = new En(lh(e), ah(e)),
		o = new En(lh(t), ah(t)),
		s = o.subtract(r),
		u = s.length(),
		f = s.normalize(),
		d = f.multiply(-1);
	return { s: r, t: o, dist: u, norm: f, endNorm: d };
}
function Rx({ center: e, node: t }) {
	const r = new En(lh(t), ah(t));
	let o = e;
	return (
		r.x === o.x && r.y === o.y && (o = o.add(new En(0, 1))), { n: r, c: o }
	);
}
function Dx({ config: e, source: t, target: r }) {
	const { s: o, t: s, norm: u } = cp({ config: e, source: t, target: r }),
		f = o.add(u.multiply(ro(e, t) - 1)),
		d = s.subtract(u.multiply(e.marker.padding(r, e)));
	return { start: f, end: d };
}
function _ge(e) {
	const { start: t, end: r } = Dx(e);
	return `M${t.x},${t.y}
          L${r.x},${r.y}`;
}
function kge(e) {
	const { start: t, end: r } = Dx(e),
		o = r.subtract(t).multiply(0.5),
		s = t.add(o);
	return `translate(${s.x - 8},${s.y - 4})`;
}
function Tge({ config: e, source: t, target: r }) {
	const {
			s: o,
			t: s,
			dist: u,
			norm: f,
			endNorm: d,
		} = cp({ config: e, source: t, target: r }),
		h = 10,
		p = f
			.rotateByDegrees(-10)
			.multiply(ro(e, t) - 1)
			.add(o),
		m = d
			.rotateByDegrees(h)
			.multiply(ro(e, r))
			.add(s)
			.add(d.rotateByDegrees(h).multiply(2 * e.marker.size)),
		v = 1.2 * u;
	return `M${p.x},${p.y}
          A${v},${v},0,0,1,${m.x},${m.y}`;
}
function Cge({ center: e, config: t, node: r }) {
	const { n: o, c: s } = Rx({ center: e, config: t, node: r }),
		u = ro(t, r),
		f = o.subtract(s),
		d = f.multiply(1 / f.length()),
		h = 40,
		p = d
			.rotateByDegrees(h)
			.multiply(u - 1)
			.add(o),
		m = d
			.rotateByDegrees(-40)
			.multiply(u)
			.add(o)
			.add(d.rotateByDegrees(-40).multiply(2 * t.marker.size));
	return `M${p.x},${p.y}
          A${u},${u},0,1,0,${m.x},${m.y}`;
}
function Ege({ config: e, source: t, target: r }) {
	const { t: o, dist: s, endNorm: u } = cp({ config: e, source: t, target: r }),
		f = u
			.rotateByDegrees(10)
			.multiply(0.5 * s)
			.add(o);
	return `translate(${f.x},${f.y})`;
}
function Lge({ center: e, config: t, node: r }) {
	const { n: o, c: s } = Rx({ center: e, config: t, node: r }),
		u = o.subtract(s),
		f = u
			.multiply(1 / u.length())
			.multiply(3 * ro(t, r) + 8)
			.add(o);
	return `translate(${f.x},${f.y})`;
}
const Ms = {
	line: { labelTransform: kge, path: _ge },
	arc: { labelTransform: Ege, path: Tge },
	reflexive: { labelTransform: Lge, path: Cge },
};
function Age(e) {
	return e.append('g').classed('links', !0).selectAll('path');
}
function Mge({ config: e, graph: t, selection: r, showLabels: o }) {
	const s =
		r == null
			? void 0
			: r
					.data(t.links, (u) => uge(u))
					.join((u) => {
						var f, d, h, p;
						const m = u.append('g'),
							v = m
								.append('path')
								.classed('link', !0)
								.style('marker-end', (w) => cge(w))
								.style('stroke', (w) => w.color);
						(d = (f = e.modifiers).link) == null || d.call(f, v);
						const b = m
							.append('text')
							.classed('link__label', !0)
							.style('fill', (w) => (w.label ? w.label.color : null))
							.style('font-size', (w) => (w.label ? w.label.fontSize : null))
							.text((w) => (w.label ? w.label.text : null));
						return (p = (h = e.modifiers).linkLabel) == null || p.call(h, b), m;
					});
	return (
		s == null ||
			s.select('.link__label').attr('opacity', (u) => (u.label && o ? 1 : 0)),
		s
	);
}
function Nge(e) {
	$ge(e), Pge(e);
}
function $ge({ center: e, config: t, graph: r, selection: o }) {
	o == null ||
		o
			.selectAll('path')
			.attr('d', (s) =>
				s.source.x === void 0 ||
				s.source.y === void 0 ||
				s.target.x === void 0 ||
				s.target.y === void 0
					? ''
					: s.source.id === s.target.id
						? Ms.reflexive.path({ config: t, node: s.source, center: e })
						: zx(r, s.source, s.target)
							? Ms.arc.path({ config: t, source: s.source, target: s.target })
							: Ms.line.path({ config: t, source: s.source, target: s.target }),
			);
}
function Pge({ config: e, center: t, graph: r, selection: o }) {
	o == null ||
		o
			.select('.link__label')
			.attr('transform', (s) =>
				s.source.x === void 0 ||
				s.source.y === void 0 ||
				s.target.x === void 0 ||
				s.target.y === void 0
					? 'translate(0, 0)'
					: s.source.id === s.target.id
						? Ms.reflexive.labelTransform({
								config: e,
								node: s.source,
								center: t,
							})
						: zx(r, s.source, s.target)
							? Ms.arc.labelTransform({
									config: e,
									source: s.source,
									target: s.target,
								})
							: Ms.line.labelTransform({
									config: e,
									source: s.source,
									target: s.target,
								}),
			);
}
function zx(e, t, r) {
	return (
		t.id !== r.id &&
		e.links.some((o) => o.target.id === t.id && o.source.id === r.id) &&
		e.links.some((o) => o.target.id === r.id && o.source.id === t.id)
	);
}
function Oge(e) {
	return e.append('defs').selectAll('marker');
}
function Rge({ config: e, graph: t, selection: r }) {
	return r == null
		? void 0
		: r
				.data(Dge(t), (o) => o)
				.join((o) => {
					const s = o
						.append('marker')
						.attr('id', (u) => Nx(u))
						.attr('markerHeight', 4 * e.marker.size)
						.attr('markerWidth', 4 * e.marker.size)
						.attr('markerUnits', 'userSpaceOnUse')
						.attr('orient', 'auto')
						.attr('refX', e.marker.ref[0])
						.attr('refY', e.marker.ref[1])
						.attr('viewBox', e.marker.viewBox)
						.style('fill', (u) => u);
					return s.append('path').attr('d', zge(e.marker.path)), s;
				});
}
function Dge(e) {
	return [...new Set(e.links.map((t) => t.color))];
}
function zge(e) {
	const [t, ...r] = e;
	if (!t) return 'M0,0';
	const [o, s] = t;
	return r.reduce((u, [f, d]) => `${u}L${f},${d}`, `M${o},${s}`);
}
function Ige(e) {
	return e.append('g').classed('nodes', !0).selectAll('circle');
}
function Fge({
	config: e,
	drag: t,
	graph: r,
	onNodeContext: o,
	onNodeSelected: s,
	selection: u,
	showLabels: f,
}) {
	const d =
		u == null
			? void 0
			: u
					.data(r.nodes, (h) => h.id)
					.join((h) => {
						var p, m, v, b;
						const w = h.append('g');
						t !== void 0 && w.call(t);
						const C = w
							.append('circle')
							.classed('node', !0)
							.attr('r', (E) => ro(e, E))
							.on('contextmenu', (E, N) => {
								Ax(E), o(N);
							})
							.on('pointerdown', (E, N) => qge(E, N, s ?? o))
							.style('fill', (E) => E.color);
						(m = (p = e.modifiers).node) == null || m.call(p, C);
						const M = w
							.append('text')
							.classed('node__label', !0)
							.attr('dy', '0.33em')
							.style('fill', (E) => (E.label ? E.label.color : null))
							.style('font-size', (E) => (E.label ? E.label.fontSize : null))
							.style('stroke', 'none')
							.text((E) => (E.label ? E.label.text : null));
						return (b = (v = e.modifiers).nodeLabel) == null || b.call(v, M), w;
					});
	return (
		d == null || d.select('.node').classed('focused', (h) => h.isFocused),
		d == null || d.select('.node__label').attr('opacity', f ? 1 : 0),
		d
	);
}
const Hge = 500;
function qge(e, t, r) {
	if (e.button !== void 0 && e.button !== 0) return;
	const o = t.lastInteractionTimestamp,
		s = Date.now();
	if (o === void 0 || s - o > Hge) {
		t.lastInteractionTimestamp = s;
		return;
	}
	(t.lastInteractionTimestamp = void 0), r(t);
}
function Bge(e) {
	e == null || e.attr('transform', (t) => `translate(${t.x ?? 0},${t.y ?? 0})`);
}
function Wge({ center: e, config: t, graph: r, onTick: o }) {
	var s, u;
	const f = ege(r.nodes),
		d = t.simulation.forces.centering;
	if (d && d.enabled) {
		const v = d.strength;
		f.force('x', nge(() => e().x).strength(v)).force(
			'y',
			rge(() => e().y).strength(v),
		);
	}
	const h = t.simulation.forces.charge;
	h && h.enabled && f.force('charge', tge().strength(h.strength));
	const p = t.simulation.forces.collision;
	p &&
		p.enabled &&
		f.force(
			'collision',
			Upe().radius((v) => p.radiusMultiplier * ro(t, v)),
		);
	const m = t.simulation.forces.link;
	return (
		m &&
			m.enabled &&
			f.force(
				'link',
				jpe(r.links)
					.id((v) => v.id)
					.distance(t.simulation.forces.link.length)
					.strength(m.strength),
			),
		f.on('tick', () => o()),
		(u = (s = t.modifiers).simulation) == null || u.call(s, f),
		f
	);
}
function Uge({ canvasContainer: e, config: t, min: r, max: o, onZoom: s }) {
	var u, f;
	const d = Tpe()
		.scaleExtent([r, o])
		.filter((h) => {
			var p;
			return (
				h.button === 0 || ((p = h.touches) == null ? void 0 : p.length) >= 2
			);
		})
		.on('start', () => e().classed('grabbed', !0))
		.on('zoom', (h) => s(h))
		.on('end', () => e().classed('grabbed', !1));
	return (f = (u = t.modifiers).zoom) == null || f.call(u, d), d;
}
class Vge {
	constructor(t, r, o) {
		if (
			(qt(this, 'nodeTypes'),
			qt(this, '_nodeTypeFilter'),
			qt(this, '_includeUnlinked', !0),
			qt(this, '_linkFilter', () => !0),
			qt(this, '_showLinkLabels', !0),
			qt(this, '_showNodeLabels', !0),
			qt(this, 'filteredGraph'),
			qt(this, 'width', 0),
			qt(this, 'height', 0),
			qt(this, 'simulation'),
			qt(this, 'canvas'),
			qt(this, 'linkSelection'),
			qt(this, 'nodeSelection'),
			qt(this, 'markerSelection'),
			qt(this, 'zoom'),
			qt(this, 'drag'),
			qt(this, 'xOffset', 0),
			qt(this, 'yOffset', 0),
			qt(this, 'scale'),
			qt(this, 'focusedNode'),
			qt(this, 'resizeObserver'),
			(this.container = t),
			(this.graph = r),
			(this.config = o),
			(this.scale = o.zoom.initial),
			this.resetView(),
			this.graph.nodes.forEach((s) => {
				const [u, f] = o.positionInitializer(
					s,
					this.effectiveWidth,
					this.effectiveHeight,
				);
				(s.x = s.x ?? u), (s.y = s.y ?? f);
			}),
			(this.nodeTypes = [...new Set(r.nodes.map((s) => s.type))]),
			(this._nodeTypeFilter = [...this.nodeTypes]),
			o.initial)
		) {
			const {
				includeUnlinked: s,
				nodeTypeFilter: u,
				linkFilter: f,
				showLinkLabels: d,
				showNodeLabels: h,
			} = o.initial;
			(this._includeUnlinked = s ?? this._includeUnlinked),
				(this._showLinkLabels = d ?? this._showLinkLabels),
				(this._showNodeLabels = h ?? this._showNodeLabels),
				(this._nodeTypeFilter = u ?? this._nodeTypeFilter),
				(this._linkFilter = f ?? this._linkFilter);
		}
		this.filterGraph(void 0),
			this.initGraph(),
			this.restart(o.simulation.alphas.initialize),
			o.autoResize &&
				((this.resizeObserver = new ResizeObserver(Gce(() => this.resize()))),
				this.resizeObserver.observe(this.container));
	}
	get nodeTypeFilter() {
		return this._nodeTypeFilter;
	}
	get includeUnlinked() {
		return this._includeUnlinked;
	}
	set includeUnlinked(t) {
		(this._includeUnlinked = t), this.filterGraph(this.focusedNode);
		const { include: r, exclude: o } =
				this.config.simulation.alphas.filter.unlinked,
			s = t ? r : o;
		this.restart(s);
	}
	set linkFilter(t) {
		(this._linkFilter = t),
			this.filterGraph(this.focusedNode),
			this.restart(this.config.simulation.alphas.filter.link);
	}
	get linkFilter() {
		return this._linkFilter;
	}
	get showNodeLabels() {
		return this._showNodeLabels;
	}
	set showNodeLabels(t) {
		this._showNodeLabels = t;
		const { hide: r, show: o } = this.config.simulation.alphas.labels.nodes,
			s = t ? o : r;
		this.restart(s);
	}
	get showLinkLabels() {
		return this._showLinkLabels;
	}
	set showLinkLabels(t) {
		this._showLinkLabels = t;
		const { hide: r, show: o } = this.config.simulation.alphas.labels.links,
			s = t ? o : r;
		this.restart(s);
	}
	get effectiveWidth() {
		return this.width / this.scale;
	}
	get effectiveHeight() {
		return this.height / this.scale;
	}
	get effectiveCenter() {
		return En.of([this.width, this.height])
			.divide(2)
			.subtract(En.of([this.xOffset, this.yOffset]))
			.divide(this.scale);
	}
	resize() {
		const t = this.width,
			r = this.height,
			o = this.container.getBoundingClientRect().width,
			s = this.container.getBoundingClientRect().height,
			u = t.toFixed() !== o.toFixed(),
			f = r.toFixed() !== s.toFixed();
		if (!u && !f) return;
		(this.width = this.container.getBoundingClientRect().width),
			(this.height = this.container.getBoundingClientRect().height);
		const d = this.config.simulation.alphas.resize;
		this.restart(
			Mx(d) ? d : d({ oldWidth: t, oldHeight: r, newWidth: o, newHeight: s }),
		);
	}
	restart(t) {
		var r;
		(this.markerSelection = Rge({
			config: this.config,
			graph: this.filteredGraph,
			selection: this.markerSelection,
		})),
			(this.linkSelection = Mge({
				config: this.config,
				graph: this.filteredGraph,
				selection: this.linkSelection,
				showLabels: this._showLinkLabels,
			})),
			(this.nodeSelection = Fge({
				config: this.config,
				drag: this.drag,
				graph: this.filteredGraph,
				onNodeContext: (o) => this.toggleNodeFocus(o),
				onNodeSelected: this.config.callbacks.nodeClicked,
				selection: this.nodeSelection,
				showLabels: this._showNodeLabels,
			})),
			(r = this.simulation) == null || r.stop(),
			(this.simulation = Wge({
				center: () => this.effectiveCenter,
				config: this.config,
				graph: this.filteredGraph,
				onTick: () => this.onTick(),
			})
				.alpha(t)
				.restart());
	}
	filterNodesByType(t, r) {
		t
			? this._nodeTypeFilter.push(r)
			: (this._nodeTypeFilter = this._nodeTypeFilter.filter((o) => o !== r)),
			this.filterGraph(this.focusedNode),
			this.restart(this.config.simulation.alphas.filter.type);
	}
	shutdown() {
		var t, r;
		this.focusedNode !== void 0 &&
			((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
			(t = this.resizeObserver) == null || t.unobserve(this.container),
			(r = this.simulation) == null || r.stop();
	}
	initGraph() {
		(this.zoom = Uge({
			config: this.config,
			canvasContainer: () => Bn(this.container).select('svg'),
			min: this.config.zoom.min,
			max: this.config.zoom.max,
			onZoom: (t) => this.onZoom(t),
		})),
			(this.canvas = mge({
				applyZoom: this.scale !== 1,
				container: Bn(this.container),
				offset: [this.xOffset, this.yOffset],
				scale: this.scale,
				zoom: this.zoom,
			})),
			this.applyZoom(),
			(this.linkSelection = Age(this.canvas)),
			(this.nodeSelection = Ige(this.canvas)),
			(this.markerSelection = Oge(this.canvas)),
			(this.drag = yge({
				config: this.config,
				onDragStart: () => {
					var t;
					return (t = this.simulation) == null
						? void 0
						: t.alphaTarget(this.config.simulation.alphas.drag.start).restart();
				},
				onDragEnd: () => {
					var t;
					return (t = this.simulation) == null
						? void 0
						: t.alphaTarget(this.config.simulation.alphas.drag.end).restart();
				},
			}));
	}
	onTick() {
		Bge(this.nodeSelection),
			Nge({
				config: this.config,
				center: this.effectiveCenter,
				graph: this.filteredGraph,
				selection: this.linkSelection,
			});
	}
	resetView() {
		var t;
		(t = this.simulation) == null || t.stop(),
			Bn(this.container).selectChildren().remove(),
			(this.zoom = void 0),
			(this.canvas = void 0),
			(this.linkSelection = void 0),
			(this.nodeSelection = void 0),
			(this.markerSelection = void 0),
			(this.simulation = void 0),
			(this.width = this.container.getBoundingClientRect().width),
			(this.height = this.container.getBoundingClientRect().height);
	}
	onZoom(t) {
		var r, o, s;
		(this.xOffset = t.transform.x),
			(this.yOffset = t.transform.y),
			(this.scale = t.transform.k),
			this.applyZoom(),
			(o = (r = this.config.hooks).afterZoom) == null ||
				o.call(r, this.scale, this.xOffset, this.yOffset),
			(s = this.simulation) == null || s.restart();
	}
	applyZoom() {
		vge({
			canvas: this.canvas,
			scale: this.scale,
			xOffset: this.xOffset,
			yOffset: this.yOffset,
		});
	}
	toggleNodeFocus(t) {
		t.isFocused
			? (this.filterGraph(void 0),
				this.restart(this.config.simulation.alphas.focus.release(t)))
			: this.focusNode(t);
	}
	focusNode(t) {
		this.filterGraph(t),
			this.restart(this.config.simulation.alphas.focus.acquire(t));
	}
	filterGraph(t) {
		this.focusedNode !== void 0 &&
			((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
			t !== void 0 &&
				this._nodeTypeFilter.includes(t.type) &&
				((t.isFocused = !0), (this.focusedNode = t)),
			(this.filteredGraph = bge({
				graph: this.graph,
				filter: this._nodeTypeFilter,
				focusedNode: this.focusedNode,
				includeUnlinked: this._includeUnlinked,
				linkFilter: this._linkFilter,
			}));
	}
}
function vy({ nodes: e, links: t }) {
	return { nodes: e ?? [], links: t ?? [] };
}
function jge(e) {
	return { ...e };
}
function Ix(e) {
	return { ...e, isFocused: !1, lastInteractionTimestamp: void 0 };
}
const Gge = { 'h-full': '', 'min-h-75': '', 'flex-1': '', overflow: 'hidden' },
	Kge = { flex: '', 'items-center': '', 'gap-4': '', 'px-3': '', 'py-2': '' },
	Xge = { flex: '~ gap-1', 'items-center': '', 'select-none': '' },
	Yge = ['id', 'checked', 'onChange'],
	Zge = ['for'],
	Jge = ct({
		__name: 'ViewModuleGraph',
		props: Kl(
			{ graph: {}, projectName: {} },
			{ modelValue: { type: Boolean, required: !0 }, modelModifiers: {} },
		),
		emits: ['update:modelValue'],
		setup(e) {
			const t = e,
				r = Ac(e, 'modelValue'),
				{ graph: o } = q_(t),
				s = qe(),
				u = qe(!1),
				f = qe(),
				d = qe();
			Ph(
				() => {
					u.value === !1 && setTimeout(() => (f.value = void 0), 300);
				},
				{ flush: 'post' },
			),
				Hs(() => {
					m();
				}),
				Ec(() => {
					var w;
					(w = d.value) == null || w.shutdown();
				}),
				Et(o, () => m());
			function h(w, C) {
				var M;
				(M = d.value) == null || M.filterNodesByType(C, w);
			}
			function p(w) {
				(f.value = w), (u.value = !0);
			}
			function m(w = !1) {
				var C;
				if (((C = d.value) == null || C.shutdown(), w && !r.value)) {
					r.value = !0;
					return;
				}
				!o.value ||
					!s.value ||
					(d.value = new Vge(
						s.value,
						o.value,
						gge({
							nodeRadius: 10,
							autoResize: !0,
							simulation: {
								alphas: {
									initialize: 1,
									resize: ({ newHeight: M, newWidth: E }) =>
										M === 0 && E === 0 ? 0 : 0.25,
								},
								forces: {
									collision: { radiusMultiplier: 10 },
									link: { length: 240 },
								},
							},
							marker: $x.Arrow(2),
							modifiers: { node: b },
							positionInitializer:
								o.value.nodes.length > 1 ? sh.Randomized : sh.Centered,
							zoom: { min: 0.5, max: 2 },
						}),
					));
			}
			const v = (w) => w.button === 0;
			function b(w) {
				if (kr) return;
				let C = 0,
					M = 0,
					E = 0;
				w.on('pointerdown', (N, A) => {
					A.type !== 'external' &&
						(!A.x || !A.y || !v(N) || ((C = A.x), (M = A.y), (E = Date.now())));
				}).on('pointerup', (N, A) => {
					if (
						A.type === 'external' ||
						!A.x ||
						!A.y ||
						!v(N) ||
						Date.now() - E > 500
					)
						return;
					const $ = A.x - C,
						L = A.y - M;
					$ ** 2 + L ** 2 < 100 && p(A.id);
				});
			}
			return (w, C) => {
				var $;
				const M = wi,
					E = jce,
					N = Jw,
					A = Kr('tooltip');
				return (
					oe(),
					ve('div', Gge, [
						Q('div', null, [
							Q('div', Kge, [
								Q('div', Xge, [
									gt(
										Q(
											'input',
											{
												id: 'hide-node-modules',
												'onUpdate:modelValue':
													C[0] || (C[0] = (L) => (r.value = L)),
												type: 'checkbox',
											},
											null,
											512,
										),
										[[sb, r.value]],
									),
									C[4] ||
										(C[4] = Q(
											'label',
											{
												'font-light': '',
												'text-sm': '',
												'ws-nowrap': '',
												'overflow-hidden': '',
												'select-none': '',
												truncate: '',
												for: 'hide-node-modules',
												'border-b-2': '',
												border: '$cm-namespace',
											},
											'Hide node_modules',
											-1,
										)),
								]),
								(oe(!0),
								ve(
									ut,
									null,
									gi(($ = H(d)) == null ? void 0 : $.nodeTypes.sort(), (L) => {
										var O;
										return (
											oe(),
											ve(
												'div',
												{
													key: L,
													flex: '~ gap-1',
													'items-center': '',
													'select-none': '',
												},
												[
													Q(
														'input',
														{
															id: `type-${L}`,
															type: 'checkbox',
															checked:
																(O = H(d)) == null
																	? void 0
																	: O.nodeTypeFilter.includes(L),
															onChange: (U) => h(L, U.target.checked),
														},
														null,
														40,
														Yge,
													),
													Q(
														'label',
														{
															'font-light': '',
															'text-sm': '',
															'ws-nowrap': '',
															'overflow-hidden': '',
															capitalize: '',
															'select-none': '',
															truncate: '',
															for: `type-${L}`,
															'border-b-2': '',
															style: Qt({
																'border-color': `var(--color-node-${L})`,
															}),
														},
														He(L) + ' Modules',
														13,
														Zge,
													),
												],
											)
										);
									}),
									128,
								)),
								C[5] || (C[5] = Q('div', { 'flex-auto': '' }, null, -1)),
								Q('div', null, [
									gt(
										Pe(
											M,
											{
												icon: 'i-carbon-reset',
												onClick: C[1] || (C[1] = (L) => m(!0)),
											},
											null,
											512,
										),
										[[A, 'Reset', void 0, { bottom: !0 }]],
									),
								]),
							]),
						]),
						Q('div', { ref_key: 'el', ref: s }, null, 512),
						Pe(
							N,
							{
								modelValue: H(u),
								'onUpdate:modelValue':
									C[3] || (C[3] = (L) => (kt(u) ? (u.value = L) : null)),
								direction: 'right',
							},
							{
								default: rt(() => [
									H(f)
										? (oe(),
											tt(
												K0,
												{ key: 0 },
												{
													default: rt(() => [
														Pe(
															E,
															{
																id: H(f),
																'project-name': w.projectName,
																onClose: C[2] || (C[2] = (L) => (u.value = !1)),
															},
															null,
															8,
															['id', 'project-name'],
														),
													]),
													_: 1,
												},
											))
										: Ke('', !0),
								]),
								_: 1,
							},
							8,
							['modelValue'],
						),
					])
				);
			};
		},
	}),
	Qge = {
		key: 0,
		'text-green-500': '',
		'flex-shrink-0': '',
		'i-carbon:checkmark': '',
	},
	eme = {
		key: 1,
		'text-red-500': '',
		'flex-shrink-0': '',
		'i-carbon:compare': '',
	},
	tme = {
		key: 2,
		'text-red-500': '',
		'flex-shrink-0': '',
		'i-carbon:close': '',
	},
	nme = {
		key: 3,
		'text-gray-500': '',
		'flex-shrink-0': '',
		'i-carbon:document-blank': '',
	},
	rme = {
		key: 4,
		'text-gray-500': '',
		'flex-shrink-0': '',
		'i-carbon:redo': '',
		'rotate-90': '',
	},
	ime = {
		key: 5,
		'text-yellow-500': '',
		'flex-shrink-0': '',
		'i-carbon:circle-dash': '',
		'animate-spin': '',
	},
	Fx = ct({
		__name: 'StatusIcon',
		props: { state: {}, mode: {}, failedSnapshot: { type: Boolean } },
		setup(e) {
			return (t, r) => {
				const o = Kr('tooltip');
				return t.state === 'pass'
					? (oe(), ve('div', Qge))
					: t.failedSnapshot
						? gt((oe(), ve('div', eme, null, 512)), [
								[o, 'Contains failed snapshot', void 0, { right: !0 }],
							])
						: t.state === 'fail'
							? (oe(), ve('div', tme))
							: t.mode === 'todo'
								? gt((oe(), ve('div', nme, null, 512)), [
										[o, 'Todo', void 0, { right: !0 }],
									])
								: t.mode === 'skip' || t.state === 'skip'
									? gt((oe(), ve('div', rme, null, 512)), [
											[o, 'Skipped', void 0, { right: !0 }],
										])
									: (oe(), ve('div', ime));
			};
		},
	});
function ome(e) {
	const t = new Map(),
		r = new Map(),
		o = [];
	for (;;) {
		let s = 0;
		if (
			(e.forEach((u, f) => {
				var m;
				const { splits: d, finished: h } = u;
				if (h) {
					s++;
					const { raw: v, candidate: b } = u;
					t.set(v, b);
					return;
				}
				if (d.length === 0) {
					u.finished = !0;
					return;
				}
				const p = d[0];
				r.has(p)
					? ((u.candidate += u.candidate === '' ? p : `/${p}`),
						(m = r.get(p)) == null || m.push(f),
						d.shift())
					: (r.set(p, [f]), o.push(f));
			}),
			o.forEach((u) => {
				const f = e[u],
					d = f.splits.shift();
				f.candidate += f.candidate === '' ? d : `/${d}`;
			}),
			r.forEach((u) => {
				if (u.length === 1) {
					const f = u[0];
					e[f].finished = !0;
				}
			}),
			r.clear(),
			(o.length = 0),
			s === e.length)
		)
			break;
	}
	return t;
}
function sme(e) {
	let t = e;
	t.includes('/node_modules/') && (t = e.split(/\/node_modules\//g).pop());
	const r = t.split(/\//g);
	return { raw: t, splits: r, candidate: '', finished: !1, id: e };
}
function lme(e) {
	const t = e.map((o) => sme(o)),
		r = ome(t);
	return t.map(({ raw: o, id: s }) =>
		Ix({
			color: 'var(--color-node-external)',
			label: {
				color: 'var(--color-node-external)',
				fontSize: '0.875rem',
				text: r.get(o) ?? '',
			},
			isFocused: !1,
			id: s,
			type: 'external',
		}),
	);
}
function ame(e, t) {
	return Ix({
		color: t ? 'var(--color-node-root)' : 'var(--color-node-inline)',
		label: {
			color: t ? 'var(--color-node-root)' : 'var(--color-node-inline)',
			fontSize: '0.875rem',
			text: e.split(/\//g).pop(),
		},
		isFocused: !1,
		id: e,
		type: 'inline',
	});
}
function ume(e, t) {
	if (!e) return vy({});
	const r = lme(e.externalized),
		o = e.inlined.map((d) => ame(d, d === t)) ?? [],
		s = [...r, ...o],
		u = Object.fromEntries(s.map((d) => [d.id, d])),
		f = Object.entries(e.graph).flatMap(([d, h]) =>
			h
				.map((p) => {
					const m = u[d],
						v = u[p];
					if (!(m === void 0 || v === void 0))
						return jge({
							source: m,
							target: v,
							color: 'var(--color-link)',
							label: !1,
						});
				})
				.filter((p) => p !== void 0),
		);
	return vy({ nodes: s, links: f });
}
const cme = {
		key: 0,
		flex: '',
		'flex-col': '',
		'h-full': '',
		'max-h-full': '',
		'overflow-hidden': '',
		'data-testid': 'file-detail',
	},
	fme = {
		p: '2',
		'h-10': '',
		flex: '~ gap-2',
		'items-center': '',
		'bg-header': '',
		border: 'b base',
	},
	dme = { key: 0, class: 'i-logos:typescript-icon', 'flex-shrink-0': '' },
	hme = {
		'flex-1': '',
		'font-light': '',
		'op-50': '',
		'ws-nowrap': '',
		truncate: '',
		'text-sm': '',
	},
	pme = { class: 'flex text-lg' },
	gme = {
		flex: '~',
		'items-center': '',
		'bg-header': '',
		border: 'b-2 base',
		'text-sm': '',
		'h-41px': '',
	},
	mme = {
		key: 0,
		class: 'block w-1.4em h-1.4em i-carbon:circle-dash animate-spin animate-2s',
	},
	vme = { key: 1, class: 'block w-1.4em h-1.4em i-carbon:chart-relationship' },
	yme = { flex: '', 'flex-col': '', 'flex-1': '', overflow: 'hidden' },
	bme = ['flex-1'],
	wme = ct({
		__name: 'FileDetails',
		setup(e) {
			const t = qe({ nodes: [], links: [] }),
				r = qe(!1),
				o = qe(!1),
				s = qe(!1),
				u = qe(void 0),
				f = qe(!0),
				d = ke(() => {
					const A = Zt.value;
					if (!(!A || !A.filepath))
						return {
							filepath: A.filepath,
							projectName: A.file.projectName || '',
						};
				}),
				h = ke(() => Zt.value && Wh(Zt.value)),
				p = ke(() => {
					var A, $;
					return !!(
						($ = (A = Zt.value) == null ? void 0 : A.meta) != null &&
						$.typecheck
					);
				});
			function m() {
				var $;
				const A = ($ = Zt.value) == null ? void 0 : $.filepath;
				A && fetch(`/__open-in-editor?file=${encodeURIComponent(A)}`);
			}
			function v(A) {
				A === 'graph' && (o.value = !0), (Kn.value = A);
			}
			const b = ke(() => {
				var A;
				return (
					((A = Yw.value) == null
						? void 0
						: A.reduce(($, { size: L }) => $ + L, 0)) ?? 0
				);
			});
			function w(A) {
				r.value = A;
			}
			const C = /[/\\]node_modules[/\\]/;
			async function M(A = !1) {
				var $;
				if (
					!(
						s.value ||
						((($ = d.value) == null ? void 0 : $.filepath) === u.value && !A)
					)
				) {
					(s.value = !0), await Ot();
					try {
						const L = d.value;
						if (!L) {
							s.value = !1;
							return;
						}
						if (
							A ||
							!u.value ||
							L.filepath !== u.value ||
							(!t.value.nodes.length && !t.value.links.length)
						) {
							let O = await vt.rpc.getModuleGraph(
								L.projectName,
								L.filepath,
								!!Do,
							);
							f.value &&
								(kr &&
									(O =
										typeof window.structuredClone < 'u'
											? window.structuredClone(O)
											: aE(O)),
								(O.inlined = O.inlined.filter((U) => !C.test(U))),
								(O.externalized = O.externalized.filter((U) => !C.test(U)))),
								(t.value = ume(O, L.filepath)),
								(u.value = L.filepath);
						}
						v('graph');
					} finally {
						await new Promise((L) => setTimeout(L, 100)), (s.value = !1);
					}
				}
			}
			Vh(
				() => [d.value, Kn.value, f.value],
				([, A, $], L) => {
					A === 'graph' && M(L && $ !== L[2]);
				},
				{ debounce: 100, immediate: !0 },
			);
			const E = ke(() => {
					var A;
					return lw((A = Zt.value) == null ? void 0 : A.file.projectName);
				}),
				N = ke(() => {
					switch (E.value) {
						case 'blue':
						case 'green':
						case 'magenta':
							return 'white';
						default:
							return 'black';
					}
				});
			return (A, $) => {
				var ee, Y, I, F;
				const L = Fx,
					O = wi,
					U = Jge,
					B = Ice,
					te = Mce,
					J = kce,
					K = Kr('tooltip');
				return H(Zt)
					? (oe(),
						ve('div', cme, [
							Q('div', null, [
								Q('div', fme, [
									Pe(
										L,
										{
											state: (ee = H(Zt).result) == null ? void 0 : ee.state,
											mode: H(Zt).mode,
											'failed-snapshot': H(h),
										},
										null,
										8,
										['state', 'mode', 'failed-snapshot'],
									),
									H(p)
										? gt((oe(), ve('div', dme, null, 512)), [
												[
													K,
													"This is a typecheck test. It won't report results of the runtime tests",
													void 0,
													{ bottom: !0 },
												],
											])
										: Ke('', !0),
									(Y = H(Zt)) != null && Y.file.projectName
										? (oe(),
											ve(
												'span',
												{
													key: 1,
													class: 'rounded-full py-0.5 px-1 text-xs font-light',
													style: Qt({ backgroundColor: H(E), color: H(N) }),
												},
												He(H(Zt).file.projectName),
												5,
											))
										: Ke('', !0),
									Q('div', hme, He((I = H(Zt)) == null ? void 0 : I.name), 1),
									Q('div', pme, [
										H(kr)
											? Ke('', !0)
											: gt(
													(oe(),
													tt(
														O,
														{
															key: 0,
															title: 'Open in editor',
															icon: 'i-carbon-launch',
															disabled: !((F = H(Zt)) != null && F.filepath),
															onClick: m,
														},
														null,
														8,
														['disabled'],
													)),
													[[K, 'Open in editor', void 0, { bottom: !0 }]],
												),
									]),
								]),
								Q('div', gme, [
									Q(
										'button',
										{
											'tab-button': '',
											class: it([
												'flex items-center gap-2',
												{ 'tab-button-active': H(Kn) == null },
											]),
											'data-testid': 'btn-report',
											onClick: $[0] || ($[0] = (k) => v(null)),
										},
										$[5] ||
											($[5] = [
												Q(
													'span',
													{ class: 'block w-1.4em h-1.4em i-carbon:report' },
													null,
													-1,
												),
												pt(' Report '),
											]),
										2,
									),
									Q(
										'button',
										{
											'tab-button': '',
											'data-testid': 'btn-graph',
											class: it([
												'flex items-center gap-2',
												{ 'tab-button-active': H(Kn) === 'graph' },
											]),
											onClick: $[1] || ($[1] = (k) => v('graph')),
										},
										[
											H(s) ? (oe(), ve('span', mme)) : (oe(), ve('span', vme)),
											$[6] || ($[6] = pt(' Module Graph ')),
										],
										2,
									),
									Q(
										'button',
										{
											'tab-button': '',
											'data-testid': 'btn-code',
											class: it([
												'flex items-center gap-2',
												{ 'tab-button-active': H(Kn) === 'editor' },
											]),
											onClick: $[2] || ($[2] = (k) => v('editor')),
										},
										[
											$[7] ||
												($[7] = Q(
													'span',
													{ class: 'block w-1.4em h-1.4em i-carbon:code' },
													null,
													-1,
												)),
											pt(' ' + He(H(r) ? '* ' : '') + 'Code ', 1),
										],
										2,
									),
									Q(
										'button',
										{
											'tab-button': '',
											'data-testid': 'btn-console',
											class: it([
												'flex items-center gap-2',
												{
													'tab-button-active': H(Kn) === 'console',
													op20: H(Kn) !== 'console' && H(b) === 0,
												},
											]),
											onClick: $[3] || ($[3] = (k) => v('console')),
										},
										[
											$[8] ||
												($[8] = Q(
													'span',
													{
														class:
															'block w-1.4em h-1.4em i-carbon:terminal-3270',
													},
													null,
													-1,
												)),
											pt(' Console (' + He(H(b)) + ') ', 1),
										],
										2,
									),
								]),
							]),
							Q('div', yme, [
								H(o)
									? (oe(),
										ve(
											'div',
											{ key: 0, 'flex-1': H(Kn) === 'graph' && '' },
											[
												gt(
													Pe(
														U,
														{
															modelValue: H(f),
															'onUpdate:modelValue':
																$[4] ||
																($[4] = (k) => (kt(f) ? (f.value = k) : null)),
															graph: H(t),
															'data-testid': 'graph',
															'project-name': H(Zt).file.projectName || '',
														},
														null,
														8,
														['modelValue', 'graph', 'project-name'],
													),
													[[Gi, H(Kn) === 'graph' && !H(s)]],
												),
											],
											8,
											bme,
										))
									: Ke('', !0),
								H(Kn) === 'editor'
									? (oe(),
										tt(
											B,
											{
												key: H(Zt).id,
												file: H(Zt),
												'data-testid': 'editor',
												onDraft: w,
											},
											null,
											8,
											['file'],
										))
									: H(Kn) === 'console'
										? (oe(),
											tt(
												te,
												{ key: 2, file: H(Zt), 'data-testid': 'console' },
												null,
												8,
												['file'],
											))
										: H(Kn)
											? Ke('', !0)
											: (oe(),
												tt(
													J,
													{ key: 3, file: H(Zt), 'data-testid': 'report' },
													null,
													8,
													['file'],
												)),
							]),
						]))
					: Ke('', !0);
			};
		},
	}),
	xme = { h: 'full', flex: '~ col' },
	Sme = { 'flex-auto': '', 'py-1': '', 'bg-white': '' },
	_me = ['src'],
	kme = ct({
		__name: 'Coverage',
		props: { src: {} },
		setup(e) {
			return (t, r) => (
				oe(),
				ve('div', xme, [
					r[0] ||
						(r[0] = Q(
							'div',
							{
								p: '3',
								'h-10': '',
								flex: '~ gap-2',
								'items-center': '',
								'bg-header': '',
								border: 'b base',
							},
							[
								Q('div', { class: 'i-carbon:folder-details-reference' }),
								Q(
									'span',
									{
										'pl-1': '',
										'font-bold': '',
										'text-sm': '',
										'flex-auto': '',
										'ws-nowrap': '',
										'overflow-hidden': '',
										truncate: '',
									},
									'Coverage',
								),
							],
							-1,
						)),
					Q('div', Sme, [
						Q('iframe', { id: 'vitest-ui-coverage', src: t.src }, null, 8, _me),
					]),
				])
			);
		},
	}),
	Tme = { bg: 'red500/10', 'p-1': '', 'mb-1': '', 'mt-2': '', rounded: '' },
	Cme = { 'font-bold': '' },
	Eme = {
		key: 0,
		class: 'scrolls',
		text: 'xs',
		'font-mono': '',
		'mx-1': '',
		'my-2': '',
		'pb-2': '',
		'overflow-auto': '',
	},
	Lme = ['font-bold'],
	Ame = { text: 'red500/70' },
	Mme = { key: 1, text: 'sm', 'mb-2': '' },
	Nme = { 'font-bold': '' },
	$me = { key: 2, text: 'sm', 'mb-2': '' },
	Pme = { 'font-bold': '' },
	Ome = { key: 3, text: 'sm', 'font-thin': '' },
	Rme = ct({
		__name: 'ErrorEntry',
		props: { error: {} },
		setup(e) {
			return (t, r) => {
				var o;
				return (
					oe(),
					ve(
						ut,
						null,
						[
							Q('h4', Tme, [
								Q('span', Cme, [
									pt(He(t.error.name || t.error.nameStr || 'Unknown Error'), 1),
									t.error.message
										? (oe(), ve(ut, { key: 0 }, [pt(':')], 64))
										: Ke('', !0),
								]),
								pt(' ' + He(t.error.message), 1),
							]),
							(o = t.error.stacks) != null && o.length
								? (oe(),
									ve('p', Eme, [
										(oe(!0),
										ve(
											ut,
											null,
											gi(
												t.error.stacks,
												(s, u) => (
													oe(),
													ve(
														'span',
														{
															key: u,
															'whitespace-pre': '',
															'font-bold': u === 0 ? '' : null,
														},
														[
															pt(
																'❯ ' + He(s.method) + ' ' + He(s.file) + ':',
																1,
															),
															Q(
																'span',
																Ame,
																He(s.line) + ':' + He(s.column),
																1,
															),
															r[0] || (r[0] = Q('br', null, null, -1)),
														],
														8,
														Lme,
													)
												),
											),
											128,
										)),
									]))
								: Ke('', !0),
							t.error.VITEST_TEST_PATH
								? (oe(),
									ve('p', Mme, [
										r[1] || (r[1] = pt(' This error originated in ')),
										Q('span', Nme, He(t.error.VITEST_TEST_PATH), 1),
										r[2] ||
											(r[2] = pt(
												" test file. It doesn't mean the error was thrown inside the file itself, but while it was running. ",
											)),
									]))
								: Ke('', !0),
							t.error.VITEST_TEST_NAME
								? (oe(),
									ve('p', $me, [
										r[3] ||
											(r[3] = pt(
												" The latest test that might've caused the error is ",
											)),
										Q('span', Pme, He(t.error.VITEST_TEST_NAME), 1),
										r[4] ||
											(r[4] = pt('. It might mean one of the following:')),
										r[5] || (r[5] = Q('br', null, null, -1)),
										r[6] ||
											(r[6] = Q(
												'ul',
												null,
												[
													Q(
														'li',
														null,
														' The error was thrown, while Vitest was running this test. ',
													),
													Q(
														'li',
														null,
														' If the error occurred after the test had been completed, this was the last documented test before it was thrown. ',
													),
												],
												-1,
											)),
									]))
								: Ke('', !0),
							t.error.VITEST_AFTER_ENV_TEARDOWN
								? (oe(),
									ve(
										'p',
										Ome,
										r[7] ||
											(r[7] = [
												pt(
													' This error was caught after test environment was torn down. Make sure to cancel any running tasks before test finishes:',
												),
												Q('br', null, null, -1),
												Q(
													'ul',
													null,
													[
														Q(
															'li',
															null,
															' Cancel timeouts using clearTimeout and clearInterval. ',
														),
														Q(
															'li',
															null,
															' Wait for promises to resolve using the await keyword. ',
														),
													],
													-1,
												),
											]),
									))
								: Ke('', !0),
						],
						64,
					)
				);
			};
		},
	}),
	Dme = {
		'data-testid': 'test-files-entry',
		grid: '~ cols-[min-content_1fr_min-content]',
		'items-center': '',
		gap: 'x-2 y-3',
		p: 'x4',
		relative: '',
		'font-light': '',
		'w-80': '',
		op80: '',
	},
	zme = { class: 'number', 'data-testid': 'num-files' },
	Ime = { class: 'number' },
	Fme = { class: 'number', 'text-red5': '' },
	Hme = { class: 'number', 'text-red5': '' },
	qme = { class: 'number', 'text-red5': '' },
	Bme = { class: 'number', 'data-testid': 'run-time' },
	Wme = {
		key: 0,
		bg: 'red500/10',
		text: 'red500',
		p: 'x3 y2',
		'max-w-xl': '',
		'm-2': '',
		rounded: '',
	},
	Ume = {
		text: 'sm',
		'font-thin': '',
		'mb-2': '',
		'data-testid': 'unhandled-errors',
	},
	Vme = {
		'data-testid': 'unhandled-errors-details',
		class: 'scrolls unhandled-errors',
		text: 'sm',
		'font-thin': '',
		'pe-2.5': '',
		'open:max-h-52': '',
		'overflow-auto': '',
	},
	jme = ct({
		__name: 'TestFilesEntry',
		setup(e) {
			return (t, r) => {
				const o = Rme;
				return (
					oe(),
					ve(
						ut,
						null,
						[
							Q('div', Dme, [
								r[8] ||
									(r[8] = Q('div', { 'i-carbon-document': '' }, null, -1)),
								r[9] || (r[9] = Q('div', null, 'Files', -1)),
								Q('div', zme, He(H(Ce).summary.files), 1),
								H(Ce).summary.filesSuccess
									? (oe(),
										ve(
											ut,
											{ key: 0 },
											[
												r[0] ||
													(r[0] = Q(
														'div',
														{ 'i-carbon-checkmark': '' },
														null,
														-1,
													)),
												r[1] || (r[1] = Q('div', null, 'Pass', -1)),
												Q('div', Ime, He(H(Ce).summary.filesSuccess), 1),
											],
											64,
										))
									: Ke('', !0),
								H(Ce).summary.filesFailed
									? (oe(),
										ve(
											ut,
											{ key: 1 },
											[
												r[2] ||
													(r[2] = Q('div', { 'i-carbon-close': '' }, null, -1)),
												r[3] || (r[3] = Q('div', null, ' Fail ', -1)),
												Q('div', Fme, He(H(Ce).summary.filesFailed), 1),
											],
											64,
										))
									: Ke('', !0),
								H(Ce).summary.filesSnapshotFailed
									? (oe(),
										ve(
											ut,
											{ key: 2 },
											[
												r[4] ||
													(r[4] = Q(
														'div',
														{ 'i-carbon-compare': '' },
														null,
														-1,
													)),
												r[5] || (r[5] = Q('div', null, ' Snapshot Fail ', -1)),
												Q('div', Hme, He(H(Ce).summary.filesSnapshotFailed), 1),
											],
											64,
										))
									: Ke('', !0),
								H(Wi).length
									? (oe(),
										ve(
											ut,
											{ key: 3 },
											[
												r[6] ||
													(r[6] = Q(
														'div',
														{ 'i-carbon-checkmark-outline-error': '' },
														null,
														-1,
													)),
												r[7] || (r[7] = Q('div', null, ' Errors ', -1)),
												Q('div', qme, He(H(Wi).length), 1),
											],
											64,
										))
									: Ke('', !0),
								r[10] || (r[10] = Q('div', { 'i-carbon-timer': '' }, null, -1)),
								r[11] || (r[11] = Q('div', null, 'Time', -1)),
								Q('div', Bme, He(H(Ce).summary.time), 1),
							]),
							H(Wi).length
								? (oe(),
									ve('div', Wme, [
										r[15] ||
											(r[15] = Q(
												'h3',
												{ 'text-center': '', 'mb-2': '' },
												' Unhandled Errors ',
												-1,
											)),
										Q('p', Ume, [
											pt(
												' Vitest caught ' +
													He(H(Wi).length) +
													' error' +
													He(H(Wi).length > 1 ? 's' : '') +
													' during the test run.',
												1,
											),
											r[12] || (r[12] = Q('br', null, null, -1)),
											r[13] ||
												(r[13] = pt(
													' This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected. ',
												)),
										]),
										Q('details', Vme, [
											r[14] ||
												(r[14] = Q(
													'summary',
													{ 'font-bold': '', 'cursor-pointer': '' },
													' Errors ',
													-1,
												)),
											(oe(!0),
											ve(
												ut,
												null,
												gi(
													H(Wi),
													(s, u) => (
														oe(),
														tt(o, { key: u, error: s }, null, 8, ['error'])
													),
												),
												128,
											)),
										]),
									]))
								: Ke('', !0),
						],
						64,
					)
				);
			};
		},
	}),
	Gme = Xr(jme, [['__scopeId', 'data-v-0178ddee']]),
	Kme = { 'p-2': '', 'text-center': '', flex: '' },
	Xme = { 'text-4xl': '', 'min-w-2em': '' },
	Yme = { 'text-md': '' },
	Zme = ct({
		__name: 'DashboardEntry',
		setup(e) {
			return (t, r) => (
				oe(),
				ve('div', Kme, [
					Q('div', null, [
						Q('div', Xme, [vn(t.$slots, 'body')]),
						Q('div', Yme, [vn(t.$slots, 'header')]),
					]),
				])
			);
		},
	}),
	Jme = {
		flex: '~ wrap',
		'justify-evenly': '',
		'gap-2': '',
		p: 'x-4',
		relative: '',
	},
	Qme = ct({
		__name: 'TestsEntry',
		setup(e) {
			return (t, r) => {
				const o = Zme;
				return (
					oe(),
					ve('div', Jme, [
						Pe(
							o,
							{ 'text-green5': '', 'data-testid': 'pass-entry' },
							{
								header: rt(() => r[0] || (r[0] = [pt(' Pass ')])),
								body: rt(() => [pt(He(H(Ce).summary.testsSuccess), 1)]),
								_: 1,
							},
						),
						Pe(
							o,
							{
								class: it({
									'text-red5': H(Ce).summary.testsFailed,
									op50: !H(Ce).summary.testsFailed,
								}),
								'data-testid': 'fail-entry',
							},
							{
								header: rt(() => r[1] || (r[1] = [pt(' Fail ')])),
								body: rt(() => [pt(He(H(Ce).summary.testsFailed), 1)]),
								_: 1,
							},
							8,
							['class'],
						),
						H(Ce).summary.testsSkipped
							? (oe(),
								tt(
									o,
									{ key: 0, op50: '', 'data-testid': 'skipped-entry' },
									{
										header: rt(() => r[2] || (r[2] = [pt(' Skip ')])),
										body: rt(() => [pt(He(H(Ce).summary.testsSkipped), 1)]),
										_: 1,
									},
								))
							: Ke('', !0),
						H(Ce).summary.testsTodo
							? (oe(),
								tt(
									o,
									{ key: 1, op50: '', 'data-testid': 'todo-entry' },
									{
										header: rt(() => r[3] || (r[3] = [pt(' Todo ')])),
										body: rt(() => [pt(He(H(Ce).summary.testsTodo), 1)]),
										_: 1,
									},
								))
							: Ke('', !0),
						Pe(
							o,
							{ tail: !0, 'data-testid': 'total-entry' },
							{
								header: rt(() => r[4] || (r[4] = [pt(' Total ')])),
								body: rt(() => [pt(He(H(Ce).summary.totalTests), 1)]),
								_: 1,
							},
						),
					])
				);
			};
		},
	}),
	eve = {},
	tve = {
		'gap-0': '',
		flex: '~ col gap-4',
		'h-full': '',
		'justify-center': '',
		'items-center': '',
	},
	nve = { 'aria-labelledby': 'tests', m: 'y-4 x-2' };
function rve(e, t) {
	const r = Qme,
		o = Gme;
	return oe(), ve('div', tve, [Q('section', nve, [Pe(r)]), Pe(o)]);
}
const ive = Xr(eve, [['render', rve]]),
	ove = {},
	sve = { h: 'full', flex: '~ col' },
	lve = { class: 'scrolls', 'flex-auto': '', 'py-1': '' };
function ave(e, t) {
	const r = ive;
	return (
		oe(),
		ve('div', sve, [
			t[0] ||
				(t[0] = Q(
					'div',
					{
						p: '3',
						'h-10': '',
						flex: '~ gap-2',
						'items-center': '',
						'bg-header': '',
						border: 'b base',
					},
					[
						Q('div', { class: 'i-carbon-dashboard' }),
						Q(
							'span',
							{
								'pl-1': '',
								'font-bold': '',
								'text-sm': '',
								'flex-auto': '',
								'ws-nowrap': '',
								'overflow-hidden': '',
								truncate: '',
							},
							'Dashboard',
						),
					],
					-1,
				)),
			Q('div', lve, [Pe(r)]),
		])
	);
}
const uve = Xr(ove, [['render', ave]]),
	cve = ['open'],
	fve = ct({
		__name: 'DetailsPanel',
		props: { color: {} },
		setup(e) {
			const t = qe(!0);
			return (r, o) => (
				oe(),
				ve(
					'div',
					{
						open: H(t),
						class: 'details-panel',
						'data-testid': 'details-panel',
						onToggle: o[0] || (o[0] = (s) => (t.value = s.target.open)),
					},
					[
						Q(
							'div',
							{
								p: 'y1',
								'text-sm': '',
								'bg-base': '',
								'items-center': '',
								'z-5': '',
								'gap-2': '',
								class: it(r.color),
								'w-full': '',
								flex: '',
								'select-none': '',
								sticky: '',
								top: '-1',
							},
							[
								o[1] ||
									(o[1] = Q(
										'div',
										{ 'flex-1': '', 'h-1px': '', border: 'base b', op80: '' },
										null,
										-1,
									)),
								vn(r.$slots, 'summary', { open: H(t) }),
								o[2] ||
									(o[2] = Q(
										'div',
										{ 'flex-1': '', 'h-1px': '', border: 'base b', op80: '' },
										null,
										-1,
									)),
							],
							2,
						),
						vn(r.$slots, 'default'),
					],
					40,
					cve,
				)
			);
		},
	}),
	dve = {
		type: 'button',
		dark: 'op75',
		bg: 'gray-200 dark:#111',
		hover: 'op100',
		'rounded-1': '',
		'p-0.5': '',
	},
	hve = {
		__name: 'IconAction',
		props: { icon: String },
		setup(e) {
			return (t, r) => (
				oe(),
				ve('button', dve, [
					Q(
						'span',
						{
							block: '',
							class: it([e.icon, 'dark:op85 hover:op100']),
							op65: '',
						},
						null,
						2,
					),
				])
			);
		},
	},
	pve = ['aria-label', 'data-current'],
	gve = { key: 1, 'w-4': '' },
	mve = { flex: '', 'items-end': '', 'gap-2': '', 'overflow-hidden': '' },
	vve = { key: 0, class: 'i-logos:typescript-icon', 'flex-shrink-0': '' },
	yve = { 'text-sm': '', truncate: '', 'font-light': '' },
	bve = ['text', 'innerHTML'],
	wve = { key: 1, text: 'xs', op20: '', style: { 'white-space': 'nowrap' } },
	xve = {
		'gap-1': '',
		'justify-end': '',
		'flex-grow-1': '',
		'pl-1': '',
		class: 'test-actions',
	},
	Sve = {
		key: 0,
		class: 'op100 gap-1 p-y-1',
		grid: '~ items-center cols-[1.5em_1fr]',
	},
	_ve = { key: 1 },
	kve = ct({
		__name: 'ExplorerItem',
		props: {
			taskId: {},
			name: {},
			indent: {},
			typecheck: { type: Boolean },
			duration: {},
			state: {},
			current: { type: Boolean },
			type: {},
			opened: { type: Boolean },
			expandable: { type: Boolean },
			search: {},
			projectName: {},
			projectNameColor: {},
			disableTaskLocation: { type: Boolean },
			onItemClick: { type: Function },
		},
		setup(e) {
			const t = ke(() => vt.state.idMap.get(e.taskId)),
				r = ke(() => {
					if (kr) return !1;
					const E = t.value;
					return E && Wh(E);
				});
			function o() {
				var E;
				if (!e.expandable) {
					(E = e.onItemClick) == null || E.call(e, t.value);
					return;
				}
				e.opened ? Ce.collapseNode(e.taskId) : Ce.expandNode(e.taskId);
			}
			async function s(E) {
				var N;
				(N = e.onItemClick) == null || N.call(e, E),
					vs.value && ((lc.value = !0), await Ot()),
					e.type === 'file' ? await Qh([E.file]) : await que(E);
			}
			function u(E) {
				return vt.rpc.updateSnapshot(E.file);
			}
			const f = ke(() =>
					e.indent <= 0
						? []
						: Array.from({ length: e.indent }, (E, N) => `${e.taskId}-${N}`),
				),
				d = ke(() => {
					const E = f.value,
						N = [];
					return (
						(e.type === 'file' || e.type === 'suite') && N.push('min-content'),
						N.push('min-content'),
						e.type === 'suite' && e.typecheck && N.push('min-content'),
						N.push('minmax(0, 1fr)'),
						N.push('min-content'),
						`grid-template-columns: ${E.map(() => '1rem').join(' ')} ${N.join(' ')};`
					);
				}),
				h = ke(() =>
					e.type === 'file'
						? 'Run current file'
						: e.type === 'suite'
							? 'Run all tests in this suite'
							: 'Run current test',
				),
				p = ke(() => ow(e.name)),
				m = ke(() => {
					const E = DE.value,
						N = p.value;
					return E
						? N.replace(E, (A) => `<span class="highlight">${A}</span>`)
						: N;
				}),
				v = ke(() => e.type !== 'file' && e.disableTaskLocation),
				b = ke(() =>
					e.type === 'file'
						? 'Open test details'
						: e.type === 'suite'
							? 'View Suite Source Code'
							: 'View Test Source Code',
				),
				w = ke(() => (v.value ? 'color-red5 dark:color-#f43f5e' : null));
			function C() {
				var N;
				const E = t.value;
				e.type === 'file'
					? (N = e.onItemClick) == null || N.call(e, E)
					: zce(E);
			}
			const M = ke(() => {
				switch (e.projectNameColor) {
					case 'blue':
					case 'green':
					case 'magenta':
						return 'white';
					default:
						return 'black';
				}
			});
			return (E, N) => {
				const A = Fx,
					$ = hve,
					L = wi,
					O = Kr('tooltip');
				return H(t)
					? (oe(),
						ve(
							'div',
							{
								key: 0,
								'items-center': '',
								p: 'x-2 y-1',
								grid: '~ rows-1 items-center gap-x-2',
								'w-full': '',
								'h-28px': '',
								'border-rounded': '',
								hover: 'bg-active',
								'cursor-pointer': '',
								class: 'item-wrapper',
								style: Qt(H(d)),
								'aria-label': E.name,
								'data-current': E.current,
								onClick: N[2] || (N[2] = (U) => o()),
							},
							[
								E.indent > 0
									? (oe(!0),
										ve(
											ut,
											{ key: 0 },
											gi(
												H(f),
												(U) => (
													oe(),
													ve('div', {
														key: U,
														border: 'solid gray-500 dark:gray-400',
														class: 'vertical-line',
														'h-28px': '',
														'inline-flex': '',
														'mx-2': '',
														op20: '',
													})
												),
											),
											128,
										))
									: Ke('', !0),
								E.type === 'file' || E.type === 'suite'
									? (oe(),
										ve('div', gve, [
											Q(
												'div',
												{
													class: it(
														E.opened
															? 'i-carbon:chevron-down'
															: 'i-carbon:chevron-right op20',
													),
													op20: '',
												},
												null,
												2,
											),
										]))
									: Ke('', !0),
								Pe(
									A,
									{
										state: E.state,
										mode: H(t).mode,
										'failed-snapshot': H(r),
										'w-4': '',
									},
									null,
									8,
									['state', 'mode', 'failed-snapshot'],
								),
								Q('div', mve, [
									E.type === 'file' && E.typecheck
										? gt((oe(), ve('div', vve, null, 512)), [
												[
													O,
													"This is a typecheck test. It won't report results of the runtime tests",
													void 0,
													{ bottom: !0 },
												],
											])
										: Ke('', !0),
									Q('span', yve, [
										E.type === 'file' && E.projectName
											? (oe(),
												ve(
													'span',
													{
														key: 0,
														class: 'rounded-full py-0.5 px-1 mr-1 text-xs',
														style: Qt({
															backgroundColor: E.projectNameColor,
															color: H(M),
														}),
													},
													He(E.projectName),
													5,
												))
											: Ke('', !0),
										Q(
											'span',
											{
												text: E.state === 'fail' ? 'red-500' : '',
												innerHTML: H(m),
											},
											null,
											8,
											bve,
										),
									]),
									typeof E.duration == 'number'
										? (oe(),
											ve(
												'span',
												wve,
												He(E.duration > 0 ? E.duration : '< 1') + 'ms ',
												1,
											))
										: Ke('', !0),
								]),
								Q('div', xve, [
									!H(kr) && H(r)
										? gt(
												(oe(),
												tt(
													$,
													{
														key: 0,
														'data-testid': 'btn-fix-snapshot',
														title: 'Fix failed snapshot(s)',
														icon: 'i-carbon:result-old',
														onClick:
															N[0] ||
															(N[0] = Nu((U) => u(H(t)), ['prevent', 'stop'])),
													},
													null,
													512,
												)),
												[[O, 'Fix failed snapshot(s)', void 0, { bottom: !0 }]],
											)
										: Ke('', !0),
									Pe(
										H(Db),
										{
											placement: 'bottom',
											class: it(['w-1.4em h-1.4em op100 rounded flex', H(w)]),
										},
										{
											popper: rt(() => [
												H(v)
													? (oe(),
														ve('div', Sve, [
															N[5] ||
																(N[5] = Q(
																	'div',
																	{
																		class:
																			'i-carbon:information-square w-1.5em h-1.5em',
																	},
																	null,
																	-1,
																)),
															Q('div', null, [
																pt(
																	He(H(b)) +
																		': this feature is not available, you have disabled ',
																	1,
																),
																N[3] ||
																	(N[3] = Q(
																		'span',
																		{ class: 'text-[#add467]' },
																		'includeTaskLocation',
																		-1,
																	)),
																N[4] ||
																	(N[4] = pt(' in your configuration file.')),
															]),
															N[6] ||
																(N[6] = Q(
																	'div',
																	{ style: { 'grid-column': '2' } },
																	" Clicking this button the code tab will position the cursor at first line in the source code since the UI doesn't have the information available. ",
																	-1,
																)),
														]))
													: (oe(), ve('div', _ve, He(H(b)), 1)),
											]),
											default: rt(() => [
												Pe(L, {
													'data-testid': 'btn-open-details',
													icon: 'i-carbon:intrusion-prevention',
													onClick: Nu(C, ['prevent', 'stop']),
												}),
											]),
											_: 1,
										},
										8,
										['class'],
									),
									H(kr)
										? Ke('', !0)
										: gt(
												(oe(),
												tt(
													L,
													{
														key: 1,
														'data-testid': 'btn-run-test',
														title: H(h),
														icon: 'i-carbon:play-filled-alt',
														'text-green5': '',
														onClick:
															N[1] ||
															(N[1] = Nu((U) => s(H(t)), ['prevent', 'stop'])),
													},
													null,
													8,
													['title'],
												)),
												[[O, H(h), void 0, { bottom: !0 }]],
											),
								]),
							],
							12,
							pve,
						))
					: Ke('', !0);
			};
		},
	}),
	Tve = Xr(kve, [['__scopeId', 'data-v-f7232aed']]),
	Cve = { 'flex-1': '', 'ms-2': '', 'select-none': '' },
	Eve = ct({
		__name: 'FilterStatus',
		props: Kl(
			{ label: {} },
			{ modelValue: { type: [Boolean, null] }, modelModifiers: {} },
		),
		emits: ['update:modelValue'],
		setup(e) {
			const t = Ac(e, 'modelValue');
			return (r, o) => (
				oe(),
				ve(
					'label',
					hi(
						{
							class:
								'font-light text-sm checkbox flex items-center cursor-pointer py-1 text-sm w-full gap-y-1 mb-1px',
						},
						r.$attrs,
						{
							onClick:
								o[1] || (o[1] = Nu((s) => (t.value = !t.value), ['prevent'])),
						},
					),
					[
						Q(
							'span',
							{
								class: it([
									t.value
										? 'i-carbon:checkbox-checked-filled'
										: 'i-carbon:checkbox',
								]),
								'text-lg': '',
								'aria-hidden': 'true',
							},
							null,
							2,
						),
						gt(
							Q(
								'input',
								{
									'onUpdate:modelValue': o[0] || (o[0] = (s) => (t.value = s)),
									type: 'checkbox',
									'sr-only': '',
								},
								null,
								512,
							),
							[[sb, t.value]],
						),
						Q('span', Cve, He(r.label), 1),
					],
					16,
				)
			);
		},
	});
function Lve() {
	var e = window.navigator.userAgent,
		t = e.indexOf('MSIE ');
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
	var r = e.indexOf('Trident/');
	if (r > 0) {
		var o = e.indexOf('rv:');
		return parseInt(e.substring(o + 3, e.indexOf('.', o)), 10);
	}
	var s = e.indexOf('Edge/');
	return s > 0 ? parseInt(e.substring(s + 5, e.indexOf('.', s)), 10) : -1;
}
let Hu;
function uh() {
	uh.init || ((uh.init = !0), (Hu = Lve() !== -1));
}
var Xc = {
	name: 'ResizeObserver',
	props: {
		emitOnMount: { type: Boolean, default: !1 },
		ignoreWidth: { type: Boolean, default: !1 },
		ignoreHeight: { type: Boolean, default: !1 },
	},
	emits: ['notify'],
	mounted() {
		uh(),
			Ot(() => {
				(this._w = this.$el.offsetWidth),
					(this._h = this.$el.offsetHeight),
					this.emitOnMount && this.emitSize();
			});
		const e = document.createElement('object');
		(this._resizeObject = e),
			e.setAttribute('aria-hidden', 'true'),
			e.setAttribute('tabindex', -1),
			(e.onload = this.addResizeHandlers),
			(e.type = 'text/html'),
			Hu && this.$el.appendChild(e),
			(e.data = 'about:blank'),
			Hu || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
				(!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
				((this._w = this.$el.offsetWidth),
				(this._h = this.$el.offsetHeight),
				this.emitSize());
		},
		emitSize() {
			this.$emit('notify', { width: this._w, height: this._h });
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener(
				'resize',
				this.compareAndNotify,
			),
				this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject &&
				this._resizeObject.onload &&
				(!Hu &&
					this._resizeObject.contentDocument &&
					this._resizeObject.contentDocument.defaultView.removeEventListener(
						'resize',
						this.compareAndNotify,
					),
				this.$el.removeChild(this._resizeObject),
				(this._resizeObject.onload = null),
				(this._resizeObject = null));
		},
	},
};
const Ave = y0();
m0('data-v-b329ee4c');
const Mve = { class: 'resize-observer', tabindex: '-1' };
v0();
const Nve = Ave((e, t, r, o, s, u) => (oe(), tt('div', Mve)));
Xc.render = Nve;
Xc.__scopeId = 'data-v-b329ee4c';
Xc.__file = 'src/components/ResizeObserver.vue';
function qu(e) {
	'@babel/helpers - typeof';
	return (
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? (qu = function (t) {
					return typeof t;
				})
			: (qu = function (t) {
					return t &&
						typeof Symbol == 'function' &&
						t.constructor === Symbol &&
						t !== Symbol.prototype
						? 'symbol'
						: typeof t;
				}),
		qu(e)
	);
}
function $ve(e, t) {
	if (!(e instanceof t))
		throw new TypeError('Cannot call a class as a function');
}
function Pve(e, t) {
	for (var r = 0; r < t.length; r++) {
		var o = t[r];
		(o.enumerable = o.enumerable || !1),
			(o.configurable = !0),
			'value' in o && (o.writable = !0),
			Object.defineProperty(e, o.key, o);
	}
}
function Ove(e, t, r) {
	return Pve(e.prototype, t), e;
}
function yy(e) {
	return Rve(e) || Dve(e) || zve(e) || Ive();
}
function Rve(e) {
	if (Array.isArray(e)) return ch(e);
}
function Dve(e) {
	if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function zve(e, t) {
	if (e) {
		if (typeof e == 'string') return ch(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === 'Object' && e.constructor && (r = e.constructor.name),
			r === 'Map' || r === 'Set')
		)
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return ch(e, t);
	}
}
function ch(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
	return o;
}
function Ive() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fve(e) {
	var t;
	return typeof e == 'function' ? (t = { callback: e }) : (t = e), t;
}
function Hve(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		o,
		s,
		u,
		f = function (h) {
			for (
				var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), v = 1;
				v < p;
				v++
			)
				m[v - 1] = arguments[v];
			if (((u = m), !(o && h === s))) {
				var b = r.leading;
				typeof b == 'function' && (b = b(h, s)),
					(!o || h !== s) && b && e.apply(void 0, [h].concat(yy(u))),
					(s = h),
					clearTimeout(o),
					(o = setTimeout(function () {
						e.apply(void 0, [h].concat(yy(u))), (o = 0);
					}, t));
			}
		};
	return (
		(f._clear = function () {
			clearTimeout(o), (o = null);
		}),
		f
	);
}
function Hx(e, t) {
	if (e === t) return !0;
	if (qu(e) === 'object') {
		for (var r in e) if (!Hx(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var qve = (function () {
	function e(t, r, o) {
		$ve(this, e),
			(this.el = t),
			(this.observer = null),
			(this.frozen = !1),
			this.createObserver(r, o);
	}
	return (
		Ove(e, [
			{
				key: 'createObserver',
				value: function (r, o) {
					var s = this;
					if ((this.observer && this.destroyObserver(), !this.frozen)) {
						if (
							((this.options = Fve(r)),
							(this.callback = function (d, h) {
								s.options.callback(d, h),
									d && s.options.once && ((s.frozen = !0), s.destroyObserver());
							}),
							this.callback && this.options.throttle)
						) {
							var u = this.options.throttleOptions || {},
								f = u.leading;
							this.callback = Hve(this.callback, this.options.throttle, {
								leading: function (h) {
									return (
										f === 'both' ||
										(f === 'visible' && h) ||
										(f === 'hidden' && !h)
									);
								},
							});
						}
						(this.oldResult = void 0),
							(this.observer = new IntersectionObserver(function (d) {
								var h = d[0];
								if (d.length > 1) {
									var p = d.find(function (v) {
										return v.isIntersecting;
									});
									p && (h = p);
								}
								if (s.callback) {
									var m =
										h.isIntersecting && h.intersectionRatio >= s.threshold;
									if (m === s.oldResult) return;
									(s.oldResult = m), s.callback(m, h);
								}
							}, this.options.intersection)),
							Ot(function () {
								s.observer && s.observer.observe(s.el);
							});
					}
				},
			},
			{
				key: 'destroyObserver',
				value: function () {
					this.observer && (this.observer.disconnect(), (this.observer = null)),
						this.callback &&
							this.callback._clear &&
							(this.callback._clear(), (this.callback = null));
				},
			},
			{
				key: 'threshold',
				get: function () {
					return this.options.intersection &&
						typeof this.options.intersection.threshold == 'number'
						? this.options.intersection.threshold
						: 0;
				},
			},
		]),
		e
	);
})();
function qx(e, t, r) {
	var o = t.value;
	if (o)
		if (typeof IntersectionObserver > 'u')
			console.warn(
				'[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill',
			);
		else {
			var s = new qve(e, o, r);
			e._vue_visibilityState = s;
		}
}
function Bve(e, t, r) {
	var o = t.value,
		s = t.oldValue;
	if (!Hx(o, s)) {
		var u = e._vue_visibilityState;
		if (!o) {
			Bx(e);
			return;
		}
		u ? u.createObserver(o, r) : qx(e, { value: o }, r);
	}
}
function Bx(e) {
	var t = e._vue_visibilityState;
	t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Wve = { beforeMount: qx, updated: Bve, unmounted: Bx },
	Uve = { itemsLimit: 1e3 },
	Vve = /(auto|scroll)/;
function Wx(e, t) {
	return e.parentNode === null ? t : Wx(e.parentNode, t.concat([e]));
}
var md = function (t, r) {
		return getComputedStyle(t, null).getPropertyValue(r);
	},
	jve = function (t) {
		return md(t, 'overflow') + md(t, 'overflow-y') + md(t, 'overflow-x');
	},
	Gve = function (t) {
		return Vve.test(jve(t));
	};
function by(e) {
	if (e instanceof HTMLElement || e instanceof SVGElement) {
		for (var t = Wx(e.parentNode, []), r = 0; r < t.length; r += 1)
			if (Gve(t[r])) return t[r];
		return document.scrollingElement || document.documentElement;
	}
}
function fh(e) {
	'@babel/helpers - typeof';
	return (
		(fh =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t;
					}
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
					}),
		fh(e)
	);
}
var Kve = {
	items: { type: Array, required: !0 },
	keyField: { type: String, default: 'id' },
	direction: {
		type: String,
		default: 'vertical',
		validator: function (t) {
			return ['vertical', 'horizontal'].includes(t);
		},
	},
	listTag: { type: String, default: 'div' },
	itemTag: { type: String, default: 'div' },
};
function Xve() {
	return this.items.length && fh(this.items[0]) !== 'object';
}
var dh = !1;
if (typeof window < 'u') {
	dh = !1;
	try {
		var Yve = Object.defineProperty({}, 'passive', {
			get: function () {
				dh = !0;
			},
		});
		window.addEventListener('test', null, Yve);
	} catch {}
}
let Zve = 0;
var fp = {
	name: 'RecycleScroller',
	components: { ResizeObserver: Xc },
	directives: { ObserveVisibility: Wve },
	props: {
		...Kve,
		itemSize: { type: Number, default: null },
		gridItems: { type: Number, default: void 0 },
		itemSecondarySize: { type: Number, default: void 0 },
		minItemSize: { type: [Number, String], default: null },
		sizeField: { type: String, default: 'size' },
		typeField: { type: String, default: 'type' },
		buffer: { type: Number, default: 200 },
		pageMode: { type: Boolean, default: !1 },
		prerender: { type: Number, default: 0 },
		emitUpdate: { type: Boolean, default: !1 },
		updateInterval: { type: Number, default: 0 },
		skipHover: { type: Boolean, default: !1 },
		listTag: { type: String, default: 'div' },
		itemTag: { type: String, default: 'div' },
		listClass: { type: [String, Object, Array], default: '' },
		itemClass: { type: [String, Object, Array], default: '' },
	},
	emits: [
		'resize',
		'visible',
		'hidden',
		'update',
		'scroll-start',
		'scroll-end',
	],
	data() {
		return { pool: [], totalSize: 0, ready: !1, hoverKey: null };
	},
	computed: {
		sizes() {
			if (this.itemSize === null) {
				const e = { '-1': { accumulator: 0 } },
					t = this.items,
					r = this.sizeField,
					o = this.minItemSize;
				let s = 1e4,
					u = 0,
					f;
				for (let d = 0, h = t.length; d < h; d++)
					(f = t[d][r] || o),
						f < s && (s = f),
						(u += f),
						(e[d] = { accumulator: u, size: f });
				return (this.$_computedMinItemSize = s), e;
			}
			return [];
		},
		simpleArray: Xve,
		itemIndexByKey() {
			const { keyField: e, items: t } = this,
				r = {};
			for (let o = 0, s = t.length; o < s; o++) r[t[o][e]] = o;
			return r;
		},
	},
	watch: {
		items() {
			this.updateVisibleItems(!0);
		},
		pageMode() {
			this.applyPageMode(), this.updateVisibleItems(!1);
		},
		sizes: {
			handler() {
				this.updateVisibleItems(!1);
			},
			deep: !0,
		},
		gridItems() {
			this.updateVisibleItems(!0);
		},
		itemSecondarySize() {
			this.updateVisibleItems(!0);
		},
	},
	created() {
		(this.$_startIndex = 0),
			(this.$_endIndex = 0),
			(this.$_views = new Map()),
			(this.$_unusedViews = new Map()),
			(this.$_scrollDirty = !1),
			(this.$_lastUpdateScrollPosition = 0),
			this.prerender && ((this.$_prerender = !0), this.updateVisibleItems(!1)),
			this.gridItems &&
				!this.itemSize &&
				console.error(
					'[vue-recycle-scroller] You must provide an itemSize when using gridItems',
				);
	},
	mounted() {
		this.applyPageMode(),
			this.$nextTick(() => {
				(this.$_prerender = !1), this.updateVisibleItems(!0), (this.ready = !0);
			});
	},
	activated() {
		const e = this.$_lastUpdateScrollPosition;
		typeof e == 'number' &&
			this.$nextTick(() => {
				this.scrollToPosition(e);
			});
	},
	beforeUnmount() {
		this.removeListeners();
	},
	methods: {
		addView(e, t, r, o, s) {
			const u = Eh({ id: Zve++, index: t, used: !0, key: o, type: s }),
				f = kh({ item: r, position: 0, nr: u });
			return e.push(f), f;
		},
		unuseView(e, t = !1) {
			const r = this.$_unusedViews,
				o = e.nr.type;
			let s = r.get(o);
			s || ((s = []), r.set(o, s)),
				s.push(e),
				t || ((e.nr.used = !1), (e.position = -9999));
		},
		handleResize() {
			this.$emit('resize'), this.ready && this.updateVisibleItems(!1);
		},
		handleScroll(e) {
			if (!this.$_scrollDirty) {
				if (((this.$_scrollDirty = !0), this.$_updateTimeout)) return;
				const t = () =>
					requestAnimationFrame(() => {
						this.$_scrollDirty = !1;
						const { continuous: r } = this.updateVisibleItems(!1, !0);
						r ||
							(clearTimeout(this.$_refreshTimout),
							(this.$_refreshTimout = setTimeout(
								this.handleScroll,
								this.updateInterval + 100,
							)));
					});
				t(),
					this.updateInterval &&
						(this.$_updateTimeout = setTimeout(() => {
							(this.$_updateTimeout = 0), this.$_scrollDirty && t();
						}, this.updateInterval));
			}
		},
		handleVisibilityChange(e, t) {
			this.ready &&
				(e ||
				t.boundingClientRect.width !== 0 ||
				t.boundingClientRect.height !== 0
					? (this.$emit('visible'),
						requestAnimationFrame(() => {
							this.updateVisibleItems(!1);
						}))
					: this.$emit('hidden'));
		},
		updateVisibleItems(e, t = !1) {
			const r = this.itemSize,
				o = this.gridItems || 1,
				s = this.itemSecondarySize || r,
				u = this.$_computedMinItemSize,
				f = this.typeField,
				d = this.simpleArray ? null : this.keyField,
				h = this.items,
				p = h.length,
				m = this.sizes,
				v = this.$_views,
				b = this.$_unusedViews,
				w = this.pool,
				C = this.itemIndexByKey;
			let M, E, N, A, $;
			if (!p) M = E = A = $ = N = 0;
			else if (this.$_prerender)
				(M = A = 0), (E = $ = Math.min(this.prerender, h.length)), (N = null);
			else {
				const K = this.getScroll();
				if (t) {
					let I = K.start - this.$_lastUpdateScrollPosition;
					if ((I < 0 && (I = -I), (r === null && I < u) || I < r))
						return { continuous: !0 };
				}
				this.$_lastUpdateScrollPosition = K.start;
				const ee = this.buffer;
				(K.start -= ee), (K.end += ee);
				let Y = 0;
				if (
					(this.$refs.before &&
						((Y = this.$refs.before.scrollHeight), (K.start -= Y)),
					this.$refs.after)
				) {
					const I = this.$refs.after.scrollHeight;
					K.end += I;
				}
				if (r === null) {
					let I,
						F = 0,
						k = p - 1,
						W = ~~(p / 2),
						V;
					do
						(V = W),
							(I = m[W].accumulator),
							I < K.start
								? (F = W)
								: W < p - 1 && m[W + 1].accumulator > K.start && (k = W),
							(W = ~~((F + k) / 2));
					while (W !== V);
					for (
						W < 0 && (W = 0), M = W, N = m[p - 1].accumulator, E = W;
						E < p && m[E].accumulator < K.end;
						E++
					);
					for (
						E === -1 ? (E = h.length - 1) : (E++, E > p && (E = p)), A = M;
						A < p && Y + m[A].accumulator < K.start;
						A++
					);
					for ($ = A; $ < p && Y + m[$].accumulator < K.end; $++);
				} else {
					M = ~~((K.start / r) * o);
					const I = M % o;
					(M -= I),
						(E = Math.ceil((K.end / r) * o)),
						(A = Math.max(0, Math.floor(((K.start - Y) / r) * o))),
						($ = Math.floor(((K.end - Y) / r) * o)),
						M < 0 && (M = 0),
						E > p && (E = p),
						A < 0 && (A = 0),
						$ > p && ($ = p),
						(N = Math.ceil(p / o) * r);
				}
			}
			E - M > Uve.itemsLimit && this.itemsLimitError(), (this.totalSize = N);
			let L;
			const O = M <= this.$_endIndex && E >= this.$_startIndex;
			if (O)
				for (let K = 0, ee = w.length; K < ee; K++)
					(L = w[K]),
						L.nr.used &&
							(e && (L.nr.index = C[L.item[d]]),
							(L.nr.index == null || L.nr.index < M || L.nr.index >= E) &&
								this.unuseView(L));
			const U = O ? null : new Map();
			let B, te, J;
			for (let K = M; K < E; K++) {
				B = h[K];
				const ee = d ? B[d] : B;
				if (ee == null)
					throw new Error(`Key is ${ee} on item (keyField is '${d}')`);
				if (((L = v.get(ee)), !r && !m[K].size)) {
					L && this.unuseView(L);
					continue;
				}
				te = B[f];
				let Y = b.get(te),
					I = !1;
				if (!L)
					O
						? Y && Y.length
							? (L = Y.pop())
							: (L = this.addView(w, K, B, ee, te))
						: ((J = U.get(te) || 0),
							(!Y || J >= Y.length) &&
								((L = this.addView(w, K, B, ee, te)),
								this.unuseView(L, !0),
								(Y = b.get(te))),
							(L = Y[J]),
							U.set(te, J + 1)),
						v.delete(L.nr.key),
						(L.nr.used = !0),
						(L.nr.index = K),
						(L.nr.key = ee),
						(L.nr.type = te),
						v.set(ee, L),
						(I = !0);
				else if (!L.nr.used && ((L.nr.used = !0), (I = !0), Y)) {
					const F = Y.indexOf(L);
					F !== -1 && Y.splice(F, 1);
				}
				(L.item = B),
					I &&
						(K === h.length - 1 && this.$emit('scroll-end'),
						K === 0 && this.$emit('scroll-start')),
					r === null
						? ((L.position = m[K - 1].accumulator), (L.offset = 0))
						: ((L.position = Math.floor(K / o) * r), (L.offset = (K % o) * s));
			}
			return (
				(this.$_startIndex = M),
				(this.$_endIndex = E),
				this.emitUpdate && this.$emit('update', M, E, A, $),
				clearTimeout(this.$_sortTimer),
				(this.$_sortTimer = setTimeout(
					this.sortViews,
					this.updateInterval + 300,
				)),
				{ continuous: O }
			);
		},
		getListenerTarget() {
			let e = by(this.$el);
			return (
				window.document &&
					(e === window.document.documentElement ||
						e === window.document.body) &&
					(e = window),
				e
			);
		},
		getScroll() {
			const { $el: e, direction: t } = this,
				r = t === 'vertical';
			let o;
			if (this.pageMode) {
				const s = e.getBoundingClientRect(),
					u = r ? s.height : s.width;
				let f = -(r ? s.top : s.left),
					d = r ? window.innerHeight : window.innerWidth;
				f < 0 && ((d += f), (f = 0)),
					f + d > u && (d = u - f),
					(o = { start: f, end: f + d });
			} else
				r
					? (o = { start: e.scrollTop, end: e.scrollTop + e.clientHeight })
					: (o = { start: e.scrollLeft, end: e.scrollLeft + e.clientWidth });
			return o;
		},
		applyPageMode() {
			this.pageMode ? this.addListeners() : this.removeListeners();
		},
		addListeners() {
			(this.listenerTarget = this.getListenerTarget()),
				this.listenerTarget.addEventListener(
					'scroll',
					this.handleScroll,
					dh ? { passive: !0 } : !1,
				),
				this.listenerTarget.addEventListener('resize', this.handleResize);
		},
		removeListeners() {
			this.listenerTarget &&
				(this.listenerTarget.removeEventListener('scroll', this.handleScroll),
				this.listenerTarget.removeEventListener('resize', this.handleResize),
				(this.listenerTarget = null));
		},
		scrollToItem(e) {
			let t;
			const r = this.gridItems || 1;
			this.itemSize === null
				? (t = e > 0 ? this.sizes[e - 1].accumulator : 0)
				: (t = Math.floor(e / r) * this.itemSize),
				this.scrollToPosition(t);
		},
		scrollToPosition(e) {
			const t =
				this.direction === 'vertical'
					? { scroll: 'scrollTop', start: 'top' }
					: { scroll: 'scrollLeft', start: 'left' };
			let r, o, s;
			if (this.pageMode) {
				const u = by(this.$el),
					f = u.tagName === 'HTML' ? 0 : u[t.scroll],
					d = u.getBoundingClientRect(),
					p = this.$el.getBoundingClientRect()[t.start] - d[t.start];
				(r = u), (o = t.scroll), (s = e + f + p);
			} else (r = this.$el), (o = t.scroll), (s = e);
			r[o] = s;
		},
		itemsLimitError() {
			throw (
				(setTimeout(() => {
					console.log(
						"It seems the scroller element isn't scrolling, so it tries to render all the items at once.",
						'Scroller:',
						this.$el,
					),
						console.log(
							"Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.",
						);
				}),
				new Error('Rendered items limit reached'))
			);
		},
		sortViews() {
			this.pool.sort((e, t) => e.nr.index - t.nr.index);
		},
	},
};
const Jve = { key: 0, ref: 'before', class: 'vue-recycle-scroller__slot' },
	Qve = { key: 1, ref: 'after', class: 'vue-recycle-scroller__slot' };
function eye(e, t, r, o, s, u) {
	const f = Po('ResizeObserver'),
		d = Kr('observe-visibility');
	return gt(
		(oe(),
		ve(
			'div',
			{
				class: it([
					'vue-recycle-scroller',
					{
						ready: s.ready,
						'page-mode': r.pageMode,
						[`direction-${e.direction}`]: !0,
					},
				]),
				onScrollPassive:
					t[0] || (t[0] = (...h) => u.handleScroll && u.handleScroll(...h)),
			},
			[
				e.$slots.before
					? (oe(), ve('div', Jve, [vn(e.$slots, 'before')], 512))
					: Ke('v-if', !0),
				(oe(),
				tt(
					wm(r.listTag),
					{
						ref: 'wrapper',
						style: Qt({
							[e.direction === 'vertical' ? 'minHeight' : 'minWidth']:
								s.totalSize + 'px',
						}),
						class: it(['vue-recycle-scroller__item-wrapper', r.listClass]),
					},
					{
						default: rt(() => [
							(oe(!0),
							ve(
								ut,
								null,
								gi(
									s.pool,
									(h) => (
										oe(),
										tt(
											wm(r.itemTag),
											hi(
												{
													key: h.nr.id,
													style: s.ready
														? {
																transform: `translate${e.direction === 'vertical' ? 'Y' : 'X'}(${h.position}px) translate${e.direction === 'vertical' ? 'X' : 'Y'}(${h.offset}px)`,
																width: r.gridItems
																	? `${(e.direction === 'vertical' && r.itemSecondarySize) || r.itemSize}px`
																	: void 0,
																height: r.gridItems
																	? `${(e.direction === 'horizontal' && r.itemSecondarySize) || r.itemSize}px`
																	: void 0,
															}
														: null,
													class: [
														'vue-recycle-scroller__item-view',
														[
															r.itemClass,
															{
																hover: !r.skipHover && s.hoverKey === h.nr.key,
															},
														],
													],
												},
												dk(
													r.skipHover
														? {}
														: {
																mouseenter: () => {
																	s.hoverKey = h.nr.key;
																},
																mouseleave: () => {
																	s.hoverKey = null;
																},
															},
												),
											),
											{
												default: rt(() => [
													vn(e.$slots, 'default', {
														item: h.item,
														index: h.nr.index,
														active: h.nr.used,
													}),
												]),
												_: 2,
											},
											1040,
											['style', 'class'],
										)
									),
								),
								128,
							)),
							vn(e.$slots, 'empty'),
						]),
						_: 3,
					},
					8,
					['style', 'class'],
				)),
				e.$slots.after
					? (oe(), ve('div', Qve, [vn(e.$slots, 'after')], 512))
					: Ke('v-if', !0),
				Pe(f, { onNotify: u.handleResize }, null, 8, ['onNotify']),
			],
			34,
		)),
		[[d, u.handleVisibilityChange]],
	);
}
fp.render = eye;
fp.__file = 'src/components/RecycleScroller.vue';
function tye(e) {
	const t = ke(() => (Vd.value ? !1 : !Ze.onlyTests)),
		r = ke(() => Hn.value === ''),
		o = qe(Hn.value);
	Vh(
		() => Hn.value,
		(h) => {
			o.value = (h == null ? void 0 : h.trim()) ?? '';
		},
		{ debounce: 256 },
	);
	function s(h) {
		var p;
		(Hn.value = ''), h && ((p = e.value) == null || p.focus());
	}
	function u(h) {
		var p;
		(Ze.failed = !1),
			(Ze.success = !1),
			(Ze.skipped = !1),
			(Ze.onlyTests = !1),
			h && ((p = e.value) == null || p.focus());
	}
	function f() {
		u(!1), s(!0);
	}
	function d(h, p, m, v, b) {
		Os.value &&
			((un.value.search = (h == null ? void 0 : h.trim()) ?? ''),
			(un.value.failed = p),
			(un.value.success = m),
			(un.value.skipped = v),
			(un.value.onlyTests = b));
	}
	return (
		Et(
			() => [o.value, Ze.failed, Ze.success, Ze.skipped, Ze.onlyTests],
			([h, p, m, v, b]) => {
				d(h, p, m, v, b), Ce.filterNodes();
			},
			{ flush: 'post' },
		),
		Et(
			() => Lr.value.length,
			(h) => {
				h && (un.value.expandAll = void 0);
			},
			{ flush: 'post' },
		),
		{
			initialized: Os,
			filter: Ze,
			search: Hn,
			disableFilter: t,
			isFiltered: sw,
			isFilteredByStatus: Vd,
			disableClearSearch: r,
			clearAll: f,
			clearSearch: s,
			clearFilter: u,
			filteredFiles: Hc,
			testsTotal: zE,
			uiEntries: Vn,
		}
	);
}
const nye = {
		p: '2',
		'h-10': '',
		flex: '~ gap-2',
		'items-center': '',
		'bg-header': '',
		border: 'b base',
	},
	rye = {
		p: 'l3 y2 r2',
		flex: '~ gap-2',
		'items-center': '',
		'bg-header': '',
		border: 'b-2 base',
	},
	iye = ['op'],
	oye = {
		grid: '~ items-center gap-x-1 cols-[auto_min-content_auto] rows-[min-content_min-content]',
	},
	sye = { 'text-red5': '' },
	lye = { 'text-yellow5': '' },
	aye = { 'text-green5': '' },
	uye = { class: 'text-purple5:50' },
	cye = {
		key: 0,
		flex: '~ col',
		'items-center': '',
		p: 'x4 y4',
		'font-light': '',
	},
	fye = ['disabled'],
	dye = ['disabled'],
	hye = {
		key: 1,
		flex: '~ col',
		'items-center': '',
		p: 'x4 y4',
		'font-light': '',
	},
	pye = ct({
		inheritAttrs: !1,
		__name: 'Explorer',
		props: { onItemClick: { type: Function } },
		emits: ['item-click', 'run'],
		setup(e, { emit: t }) {
			const r = t,
				o = ke(() => Vc.value.includeTaskLocation),
				s = qe(),
				{
					initialized: u,
					filter: f,
					search: d,
					disableFilter: h,
					isFiltered: p,
					isFilteredByStatus: m,
					disableClearSearch: v,
					clearAll: b,
					clearSearch: w,
					clearFilter: C,
					filteredFiles: M,
					testsTotal: E,
					uiEntries: N,
				} = tye(s),
				A = qe('grid-cols-2'),
				$ = qe('grid-col-span-2'),
				L = qe(),
				{ width: O } = jh();
			return (
				Et(
					() => O.value * (mn.navigation / 100),
					(U) => {
						U < 420
							? ((A.value = 'grid-cols-2'), ($.value = 'grid-col-span-2'))
							: ((A.value = 'grid-cols-4'), ($.value = 'grid-col-span-4'));
					},
				),
				(U, B) => {
					const te = wi,
						J = Eve,
						K = Tve,
						ee = fve,
						Y = Kr('tooltip');
					return (
						oe(),
						ve(
							'div',
							{ ref_key: 'testExplorerRef', ref: L, h: 'full', flex: '~ col' },
							[
								Q('div', null, [
									Q('div', nye, [
										vn(U.$slots, 'header', {
											filteredFiles: H(p) || H(m) ? H(M) : void 0,
										}),
									]),
									Q('div', rye, [
										B[13] ||
											(B[13] = Q(
												'div',
												{ class: 'i-carbon:search', 'flex-shrink-0': '' },
												null,
												-1,
											)),
										gt(
											Q(
												'input',
												{
													ref_key: 'searchBox',
													ref: s,
													'onUpdate:modelValue':
														B[0] ||
														(B[0] = (I) => (kt(d) ? (d.value = I) : null)),
													placeholder: 'Search...',
													outline: 'none',
													bg: 'transparent',
													font: 'light',
													text: 'sm',
													'flex-1': '',
													'pl-1': '',
													op: H(d).length ? '100' : '50',
													onKeydown: [
														B[1] || (B[1] = Dd((I) => H(w)(!1), ['esc'])),
														B[2] ||
															(B[2] = Dd(
																(I) => r('run', H(p) || H(m) ? H(M) : void 0),
																['enter'],
															)),
													],
												},
												null,
												40,
												iye,
											),
											[[NT, H(d)]],
										),
										gt(
											Pe(
												te,
												{
													disabled: H(v),
													title: 'Clear search',
													icon: 'i-carbon:filter-remove',
													onClickPassive: B[3] || (B[3] = (I) => H(w)(!0)),
												},
												null,
												8,
												['disabled'],
											),
											[[Y, 'Clear search', void 0, { bottom: !0 }]],
										),
									]),
									Q(
										'div',
										{
											p: 'l3 y2 r2',
											'items-center': '',
											'bg-header': '',
											border: 'b-2 base',
											grid: '~ items-center gap-x-2 rows-[auto_auto]',
											class: it(H(A)),
										},
										[
											Q(
												'div',
												{ class: it(H($)), flex: '~ gap-2 items-center' },
												[
													B[14] ||
														(B[14] = Q(
															'div',
															{
																'aria-hidden': 'true',
																class: 'i-carbon:filter',
															},
															null,
															-1,
														)),
													B[15] ||
														(B[15] = Q(
															'div',
															{ 'flex-grow-1': '', 'text-sm': '' },
															' Filter ',
															-1,
														)),
													gt(
														Pe(
															te,
															{
																disabled: H(h),
																title: 'Clear search',
																icon: 'i-carbon:filter-remove',
																onClickPassive:
																	B[4] || (B[4] = (I) => H(C)(!1)),
															},
															null,
															8,
															['disabled'],
														),
														[[Y, 'Clear Filter', void 0, { bottom: !0 }]],
													),
												],
												2,
											),
											Pe(
												J,
												{
													modelValue: H(f).failed,
													'onUpdate:modelValue':
														B[5] || (B[5] = (I) => (H(f).failed = I)),
													label: 'Fail',
												},
												null,
												8,
												['modelValue'],
											),
											Pe(
												J,
												{
													modelValue: H(f).success,
													'onUpdate:modelValue':
														B[6] || (B[6] = (I) => (H(f).success = I)),
													label: 'Pass',
												},
												null,
												8,
												['modelValue'],
											),
											Pe(
												J,
												{
													modelValue: H(f).skipped,
													'onUpdate:modelValue':
														B[7] || (B[7] = (I) => (H(f).skipped = I)),
													label: 'Skip',
												},
												null,
												8,
												['modelValue'],
											),
											Pe(
												J,
												{
													modelValue: H(f).onlyTests,
													'onUpdate:modelValue':
														B[8] || (B[8] = (I) => (H(f).onlyTests = I)),
													label: 'Only Tests',
												},
												null,
												8,
												['modelValue'],
											),
										],
										2,
									),
								]),
								Q(
									'div',
									{
										class: 'scrolls',
										'flex-auto': '',
										'py-1': '',
										onScrollPassive:
											B[12] || (B[12] = (...I) => H(dv) && H(dv)(...I)),
									},
									[
										Pe(
											ee,
											null,
											fk(
												{
													default: rt(() => [
														(H(p) || H(m)) && H(N).length === 0
															? (oe(),
																ve(
																	ut,
																	{ key: 0 },
																	[
																		H(u)
																			? (oe(),
																				ve('div', cye, [
																					B[18] ||
																						(B[18] = Q(
																							'div',
																							{ op30: '' },
																							' No matched test ',
																							-1,
																						)),
																					Q(
																						'button',
																						{
																							type: 'button',
																							'font-light': '',
																							'text-sm': '',
																							border: '~ gray-400/50 rounded',
																							p: 'x2 y0.5',
																							m: 't2',
																							op: '50',
																							class: it(
																								H(v) ? null : 'hover:op100',
																							),
																							disabled: H(v),
																							onClickPassive:
																								B[9] ||
																								(B[9] = (I) => H(w)(!0)),
																						},
																						' Clear Search ',
																						42,
																						fye,
																					),
																					Q(
																						'button',
																						{
																							type: 'button',
																							'font-light': '',
																							'text-sm': '',
																							border: '~ gray-400/50 rounded',
																							p: 'x2 y0.5',
																							m: 't2',
																							op: '50',
																							class: it(
																								H(h) ? null : 'hover:op100',
																							),
																							disabled: H(h),
																							onClickPassive:
																								B[10] ||
																								(B[10] = (I) => H(C)(!0)),
																						},
																						' Clear Filter ',
																						42,
																						dye,
																					),
																					Q(
																						'button',
																						{
																							type: 'button',
																							'font-light': '',
																							op: '50 hover:100',
																							'text-sm': '',
																							border: '~ gray-400/50 rounded',
																							p: 'x2 y0.5',
																							m: 't2',
																							onClickPassive:
																								B[11] ||
																								(B[11] = (...I) =>
																									H(b) && H(b)(...I)),
																						},
																						' Clear All ',
																						32,
																					),
																				]))
																			: (oe(),
																				ve(
																					'div',
																					hye,
																					B[19] ||
																						(B[19] = [
																							Q(
																								'div',
																								{
																									class:
																										'i-carbon:circle-dash animate-spin',
																								},
																								null,
																								-1,
																							),
																							Q(
																								'div',
																								{ op30: '' },
																								' Loading... ',
																								-1,
																							),
																						]),
																				)),
																	],
																	64,
																))
															: (oe(),
																tt(
																	H(fp),
																	{
																		key: 1,
																		'page-mode': '',
																		'key-field': 'id',
																		'item-size': 28,
																		items: H(N),
																		buffer: 100,
																	},
																	{
																		default: rt(({ item: I }) => [
																			Pe(
																				K,
																				{
																					class: it([
																						'h-28px m-0 p-0',
																						H(eo) === I.id ? 'bg-active' : '',
																					]),
																					'task-id': I.id,
																					expandable: I.expandable,
																					type: I.type,
																					current: H(eo) === I.id,
																					indent: I.indent,
																					name: I.name,
																					typecheck: I.typecheck === !0,
																					'project-name': I.projectName ?? '',
																					'project-name-color':
																						I.projectNameColor ?? '',
																					state: I.state,
																					duration: I.duration,
																					opened: I.expanded,
																					'disable-task-location': !H(o),
																					'on-item-click': U.onItemClick,
																				},
																				null,
																				8,
																				[
																					'task-id',
																					'expandable',
																					'type',
																					'current',
																					'indent',
																					'name',
																					'typecheck',
																					'project-name',
																					'project-name-color',
																					'state',
																					'duration',
																					'opened',
																					'disable-task-location',
																					'class',
																					'on-item-click',
																				],
																			),
																		]),
																		_: 1,
																	},
																	8,
																	['items'],
																)),
													]),
													_: 2,
												},
												[
													H(u)
														? {
																name: 'summary',
																fn: rt(() => [
																	Q('div', oye, [
																		Q(
																			'span',
																			sye,
																			' FAIL (' + He(H(E).failed) + ') ',
																			1,
																		),
																		B[16] || (B[16] = Q('span', null, '/', -1)),
																		Q(
																			'span',
																			lye,
																			' RUNNING (' + He(H(E).running) + ') ',
																			1,
																		),
																		Q(
																			'span',
																			aye,
																			' PASS (' + He(H(E).success) + ') ',
																			1,
																		),
																		B[17] || (B[17] = Q('span', null, '/', -1)),
																		Q(
																			'span',
																			uye,
																			' SKIP (' +
																				He(
																					H(f).onlyTests ? H(E).skipped : '--',
																				) +
																				') ',
																			1,
																		),
																	]),
																]),
																key: '0',
															}
														: void 0,
												],
											),
											1024,
										),
									],
									32,
								),
							],
							512,
						)
					);
				}
			);
		},
	}),
	gye = '' + new URL('../favicon.svg', import.meta.url).href,
	mye = { class: 'flex text-lg' },
	vye = ct({
		__name: 'Navigation',
		setup(e) {
			function t() {
				return vt.rpc.updateSnapshot();
			}
			const r = ke(() => (Ta.value ? 'light' : 'dark'));
			async function o(f) {
				vs.value &&
					((lc.value = !0), await Ot(), to.value && (ac(!0), await Ot())),
					f != null && f.length ? await Qh(f) : await Fue();
			}
			function s() {
				Ce.collapseAllNodes();
			}
			function u() {
				Ce.expandAllNodes();
			}
			return (f, d) => {
				const h = wi,
					p = pye,
					m = Kr('tooltip');
				return (
					oe(),
					tt(
						p,
						{ border: 'r base', 'on-item-click': H(dL), nested: !0, onRun: o },
						{
							header: rt(({ filteredFiles: v }) => [
								d[8] ||
									(d[8] = Q(
										'img',
										{ 'w-6': '', 'h-6': '', src: gye, alt: 'Vitest logo' },
										null,
										-1,
									)),
								d[9] ||
									(d[9] = Q(
										'span',
										{ 'font-light': '', 'text-sm': '', 'flex-1': '' },
										'Vitest',
										-1,
									)),
								Q('div', mye, [
									gt(
										Pe(
											h,
											{
												title: 'Collapse tests',
												disabled: !H(Os),
												'data-testid': 'collapse-all',
												icon: 'i-carbon:collapse-all',
												onClick: d[0] || (d[0] = (b) => s()),
											},
											null,
											8,
											['disabled'],
										),
										[
											[Gi, !H(Cv)],
											[m, 'Collapse tests', void 0, { bottom: !0 }],
										],
									),
									gt(
										Pe(
											h,
											{
												disabled: !H(Os),
												title: 'Expand tests',
												'data-testid': 'expand-all',
												icon: 'i-carbon:expand-all',
												onClick: d[1] || (d[1] = (b) => u()),
											},
											null,
											8,
											['disabled'],
										),
										[
											[Gi, H(Cv)],
											[m, 'Expand tests', void 0, { bottom: !0 }],
										],
									),
									gt(
										Pe(
											h,
											{
												title: 'Show dashboard',
												class: '!animate-100ms',
												'animate-count-1': '',
												icon: 'i-carbon:dashboard',
												onClick: d[2] || (d[2] = (b) => H(ac)(!0)),
											},
											null,
											512,
										),
										[
											[Gi, (H(Kd) && !H(vs)) || !H(Es)],
											[m, 'Dashboard', void 0, { bottom: !0 }],
										],
									),
									H(Kd) && !H(vs)
										? (oe(),
											tt(
												H(Db),
												{
													key: 0,
													title: 'Coverage enabled but missing html reporter',
													class:
														'w-1.4em h-1.4em op100 rounded flex color-red5 dark:color-#f43f5e cursor-help',
												},
												{
													popper: rt(
														() =>
															d[6] ||
															(d[6] = [
																Q(
																	'div',
																	{
																		class: 'op100 gap-1 p-y-1',
																		grid: '~ items-center cols-[1.5em_1fr]',
																	},
																	[
																		Q('div', {
																			class:
																				'i-carbon:information-square w-1.5em h-1.5em',
																		}),
																		Q(
																			'div',
																			null,
																			'Coverage enabled but missing html reporter.',
																		),
																		Q(
																			'div',
																			{ style: { 'grid-column': '2' } },
																			' Add html reporter to your configuration to see coverage here. ',
																		),
																	],
																	-1,
																),
															]),
													),
													default: rt(() => [
														d[7] ||
															(d[7] = Q(
																'div',
																{ class: 'i-carbon:folder-off ma' },
																null,
																-1,
															)),
													]),
													_: 1,
												},
											))
										: Ke('', !0),
									H(vs)
										? gt(
												(oe(),
												tt(
													h,
													{
														key: 1,
														disabled: H(lc),
														title: 'Show coverage',
														class: '!animate-100ms',
														'animate-count-1': '',
														icon: 'i-carbon:folder-details-reference',
														onClick: d[3] || (d[3] = (b) => H(hL)()),
													},
													null,
													8,
													['disabled'],
												)),
												[
													[Gi, !H(to)],
													[m, 'Coverage', void 0, { bottom: !0 }],
												],
											)
										: Ke('', !0),
									H(Ce).summary.failedSnapshot && !H(kr)
										? gt(
												(oe(),
												tt(
													h,
													{
														key: 2,
														icon: 'i-carbon:result-old',
														disabled: !H(Ce).summary.failedSnapshotEnabled,
														onClick:
															d[4] ||
															(d[4] = (b) =>
																H(Ce).summary.failedSnapshotEnabled && t()),
													},
													null,
													8,
													['disabled'],
												)),
												[
													[
														m,
														'Update all failed snapshot(s)',
														void 0,
														{ bottom: !0 },
													],
												],
											)
										: Ke('', !0),
									H(kr)
										? Ke('', !0)
										: gt(
												(oe(),
												tt(
													h,
													{
														key: 3,
														disabled: (v == null ? void 0 : v.length) === 0,
														icon: 'i-carbon:play',
														onClick: (b) => o(v),
													},
													null,
													8,
													['disabled', 'onClick'],
												)),
												[
													[
														m,
														v
															? v.length === 0
																? 'No test to run (clear filter)'
																: 'Rerun filtered'
															: 'Rerun all',
														void 0,
														{ bottom: !0 },
													],
												],
											),
									gt(
										Pe(
											h,
											{
												icon: 'dark:i-carbon-moon i-carbon:sun',
												onClick: d[5] || (d[5] = (b) => H(fce)()),
											},
											null,
											512,
										),
										[[m, `Toggle to ${H(r)} mode`, void 0, { bottom: !0 }]],
									),
								]),
							]),
							_: 1,
						},
						8,
						['on-item-click'],
					)
				);
			};
		},
	}),
	yye = {
		'h-3px': '',
		relative: '',
		'overflow-hidden': '',
		class: 'px-0',
		'w-screen': '',
	},
	bye = ct({
		__name: 'ProgressBar',
		setup(e) {
			const { width: t } = jh(),
				r = ke(() =>
					Ce.summary.files === 0
						? '!bg-gray-4 !dark:bg-gray-7 in-progress'
						: Ll.value
							? null
							: 'in-progress',
				),
				o = ke(() => {
					const d = Ce.summary.files;
					return d > 0 ? (t.value * Ce.summary.filesSuccess) / d : 0;
				}),
				s = ke(() => {
					const d = Ce.summary.files;
					return d > 0 ? (t.value * Ce.summary.filesFailed) / d : 0;
				}),
				u = ke(
					() =>
						Ce.summary.files - Ce.summary.filesFailed - Ce.summary.filesSuccess,
				),
				f = ke(() => {
					const d = Ce.summary.files;
					return d > 0 ? (t.value * u.value) / d : 0;
				});
			return (d, h) => (
				oe(),
				ve(
					'div',
					{
						absolute: '',
						't-0': '',
						'l-0': '',
						'r-0': '',
						'z-index-1031': '',
						'pointer-events-none': '',
						'p-0': '',
						'h-3px': '',
						grid: '~ auto-cols-max',
						'justify-items-center': '',
						'w-screen': '',
						class: it(H(r)),
					},
					[
						Q('div', yye, [
							Q(
								'div',
								{
									absolute: '',
									'l-0': '',
									't-0': '',
									'bg-red5': '',
									'h-3px': '',
									class: it(H(r)),
									style: Qt(`width: ${H(s)}px;`),
								},
								'   ',
								6,
							),
							Q(
								'div',
								{
									absolute: '',
									'l-0': '',
									't-0': '',
									'bg-green5': '',
									'h-3px': '',
									class: it(H(r)),
									style: Qt(`left: ${H(s)}px; width: ${H(o)}px;`),
								},
								'   ',
								6,
							),
							Q(
								'div',
								{
									absolute: '',
									'l-0': '',
									't-0': '',
									'bg-yellow5': '',
									'h-3px': '',
									class: it(H(r)),
									style: Qt(`left: ${H(o) + H(s)}px; width: ${H(f)}px;`),
								},
								'   ',
								6,
							),
						]),
					],
					2,
				)
			);
		},
	}),
	wye = Xr(bye, [['__scopeId', 'data-v-54017b6a']]),
	wy = {
		name: 'splitpanes',
		emits: [
			'ready',
			'resize',
			'resized',
			'pane-click',
			'pane-maximize',
			'pane-add',
			'pane-remove',
			'splitter-click',
		],
		props: {
			horizontal: { type: Boolean },
			pushOtherPanes: { type: Boolean, default: !0 },
			dblClickSplitter: { type: Boolean, default: !0 },
			rtl: { type: Boolean, default: !1 },
			firstSplitter: { type: Boolean },
		},
		provide() {
			return {
				requestUpdate: this.requestUpdate,
				onPaneAdd: this.onPaneAdd,
				onPaneRemove: this.onPaneRemove,
				onPaneClick: this.onPaneClick,
			};
		},
		data: () => ({
			container: null,
			ready: !1,
			panes: [],
			touch: { mouseDown: !1, dragging: !1, activeSplitter: null },
			splitterTaps: { splitter: null, timeoutId: null },
		}),
		computed: {
			panesCount() {
				return this.panes.length;
			},
			indexedPanes() {
				return this.panes.reduce((e, t) => (e[t.id] = t) && e, {});
			},
		},
		methods: {
			updatePaneComponents() {
				this.panes.forEach((e) => {
					e.update &&
						e.update({
							[this.horizontal ? 'height' : 'width']:
								`${this.indexedPanes[e.id].size}%`,
						});
				});
			},
			bindEvents() {
				document.addEventListener('mousemove', this.onMouseMove, {
					passive: !1,
				}),
					document.addEventListener('mouseup', this.onMouseUp),
					'ontouchstart' in window &&
						(document.addEventListener('touchmove', this.onMouseMove, {
							passive: !1,
						}),
						document.addEventListener('touchend', this.onMouseUp));
			},
			unbindEvents() {
				document.removeEventListener('mousemove', this.onMouseMove, {
					passive: !1,
				}),
					document.removeEventListener('mouseup', this.onMouseUp),
					'ontouchstart' in window &&
						(document.removeEventListener('touchmove', this.onMouseMove, {
							passive: !1,
						}),
						document.removeEventListener('touchend', this.onMouseUp));
			},
			onMouseDown(e, t) {
				this.bindEvents(),
					(this.touch.mouseDown = !0),
					(this.touch.activeSplitter = t);
			},
			onMouseMove(e) {
				this.touch.mouseDown &&
					(e.preventDefault(),
					(this.touch.dragging = !0),
					this.calculatePanesSize(this.getCurrentMouseDrag(e)),
					this.$emit(
						'resize',
						this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
					));
			},
			onMouseUp() {
				this.touch.dragging &&
					this.$emit(
						'resized',
						this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size })),
					),
					(this.touch.mouseDown = !1),
					setTimeout(() => {
						(this.touch.dragging = !1), this.unbindEvents();
					}, 100);
			},
			onSplitterClick(e, t) {
				'ontouchstart' in window &&
					(e.preventDefault(),
					this.dblClickSplitter &&
						(this.splitterTaps.splitter === t
							? (clearTimeout(this.splitterTaps.timeoutId),
								(this.splitterTaps.timeoutId = null),
								this.onSplitterDblClick(e, t),
								(this.splitterTaps.splitter = null))
							: ((this.splitterTaps.splitter = t),
								(this.splitterTaps.timeoutId = setTimeout(() => {
									this.splitterTaps.splitter = null;
								}, 500))))),
					this.touch.dragging || this.$emit('splitter-click', this.panes[t]);
			},
			onSplitterDblClick(e, t) {
				let r = 0;
				(this.panes = this.panes.map(
					(o, s) => (
						(o.size = s === t ? o.max : o.min), s !== t && (r += o.min), o
					),
				)),
					(this.panes[t].size -= r),
					this.$emit('pane-maximize', this.panes[t]),
					this.$emit(
						'resized',
						this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })),
					);
			},
			onPaneClick(e, t) {
				this.$emit('pane-click', this.indexedPanes[t]);
			},
			getCurrentMouseDrag(e) {
				const t = this.container.getBoundingClientRect(),
					{ clientX: r, clientY: o } =
						'ontouchstart' in window && e.touches ? e.touches[0] : e;
				return { x: r - t.left, y: o - t.top };
			},
			getCurrentDragPercentage(e) {
				e = e[this.horizontal ? 'y' : 'x'];
				const t =
					this.container[this.horizontal ? 'clientHeight' : 'clientWidth'];
				return this.rtl && !this.horizontal && (e = t - e), (e * 100) / t;
			},
			calculatePanesSize(e) {
				const t = this.touch.activeSplitter;
				let r = {
					prevPanesSize: this.sumPrevPanesSize(t),
					nextPanesSize: this.sumNextPanesSize(t),
					prevReachedMinPanes: 0,
					nextReachedMinPanes: 0,
				};
				const o = 0 + (this.pushOtherPanes ? 0 : r.prevPanesSize),
					s = 100 - (this.pushOtherPanes ? 0 : r.nextPanesSize),
					u = Math.max(Math.min(this.getCurrentDragPercentage(e), s), o);
				let f = [t, t + 1],
					d = this.panes[f[0]] || null,
					h = this.panes[f[1]] || null;
				const p = d.max < 100 && u >= d.max + r.prevPanesSize,
					m = h.max < 100 && u <= 100 - (h.max + this.sumNextPanesSize(t + 1));
				if (p || m) {
					p
						? ((d.size = d.max),
							(h.size = Math.max(
								100 - d.max - r.prevPanesSize - r.nextPanesSize,
								0,
							)))
						: ((d.size = Math.max(
								100 - h.max - r.prevPanesSize - this.sumNextPanesSize(t + 1),
								0,
							)),
							(h.size = h.max));
					return;
				}
				if (this.pushOtherPanes) {
					const v = this.doPushOtherPanes(r, u);
					if (!v) return;
					({ sums: r, panesToResize: f } = v),
						(d = this.panes[f[0]] || null),
						(h = this.panes[f[1]] || null);
				}
				d !== null &&
					(d.size = Math.min(
						Math.max(u - r.prevPanesSize - r.prevReachedMinPanes, d.min),
						d.max,
					)),
					h !== null &&
						(h.size = Math.min(
							Math.max(
								100 - u - r.nextPanesSize - r.nextReachedMinPanes,
								h.min,
							),
							h.max,
						));
			},
			doPushOtherPanes(e, t) {
				const r = this.touch.activeSplitter,
					o = [r, r + 1];
				return t < e.prevPanesSize + this.panes[o[0]].min &&
					((o[0] = this.findPrevExpandedPane(r).index),
					(e.prevReachedMinPanes = 0),
					o[0] < r &&
						this.panes.forEach((s, u) => {
							u > o[0] &&
								u <= r &&
								((s.size = s.min), (e.prevReachedMinPanes += s.min));
						}),
					(e.prevPanesSize = this.sumPrevPanesSize(o[0])),
					o[0] === void 0)
					? ((e.prevReachedMinPanes = 0),
						(this.panes[0].size = this.panes[0].min),
						this.panes.forEach((s, u) => {
							u > 0 &&
								u <= r &&
								((s.size = s.min), (e.prevReachedMinPanes += s.min));
						}),
						(this.panes[o[1]].size =
							100 -
							e.prevReachedMinPanes -
							this.panes[0].min -
							e.prevPanesSize -
							e.nextPanesSize),
						null)
					: t > 100 - e.nextPanesSize - this.panes[o[1]].min &&
						  ((o[1] = this.findNextExpandedPane(r).index),
						  (e.nextReachedMinPanes = 0),
						  o[1] > r + 1 &&
								this.panes.forEach((s, u) => {
									u > r &&
										u < o[1] &&
										((s.size = s.min), (e.nextReachedMinPanes += s.min));
								}),
						  (e.nextPanesSize = this.sumNextPanesSize(o[1] - 1)),
						  o[1] === void 0)
						? ((e.nextReachedMinPanes = 0),
							(this.panes[this.panesCount - 1].size =
								this.panes[this.panesCount - 1].min),
							this.panes.forEach((s, u) => {
								u < this.panesCount - 1 &&
									u >= r + 1 &&
									((s.size = s.min), (e.nextReachedMinPanes += s.min));
							}),
							(this.panes[o[0]].size =
								100 -
								e.prevPanesSize -
								e.nextReachedMinPanes -
								this.panes[this.panesCount - 1].min -
								e.nextPanesSize),
							null)
						: { sums: e, panesToResize: o };
			},
			sumPrevPanesSize(e) {
				return this.panes.reduce((t, r, o) => t + (o < e ? r.size : 0), 0);
			},
			sumNextPanesSize(e) {
				return this.panes.reduce((t, r, o) => t + (o > e + 1 ? r.size : 0), 0);
			},
			findPrevExpandedPane(e) {
				return (
					[...this.panes]
						.reverse()
						.find((t) => t.index < e && t.size > t.min) || {}
				);
			},
			findNextExpandedPane(e) {
				return this.panes.find((t) => t.index > e + 1 && t.size > t.min) || {};
			},
			checkSplitpanesNodes() {
				Array.from(this.container.children).forEach((e) => {
					const t = e.classList.contains('splitpanes__pane'),
						r = e.classList.contains('splitpanes__splitter');
					!t &&
						!r &&
						(e.parentNode.removeChild(e),
						console.warn(
							'Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.',
						));
				});
			},
			addSplitter(e, t, r = !1) {
				const o = e - 1,
					s = document.createElement('div');
				s.classList.add('splitpanes__splitter'),
					r ||
						((s.onmousedown = (u) => this.onMouseDown(u, o)),
						typeof window < 'u' &&
							'ontouchstart' in window &&
							(s.ontouchstart = (u) => this.onMouseDown(u, o)),
						(s.onclick = (u) => this.onSplitterClick(u, o + 1))),
					this.dblClickSplitter &&
						(s.ondblclick = (u) => this.onSplitterDblClick(u, o + 1)),
					t.parentNode.insertBefore(s, t);
			},
			removeSplitter(e) {
				(e.onmousedown = void 0),
					(e.onclick = void 0),
					(e.ondblclick = void 0),
					e.parentNode.removeChild(e);
			},
			redoSplitters() {
				const e = Array.from(this.container.children);
				e.forEach((r) => {
					r.className.includes('splitpanes__splitter') &&
						this.removeSplitter(r);
				});
				let t = 0;
				e.forEach((r) => {
					r.className.includes('splitpanes__pane') &&
						(!t && this.firstSplitter
							? this.addSplitter(t, r, !0)
							: t && this.addSplitter(t, r),
						t++);
				});
			},
			requestUpdate({ target: e, ...t }) {
				const r = this.indexedPanes[e._.uid];
				Object.entries(t).forEach(([o, s]) => (r[o] = s));
			},
			onPaneAdd(e) {
				let t = -1;
				Array.from(e.$el.parentNode.children).some(
					(s) => (s.className.includes('splitpanes__pane') && t++, s === e.$el),
				);
				const r = parseFloat(e.minSize),
					o = parseFloat(e.maxSize);
				this.panes.splice(t, 0, {
					id: e._.uid,
					index: t,
					min: isNaN(r) ? 0 : r,
					max: isNaN(o) ? 100 : o,
					size: e.size === null ? null : parseFloat(e.size),
					givenSize: e.size,
					update: e.update,
				}),
					this.panes.forEach((s, u) => (s.index = u)),
					this.ready &&
						this.$nextTick(() => {
							this.redoSplitters(),
								this.resetPaneSizes({ addedPane: this.panes[t] }),
								this.$emit('pane-add', {
									index: t,
									panes: this.panes.map((s) => ({
										min: s.min,
										max: s.max,
										size: s.size,
									})),
								});
						});
			},
			onPaneRemove(e) {
				const t = this.panes.findIndex((o) => o.id === e._.uid),
					r = this.panes.splice(t, 1)[0];
				this.panes.forEach((o, s) => (o.index = s)),
					this.$nextTick(() => {
						this.redoSplitters(),
							this.resetPaneSizes({ removedPane: { ...r, index: t } }),
							this.$emit('pane-remove', {
								removed: r,
								panes: this.panes.map((o) => ({
									min: o.min,
									max: o.max,
									size: o.size,
								})),
							});
					});
			},
			resetPaneSizes(e = {}) {
				!e.addedPane && !e.removedPane
					? this.initialPanesSizing()
					: this.panes.some((t) => t.givenSize !== null || t.min || t.max < 100)
						? this.equalizeAfterAddOrRemove(e)
						: this.equalize(),
					this.ready &&
						this.$emit(
							'resized',
							this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
						);
			},
			equalize() {
				const e = 100 / this.panesCount;
				let t = 0;
				const r = [],
					o = [];
				this.panes.forEach((s) => {
					(s.size = Math.max(Math.min(e, s.max), s.min)),
						(t -= s.size),
						s.size >= s.max && r.push(s.id),
						s.size <= s.min && o.push(s.id);
				}),
					t > 0.1 && this.readjustSizes(t, r, o);
			},
			initialPanesSizing() {
				let e = 100;
				const t = [],
					r = [];
				let o = 0;
				this.panes.forEach((u) => {
					(e -= u.size),
						u.size !== null && o++,
						u.size >= u.max && t.push(u.id),
						u.size <= u.min && r.push(u.id);
				});
				let s = 100;
				e > 0.1 &&
					(this.panes.forEach((u) => {
						u.size === null &&
							(u.size = Math.max(
								Math.min(e / (this.panesCount - o), u.max),
								u.min,
							)),
							(s -= u.size);
					}),
					s > 0.1 && this.readjustSizes(e, t, r));
			},
			equalizeAfterAddOrRemove({ addedPane: e, removedPane: t } = {}) {
				let r = 100 / this.panesCount,
					o = 0;
				const s = [],
					u = [];
				e &&
					e.givenSize !== null &&
					(r = (100 - e.givenSize) / (this.panesCount - 1)),
					this.panes.forEach((f) => {
						(o -= f.size),
							f.size >= f.max && s.push(f.id),
							f.size <= f.min && u.push(f.id);
					}),
					!(Math.abs(o) < 0.1) &&
						(this.panes.forEach((f) => {
							(e && e.givenSize !== null && e.id === f.id) ||
								(f.size = Math.max(Math.min(r, f.max), f.min)),
								(o -= f.size),
								f.size >= f.max && s.push(f.id),
								f.size <= f.min && u.push(f.id);
						}),
						o > 0.1 && this.readjustSizes(o, s, u));
			},
			readjustSizes(e, t, r) {
				let o;
				e > 0
					? (o = e / (this.panesCount - t.length))
					: (o = e / (this.panesCount - r.length)),
					this.panes.forEach((s, u) => {
						if (e > 0 && !t.includes(s.id)) {
							const f = Math.max(Math.min(s.size + o, s.max), s.min),
								d = f - s.size;
							(e -= d), (s.size = f);
						} else if (!r.includes(s.id)) {
							const f = Math.max(Math.min(s.size + o, s.max), s.min),
								d = f - s.size;
							(e -= d), (s.size = f);
						}
						s.update({
							[this.horizontal ? 'height' : 'width']:
								`${this.indexedPanes[s.id].size}%`,
						});
					}),
					Math.abs(e) > 0.1 &&
						this.$nextTick(() => {
							this.ready &&
								console.warn(
									'Splitpanes: Could not resize panes correctly due to their constraints.',
								);
						});
			},
		},
		watch: {
			panes: {
				deep: !0,
				immediate: !1,
				handler() {
					this.updatePaneComponents();
				},
			},
			horizontal() {
				this.updatePaneComponents();
			},
			firstSplitter() {
				this.redoSplitters();
			},
			dblClickSplitter(e) {
				[...this.container.querySelectorAll('.splitpanes__splitter')].forEach(
					(t, r) => {
						t.ondblclick = e ? (o) => this.onSplitterDblClick(o, r) : void 0;
					},
				);
			},
		},
		beforeUnmount() {
			this.ready = !1;
		},
		mounted() {
			(this.container = this.$refs.container),
				this.checkSplitpanesNodes(),
				this.redoSplitters(),
				this.resetPaneSizes(),
				this.$emit('ready'),
				(this.ready = !0);
		},
		render() {
			return wa(
				'div',
				{
					ref: 'container',
					class: [
						'splitpanes',
						`splitpanes--${this.horizontal ? 'horizontal' : 'vertical'}`,
						{ 'splitpanes--dragging': this.touch.dragging },
					],
				},
				this.$slots.default(),
			);
		},
	},
	xye = (e, t) => {
		const r = e.__vccOpts || e;
		for (const [o, s] of t) r[o] = s;
		return r;
	},
	Sye = {
		name: 'pane',
		inject: ['requestUpdate', 'onPaneAdd', 'onPaneRemove', 'onPaneClick'],
		props: {
			size: { type: [Number, String], default: null },
			minSize: { type: [Number, String], default: 0 },
			maxSize: { type: [Number, String], default: 100 },
		},
		data: () => ({ style: {} }),
		mounted() {
			this.onPaneAdd(this);
		},
		beforeUnmount() {
			this.onPaneRemove(this);
		},
		methods: {
			update(e) {
				this.style = e;
			},
		},
		computed: {
			sizeNumber() {
				return this.size || this.size === 0 ? parseFloat(this.size) : null;
			},
			minSizeNumber() {
				return parseFloat(this.minSize);
			},
			maxSizeNumber() {
				return parseFloat(this.maxSize);
			},
		},
		watch: {
			sizeNumber(e) {
				this.requestUpdate({ target: this, size: e });
			},
			minSizeNumber(e) {
				this.requestUpdate({ target: this, min: e });
			},
			maxSizeNumber(e) {
				this.requestUpdate({ target: this, max: e });
			},
		},
	};
function _ye(e, t, r, o, s, u) {
	return (
		oe(),
		ve(
			'div',
			{
				class: 'splitpanes__pane',
				onClick: t[0] || (t[0] = (f) => u.onPaneClick(f, e._.uid)),
				style: Qt(e.style),
			},
			[vn(e.$slots, 'default')],
			4,
		)
	);
}
const Tu = xye(Sye, [['render', _ye]]),
	kye = { 'h-screen': '', 'w-screen': '', overflow: 'hidden' },
	Tye = ct({
		__name: 'index',
		setup(e) {
			const t = fL(),
				r = pu((v) => {
					p(), h(v);
				}, 0),
				o = pu((v) => {
					v.forEach((b, w) => {
						yr.value[w] = b.size;
					}),
						d(v);
				}, 0),
				s = pu((v) => {
					v.forEach((b, w) => {
						Mo.value[w] = b.size;
					}),
						h(v),
						m();
				}, 0),
				u = pu((v) => {
					d(v), p();
				}, 0);
			function f() {
				const v = window.innerWidth,
					b = Math.min(v / 3, 300);
				(yr.value[0] = (100 * b) / v),
					(yr.value[1] = 100 - yr.value[0]),
					d([{ size: yr.value[0] }, { size: yr.value[1] }]);
			}
			function d(v) {
				(mn.navigation = v[0].size), (mn.details.size = v[1].size);
			}
			function h(v) {
				(mn.details.browser = v[0].size), (mn.details.main = v[1].size);
			}
			function p() {
				const v = document.querySelector('#tester-ui');
				v && (v.style.pointerEvents = 'none');
			}
			function m() {
				const v = document.querySelector('#tester-ui');
				v && (v.style.pointerEvents = '');
			}
			return (v, b) => {
				const w = wye,
					C = vye,
					M = uve,
					E = kme,
					N = wme,
					A = tce,
					$ = Uue;
				return (
					oe(),
					ve(
						ut,
						null,
						[
							Pe(w),
							Q('div', kye, [
								Pe(
									H(wy),
									{
										class: 'pt-4px',
										onResized: H(o),
										onResize: H(u),
										onReady: f,
									},
									{
										default: rt(() => [
											Pe(
												H(Tu),
												{ size: H(yr)[0] },
												{ default: rt(() => [Pe(C)]), _: 1 },
												8,
												['size'],
											),
											Pe(
												H(Tu),
												{ size: H(yr)[1] },
												{
													default: rt(() => [
														H(Do)
															? (oe(),
																tt(
																	H(wy),
																	{
																		id: 'details-splitpanes',
																		key: 'browser-detail',
																		onResize: H(r),
																		onResized: H(s),
																	},
																	{
																		default: rt(() => [
																			Pe(
																				H(Tu),
																				{ size: H(Mo)[0], 'min-size': '10' },
																				{
																					default: rt(() => [
																						b[0] ||
																							(Ku(-1),
																							((b[0] = Pe(A)).cacheIndex = 0),
																							Ku(1),
																							b[0]),
																					]),
																					_: 1,
																				},
																				8,
																				['size'],
																			),
																			Pe(
																				H(Tu),
																				{ size: H(Mo)[1] },
																				{
																					default: rt(() => [
																						H(t)
																							? (oe(),
																								tt(M, { key: 'summary' }))
																							: H(to)
																								? (oe(),
																									tt(
																										E,
																										{
																											key: 'coverage',
																											src: H(Mv),
																										},
																										null,
																										8,
																										['src'],
																									))
																								: (oe(),
																									tt(N, { key: 'details' })),
																					]),
																					_: 1,
																				},
																				8,
																				['size'],
																			),
																		]),
																		_: 1,
																	},
																	8,
																	['onResize', 'onResized'],
																))
															: (oe(),
																tt(
																	cT,
																	{ key: 'ui-detail' },
																	{
																		default: rt(() => [
																			H(t)
																				? (oe(), tt(M, { key: 'summary' }))
																				: H(to)
																					? (oe(),
																						tt(
																							E,
																							{ key: 'coverage', src: H(Mv) },
																							null,
																							8,
																							['src'],
																						))
																					: (oe(), tt(N, { key: 'details' })),
																		]),
																		_: 1,
																	},
																)),
													]),
													_: 1,
												},
												8,
												['size'],
											),
										]),
										_: 1,
									},
									8,
									['onResized', 'onResize'],
								),
							]),
							Pe($),
						],
						64,
					)
				);
			};
		},
	}),
	Cye = [{ name: 'index', path: '/', component: Tye, props: !0 }];
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const gs = typeof document < 'u';
function Ux(e) {
	return (
		typeof e == 'object' ||
		'displayName' in e ||
		'props' in e ||
		'__vccOpts' in e
	);
}
function Eye(e) {
	return (
		e.__esModule ||
		e[Symbol.toStringTag] === 'Module' ||
		(e.default && Ux(e.default))
	);
}
const bt = Object.assign;
function vd(e, t) {
	const r = {};
	for (const o in t) {
		const s = t[o];
		r[o] = Ar(s) ? s.map(e) : e(s);
	}
	return r;
}
const Bl = () => {},
	Ar = Array.isArray,
	Vx = /#/g,
	Lye = /&/g,
	Aye = /\//g,
	Mye = /=/g,
	Nye = /\?/g,
	jx = /\+/g,
	$ye = /%5B/g,
	Pye = /%5D/g,
	Gx = /%5E/g,
	Oye = /%60/g,
	Kx = /%7B/g,
	Rye = /%7C/g,
	Xx = /%7D/g,
	Dye = /%20/g;
function dp(e) {
	return encodeURI('' + e)
		.replace(Rye, '|')
		.replace($ye, '[')
		.replace(Pye, ']');
}
function zye(e) {
	return dp(e).replace(Kx, '{').replace(Xx, '}').replace(Gx, '^');
}
function hh(e) {
	return dp(e)
		.replace(jx, '%2B')
		.replace(Dye, '+')
		.replace(Vx, '%23')
		.replace(Lye, '%26')
		.replace(Oye, '`')
		.replace(Kx, '{')
		.replace(Xx, '}')
		.replace(Gx, '^');
}
function Iye(e) {
	return hh(e).replace(Mye, '%3D');
}
function Fye(e) {
	return dp(e).replace(Vx, '%23').replace(Nye, '%3F');
}
function Hye(e) {
	return e == null ? '' : Fye(e).replace(Aye, '%2F');
}
function da(e) {
	try {
		return decodeURIComponent('' + e);
	} catch {}
	return '' + e;
}
const qye = /\/$/,
	Bye = (e) => e.replace(qye, '');
function yd(e, t, r = '/') {
	let o,
		s = {},
		u = '',
		f = '';
	const d = t.indexOf('#');
	let h = t.indexOf('?');
	return (
		d < h && d >= 0 && (h = -1),
		h > -1 &&
			((o = t.slice(0, h)),
			(u = t.slice(h + 1, d > -1 ? d : t.length)),
			(s = e(u))),
		d > -1 && ((o = o || t.slice(0, d)), (f = t.slice(d, t.length))),
		(o = jye(o ?? t, r)),
		{ fullPath: o + (u && '?') + u + f, path: o, query: s, hash: da(f) }
	);
}
function Wye(e, t) {
	const r = t.query ? e(t.query) : '';
	return t.path + (r && '?') + r + (t.hash || '');
}
function xy(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase())
		? e
		: e.slice(t.length) || '/';
}
function Uye(e, t, r) {
	const o = t.matched.length - 1,
		s = r.matched.length - 1;
	return (
		o > -1 &&
		o === s &&
		Is(t.matched[o], r.matched[s]) &&
		Yx(t.params, r.params) &&
		e(t.query) === e(r.query) &&
		t.hash === r.hash
	);
}
function Is(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yx(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const r in e) if (!Vye(e[r], t[r])) return !1;
	return !0;
}
function Vye(e, t) {
	return Ar(e) ? Sy(e, t) : Ar(t) ? Sy(t, e) : e === t;
}
function Sy(e, t) {
	return Ar(t)
		? e.length === t.length && e.every((r, o) => r === t[o])
		: e.length === 1 && e[0] === t;
}
function jye(e, t) {
	if (e.startsWith('/')) return e;
	if (!e) return t;
	const r = t.split('/'),
		o = e.split('/'),
		s = o[o.length - 1];
	(s === '..' || s === '.') && o.push('');
	let u = r.length - 1,
		f,
		d;
	for (f = 0; f < o.length; f++)
		if (((d = o[f]), d !== '.'))
			if (d === '..') u > 1 && u--;
			else break;
	return r.slice(0, u).join('/') + '/' + o.slice(f).join('/');
}
const zi = {
	path: '/',
	name: void 0,
	params: {},
	query: {},
	hash: '',
	fullPath: '/',
	matched: [],
	meta: {},
	redirectedFrom: void 0,
};
var ha;
(function (e) {
	(e.pop = 'pop'), (e.push = 'push');
})(ha || (ha = {}));
var Wl;
(function (e) {
	(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Wl || (Wl = {}));
function Gye(e) {
	if (!e)
		if (gs) {
			const t = document.querySelector('base');
			(e = (t && t.getAttribute('href')) || '/'),
				(e = e.replace(/^\w+:\/\/[^\/]+/, ''));
		} else e = '/';
	return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Bye(e);
}
const Kye = /^[^#]+#/;
function Xye(e, t) {
	return e.replace(Kye, '#') + t;
}
function Yye(e, t) {
	const r = document.documentElement.getBoundingClientRect(),
		o = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: o.left - r.left - (t.left || 0),
		top: o.top - r.top - (t.top || 0),
	};
}
const Yc = () => ({ left: window.scrollX, top: window.scrollY });
function Zye(e) {
	let t;
	if ('el' in e) {
		const r = e.el,
			o = typeof r == 'string' && r.startsWith('#'),
			s =
				typeof r == 'string'
					? o
						? document.getElementById(r.slice(1))
						: document.querySelector(r)
					: r;
		if (!s) return;
		t = Yye(s, e);
	} else t = e;
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.scrollX,
				t.top != null ? t.top : window.scrollY,
			);
}
function _y(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
const ph = new Map();
function Jye(e, t) {
	ph.set(e, t);
}
function Qye(e) {
	const t = ph.get(e);
	return ph.delete(e), t;
}
let e0e = () => location.protocol + '//' + location.host;
function Zx(e, t) {
	const { pathname: r, search: o, hash: s } = t,
		u = e.indexOf('#');
	if (u > -1) {
		let d = s.includes(e.slice(u)) ? e.slice(u).length : 1,
			h = s.slice(d);
		return h[0] !== '/' && (h = '/' + h), xy(h, '');
	}
	return xy(r, e) + o + s;
}
function t0e(e, t, r, o) {
	let s = [],
		u = [],
		f = null;
	const d = ({ state: b }) => {
		const w = Zx(e, location),
			C = r.value,
			M = t.value;
		let E = 0;
		if (b) {
			if (((r.value = w), (t.value = b), f && f === C)) {
				f = null;
				return;
			}
			E = M ? b.position - M.position : 0;
		} else o(w);
		s.forEach((N) => {
			N(r.value, C, {
				delta: E,
				type: ha.pop,
				direction: E ? (E > 0 ? Wl.forward : Wl.back) : Wl.unknown,
			});
		});
	};
	function h() {
		f = r.value;
	}
	function p(b) {
		s.push(b);
		const w = () => {
			const C = s.indexOf(b);
			C > -1 && s.splice(C, 1);
		};
		return u.push(w), w;
	}
	function m() {
		const { history: b } = window;
		b.state && b.replaceState(bt({}, b.state, { scroll: Yc() }), '');
	}
	function v() {
		for (const b of u) b();
		(u = []),
			window.removeEventListener('popstate', d),
			window.removeEventListener('beforeunload', m);
	}
	return (
		window.addEventListener('popstate', d),
		window.addEventListener('beforeunload', m, { passive: !0 }),
		{ pauseListeners: h, listen: p, destroy: v }
	);
}
function ky(e, t, r, o = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: o,
		position: window.history.length,
		scroll: s ? Yc() : null,
	};
}
function n0e(e) {
	const { history: t, location: r } = window,
		o = { value: Zx(e, r) },
		s = { value: t.state };
	s.value ||
		u(
			o.value,
			{
				back: null,
				current: o.value,
				forward: null,
				position: t.length - 1,
				replaced: !0,
				scroll: null,
			},
			!0,
		);
	function u(h, p, m) {
		const v = e.indexOf('#'),
			b =
				v > -1
					? (r.host && document.querySelector('base') ? e : e.slice(v)) + h
					: e0e() + e + h;
		try {
			t[m ? 'replaceState' : 'pushState'](p, '', b), (s.value = p);
		} catch (w) {
			console.error(w), r[m ? 'replace' : 'assign'](b);
		}
	}
	function f(h, p) {
		const m = bt({}, t.state, ky(s.value.back, h, s.value.forward, !0), p, {
			position: s.value.position,
		});
		u(h, m, !0), (o.value = h);
	}
	function d(h, p) {
		const m = bt({}, s.value, t.state, { forward: h, scroll: Yc() });
		u(m.current, m, !0);
		const v = bt({}, ky(o.value, h, null), { position: m.position + 1 }, p);
		u(h, v, !1), (o.value = h);
	}
	return { location: o, state: s, push: d, replace: f };
}
function r0e(e) {
	e = Gye(e);
	const t = n0e(e),
		r = t0e(e, t.state, t.location, t.replace);
	function o(u, f = !0) {
		f || r.pauseListeners(), history.go(u);
	}
	const s = bt(
		{ location: '', base: e, go: o, createHref: Xye.bind(null, e) },
		t,
		r,
	);
	return (
		Object.defineProperty(s, 'location', {
			enumerable: !0,
			get: () => t.location.value,
		}),
		Object.defineProperty(s, 'state', {
			enumerable: !0,
			get: () => t.state.value,
		}),
		s
	);
}
function i0e(e) {
	return (
		(e = location.host ? e || location.pathname + location.search : ''),
		e.includes('#') || (e += '#'),
		r0e(e)
	);
}
function o0e(e) {
	return typeof e == 'string' || (e && typeof e == 'object');
}
function Jx(e) {
	return typeof e == 'string' || typeof e == 'symbol';
}
const Qx = Symbol('');
var Ty;
(function (e) {
	(e[(e.aborted = 4)] = 'aborted'),
		(e[(e.cancelled = 8)] = 'cancelled'),
		(e[(e.duplicated = 16)] = 'duplicated');
})(Ty || (Ty = {}));
function Fs(e, t) {
	return bt(new Error(), { type: e, [Qx]: !0 }, t);
}
function li(e, t) {
	return e instanceof Error && Qx in e && (t == null || !!(e.type & t));
}
const Cy = '[^/]+?',
	s0e = { sensitive: !1, strict: !1, start: !0, end: !0 },
	l0e = /[.+*?^${}()[\]/\\]/g;
function a0e(e, t) {
	const r = bt({}, s0e, t),
		o = [];
	let s = r.start ? '^' : '';
	const u = [];
	for (const p of e) {
		const m = p.length ? [] : [90];
		r.strict && !p.length && (s += '/');
		for (let v = 0; v < p.length; v++) {
			const b = p[v];
			let w = 40 + (r.sensitive ? 0.25 : 0);
			if (b.type === 0)
				v || (s += '/'), (s += b.value.replace(l0e, '\\$&')), (w += 40);
			else if (b.type === 1) {
				const { value: C, repeatable: M, optional: E, regexp: N } = b;
				u.push({ name: C, repeatable: M, optional: E });
				const A = N || Cy;
				if (A !== Cy) {
					w += 10;
					try {
						new RegExp(`(${A})`);
					} catch (L) {
						throw new Error(
							`Invalid custom RegExp for param "${C}" (${A}): ` + L.message,
						);
					}
				}
				let $ = M ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
				v || ($ = E && p.length < 2 ? `(?:/${$})` : '/' + $),
					E && ($ += '?'),
					(s += $),
					(w += 20),
					E && (w += -8),
					M && (w += -20),
					A === '.*' && (w += -50);
			}
			m.push(w);
		}
		o.push(m);
	}
	if (r.strict && r.end) {
		const p = o.length - 1;
		o[p][o[p].length - 1] += 0.7000000000000001;
	}
	r.strict || (s += '/?'),
		r.end ? (s += '$') : r.strict && !s.endsWith('/') && (s += '(?:/|$)');
	const f = new RegExp(s, r.sensitive ? '' : 'i');
	function d(p) {
		const m = p.match(f),
			v = {};
		if (!m) return null;
		for (let b = 1; b < m.length; b++) {
			const w = m[b] || '',
				C = u[b - 1];
			v[C.name] = w && C.repeatable ? w.split('/') : w;
		}
		return v;
	}
	function h(p) {
		let m = '',
			v = !1;
		for (const b of e) {
			(!v || !m.endsWith('/')) && (m += '/'), (v = !1);
			for (const w of b)
				if (w.type === 0) m += w.value;
				else if (w.type === 1) {
					const { value: C, repeatable: M, optional: E } = w,
						N = C in p ? p[C] : '';
					if (Ar(N) && !M)
						throw new Error(
							`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`,
						);
					const A = Ar(N) ? N.join('/') : N;
					if (!A)
						if (E)
							b.length < 2 &&
								(m.endsWith('/') ? (m = m.slice(0, -1)) : (v = !0));
						else throw new Error(`Missing required param "${C}"`);
					m += A;
				}
		}
		return m || '/';
	}
	return { re: f, score: o, keys: u, parse: d, stringify: h };
}
function u0e(e, t) {
	let r = 0;
	for (; r < e.length && r < t.length; ) {
		const o = t[r] - e[r];
		if (o) return o;
		r++;
	}
	return e.length < t.length
		? e.length === 1 && e[0] === 80
			? -1
			: 1
		: e.length > t.length
			? t.length === 1 && t[0] === 80
				? 1
				: -1
			: 0;
}
function e1(e, t) {
	let r = 0;
	const o = e.score,
		s = t.score;
	for (; r < o.length && r < s.length; ) {
		const u = u0e(o[r], s[r]);
		if (u) return u;
		r++;
	}
	if (Math.abs(s.length - o.length) === 1) {
		if (Ey(o)) return 1;
		if (Ey(s)) return -1;
	}
	return s.length - o.length;
}
function Ey(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
const c0e = { type: 0, value: '' },
	f0e = /[a-zA-Z0-9_]/;
function d0e(e) {
	if (!e) return [[]];
	if (e === '/') return [[c0e]];
	if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
	function t(w) {
		throw new Error(`ERR (${r})/"${p}": ${w}`);
	}
	let r = 0,
		o = r;
	const s = [];
	let u;
	function f() {
		u && s.push(u), (u = []);
	}
	let d = 0,
		h,
		p = '',
		m = '';
	function v() {
		p &&
			(r === 0
				? u.push({ type: 0, value: p })
				: r === 1 || r === 2 || r === 3
					? (u.length > 1 &&
							(h === '*' || h === '+') &&
							t(
								`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`,
							),
						u.push({
							type: 1,
							value: p,
							regexp: m,
							repeatable: h === '*' || h === '+',
							optional: h === '*' || h === '?',
						}))
					: t('Invalid state to consume buffer'),
			(p = ''));
	}
	function b() {
		p += h;
	}
	for (; d < e.length; ) {
		if (((h = e[d++]), h === '\\' && r !== 2)) {
			(o = r), (r = 4);
			continue;
		}
		switch (r) {
			case 0:
				h === '/' ? (p && v(), f()) : h === ':' ? (v(), (r = 1)) : b();
				break;
			case 4:
				b(), (r = o);
				break;
			case 1:
				h === '('
					? (r = 2)
					: f0e.test(h)
						? b()
						: (v(), (r = 0), h !== '*' && h !== '?' && h !== '+' && d--);
				break;
			case 2:
				h === ')'
					? m[m.length - 1] == '\\'
						? (m = m.slice(0, -1) + h)
						: (r = 3)
					: (m += h);
				break;
			case 3:
				v(), (r = 0), h !== '*' && h !== '?' && h !== '+' && d--, (m = '');
				break;
			default:
				t('Unknown state');
				break;
		}
	}
	return r === 2 && t(`Unfinished custom RegExp for param "${p}"`), v(), f(), s;
}
function h0e(e, t, r) {
	const o = a0e(d0e(e.path), r),
		s = bt(o, { record: e, parent: t, children: [], alias: [] });
	return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function p0e(e, t) {
	const r = [],
		o = new Map();
	t = Ny({ strict: !1, end: !0, sensitive: !1 }, t);
	function s(v) {
		return o.get(v);
	}
	function u(v, b, w) {
		const C = !w,
			M = Ay(v);
		M.aliasOf = w && w.record;
		const E = Ny(t, v),
			N = [M];
		if ('alias' in v) {
			const L = typeof v.alias == 'string' ? [v.alias] : v.alias;
			for (const O of L)
				N.push(
					Ay(
						bt({}, M, {
							components: w ? w.record.components : M.components,
							path: O,
							aliasOf: w ? w.record : M,
						}),
					),
				);
		}
		let A, $;
		for (const L of N) {
			const { path: O } = L;
			if (b && O[0] !== '/') {
				const U = b.record.path,
					B = U[U.length - 1] === '/' ? '' : '/';
				L.path = b.record.path + (O && B + O);
			}
			if (
				((A = h0e(L, b, E)),
				w
					? w.alias.push(A)
					: (($ = $ || A),
						$ !== A && $.alias.push(A),
						C && v.name && !My(A) && f(v.name)),
				t1(A) && h(A),
				M.children)
			) {
				const U = M.children;
				for (let B = 0; B < U.length; B++) u(U[B], A, w && w.children[B]);
			}
			w = w || A;
		}
		return $
			? () => {
					f($);
				}
			: Bl;
	}
	function f(v) {
		if (Jx(v)) {
			const b = o.get(v);
			b &&
				(o.delete(v),
				r.splice(r.indexOf(b), 1),
				b.children.forEach(f),
				b.alias.forEach(f));
		} else {
			const b = r.indexOf(v);
			b > -1 &&
				(r.splice(b, 1),
				v.record.name && o.delete(v.record.name),
				v.children.forEach(f),
				v.alias.forEach(f));
		}
	}
	function d() {
		return r;
	}
	function h(v) {
		const b = v0e(v, r);
		r.splice(b, 0, v), v.record.name && !My(v) && o.set(v.record.name, v);
	}
	function p(v, b) {
		let w,
			C = {},
			M,
			E;
		if ('name' in v && v.name) {
			if (((w = o.get(v.name)), !w)) throw Fs(1, { location: v });
			(E = w.record.name),
				(C = bt(
					Ly(
						b.params,
						w.keys
							.filter(($) => !$.optional)
							.concat(w.parent ? w.parent.keys.filter(($) => $.optional) : [])
							.map(($) => $.name),
					),
					v.params &&
						Ly(
							v.params,
							w.keys.map(($) => $.name),
						),
				)),
				(M = w.stringify(C));
		} else if (v.path != null)
			(M = v.path),
				(w = r.find(($) => $.re.test(M))),
				w && ((C = w.parse(M)), (E = w.record.name));
		else {
			if (((w = b.name ? o.get(b.name) : r.find(($) => $.re.test(b.path))), !w))
				throw Fs(1, { location: v, currentLocation: b });
			(E = w.record.name),
				(C = bt({}, b.params, v.params)),
				(M = w.stringify(C));
		}
		const N = [];
		let A = w;
		for (; A; ) N.unshift(A.record), (A = A.parent);
		return { name: E, path: M, params: C, matched: N, meta: m0e(N) };
	}
	e.forEach((v) => u(v));
	function m() {
		(r.length = 0), o.clear();
	}
	return {
		addRoute: u,
		resolve: p,
		removeRoute: f,
		clearRoutes: m,
		getRoutes: d,
		getRecordMatcher: s,
	};
}
function Ly(e, t) {
	const r = {};
	for (const o of t) o in e && (r[o] = e[o]);
	return r;
}
function Ay(e) {
	const t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: g0e(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set(),
		updateGuards: new Set(),
		enterCallbacks: {},
		components:
			'components' in e
				? e.components || null
				: e.component && { default: e.component },
	};
	return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function g0e(e) {
	const t = {},
		r = e.props || !1;
	if ('component' in e) t.default = r;
	else for (const o in e.components) t[o] = typeof r == 'object' ? r[o] : r;
	return t;
}
function My(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function m0e(e) {
	return e.reduce((t, r) => bt(t, r.meta), {});
}
function Ny(e, t) {
	const r = {};
	for (const o in e) r[o] = o in t ? t[o] : e[o];
	return r;
}
function v0e(e, t) {
	let r = 0,
		o = t.length;
	for (; r !== o; ) {
		const u = (r + o) >> 1;
		e1(e, t[u]) < 0 ? (o = u) : (r = u + 1);
	}
	const s = y0e(e);
	return s && (o = t.lastIndexOf(s, o - 1)), o;
}
function y0e(e) {
	let t = e;
	for (; (t = t.parent); ) if (t1(t) && e1(e, t) === 0) return t;
}
function t1({ record: e }) {
	return !!(
		e.name ||
		(e.components && Object.keys(e.components).length) ||
		e.redirect
	);
}
function b0e(e) {
	const t = {};
	if (e === '' || e === '?') return t;
	const o = (e[0] === '?' ? e.slice(1) : e).split('&');
	for (let s = 0; s < o.length; ++s) {
		const u = o[s].replace(jx, ' '),
			f = u.indexOf('='),
			d = da(f < 0 ? u : u.slice(0, f)),
			h = f < 0 ? null : da(u.slice(f + 1));
		if (d in t) {
			let p = t[d];
			Ar(p) || (p = t[d] = [p]), p.push(h);
		} else t[d] = h;
	}
	return t;
}
function $y(e) {
	let t = '';
	for (let r in e) {
		const o = e[r];
		if (((r = Iye(r)), o == null)) {
			o !== void 0 && (t += (t.length ? '&' : '') + r);
			continue;
		}
		(Ar(o) ? o.map((u) => u && hh(u)) : [o && hh(o)]).forEach((u) => {
			u !== void 0 &&
				((t += (t.length ? '&' : '') + r), u != null && (t += '=' + u));
		});
	}
	return t;
}
function w0e(e) {
	const t = {};
	for (const r in e) {
		const o = e[r];
		o !== void 0 &&
			(t[r] = Ar(o)
				? o.map((s) => (s == null ? null : '' + s))
				: o == null
					? o
					: '' + o);
	}
	return t;
}
const x0e = Symbol(''),
	Py = Symbol(''),
	hp = Symbol(''),
	n1 = Symbol(''),
	gh = Symbol('');
function Cl() {
	let e = [];
	function t(o) {
		return (
			e.push(o),
			() => {
				const s = e.indexOf(o);
				s > -1 && e.splice(s, 1);
			}
		);
	}
	function r() {
		e = [];
	}
	return { add: t, list: () => e.slice(), reset: r };
}
function Vi(e, t, r, o, s, u = (f) => f()) {
	const f = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
	return () =>
		new Promise((d, h) => {
			const p = (b) => {
					b === !1
						? h(Fs(4, { from: r, to: t }))
						: b instanceof Error
							? h(b)
							: o0e(b)
								? h(Fs(2, { from: t, to: b }))
								: (f &&
										o.enterCallbacks[s] === f &&
										typeof b == 'function' &&
										f.push(b),
									d());
				},
				m = u(() => e.call(o && o.instances[s], t, r, p));
			let v = Promise.resolve(m);
			e.length < 3 && (v = v.then(p)), v.catch((b) => h(b));
		});
}
function bd(e, t, r, o, s = (u) => u()) {
	const u = [];
	for (const f of e)
		for (const d in f.components) {
			let h = f.components[d];
			if (!(t !== 'beforeRouteEnter' && !f.instances[d]))
				if (Ux(h)) {
					const m = (h.__vccOpts || h)[t];
					m && u.push(Vi(m, r, o, f, d, s));
				} else {
					let p = h();
					u.push(() =>
						p.then((m) => {
							if (!m)
								throw new Error(
									`Couldn't resolve component "${d}" at "${f.path}"`,
								);
							const v = Eye(m) ? m.default : m;
							(f.mods[d] = m), (f.components[d] = v);
							const w = (v.__vccOpts || v)[t];
							return w && Vi(w, r, o, f, d, s)();
						}),
					);
				}
		}
	return u;
}
function Oy(e) {
	const t = Br(hp),
		r = Br(n1),
		o = ke(() => {
			const h = H(e.to);
			return t.resolve(h);
		}),
		s = ke(() => {
			const { matched: h } = o.value,
				{ length: p } = h,
				m = h[p - 1],
				v = r.matched;
			if (!m || !v.length) return -1;
			const b = v.findIndex(Is.bind(null, m));
			if (b > -1) return b;
			const w = Ry(h[p - 2]);
			return p > 1 && Ry(m) === w && v[v.length - 1].path !== w
				? v.findIndex(Is.bind(null, h[p - 2]))
				: b;
		}),
		u = ke(() => s.value > -1 && C0e(r.params, o.value.params)),
		f = ke(
			() =>
				s.value > -1 &&
				s.value === r.matched.length - 1 &&
				Yx(r.params, o.value.params),
		);
	function d(h = {}) {
		if (T0e(h)) {
			const p = t[H(e.replace) ? 'replace' : 'push'](H(e.to)).catch(Bl);
			return (
				e.viewTransition &&
					typeof document < 'u' &&
					'startViewTransition' in document &&
					document.startViewTransition(() => p),
				p
			);
		}
		return Promise.resolve();
	}
	return {
		route: o,
		href: ke(() => o.value.href),
		isActive: u,
		isExactActive: f,
		navigate: d,
	};
}
function S0e(e) {
	return e.length === 1 ? e[0] : e;
}
const _0e = ct({
		name: 'RouterLink',
		compatConfig: { MODE: 3 },
		props: {
			to: { type: [String, Object], required: !0 },
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: { type: String, default: 'page' },
		},
		useLink: Oy,
		setup(e, { slots: t }) {
			const r = Qn(Oy(e)),
				{ options: o } = Br(hp),
				s = ke(() => ({
					[Dy(e.activeClass, o.linkActiveClass, 'router-link-active')]:
						r.isActive,
					[Dy(
						e.exactActiveClass,
						o.linkExactActiveClass,
						'router-link-exact-active',
					)]: r.isExactActive,
				}));
			return () => {
				const u = t.default && S0e(t.default(r));
				return e.custom
					? u
					: wa(
							'a',
							{
								'aria-current': r.isExactActive ? e.ariaCurrentValue : null,
								href: r.href,
								onClick: r.navigate,
								class: s.value,
							},
							u,
						);
			};
		},
	}),
	k0e = _0e;
function T0e(e) {
	if (
		!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
		!e.defaultPrevented &&
		!(e.button !== void 0 && e.button !== 0)
	) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute('target');
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function C0e(e, t) {
	for (const r in t) {
		const o = t[r],
			s = e[r];
		if (typeof o == 'string') {
			if (o !== s) return !1;
		} else if (!Ar(s) || s.length !== o.length || o.some((u, f) => u !== s[f]))
			return !1;
	}
	return !0;
}
function Ry(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Dy = (e, t, r) => e ?? t ?? r,
	E0e = ct({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: r }) {
			const o = Br(gh),
				s = ke(() => e.route || o.value),
				u = Br(Py, 0),
				f = ke(() => {
					let p = H(u);
					const { matched: m } = s.value;
					let v;
					for (; (v = m[p]) && !v.components; ) p++;
					return p;
				}),
				d = ke(() => s.value.matched[f.value]);
			Lu(
				Py,
				ke(() => f.value + 1),
			),
				Lu(x0e, d),
				Lu(gh, s);
			const h = qe();
			return (
				Et(
					() => [h.value, d.value, e.name],
					([p, m, v], [b, w, C]) => {
						m &&
							((m.instances[v] = p),
							w &&
								w !== m &&
								p &&
								p === b &&
								(m.leaveGuards.size || (m.leaveGuards = w.leaveGuards),
								m.updateGuards.size || (m.updateGuards = w.updateGuards))),
							p &&
								m &&
								(!w || !Is(m, w) || !b) &&
								(m.enterCallbacks[v] || []).forEach((M) => M(p));
					},
					{ flush: 'post' },
				),
				() => {
					const p = s.value,
						m = e.name,
						v = d.value,
						b = v && v.components[m];
					if (!b) return zy(r.default, { Component: b, route: p });
					const w = v.props[m],
						C = w
							? w === !0
								? p.params
								: typeof w == 'function'
									? w(p)
									: w
							: null,
						E = wa(
							b,
							bt({}, C, t, {
								onVnodeUnmounted: (N) => {
									N.component.isUnmounted && (v.instances[m] = null);
								},
								ref: h,
							}),
						);
					return zy(r.default, { Component: E, route: p }) || E;
				}
			);
		},
	});
function zy(e, t) {
	if (!e) return null;
	const r = e(t);
	return r.length === 1 ? r[0] : r;
}
const L0e = E0e;
function A0e(e) {
	const t = p0e(e.routes, e),
		r = e.parseQuery || b0e,
		o = e.stringifyQuery || $y,
		s = e.history,
		u = Cl(),
		f = Cl(),
		d = Cl(),
		h = Gr(zi);
	let p = zi;
	gs &&
		e.scrollBehavior &&
		'scrollRestoration' in history &&
		(history.scrollRestoration = 'manual');
	const m = vd.bind(null, (Z) => '' + Z),
		v = vd.bind(null, Hye),
		b = vd.bind(null, da);
	function w(Z, ae) {
		let he, $e;
		return (
			Jx(Z) ? ((he = t.getRecordMatcher(Z)), ($e = ae)) : ($e = Z),
			t.addRoute($e, he)
		);
	}
	function C(Z) {
		const ae = t.getRecordMatcher(Z);
		ae && t.removeRoute(ae);
	}
	function M() {
		return t.getRoutes().map((Z) => Z.record);
	}
	function E(Z) {
		return !!t.getRecordMatcher(Z);
	}
	function N(Z, ae) {
		if (((ae = bt({}, ae || h.value)), typeof Z == 'string')) {
			const X = yd(r, Z, ae.path),
				le = t.resolve({ path: X.path }, ae),
				fe = s.createHref(X.fullPath);
			return bt(X, le, {
				params: b(le.params),
				hash: da(X.hash),
				redirectedFrom: void 0,
				href: fe,
			});
		}
		let he;
		if (Z.path != null) he = bt({}, Z, { path: yd(r, Z.path, ae.path).path });
		else {
			const X = bt({}, Z.params);
			for (const le in X) X[le] == null && delete X[le];
			(he = bt({}, Z, { params: v(X) })), (ae.params = v(ae.params));
		}
		const $e = t.resolve(he, ae),
			Ae = Z.hash || '';
		$e.params = m(b($e.params));
		const z = Wye(o, bt({}, Z, { hash: zye(Ae), path: $e.path })),
			q = s.createHref(z);
		return bt(
			{ fullPath: z, hash: Ae, query: o === $y ? w0e(Z.query) : Z.query || {} },
			$e,
			{ redirectedFrom: void 0, href: q },
		);
	}
	function A(Z) {
		return typeof Z == 'string' ? yd(r, Z, h.value.path) : bt({}, Z);
	}
	function $(Z, ae) {
		if (p !== Z) return Fs(8, { from: ae, to: Z });
	}
	function L(Z) {
		return B(Z);
	}
	function O(Z) {
		return L(bt(A(Z), { replace: !0 }));
	}
	function U(Z) {
		const ae = Z.matched[Z.matched.length - 1];
		if (ae && ae.redirect) {
			const { redirect: he } = ae;
			let $e = typeof he == 'function' ? he(Z) : he;
			return (
				typeof $e == 'string' &&
					(($e =
						$e.includes('?') || $e.includes('#') ? ($e = A($e)) : { path: $e }),
					($e.params = {})),
				bt(
					{
						query: Z.query,
						hash: Z.hash,
						params: $e.path != null ? {} : Z.params,
					},
					$e,
				)
			);
		}
	}
	function B(Z, ae) {
		const he = (p = N(Z)),
			$e = h.value,
			Ae = Z.state,
			z = Z.force,
			q = Z.replace === !0,
			X = U(he);
		if (X)
			return B(
				bt(A(X), {
					state: typeof X == 'object' ? bt({}, Ae, X.state) : Ae,
					force: z,
					replace: q,
				}),
				ae || he,
			);
		const le = he;
		le.redirectedFrom = ae;
		let fe;
		return (
			!z &&
				Uye(o, $e, he) &&
				((fe = Fs(16, { to: le, from: $e })), We($e, $e, !0, !1)),
			(fe ? Promise.resolve(fe) : K(le, $e))
				.catch((ue) => (li(ue) ? (li(ue, 2) ? ue : Ne(ue)) : ie(ue, le, $e)))
				.then((ue) => {
					if (ue) {
						if (li(ue, 2))
							return B(
								bt({ replace: q }, A(ue.to), {
									state:
										typeof ue.to == 'object' ? bt({}, Ae, ue.to.state) : Ae,
									force: z,
								}),
								ae || le,
							);
					} else ue = Y(le, $e, !0, q, Ae);
					return ee(le, $e, ue), ue;
				})
		);
	}
	function te(Z, ae) {
		const he = $(Z, ae);
		return he ? Promise.reject(he) : Promise.resolve();
	}
	function J(Z) {
		const ae = et.values().next().value;
		return ae && typeof ae.runWithContext == 'function'
			? ae.runWithContext(Z)
			: Z();
	}
	function K(Z, ae) {
		let he;
		const [$e, Ae, z] = M0e(Z, ae);
		he = bd($e.reverse(), 'beforeRouteLeave', Z, ae);
		for (const X of $e)
			X.leaveGuards.forEach((le) => {
				he.push(Vi(le, Z, ae));
			});
		const q = te.bind(null, Z, ae);
		return (
			he.push(q),
			Le(he)
				.then(() => {
					he = [];
					for (const X of u.list()) he.push(Vi(X, Z, ae));
					return he.push(q), Le(he);
				})
				.then(() => {
					he = bd(Ae, 'beforeRouteUpdate', Z, ae);
					for (const X of Ae)
						X.updateGuards.forEach((le) => {
							he.push(Vi(le, Z, ae));
						});
					return he.push(q), Le(he);
				})
				.then(() => {
					he = [];
					for (const X of z)
						if (X.beforeEnter)
							if (Ar(X.beforeEnter))
								for (const le of X.beforeEnter) he.push(Vi(le, Z, ae));
							else he.push(Vi(X.beforeEnter, Z, ae));
					return he.push(q), Le(he);
				})
				.then(
					() => (
						Z.matched.forEach((X) => (X.enterCallbacks = {})),
						(he = bd(z, 'beforeRouteEnter', Z, ae, J)),
						he.push(q),
						Le(he)
					),
				)
				.then(() => {
					he = [];
					for (const X of f.list()) he.push(Vi(X, Z, ae));
					return he.push(q), Le(he);
				})
				.catch((X) => (li(X, 8) ? X : Promise.reject(X)))
		);
	}
	function ee(Z, ae, he) {
		d.list().forEach(($e) => J(() => $e(Z, ae, he)));
	}
	function Y(Z, ae, he, $e, Ae) {
		const z = $(Z, ae);
		if (z) return z;
		const q = ae === zi,
			X = gs ? history.state : {};
		he &&
			($e || q
				? s.replace(Z.fullPath, bt({ scroll: q && X && X.scroll }, Ae))
				: s.push(Z.fullPath, Ae)),
			(h.value = Z),
			We(Z, ae, he, q),
			Ne();
	}
	let I;
	function F() {
		I ||
			(I = s.listen((Z, ae, he) => {
				if (!Xe.listening) return;
				const $e = N(Z),
					Ae = U($e);
				if (Ae) {
					B(bt(Ae, { replace: !0, force: !0 }), $e).catch(Bl);
					return;
				}
				p = $e;
				const z = h.value;
				gs && Jye(_y(z.fullPath, he.delta), Yc()),
					K($e, z)
						.catch((q) =>
							li(q, 12)
								? q
								: li(q, 2)
									? (B(bt(A(q.to), { force: !0 }), $e)
											.then((X) => {
												li(X, 20) &&
													!he.delta &&
													he.type === ha.pop &&
													s.go(-1, !1);
											})
											.catch(Bl),
										Promise.reject())
									: (he.delta && s.go(-he.delta, !1), ie(q, $e, z)),
						)
						.then((q) => {
							(q = q || Y($e, z, !1)),
								q &&
									(he.delta && !li(q, 8)
										? s.go(-he.delta, !1)
										: he.type === ha.pop && li(q, 20) && s.go(-1, !1)),
								ee($e, z, q);
						})
						.catch(Bl);
			}));
	}
	let k = Cl(),
		W = Cl(),
		V;
	function ie(Z, ae, he) {
		Ne(Z);
		const $e = W.list();
		return (
			$e.length ? $e.forEach((Ae) => Ae(Z, ae, he)) : console.error(Z),
			Promise.reject(Z)
		);
	}
	function ye() {
		return V && h.value !== zi
			? Promise.resolve()
			: new Promise((Z, ae) => {
					k.add([Z, ae]);
				});
	}
	function Ne(Z) {
		return (
			V ||
				((V = !Z),
				F(),
				k.list().forEach(([ae, he]) => (Z ? he(Z) : ae())),
				k.reset()),
			Z
		);
	}
	function We(Z, ae, he, $e) {
		const { scrollBehavior: Ae } = e;
		if (!gs || !Ae) return Promise.resolve();
		const z =
			(!he && Qye(_y(Z.fullPath, 0))) ||
			(($e || !he) && history.state && history.state.scroll) ||
			null;
		return Ot()
			.then(() => Ae(Z, ae, z))
			.then((q) => q && Zye(q))
			.catch((q) => ie(q, Z, ae));
	}
	const Ve = (Z) => s.go(Z);
	let nt;
	const et = new Set(),
		Xe = {
			currentRoute: h,
			listening: !0,
			addRoute: w,
			removeRoute: C,
			clearRoutes: t.clearRoutes,
			hasRoute: E,
			getRoutes: M,
			resolve: N,
			options: e,
			push: L,
			replace: O,
			go: Ve,
			back: () => Ve(-1),
			forward: () => Ve(1),
			beforeEach: u.add,
			beforeResolve: f.add,
			afterEach: d.add,
			onError: W.add,
			isReady: ye,
			install(Z) {
				const ae = this;
				Z.component('RouterLink', k0e),
					Z.component('RouterView', L0e),
					(Z.config.globalProperties.$router = ae),
					Object.defineProperty(Z.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => H(h),
					}),
					gs &&
						!nt &&
						h.value === zi &&
						((nt = !0), L(s.location).catch((Ae) => {}));
				const he = {};
				for (const Ae in zi)
					Object.defineProperty(he, Ae, {
						get: () => h.value[Ae],
						enumerable: !0,
					});
				Z.provide(hp, ae), Z.provide(n1, kh(he)), Z.provide(gh, h);
				const $e = Z.unmount;
				et.add(Z),
					(Z.unmount = function () {
						et.delete(Z),
							et.size < 1 &&
								((p = zi),
								I && I(),
								(I = null),
								(h.value = zi),
								(nt = !1),
								(V = !1)),
							$e();
					});
			},
		};
	function Le(Z) {
		return Z.reduce((ae, he) => ae.then(() => J(he)), Promise.resolve());
	}
	return Xe;
}
function M0e(e, t) {
	const r = [],
		o = [],
		s = [],
		u = Math.max(t.matched.length, e.matched.length);
	for (let f = 0; f < u; f++) {
		const d = t.matched[f];
		d && (e.matched.find((p) => Is(p, d)) ? o.push(d) : r.push(d));
		const h = e.matched[f];
		h && (t.matched.find((p) => Is(p, h)) || s.push(h));
	}
	return [r, o, s];
}
const N0e = { tooltip: FC };
zb.options.instantMove = !0;
zb.options.distance = 10;
function $0e() {
	return A0e({ history: i0e(), routes: Cye });
}
const P0e = [$0e],
	pp = ab(BT);
P0e.forEach((e) => {
	pp.use(e());
});
Object.entries(N0e).forEach(([e, t]) => {
	pp.directive(e, t);
});
pp.mount('#app');
